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
function fl(num){
    let res = num ? 1 : 0;
    return res;
}

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
    // window.open('about:blank', '_self').close();
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
function mixshoku(c1, c2, ratio = 0.5) {
    const toRGB = c => {
        c = c.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const n = parseInt(c, 16);
        return [n >> 16, (n >> 8) & 255, n & 255];
    };

    const [r1, g1, b1] = toRGB(c1);
    const [r2, g2, b2] = toRGB(c2);

    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    return (
        '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
    );
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
    // console.log(`${raw}を送信します`);
    // console.log(`残り: (${len - 1})[${queueAddtext}]`);
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
document.addEventListener('keydown', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
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
    if((!logOOmoto.classList.contains('tog') || code == 'o') && code != 'c'){
        logOOmoto.classList.add('tog');
        logOpener.textContent = '<';

    }else{
        logOOmoto.classList.remove('tog');
        logOpener.textContent = '>';
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
//#region observer
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

let clicking = false;
document.addEventListener('mousedown', () => clicking = true);
document.addEventListener('mouseup', () => clicking = false);
//#endregion
//#region tk
class tk{
    constructor(type, x = 'half', y = 'half', w = window.innerWidth/2, h = window.innerWidth/2){
        let youso = document.createElement(type);
        youso.className = `tk ${type}`;

        let yoko = ['x', 'w'];
        for(let n of yoko){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerWidth / 100;
        }

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerHeight / 100;
        }

        console.log(x, y, w, h);

        youso.style.width = `${w}px`;
        youso.style.height = `${h}px`;

        youso.style.left = `${x}px`;
        youso.style.top = `${y}px`;
        
        if(x == 'half' && y == 'half') youso.classList.add('cenXY');
         else if(x == 'half') youso.classList.add('cenX');
         else if(y == 'half') youso.classList.add('cenY');

        this.youso = youso;
    };

    attrAdd(dict = 'none'){
        if(dict == 'none') return;
        
        if(typeof dict == 'string'){
            //attr: nanka
            let [key, val] = dict.split(':');
             key = key.trim();
             val = val.trim();
            this.youso.setAttribute(key, val);
            return 0;
        }

        if(typeof dict != 'object') return 1;

        for(let key in dict) this.youso.setAttribute(key, dict[key]);

        return 0;
    }

    styleAdd(dict){
        for(let key in dict) this.youso.style[key] = dict[key];
    }

    classAdd(name){this.youso.classList.add(name)};
    classRem(name){this.youso.classList.remove(name)};
    classTog(name){this.youso.classList.toggle(name)};
    classHas(name){
        let is = this.youso.classList.contains(name);
        return is;
    }

    evAdd(type, func){
        this.youso.addEventListener(type, func);
    }

    yousoAdd(youso){
        this.youso.appendChild(youso);
    }

    append(){
        document.body.appendChild(this.youso);
    };

    remove(){
        this.youso.remove();
    };
}

function tkTest(){
    let mono = new tk('div', 'half', 'half');
    mono.classAdd('draggable');
    mono.styleAdd({background: '#f0f8ff'});

    let mono2 = new tk('div', 'half', 'half');
    mono2.styleAdd({background: '#cfe9ff'});

    mono.yousoAdd(mono2.div);

    mono.evAdd('click', function(){
        nicoText('clicked');
    });

    mono.append();
}

//#endregion

let driD = document.getElementById('drink-game');
let driC = {
    open:0, //0:閉じている 1:開いている(右上のやつでtog可)
    now:0, //0:暇 1:接客中
    phase:1, //1:ノーマル
    mode:0, //0は普通、1は英語、2は早口

    euro:0,
    lv:1,
    exp:0,
    // star:0, //0~5
    // repu:0,

    userD:driD.querySelector('.user'),
     nameD:driD.querySelector('.user .name'),
     euroD:driD.querySelector('.user .euro'),
    logD:driD.querySelector('.log'),
}
driC.Custs = [
    {
        can:1,
        name:'Hiro811',
        hello:'こんにちは！！',
        ordel:'と、',
        order:'で、お願いします！',
        happy:'わーーー！！ありがとうございます！！',
        sader:'ぁ、え、あー..ありがとう....ございます！',
        terr:0 //嫌々ながらも買う->評判は落ちる?
    },
    {
        can:1,
        wait:800,
        name:'RyosuK992',
        hello:'すいませーん！',
        ordel:'と、',
        order:'で。',
        happy:'ありがとうございましたー',
        sader:'..頼んだのと違うんですけど',
        terr:1 //買わない
    },
]
// let wait = cust.wait ? 1000;

driC.Drinks = [
    // ['水','牛乳','お茶','あがり','オレンジジュース','グレープジュース','カルピス','コーヒー','モンスターエネルギードリンク','ビール','ミックスジュース','コーヒー牛乳','フルーツ牛乳','ミックス牛乳','オレピス','グレピス','コヒピス','ミルピス','薄めたお茶','薄めた牛乳','薄めたオレンジジュース','薄めたグレープジュース','薄めたコーヒー','薄めたカルピス','薄めたビール'];
    {
        can:1,
        name:'水',
        // descはいったん後で。
        make:['water'],
        price:110,
    },
    {
        can:1,
        name:'牛乳',
        betu:['ミルク', 'ホットミルク'],
        make:['milk'],
        price:130,
    }
]

let ordera = 0;
let orderb = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
//あがりはお茶。　(order == 'お茶' || order == 'あがり')にしないといけないからめんどい
function tekiou(){document.getElementById('Euro').textContent = euro;}
function appear(){
    document.getElementById('shopscene').innerHTML = '<button onclick="inviteguest()">invite</button>'
}
function start(){
    euro = 0;
    tekiou();
    appear();
}
async function inviteguest(){
    x = guestvoicehello[Math.floor(Math.random() * guestvoicehello.length)];
    document.getElementById('log').textContent = x;
    if(x == 'hello! I want something to drink...'){difficluty = 1;}//English mode
    else if(x == 'あ..すみません....'){difficluty = 2;}//Introvert mode
    else{difficluty = 0;}//Normal mode
    ordera = guestorder[Math.floor(Math.random() * guestorder.length)];
    orderb = guestorder[Math.floor(Math.random() * guestorder.length)];
    if(difficluty == 1){
        switch(ordera){
            case '水': a = 'water'; break;
            case '牛乳': a = 'milk'; break;
            case 'お茶': a = 'tea'; break;
            case 'あがり': a = 'tea'; break;
            case 'オレンジジュース': a = 'orange juice'; break;
            case 'グレープジュース': a = 'grape juice'; break;
            case 'カルピス': a = 'calpis'; break;
            case 'コーヒー': a = 'coffee'; break;
            case 'モンスターエネルギードリンク': a = 'monster energy drink'; break;
            case 'ビール': a = 'beer'; break;
            case 'ミックスジュース': a = 'mix juice'; break;
            case 'コーヒー牛乳': a = 'coffee milk'; break;
            case 'フルーツ牛乳': a = 'fruit milk'; break;
            case 'ミックス牛乳': a = 'mix milk'; break;
            case 'オレピス': a = 'orange calpis'; break;
            case 'グレピス': a = 'grape calpis'; break;
            case 'コヒピス': a = 'coffee calpis'; break;
            case 'ミルピス': a = 'milk calpis'; break;
            case '薄めたお茶': a = 'diluted tea'; break;
            case '薄めた牛乳': a = 'diluted milk'; break;
            case '薄めたオレンジジュース': a = 'diluted orange juice'; break;
            case '薄めたグレープジュース': a = 'diluted grape juice'; break;
            case '薄めたカルピス': a = 'diluted calpis'; break; 
            case '薄めたコーヒー': a = 'diluted coffee'; break;
            case '薄めたビール': a = 'diluted beer';break;
        }
        switch(orderb){
            case '水': b = 'water'; break;
            case '牛乳': b = 'milk';break;
            case 'お茶': b = 'tea'; break;
            case 'あがり': b = 'tea'; break;
            case 'オレンジジュース': b = 'orange juice'; break;
            case 'グレープジュース': b = 'grape juice'; break;
            case 'カルピス': b = 'calpis'; break;
            case 'コーヒー': b = 'coffee'; break;
            case 'モンスターエネルギードリンク': b = 'monster energy drink'; break;
            case 'ビール': b = 'beer'; break;
            case 'ミックスジュース': b = 'mix juice'; break;
            case 'コーヒー牛乳':b = 'coffee milk'; break;
            case 'フルーツ牛乳': b = 'fruit milk'; break;
            case 'ミックス牛乳': b = 'mix milk'; break;
            case 'オレピス': b = 'orange calpis'; break;
            case 'グレピス': b = 'grape calpis'; break;
            case 'コヒピス': b = 'coffee calpis'; break;
            case 'ミルピス': b = 'milk calpis'; break;
            case '薄めたお茶': b = 'diluted tea'; break;
            case '薄めた牛乳': b = 'diluted milk'; break;
            case '薄めたオレンジジュース': b = 'diluted orange juice'; break;
            case '薄めたグレープジュース': b = 'diluted grape juice'; break;
            case '薄めたカルピス': b = 'diluted calpis'; break;
            case '薄めたコーヒー': b = 'diluted coffee'; break;
            case '薄めたビール': b = 'diluted beer'; break;
        }
        c = ' and,'; d = ', please.';
    }
    if(difficluty == 2){a = ordera; b = orderb; c = '...と'; d = '...でお願いします' }
    if(difficluty == 0){a = ordera; b = orderb; c = 'と、'; d = 'でお願いします！';};
    await delay(1000);
    y = 1500;
    if(difficluty == 2){y = 500;};
    document.getElementById('log').textContent = a + c;
    await delay(y);
    document.getElementById('log').textContent = b + d;
    window.setTimeout(drinkberopen, y)
}
function drinkberopen(){
    document.getElementById('log').textContent = '';
    document.getElementById('shopscene').innerHTML = '<span id="drinkber"></span>';
}