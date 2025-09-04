//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    const newDiv = document.createElement('div');
    newDiv.textContent = mes;
    newDiv.className = 'nicotext';
    newDiv.style.top = `calc(${random(0, 100)}vh - 20px)`;
    newDiv.style.right = '0px';
    document.querySelector('body').appendChild(newDiv);

    requestAnimationFrame(() => {
        newDiv.style.right = `${window.innerWidth + newDiv.offsetWidth}px`; //なんか電車の問題解いてるみたいだね
    });
    
    await delay(2000); 
    newDiv.remove();
};

async function namipower(){
    nicoText('津波が来たぞーーー！！！')
    const newDiv = document.createElement('img');
    newDiv.src = 'assets/images/systems/nami.png';
    newDiv.className = 'nami';
    document.querySelector('body').appendChild(newDiv);

    requestAnimationFrame(() => {
        newDiv.style.right = `400%`;
    });
    
    await delay(5000); 
    newDiv.remove();
};
let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
arr.find(a => a == 'f');
function kaijou(num){
    if(num == 0) return 0;
    if(num == 1) return 1;
    return num * kaijou(num - 1);
}
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
function arraySize(array){
    let res = new Set(array).size;
    return res;
};
function arrayCount(array){
    const counts = {};
    for (let value of array) {
    counts[value] = (counts[value] || 0) + 1;
    }
    return counts;
}
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
}
function arrayGacha(array,probability){
    if(array.length != probability.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probability[i]) return array[i];
        random -= probability[i];
    }
};
function hask(obj, key){
   let res = obj.hasOwnProperty(key);
   res = res ? 1 : 0;
   return res;
}
function copy(moto) {
    if(Array.isArray(moto)){
        let arr = [];
        for (let i = 0; i < moto.length; i++) {
            arr.push(copy(moto[i]));
        }
        return arr;
    }
    else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for (let key in moto) {
            if (moto.hasOwnProperty(key)) {
            obj[key] = copy(moto[key]);
            }
        }
        return obj;
    }
    else {
        return moto;
    }
}
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function anagramSaySay(text, loop = 10, bet = '<br>'){
    let menjo = 0;
    let len = text.length;
    if(len < 4) menjo = 1, console.log('長さが3以下なんで最大6っす');
    
    let optout = text.split('');
    let optcou = arrayCount(optout);
    let optvals = [];
    for(a of Object.keys(optcou)){
        let b = optcou[a];
        b = kaijou(b);
        optvals.push(b);
    }
    let optmat = arrayMult(optvals);
    let cal = (kaijou(len) / optmat) - 1;

    let loopen = loop;
    console.log(`総数:${cal} 回数:${loopen}`);
    if(cal < loopen) menjo = 1;
    
    let reses = [];
    while(loopen > 0){
        loopen -= 1;
        let res = arrayShuffle(optout).join(''); 
        if(reses.includes(res)){loopen += 1; continue}
        
        if(res == text && !menjo){loopen += 1; continue;}

        if(res == text && menjo && reses.length < cal){loopen += 1; continue}
        else if(res == text && menjo) res = '[重複エラー]';

        reses.push(res);
    }
    
    return reses.join(bet);
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
let r = {
    and: function(lef, rig){
        if(lef && rig) return 1
        return 0
    },
    or: function(lef, rig){
        if(lef || rig) return 1
        return 0
    },
    xor: function(lef, rig){
        console.log('排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 1
        return 0
    },
    not: function(lef){
        if(lef) return 0
        return 1
    },
    nand: function(lef, rig){
        if(lef && rig) return 0
        return 1
    },
    nor: function(lef, rig){
        if(lef || rig) return 0
        return 1
    },
    xnor: function(lef, rig){
        console.log('逆排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 0
        return 1
    }
}
async function error(){
    addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    await delay(2000);
    window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, ''); // #付きなら取る

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね〜♪')

    // RGB分解
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    // 補色：255から引く
    const compR = (255 - r).toString(16).padStart(2, '0');
    const compG = (255 - g).toString(16).padStart(2, '0');
    const compB = (255 - b).toString(16).padStart(2, '0');

    return `#${compR}${compG}${compB}`;
}
//#endregion
//#region log&text
let textDiv = document.querySelector('#text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ
let textShowing = 0;

function colorcheck(rawtext) {
    const text = [];
    let isRed = false; // ** で囲まれた部分かどうか
    let isPink = false; // && で囲まれた部分かどうか
    let isBlue = false; // ^^ で囲まれた部分かどうか

    for(let i = 0; i < rawtext.length; i++){
        if(rawtext[i] == "*" && rawtext[i + 1] == "*"){
            isRed = !isRed; // 状態を切り替える
            i++; // 次の * をスキップ
        }else if(rawtext[i] == "&" && rawtext[i + 1] == "&"){
            isPink = !isPink;
            i++; // 次の & をスキップ
        }else if(rawtext[i] == "^" && rawtext[i + 1] == "^"){
            isBlue = !isBlue;
            i++;
        }else{
            let color = null;
            if(isRed) color = 'red';
            if(isPink) color = 'pink';
            if(isBlue) color = 'blue';
            text.push({
                char: rawtext[i],
                color: color
            });
        }
    }
    return text;
}

// ↓一瞬これにしようとしてた
// if(textShowing){
//     queueAddtext.push(text);
//     while(textShowing){
//         await delay(10);
//     }
// };

let queueAddtext = [];
let loopAddtext = 0;
async function waitforAddtext(){
    let len = queueAddtext.length;

    if(len == 0) loopAddtext = 0;
    else loopAddtext = 1;

    if(!loopAddtext) return console.log('loopがないんでしゅーりょー');
    requestAnimationFrame(waitforAddtext);
    
    if(textShowing) return console.log('文字表示されたんでスキップ');
    
    let raw = queueAddtext.shift();
    console.log(`${raw}を送信します`);
    console.log(`残り: (${len - 1})[${queueAddtext}]`);
    await addtext(raw);
}
async function addtext(raw){
    if(!raw) return console.log('「内容が？内容が〜〜？ないよ〜〜〜つってwwww直せ」');

    if(textShowing){
        queueAddtext.push(raw);

        if(!loopAddtext) waitforAddtext();
        return;
    }
    
    textShowing = 1;
    text = colorcheck(raw);
    textDiv.innerHTML = ""; // 中身をリセット
    textDiv.style.display = "block"; // 表示
    let index = 0;
    clearText = false; // 消去フラグをリセット

    return new Promise((resolve) => {
        async function type() {
                if (index < text.length) {
                if (skipText) {
                    // スキップ処理
                    while (index < text.length) {
                            const span = document.createElement("span");
                            span.textContent = text[index].char;
                            if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                            }
                            textDiv.appendChild(span);
                            index++;
                    }
                    index = text.length; // 全ての文字を表示済みにする
                    skipText = false;
                    setTimeout(type, 10);
                } else {
                    // 通常の文字表示
                    const span = document.createElement("span");
                    span.textContent = text[index].char;
                    if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                    }
                    textDiv.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
                } else {
                addlog(textDiv.innerHTML);
                const waitTime = autoDelay * 1000;
                const timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                const userAction = new Promise(resolve => {
                    function waitToClear(event) {
                            if (event.type === 'click' || event.key === 'z' || event.key === 'Enter') {
                            document.removeEventListener('click', waitToClear);
                            document.removeEventListener('keydown', waitToClear);
                            resolve();
                            }
                    }
                    document.addEventListener('click', waitToClear);
                    document.addEventListener('keydown', waitToClear);
                });

                Promise.race([timeout, userAction]).then(() => {
                    textDiv.textContent = "";
                    textDiv.style.display = "none";
                    clearText = true;
                    skipText = false
                    textShowing = 0;
                    resolve('end'); // Promiseを解決
                });
                }
        }
        type();
    });
}
document.addEventListener('keydown', (event) => {
    if(event.key === 'z' || event.key === 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (event) => {
    if(event.key === 'z' || event.key === 'Enter'){
        skipText = false;
    }
});

document.addEventListener('click', () => {
    skipText = true;
    setTimeout(() => skipText = false, 50); // 一時的にスキップを有効化
});

let logOOmoto = document.querySelector('#log');
let log = document.querySelector('#log .log');
let logOpener = document.querySelector('#log .opener');
let log_open = (code) => {
   if((logOOmoto.style.right == '-300px' || code == 'o') && code != 'c'){
      logOOmoto.style.right = '0px';
      logOpener.textContent = '>';
   }else{
      logOOmoto.style.right = '-300px';
      logOpener.textContent = '<';
   }
}
logOpener.addEventListener('click', log_open);

function addlog(text){
    log.innerHTML += text + '<br>';
    log.scrollTop = log.scrollHeight;
}
//#endregion
//#region description
let movableDescription = document.getElementById('movableDescription');
document.addEventListener('mousemove', (e) => {
    movableDescription.style.left = `${e.clientX + 10}px`;
    movableDescription.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        const desc = descTarget.dataset.description;
        movableDescription.innerHTML = desc;
        movableDescription.style.display = 'block';
    }
});
document.addEventListener('mouseout', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        movableDescription.innerHTML = '';
        movableDescription.style.display = 'none';
    }
});
//#endregion
//#region drag
document.addEventListener('mousedown', e => {
    // const descTarget = e.target.closest('[data-description]');
    let div = e.target;
    if(!div.classList.contains('draggable')) return;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    
    function onMouseMove(e) {
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
//#endregion

//#region 画像&?の読み込み
let imageNamesL = 0;
let images = {};
let imageNames = {
   'maps':['0','a','b','c','w0000','w0001','w0010','w0011','w0100','w0101','w0110','w0111','w1000','w1001','w1010','w1011','w1100','w1101','w1110','w1111'],
   'enemies':['翠嵐の風刃','蒼白の粘液','燐光の妖花','黄昏の穿影','燦爛する緑夢','紫苑の花姫'],
   'charas':['greenslime','mechanic','clown','magodituono','wretch'],
   'systems':['error','star1','star2','star3'],
}
let imageNamesT = Object.keys(imageNames).map(a => imageNames[a].length).reduce((a, b) => a + b);
Object.keys(imageNames).forEach(belong => {
    imageNames[belong].forEach(num => {
        let img = new Image();
        img.src = `assets/images/${belong}/${num}.png`;
        img.onload = () => {
            imageNamesL++;
            if(imageNamesL === imageNamesT){
                start();
            }
        };
        img.onerror = () => console.error(`Image ${belong}/${num} failed to load.`);
        if(!images[belong]) images[belong] = {};
        images[belong][num] = img;
    });
});

let soundsLoaded = 0;
let sounds = {};
let soundsNames = [];
let totalsounds = soundsNames.length
soundsNames.forEach(num => {
    let sound = new Audio();
    sound.preload = 'auto';
    sound.src = `assets/sounds/${num}.mp3`; 
    sound.addEventListener('canplaythrough', () => {
        soundsLoaded++;
    }, {once: true});
    sound.onerror = () => {
        console.error(`Sound ${num} failed to load.`);
    };
    sounds[num] = sound;
}); 
//#endregion 画像&?の読み込み

//#region canvas
let dunD = document.querySelector('#dungeon');
let dunFl = document.querySelector('#dungeon .floor');
let duncan = document.querySelector('#dungeon .floor .canvas'); //canvas
let dunctx = duncan.getContext('2d');
let dunC = {
    zen: 32,
    mas: 15,
    size: null,
    cam: {
        sx: 0,
        sy: 0,
    },
    objs: [],
    back: [],
    wall: [],
};
dunC.load = () => {
    for(let y = 0; y < dunC.zen; y++){
        dunC.back[y] = [];
        dunC.wall[y] = [];
        for(let x = 0; x < dunC.zen; x++){
            dunC.back[y][x] = 'error';
            dunC.wall[y][x] = 0;
        }
    }
}
function resizeCanvas() {
    let wid = window.innerWidth / 2;
    duncan.width = wid;
    duncan.height = wid;
    dunFl.style.width = wid + 'px';
    dunFl.style.height = wid + 'px';
    dunC.size = wid / dunC.mas;
}

function draw() {
    let cam = dunC.cam;
    dunctx.clearRect(0, 0, duncan.width, duncan.height);

    let startX = Math.floor(cam.sx / dunC.size);
    let startY = Math.floor(cam.sy / dunC.size);
    let endX = Math.ceil((cam.sx + duncan.width) / dunC.size);
    let endY = Math.ceil((cam.sy + duncan.height) / dunC.size);

    startX = Math.max(0, startX);
    startY = Math.max(0, startY);
    endX = Math.min(dunC.zen - 1, endX);
    endY = Math.min(dunC.zen - 1, endY);

    for(let y = startY; y <= endY; y++){
        for(let x = startX; x <= endX; x++){
            let code = dunC.back[y][x];
            let img = images['maps'][code];
            let px = x * dunC.size - cam.sx;
            let py = y * dunC.size - cam.sy;
            if(img) dunctx.drawImage(img, px, py, dunC.size, dunC.size);
            else dunctx.drawImage(images['systems']['error'], px, py, dunC.size, dunC.size);

            // wall
            let imgn = dunC.wall[y][x];
            img = images['maps'][imgn];
            if(img) dunctx.drawImage(img, px, py, dunC.size, dunC.size);
            else dunctx.drawImage(images['systems']['error'], px, py, dunC.size, dunC.size);
        }
    }

    dunC.objs.forEach(obj => {
        if(obj.name == 'player') return obj.sx = dunC.cam.sx, obj.sy = dunC.cam.sy, dunctx.drawImage(obj.img, obj.sx, obj.sy, dunC.size, dunC.size);
        let ox = obj.sx - cam.sx;
        let oy = obj.sy - cam.sy;
        dunctx.drawImage(obj.img, ox, oy, dunC.size, dunC.size);
    });
}


let mapSouan = `
111111111111111111111111111111111111111111,
100010000000001000000000000000000000000001,
100010000000001000000000000000000000000001,
100010000000001000000000000000000000000001,
100000000000001000000000000000000000000001,
100000000000001000000000000000000000000001,
100000000000001000011111111111111111111111,
100010000000001000010000000000000000000001,
100010000000001000010000000000000000000001,
100010000000001000010000000000000000000001,
100010000000001000010000000000000000000001,
100010000000001000010000000000000000000001,
100011111111111000011111111111110000000001,
100000000000000000000000000000000000000001,
100000000000000000000000000000000000000001,
100000000000000000000000000000000000000001,
111111111111111111111111000111111111111111,
100000000000000000000001000010000000000001,
100000000000000000000001000010000000000001,
100000000000000000000001000010000000000001,
100000000000000000000001000010000000000001,
100000000000000000000001000010000000000001,
100000000000000000000001000011111000000001,
100000000000000000000000000000000000000001,
100000000000000000000000000000000000000001,
100000000000000000000000000000000000000001,
100000000000000000000001000000000000000001,
100000000000000000000001000000000000000001,
100000000000000000000001000000000000000001,
100000000000000000000001000000000000000001,
100000000000000000000001000000000000000001,
111111111111111111111111111111111111111111`;


function chooseWeighted(weights){
    let total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
        if (r < weights[i]) return i;
        r -= weights[i];
    }
    return weights.length - 1;
}
// --- 1) dun_back の先頭タイル選択を修正 (arraySelect を使わない)
function dun_back(){
    console.log('床つくるよ～ん');
    let tiles = ['a','b','c'];
    let zen = dunC.zen;
    for (let i = 0; i < zen; i++){
        dunC.back[i] = [];
        for (let j = 0; j < zen; j++){
            if(i === 0 && j === 0){
                // ランダム初期タイル（arraySelect の代替）
                dunC.back[i][j] = tiles[Math.floor(Math.random()*tiles.length)];
            } else {
                let weights = new Array(tiles.length).fill(1);
                if(j > 0){
                    let left = tiles.indexOf(dunC.back[i][j - 1]);
                    if(left >= 0) weights[left] += 5;
                }
                if(i > 0){
                    let up = tiles.indexOf(dunC.back[i - 1][j]);
                    if(up >= 0) weights[up] += 5;
                }
                let choice = chooseWeighted(weights);
                dunC.back[i][j] = tiles[choice];
            }
        }
    }
}


let Rooms = [
    [
        [1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,1,1,0,0,0,1,1]
    ],
    [
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1]
    ],
    [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]
]// さっきの調整関数群（コピペして使え）

function dun_wall(){
    // 4x4 のランダム部屋選択
    let grid = [];
    for(let r=0;r<4;r++){
      let row=[];
      for(let c=0;c<4;c++){
        // 深いコピーしないと調整で元のRoomsが壊れる
        let base = arraySelect(Rooms);
        let clone = base.map(arr=>arr.slice());
        row.push(clone);
      }
      grid.push(row);
    }
    return stitchRooms(grid);
  }
function lololololololdun_wall(){
    let arr = mapSouan
        .replace(/\n/g, "") // ← ここで改行を全部消す
        .split(",")
        .map(line => line.split(''));
    for(let y = 0; y < dunC.mas; y++){
        for(let x = 0; x < dunC.mas; x++){
            let code = arr[y][x];
            dunC.wall[y][x] = 0;
             if(code == '0') continue;
            dunC.wall[y][x] = 1;
        }
    }

    for(let y = 0; y < dunC.mas; y++){
        for(let x = 0; x < dunC.mas; x++){
            let wa = dunC.wall[y][x];
            if(wa == 0) continue;

            let hure = [1,1,1,1];
            if(0 < y && dunC.wall[y-1][x] == 0) hure[0] = 0;
            if(y < dunC.mas-1 && dunC.wall[y+1][x] == 0) hure[2] = 0;
            if(x > 0 && dunC.wall[y][x-1] == 0) hure[3] = 0;
            if(x < dunC.mas-1 && dunC.wall[y][x+1] == 0) hure[1] = 0;
            let atai = hure.join('');

            let imgn = `w${atai}`;
            dunC.wall[y][x] = imgn;
        }
    }

    draw();
}
function adjustHoriz(left, right){
    for(let y=0; y<8; y++){
        const L = left[y][7], R = right[y][0];
        if(L===0 && R===1){
            const passable =
             (right[y][1]===0) ||
             (y>0 && right[y-1][0]===0) ||
             (y<7 && right[y+1][0]===0);
            if(passable) right[y][0]=0;
            else left[y][7]=1;
        }
        if(L===1 && R===0){
            const passable = 
             (left[y][6]===0) ||
             (y>0 && left[y-1][7]===0) || 
             (y<7 && left[y+1][7]===0);
            if(passable) left[y][7]=0;
            else right[y][0]=1;
        }
    }
}
function adjustVert(top, bottom){
    for(let x=0; x<8; x++){
        const T = top[7][x], B = bottom[0][x];
        if(T===0 && B===1){
            const passable = (bottom[1][x]===0) ||
                (x>0 && bottom[0][x-1]===0) ||
                (x<7 && bottom[0][x+1]===0);
            if(passable) bottom[0][x]=0;
            else top[7][x]=1;
        }
        if(T===1 && B===0){
        const passable = (top[6][x]===0) ||
            (x>0 && top[7][x-1]===0) ||
            (x<7 && top[7][x+1]===0);
            if(passable) top[7][x]=0;
            else bottom[0][x]=1;
        }
    }
}
function stitchRooms(rooms){
    for(let r=0;r<4;r++)for(let c=0;c<3;c++) adjustHoriz(rooms[r][c], rooms[r][c+1]);
    for(let r=0;r<3;r++)for(let c=0;c<4;c++) adjustVert(rooms[r][c], rooms[r+1][c]);
  
    const out = Array.from({length:32},()=>Array(32).fill(1));
    for(let rr=0; rr<4; rr++){
        for(let cc=0; cc<4; cc++){
            const room = rooms[rr][cc];
            for(let y=0;y<8;y++){
                for(let x=0;x<8;x++){
                    out[rr*8+y][cc*8+x] = room[y][x];
                }
            }
        }
    }
    return out;
}

// 4x4 部屋を作って結合


//#region player
let keys = {}
document.addEventListener('keydown', e => {
   let key = e.key.toLowerCase();
   if(e.key == ' ') key = 'space';
   keys[key] = true;
});
document.addEventListener('keyup', e => {
   let key = e.key.toLowerCase();
   if(e.key == ' ') key = 'space';
   keys[key] = false;
});

// --- 2) dun_p_make を grid 座標管理にしておく（sx/sy を直接使わない）
function dun_p_make(){
    let ob = {
        id: dunC.objs.length,
        side: 'player',
        name: 'player',
        x: 7, // グリッド座標
        y: 7,
        moving: 0,
        able: ['move'],
        img: images['enemies']['蒼白の粘液'],
    };
    dunC.objs.push(ob);
}


async function dun_p_tekiou(){
    let p = dunC.objs.find(o => o.name == 'player');
    let cam = dunC.cam;
    let kaisu = 5;
    let tyomateyo = 0;
    if((keys.w || keys.arrowup) && !p.moving){
        p.moving = 1;
        let ippo = dunC.size/kaisu;
        for(let i = 0; i < kaisu; i++){
            cam.sy -= ippo;
            draw();
            await delay(5);
        }
        await delay(tyomateyo)
        p.moving = 0;
    }else if((keys.s || keys.arrowdown) && !p.moving){
        p.moving = 1;
        let ippo = dunC.size/kaisu;
        for(let i = 0; i < kaisu; i++){
            cam.sy += ippo;
            draw();
            await delay(5);
        }
        await delay(tyomateyo)
        p.moving = 0;
    }else if((keys.a || keys.arrowleft) && !p.moving){
        p.moving = 1;
        let ippo = dunC.size/kaisu;
        for(let i = 0; i < kaisu; i++){
            cam.sx -= ippo;
            draw()
            await delay(5);
        } 
        await delay(tyomateyo)
        p.moving = 0;
    }else if((keys.d || keys.arrowright) && !p.moving){
        p.moving = 1;
        let ippo = dunC.size/kaisu;
        for(let i = 0; i < kaisu; i++){
            cam.sx += ippo;
            draw();
            await delay(5);
        }
        await delay(tyomateyo)
        p.moving = 0;
    }
}

//#endregion player


//#endregion canvas

//#region battle
//#endregion

function start(){
    resizeCanvas();
    dunC.load();
    dun_back();
    dun_wall();
    dun_p_make();
    
    gameloop();
}

let loop = 1;
let looped = 0;
function gameloop(){
    draw();
    dun_p_tekiou()
    if(loop) requestAnimationFrame(gameloop);
}