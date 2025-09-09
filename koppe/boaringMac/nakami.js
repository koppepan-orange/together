
const grid = document.getElementById('grid');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
let selected = null;

function createItem(name = '新しいファイル') {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = name;
    div.style.left = Math.random() * (grid.clientWidth - 120) + 'px';
    div.style.top = Math.random() * (grid.clientHeight - 80) + 'px';

    div.addEventListener('click', () => {
    if (selected) selected.classList.remove('selected');
    selected = div;
    div.classList.add('selected');
    });

    div.addEventListener('dblclick', () => {
    const newName = prompt('名前を入力:', div.textContent);
    if (newName) div.textContent = newName;
    });

    makeDraggable(div);
    grid.appendChild(div);
}

addBtn.addEventListener('click', () => createItem());
removeBtn.addEventListener('click', () => {
    if (selected) {
    selected.remove();
    selected = null;
    }
});

function makeDraggable(el) {
    let offsetX, offsetY, dragging = false;

    el.addEventListener('mousedown', (e) => {
    dragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
    dragging = false;
    el.style.cursor = 'grab';
    });
}
const diff = 50; // 許容誤差（px）

document.addEventListener('keydown', (e) => {
    if (!selected) return;
    const items = Array.from(grid.children);
    if (items.length < 2) return;

    const sx = selected.offsetLeft + selected.offsetWidth / 2;
    const sy = selected.offsetTop + selected.offsetHeight / 2;

    let candidates = [];

    if (e.key === 'ArrowRight') {
        candidates = items.filter(el => {
            if (el === selected) return false;
            const cx = el.offsetLeft + el.offsetWidth / 2;
            const cy = el.offsetTop + el.offsetHeight / 2;
            return cx > sx && Math.abs(cy - sy) <= diff; // 真右方向、y座標がほぼ同じ
        });
    }
    if (e.key === 'ArrowLeft') {
        candidates = items.filter(el => {
            if (el === selected) return false;
            const cx = el.offsetLeft + el.offsetWidth / 2;
            const cy = el.offsetTop + el.offsetHeight / 2;
            return cx < sx && Math.abs(cy - sy) <= diff; // 真左方向
        });
    }
    if (e.key === 'ArrowDown') {
        candidates = items.filter(el => {
            if (el === selected) return false;
            const cx = el.offsetLeft + el.offsetWidth / 2;
            const cy = el.offsetTop + el.offsetHeight / 2;
            return cy > sy && Math.abs(cx - sx) <= diff; // 真下方向
        });
    }
    if (e.key === 'ArrowUp') {
        candidates = items.filter(el => {
            if (el === selected) return false;
            const cx = el.offsetLeft + el.offsetWidth / 2;
            const cy = el.offsetTop + el.offsetHeight / 2;
            return cy < sy && Math.abs(cx - sx) <= diff; // 真上方向
        });
    }

    if (candidates.length > 0) {
        // 一番近いものを選択
        let closest = null;
        let minDist = Infinity;
        for (const el of candidates) {
            const cx = el.offsetLeft + el.offsetWidth / 2;
            const cy = el.offsetTop + el.offsetHeight / 2;
            const dx = cx - sx;
            const dy = cy - sy;
            const dist = dx * dx + dy * dy; // 二乗距離で比較
            if (dist < minDist) {
                minDist = dist;
                closest = el;
            }
        }
        if (closest) {
            selected.classList.remove('selected');
            selected = closest;
            selected.classList.add('selected');
        }
    }
});
