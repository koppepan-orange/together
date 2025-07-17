document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gameBoard = document.getElementById('game-board');
    const scoreDisplay = document.getElementById('score');
    const maxBirdDisplay = document.getElementById('max-bird-display');
    const maxBirdImg = maxBirdDisplay.querySelector('img');
    const gameOverScreen = document.getElementById('game-over-screen');
    const finalScoreDisplay = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-button');
    const footerResetButton = document.getElementById('reset-button-footer');

    // Constants
    const GRID_SIZE = 4;
    const MAX_BIRD_LEVEL = 14;
    const MOVE_ANIMATION_DURATION = 150;

    // Game State
    let board = [];
    let score = 0;
    let maxBirdLevel = 0;
    let isMoving = false;
    let tileIdCounter = 0;

    function generateColorPalette(color1, color2, steps) {
        const palette = [];
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);
        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);

        for (let i = 0; i < steps; i++) {
            const ratio = i / (steps - 1);
            const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
            const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
            const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
            palette.push(`rgb(${r}, ${g}, ${b})`);
        }
        return palette;
    }

    const tileColors = generateColorPalette('white', '#e35d5b', MAX_BIRD_LEVEL + 1);

    function getPosition(index) {
        return { row: Math.floor(index / GRID_SIZE), col: index % GRID_SIZE };
    }

    function getTilePosition(row, col) {
        const top = `calc(var(--grid-gap) + ${row} * (var(--cell-size) + var(--grid-gap)))`;
        const left = `calc(var(--grid-gap) + ${col} * (var(--cell-size) + var(--grid-gap)))`;
        return { top, left };
    }

    function getBirdImageUrl(level) {
        const paddedLevel = String(level).padStart(5, '0');
        return `assets/img${paddedLevel}.png`;
    }

    function createTile(value, index) {
        const { row, col } = getPosition(index);
        const { top, left } = getTilePosition(row, col);
        const level = value - 1;

        const tileElement = document.createElement('div');
        tileElement.classList.add('bird-tile');
        tileElement.style.top = top;
        tileElement.style.left = left;
        tileElement.style.backgroundColor = tileColors[level] || 'white';
        
        const imgElement = document.createElement('img');
        imgElement.src = getBirdImageUrl(level);
        imgElement.alt = `Bird Level ${level}`;
        tileElement.appendChild(imgElement);

        gameBoard.appendChild(tileElement);

        return {
            id: tileIdCounter++,
            value: value,
            element: tileElement,
            merged: false,
        };
    }
    
    function createBoard() {
        gameBoard.innerHTML = '';
        for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            gameBoard.appendChild(cell);
        }
        startGame();
    }
    
    function startGame() {
        board = new Array(GRID_SIZE * GRID_SIZE).fill(null);
        score = 0;
        maxBirdLevel = 0;
        isMoving = false;
        tileIdCounter = 0;
        gameOverScreen.classList.add('hidden');

        addRandomTile(true);
        addRandomTile(true);
        updateScore();
    }
    
    function addRandomTile(isInitial = false) {
        const emptyIndices = [];
        board.forEach((tile, index) => {
            if (tile === null) emptyIndices.push(index);
        });

        if (emptyIndices.length > 0) {
            const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            const newTile = createTile(1, randomIndex);
            if (!isInitial) {
                 newTile.element.querySelector('img').classList.add('tile-new');
            }
            board[randomIndex] = newTile;
        }
    }

    function updateScore() {
        scoreDisplay.textContent = score;
        const currentMaxLevel = board.reduce((max, tile) => tile ? Math.max(max, tile.value - 1) : max, -1);
        if (currentMaxLevel > maxBirdLevel) {
            maxBirdLevel = currentMaxLevel;
        }
        maxBirdImg.src = getBirdImageUrl(maxBirdLevel >= 0 ? maxBirdLevel : 0);
        maxBirdDisplay.style.backgroundColor = tileColors[maxBirdLevel] || '#3c3a32';
    }

    async function move(direction) {
        if (isMoving) return;
        isMoving = true;

        board.forEach(tile => { if (tile) tile.merged = false; });

        const moveVectors = {
            up: { r: -1, c: 0 }, down: { r: 1, c: 0 },
            left: { r: 0, c: -1 }, right: { r: 0, c: 1 }
        };
        const vector = moveVectors[direction];
        const traversals = buildTraversals(vector);
        let boardChanged = false;
        const movePromises = [];

        traversals.r.forEach(r => {
            traversals.c.forEach(c => {
                const currentIndex = r * GRID_SIZE + c;
                const tile = board[currentIndex];

                if (tile) {
                    const positions = findFarthestPosition(currentIndex, vector);
                    const nextTileIndex = positions.next;
                    
                    if (nextTileIndex !== -1 && board[nextTileIndex] && board[nextTileIndex].value === tile.value && !board[nextTileIndex].merged) {
                        const targetTile = board[nextTileIndex];
                        targetTile.value++;
                        targetTile.merged = true;
                        
                        board[currentIndex] = null;
                        boardChanged = true;
                        score += Math.pow(2, targetTile.value);

                        movePromises.push(animateTileMove(tile, nextTileIndex, true));

                    } else if (positions.farthest !== currentIndex) {
                        board[positions.farthest] = tile;
                        board[currentIndex] = null;
                        boardChanged = true;
                        
                        movePromises.push(animateTileMove(tile, positions.farthest, false));
                    }
                }
            });
        });

        if (!boardChanged) {
            isMoving = false;
            return;
        }

        await Promise.all(movePromises);
        
        addRandomTile();
        updateScore();
        checkGameOver();

        isMoving = false;
    }

    function animateTileMove(tile, newIndex, isMerging) {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                const { row, col } = getPosition(newIndex);
                const { top, left } = getTilePosition(row, col);
                tile.element.style.top = top;
                tile.element.style.left = left;

                const onTransitionEnd = () => {
                    tile.element.removeEventListener('transitionend', onTransitionEnd);
                    if (isMerging) {
                        const targetTile = board[newIndex];
                        if (targetTile) {
                            const img = targetTile.element.querySelector('img');
                            img.src = getBirdImageUrl(targetTile.value - 1);
                            img.classList.add('tile-merged');
                            img.addEventListener('animationend', () => img.classList.remove('tile-merged'), { once: true });
                            targetTile.element.style.backgroundColor = tileColors[targetTile.value - 1];
                        }
                        tile.element.remove();
                    }
                    resolve();
                };
                tile.element.addEventListener('transitionend', onTransitionEnd);
            });
        });
    }

    function buildTraversals(vector) {
        const traversals = { r: [], c: [] };
        for (let pos = 0; pos < GRID_SIZE; pos++) {
            traversals.r.push(pos);
            traversals.c.push(pos);
        }
        if (vector.r === 1) traversals.r.reverse();
        if (vector.c === 1) traversals.c.reverse();
        return traversals;
    }

    // タイルが進める限界位置と次のタイルの位置を計算する関数
    function findFarthestPosition(startIndex, vector) {
        let farthestIndex = startIndex;
        while (true) {
            const currentPos = getPosition(farthestIndex);
            const nextRow = currentPos.row + vector.r;
            const nextCol = currentPos.col + vector.c;

            // グリッドの外に出た場合は停止
            if (nextRow < 0 || nextRow >= GRID_SIZE || nextCol < 0 || nextCol >= GRID_SIZE) {
                return { farthest: farthestIndex, next: -1 }; // 次のマスにタイルがある場合は合体の候補
            }

            const nextIndex = nextRow * GRID_SIZE + nextCol;
            if (board[nextIndex]) {
                // 次のマスにタイルがある場合は合体の候補
                return { farthest: farthestIndex, next: nextIndex };
            }
            
            // まだ空いているならさらに次のマスへ
            farthestIndex = nextIndex;
        }
    }

    function checkGameOver() {
        if (board.some(tile => tile === null)) return;
        for (let i = 0; i < board.length; i++) {
            const tile = board[i];
            if(!tile) continue;
            const { row, col } = getPosition(i);
            if (col < GRID_SIZE - 1 && board[i+1] && board[i+1].value === tile.value) return;
            if (row < GRID_SIZE - 1 && board[i+GRID_SIZE] && board[i+GRID_SIZE].value === tile.value) return;
        }
        gameOverScreen.classList.remove('hidden');
        finalScoreDisplay.textContent = score;
    }

    document.addEventListener('keydown', e => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
        switch (e.key) {
            case 'ArrowUp': move('up'); break;
            case 'ArrowDown': move('down'); break;
            case 'ArrowLeft': move('left'); break;
            case 'ArrowRight': move('right'); break;
        }
    });

    let touchStartX = 0, touchStartY = 0;
    gameBoard.addEventListener('touchstart', e => {
        if(e.cancelable) e.preventDefault();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: false });
    
    gameBoard.addEventListener('touchmove', e => {
        if(e.cancelable) e.preventDefault();
    }, { passive: false });

    gameBoard.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;

        if (Math.abs(dx) > 30 || Math.abs(dy) > 30) {
            if (Math.abs(dx) > Math.abs(dy)) {
                move(dx > 0 ? 'right' : 'left');
            } else {
                move(dy > 0 ? 'down' : 'up');
            }
        }
    });

    restartButton.addEventListener('click', shareOnTwitter);
    footerResetButton.addEventListener('click', createBoard);

    // キャラ画像ファイル名とキャラ名の対応マップ
    const characterMap = {
        'img00000.png': '0',
        'img00001.png': '1',
        'img00002.png': '2',
        'img00003.png': '3',
        'img00004.png': '4',
        'img00005.png': '5',
        'img00006.png': '6',
        'img00007.png': '7',
        'img00008.png': '8',
        'img00009.png': '9',
        'img00010.png': 'ok',
    };

    // Twitter共有テキストを組み立てて投稿用URLを生成
    function shareOnTwitter() {
        let finalScore = document.getElementById("score").innerText;
        let highestReachedCharacterImage = document.querySelector("#max-bird-display img").getAttribute("src").split("/").pop();

        const characterName = getCharacterName(highestReachedCharacterImage);
        const tweetText = `最高到達は「${characterName}」でスコアは${finalScore}でした～～\n\n`;
        const gameUrl = 'https://kina-ko-m-ochi.com/puzzle/';

        // 別ウィンドウでTwitterの投稿画面を開く
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(gameUrl)}`;

        // 譁ｰ縺励＞繧ｦ繧｣繝ｳ繝峨え縺ｾ縺溘�繧ｿ繝悶〒Twitter縺ｮ謚慕ｨｿ逕ｻ髱｢繧帝幕縺�
        window.open(twitterUrl, '_blank');
    }

    // ファイル名からキャラ名を取得する補助関数
    function getCharacterName(imageFileName) {
        return characterMap[imageFileName] || '不明なキャラクター'; // 対応するキャラクターがいなければ「不明なキャラクター」
    }

    createBoard();
});