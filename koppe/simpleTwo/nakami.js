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
    const i2 = Math.floor(Math.random() * (i + 1));
    [array[i], array[i2]] = [array[i2], array[i]];
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

function anagramSaySay(text, loo = 10, bet = '<br>'){
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

    let looped = loo;
    console.log(`総数:${cal} 回数:${looped}`);
    if(cal < looped) menjo = 1;
    
    let reses = [];
    while(looped > 0){
        looped -= 1;
        let res = arrayShuffle(optout).join(''); 
        if(reses.includes(res)){looped += 1; continue}
        
        if(res == text && !menjo){looped += 1; continue;}

        if(res == text && menjo && reses.length < cal){looped += 1; continue}
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
let skipText = 0; // スキップフラグ
let clearText = 0; // テキスト消去フラグ
let textShowing = 0;

function colorcheck(rawtext) {
    const text = [];
    let isRed = 0; // ** で囲まれた部分かどうか
    let isPink = 0; // && で囲まれた部分かどうか
    let isBlue = 0; // ^^ で囲まれた部分かどうか

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
    clearText = 0; // 消去フラグをリセット

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
                    skipText = 0;
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
                    clearText = 1;
                    skipText = 0
                    textShowing = 0;
                    resolve('end'); // Promiseを解決
                });
                }
        }
        type();
    });
}
document.addEventListener('keydown', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = 1;
    }
});

document.addEventListener('keyup', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = 0;
    }
});

document.addEventListener('click', () => {
    skipText = 1;
    setTimeout(() => skipText = 0, 50); // 一時的にスキップを有効化
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
//#region draggable
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
    'players': ['select','溶け込む人'],
    'enemies': ['シーフード','フルメカシーフード','キャンディ','キャンディ亜種','チンアナゴ','フルメカチンアナゴ'],
    'systems': ['x','error']
};
let imageNamesT = Object.values(imageNames).flat().length;

// リトライ付きロード関数
function loadImage(belong, name, retries = 3){
    let img = new Image();
    img.src = `assets/images/${belong}/${name}.png`;
    img.onload = () => {
        imageNamesL++;
        if(imageNamesL == imageNamesT) start();
    };
    img.onerror = () => {
        if(retries > 0){
            console.warn(`Image ${belong}/${name} failed. retrying... (${retries})`);
            loadImage(belong, name, retries-1);
        } else {
            console.error(`Image ${belong}/${name} failed completely.`);
            imageNamesL++;
            // フォールバック画像
            let fallback = new Image();
            fallback.src = `assets/images/systems/error.png`;
            images[belong][name] = fallback;
            if(imageNamesL == imageNamesT) start();
        }
    };
    if(!images[belong]) images[belong] = {};
    images[belong][name] = img;
}

Object.keys(imageNames).forEach(belong=>{
    imageNames[belong].forEach(name=>{
        loadImage(belong, name, 3);
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
	},{once: 1});
	sound.onerror = () => {
		console.error(`Sound ${num} failed to load.`);
	};
	sounds[num] = sound;
}); 
//#endregion 画像&?の読み込み

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let mas = 24;
let size = null;

function resizeCanvas() {
    let wid = window.innerWidth;
    canvas.width = wid;
    canvas.height = window.innerHeight;
    size = wid / mas;

    let ground = tiles.find(a => a.id == 0);
    ground.width = wid;
    ground.x = 0;
    ground.y = canvas.height - 40;
    
    for(let tl of tiles){
        tl.y = ground.y - tl.height;
    }
}
window.addEventListener('resize', resizeCanvas);

const keys = {};
document.addEventListener('keydown', e => {
    let key = e.key.toLowerCase();
    if(e.key == ' ') key = 'space';
    keys[key] = 1;
});
document.addEventListener('keyup', e => {
    let key = e.key.toLowerCase();
    if(e.key == ' ') key = 'space';
    keys[key] = 0;
});

let objs = [
    {
        id: 0,
        name: 'player',
        type: 'player',
        img: 'players/select',
        x: 50,
        y: 300,
        width: 40,
        height: 40,
        color: '#f0f8ff',
        dx: 0,
        dy: 0,
        spd: 3,
        jumP: -10,
        gravity: 0.5,
        grounded: 0,
    }
]


const tiles = [
    {id:0, x:0, y:360, width:canvas.width, height:40, color:'#000', attribute:[]},
    {id:1, x:200, y:320, width:60, height:40, color:'#add8e6', attribute:[]},
    {id:2, x:400, y:280, width:60, height:80, color:'#add8e6', attribute:[]},
];

function update() {
    let player = objs.find(a => a.name == 'player');
    let hasa = (tl, name) => tl.attribute.includes(name);
    
    player.dx = 0;
    if(keys['a']) player.dx = -player.spd;
    if(keys['d']) player.dx = player.spd;
    if(keys['w'] && player.grounded){
        player.dy = player.jumP;
        player.grounded = 0;
    }
    if(keys['s'] && !player.grounded) player.dy += 1; // 急降下

    player.dy += player.gravity;
    player.x += player.dx;
    player.y += player.dy;

    // 地面との衝突
    let ground = tiles.find(a => a.id == 0);
    if(player.y + player.height > ground.y){
        player.y = ground.y - player.height;
        player.dy = 0;
        player.grounded = 1;
    }

    // 障害物との衝突
    tiles.forEach(obs => {
        if(
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ){
            // 上から着地
            if(player.dy > 0 && player.y + player.height - player.dy <= obs.y){
                player.y = obs.y - player.height;
                player.dy = 0;
                player.grounded = 1;
            }

            // 下から頭ぶつけ
       else if(player.dy < 0 && player.y >= obs.y + obs.height - player.dy && !hasa(obs, 'pane')){
                player.y = obs.y + obs.height;
                player.dy = 0;
            }

            // 横からぶつかり
       else if(player.dx > 0 && !hasa(obs, 'pane')){
                player.x = obs.x - player.width;
            }
       else if(player.dx < 0 && !hasa(obs, 'pane')){
                player.x = obs.x + obs.width;
            }
        }
    });

}


function draw() {
    ctx.fillStyle = '#888';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    tiles.forEach(obs => {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });

    // ctx.fillStyle = player.color;
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    objs.forEach(obj => {
        if(hask(obj, 'img')){
            let [be, nm] = obj.img.split('/');
            let img = images[be][nm];
            ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
            return;
        }
        else{
            if(!obj.color) console.log('色なし'), obj.color = '#bb00ff';
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
        }
    })
}

document.addEventListener("keydown", (e) => {
    let player = objs.find(a => a.name == 'player');
    if(e.key == " "){
        let newAshiba = {
            x: (player.x - 10),
            y: (player.y + 40), 
            width: 60,
            height: 5,
            color: '#add8e6',
            attribute:["pane"]
        };
        tiles.push(newAshiba);

        setTimeout(() => {
            // newAshibaをobstaclesから削除
            const index = tiles.indexOf(newAshiba);
            if (index > -1) {
                tiles.splice(index, 1);
            }
        }, 3000);
    }
});

function start(){
    resizeCanvas();
    gameloop();
}

let loop = 1;
let looped = 0;
function gameloop() {
    update();
    draw();

    if(loop) requestAnimationFrame(gameloop);
}