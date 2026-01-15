//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    let newDiv = document.createElement('div');
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
function tobiText(youso, mes) {
    let el = youso;
    if(typeof el == 'string') el = document.querySelector(youso);
    if(!el) return console.error('せんぱ〜い？この要素壊れてますよ〜〜？');

    let rect = el.getBoundingClientRect();
    let left = rect.left + window.scrollX + rect.width / 2;
    let top = rect.top + window.scrollY + rect.height / 2;

    let node = document.createElement('div');
    node.className = 'tobitext';
    node.textContent = mes;
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;

    document.body.appendChild(node);

    let duration = 1200;
    let distance = -48;
    let jitter = (Math.random() - 0.5) * 10;

    let start = performance.now();

    function easeOutCubic(t){return 1 - Math.pow(1 - t, 3);}

    function frame(now){
        let t = Math.min(1, (now - start) / duration);
        let e = easeOutCubic(t);
        let tsY = distance * e;
        let tsX = jitter * (1 - e);
        node.style.transform = `translate(-50%, -50%) translateY(${tsY}px) translateX(${tsX}px)`;
        node.style.opacity = String(1 - t);
        if(t < 1) requestAnimationFrame(frame);
        else node.remove();
    }

    requestAnimationFrame(frame);
}
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
        let i2 = Math.floor(Math.random() * (i + 1));
        [array[i], array[i2]] = [array[i2], array[i]];
    }
    return array;
};
function arraySize(array){
    let res = new Set(array).size;
    return res;
};
function arrayCount(array){
    let counts = {};
    for(let value of array){
        counts[value] = (counts[value] || 0) + 1;
    }
    return counts;
}
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
}
function arrayGacha(array, prob){
    if(array.length != prob.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    let total = prob.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < prob[i]) return array[i];
        random -= prob[i];
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
        for(let i = 0; i < moto.length; i++){
            arr.push(copy(moto[i]));
        }
        return arr;
    }
    else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for(let key in moto){
            if(moto.hasOwnProperty(key)){
                obj[key] = copy(moto[key]);
            }
        }
        return obj;
    }
    else{
        return moto;
    }
}
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(num);
};
function fl(val, arr = [0, 1]){
    let res = val == arr[0] ? arr[1] : arr[0];
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
    // console.log(`総数:${cal} 回数:${loopen}`);
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
function anagramCan(mae, ato){
    if(mae.length != ato.length) return 0;

    let count = {};
    for(let ch of mae){
        count[ch] = (count[ch] || 0) + 1;
    }

    for(let ch of ato){
        if(!count[ch]) return 0;
        count[ch] -= 1;
    }

    return 1;
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    addtext(text)
    await delay(2000);
    // window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, '');

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね♪')

    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    let compR = (255 - r).toString(16).padStart(2, '0');
    let compG = (255 - g).toString(16).padStart(2, '0');
    let compB = (255 - b).toString(16).padStart(2, '0');

    let ato = `#${compR}${compG}${compB}`

    return ato;
}
function mixshoku(c1, c2, ratio = 0.5) {
    let toRGB = c => {
        c = c.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        let n = parseInt(c, 16);
        return [n >> 16, (n >> 8) & 255, n & 255];
    };

    let [r1, g1, b1] = toRGB(c1);
    let [r2, g2, b2] = toRGB(c2);

    let r = Math.round(r1 + (r2 - r1) * ratio);
    let g = Math.round(g1 + (g2 - g1) * ratio);
    let b = Math.round(b1 + (b2 - b1) * ratio);

    let ato = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    return ato;
}
//#endregion
//#region log&text
let textDiv = document.querySelector('#text');
let autoDelay = 1;
let skipText = false;
let clearText = false;
let textShowing = 0;

function colorcheck(rawtext) {
    let text = [];
    let color = null;
    let colors = [
        {
            name: 'red',
            sym: '*',
            col: '#ff4040'
        },
        {
            name: 'pink',
            sym: '&',
            col: '#ff80bf'
        },
        {
            name: 'yell',
            sym: '^',
            col: '#ffff40'
        }
    ]

    for(let i = 0; i < rawtext.length; i++){
        let sym = false;
        for(let c of colors){
            if(rawtext[i] == c.sym && rawtext[i + 1] == c.sym){
                console.log(`→${rawtext[i]}← 発見！ ${c.name}色です`)
                color = color ? null : c.col;
                i++;
                sym = true;
                break;
            }
        }
        
        if(sym) continue;
        if(color) console.log(color)
        text.push({
            char: rawtext[i],
            color: color
        });
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
                            let span = document.createElement("span");
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
                    let span = document.createElement("span");
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
                let waitTime = autoDelay * 1000;
                let timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                let userAction = new Promise(resolve => {
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
let mobileDesc = document.getElementById('mobileDesc');
document.addEventListener('mousemove', (e) => {
    mobileDesc.style.left = `${e.clientX + 10}px`;
    mobileDesc.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
    let descTarget = e.target.closest('[data-description]');
    if(descTarget){
        let desc = descTarget.dataset.description;
        mobileDesc.innerText = desc;
        mobileDesc.classList.add('show');
    }
});
document.addEventListener('mouseout', (e) => {
    let descTarget = e.target.closest('[data-description]');
    if(descTarget){
        mobileDesc.innerText = '';
        mobileDesc.classList.remove('show');
    }
});
//#endregion
//#region draggable
document.addEventListener('mousedown', e => {
    // let descTarget = e.target.closest('[data-description]');
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
//#region tk
class tk{
    constructor(type, x = 'half', y = 'half', w = window.innerWidth/2, h = window.innerWidth/2){
        let youso = document.createElement(type);
        youso.className = `tk ${type}`;

        let contex = {x, y, w, h};

        let yoko = ['x', 'w'];
        for(let n of yoko){
            console.log(n), console.log(eval(n));
            if(typeof contex[n] != 'string' || typeof contex[n] == 'string' && !contex[n].endsWith('%')) continue;
            let num = contex[n].slice(0, -1);
            contex[n] = num * window.innerWidth / 100;
        }

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof contex[n] != 'string' || typeof contex[n] == 'string' && !contex[n].endsWith('%')) continue;
            let num = contex[n].slice(0, -1);
            contex[n] = num * window.innerHeight / 100;
        }

        console.log(contex);

        youso.style.width = `${contex.x}px`;
        youso.style.height = `${contex.h}px`;

        youso.style.left = `${contex.x}px`;
        youso.style.top = `${contex.y}px`;
        
        if(contex.x == 'half' && contex.y == 'half') youso.classList.add('cenXY');
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
let cricking = false;
document.addEventListener('pointerdown', (e) => {
    if(e.buttons == 0) clicking = true;
    if(e.buttons == 2) cricking = true;
});
document.addEventListener('pointerup', (e) => {
    if(e.buttons == 0) clicking = false;
    if(e.buttons == 2) cricking = false;
});
document.addEventListener('pointercancel', (e) => {
    if(e.buttons == 0) clicking = false;
    if(e.buttons == 2) cricking = false;
});
window.addEventListener('blur', () => { clicking = cricking = false; });

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
//#endregion
//#region fonts
const Fonts = [
    {src:'comicsans', type:'ttf'},
    {src:'craft', type:'otf'},
    {src:'hackgen', type:'ttf'},
    {src:'hangyaku', type:'ttf'},
    {src:'kurobara', type:'ttf'},
    {src:'kurundeco', type:'otf'},
    {src:'misaki', type:'ttf'},
    {src:'starrysky', type:'otf'},
    {src:'urara', type:'otf'},
];
function fontsLoad(){
    let id = "font_load_css";
    let existing = document.getElementById(id);
    if(existing) existing.remove();

    let css = Fonts.map(f => {
        let src = `url('assets/fonts/${f.src}.${f.type}')`;
        let weight = f.weight ?? 'normal';
        return `@font-face{
            font-family:'${f.src}';
            src: ${src};
            font-weight: ${weight};
            font-style: normal;
            font-display: swap;
        }`;
    }).join('\n');

    let el = document.createElement('style');
    el.id = id;
    el.type = 'text/css';
    el.appendChild(document.createTextNode(css));
    document.head.appendChild(el);
}
fontsLoad();
//#endregion


//#region Re:connection!!
var webSocket; //ウェブソケット
let comD = document.getElementById("commands");
let comC = {
    texD: comD.querySelector('.text'),
    logD: comD.querySelector('.log'),
    senB: comD.querySelector('.send'),
    sideD: comD.querySelector('.side'),
    SrecD: comD.querySelector('.side .recipe'),
}
let comF = {};
let connecten = 0;

comC.senB.addEventListener('click', () => {
    let message = comC.texD.value;
    nicoText(message);
    sendpyTx(message);
    sendpyTx(`printTx,全次元の覇者・イージス「${message}」`)
})

// サーバとの通信を接続する関数
function connect(){
    webSocket = new WebSocket("ws://localhost:8001"); // インスタンスを作り、サーバと接続
    // 接続したで～～！！
    webSocket.onopen = function(message){
        connecten = 1;
        logadd(`Server connecten。`);
    };

    // 接続、切断...
    webSocket.onclose = function(message){
        connecten = 0;
        logadd("Server Disconnected！！");
        error();
    };

    // エラー発生時の処理
    webSocket.onerror = function(message){
        logadd("errored!! very very errored!!!!");
    };

    let datalist = document.getElementById('select');

    // 受け取ったとき
    webSocket.onmessage = function(message){
        let mes = message.data;
        read(mes);
        nicoText(mes);
        logadd(`Receive => ${mes}`);
        
        if(mes.startsWith('item,pick,')){
            let lis = mes.split(','); //['item', 'pick', name, num];
            let name = lis[2], num = lis[3];
            let data = Items.find(o => o.jpnm == name);
            // console.log(mes, lis, name, num, data);
            if(!data) return console.error(`エラー！${name}のdataがねーぜ！！`);

            let itemD = document.createElement('img');
            itemD.className = 'item';
            itemD.src = `assets/images/items/${data.jpnm}.png`;
            itemD.draggable = false;
            itemD.dataset.item = data.jpnm;
            itemD.dataset.num = num;
            pickItem = itemD;
            inv_pick(0, 0, 0);
        }

        else if(mes.startsWith('js_get,')){
            let lis = mes.split(',');
            let [, name, num] = lis;
            for(let i = 0; i < +num; i++) get(name);
        }
        
        else if(mes.startsWith('sendjs_loadlis_')){
            savF.load(mes.slice(15));
        }

        else if(mes.startsWith('sendpy')) sendpy(mes.slice(7)); // asdasd
        
        else if(mes == 'helasu') inv_pick_decr();

        else if(mes.startsWith('takarabox_')){
            sendpyTx(`create_inventry_${name}_100_100_25_101325_100_111325_-100_None'`)
            //takarabox_${name}_${レア度}
            let [name, rare] = mes.substr(10).split("_")
            let ato = [];
            let data = TakaraNakami.find(a => a.name == `normal_${rare}`);
            for(let i=0; i<data.roll; i++){
                let item = weightedRandom(data.list);
                console.log(`${item}が選ばれたわよ`)
                ato.push(item);
                sendpyTx(`input_item_${name}_50_50_${item}`)
            }
        }

        else if(mes == 'hp_change_'){
            let [,,code, num] = mes.split("_")
            HeaF.updw(code, num??1);
        } 
    };
}

function weightedRandom(obj) {
    const entries = Object.entries(obj);
    const totalWeight = entries.reduce((a, [, w]) => a + w, 0);

    let r = Math.random() * totalWeight;

    for (const [name, weight] of entries) {
        r -= weight;
        if (r <= 0) return name;
    }
    return entries[entries.length - 1][0]; // 念のため保険
}

function logadd(text){
    comC.logD.value += `\n${text}`; // ${random(1000,2900)}-${random(1,12)}-${random(1,31)} ${random(0,23)}:${random(0,59)}:${random(0,59)} INFO
    comC.logD.scrollTop = comC.logD.scrollHeight;
    if(text.includes('endgame')) window.open('about:blank', '_self').close();
};

function sendpy(content){
    let json = JSON.stringify(content);
    logadd(`Send => ${json}}`);
    webSocket.send(json);
};
function sendpyTx(text){
    if(IranMikans[text]) return 0;
    
    logadd(`Send => ${text.replace(/printTx,/g, () => '').replace(/print,/g, () => '')}`);
    if(connecten) webSocket.send(text);
};

comC.apps = [
    {
        name:'endgame',
        func: (e) => {
            sendpyTx('endgame')
        }
    },
    {
        name:'recipe',
        func: (e) => {
            if(e.target)
            comC.SrecD.classList.toggle('tog');
        }
    }
]
for(let app of comC.apps){
    let div = comC.sideD.querySelector(`.co.${app.name} .icon`);
    div.addEventListener('click', app.func);
}


comF.getRecipe = (name) => {
    let tar = comC.crafts.find(a => a.ato[0] == name);
    return tar;
}
comF.takeRecipe = (name) => {
    let tar = comF.getRecipe(name);
    let item = tar.ato[0];
    if(!tar) return console.error(`${name}のレシピは存在しないでゲス`);

    console.log(item);
    get(`${item}のレシピ`);
}

comC.crafts = [];
comF.craLoad = async() => {
    let dats = await fetch('crafts.csv').then(a => a.text());
    if(!dats) return 0;
    let lines = dats.split(/\r?\n/);
    for(let line of lines){
        let [mae, maen, ato, aton, kigu, bio] = line.split(',');
        let shutu = {};
        for(let a of ['mae', 'maen', 'ato', 'aton', 'kigu', 'bio']){
            let res = eval(a).split('|').filter(a => a != '');
            if(a.endsWith('n')) res = res.map(b => b = +b);
            shutu[a] = res;
        }
        comC.crafts.push(shutu);
    }

    console.log(comC.crafts);
    for(let cra of comC.crafts){
        let tar = cra.ato[0];
        let div = document.createElement('div');
        div.className = 'craf';

        let img = document.createElement('img');
        img.src = `assets/images/items/${tar}.png`;
        div.appendChild(img);

        let lavel = document.createElement('div');
        lavel.className = 'lavel';
        lavel.textContent = tar;
        div.appendChild(lavel);

        comC.SrecD.appendChild(div);
    }
}
//#endregion

//#region save
let savD = document.getElementById('save');
let savC = {
    tog: 0,
    arr: [],
    page: 1,
}
let savF = {};

savF.open = async function(){
    savC.tog = 1;
    savD.classList.add('open');

    await delay(1000);
    savD.classList.add('tog');
    savD.classList.remove('open');
}

savF.clos = async function(){
    savC.tog = 0;
    savD.classList.add('clos');

    await delay(1000);
    savD.classList.remove('tog');
    savD.classList.remove('clos');
}

savF.load = (moz) => {
    console.log(moz)
    let arr = moz.split(',').filter(a => a != '' && a != undefined && a != null && isNaN(a));
    console.log(arr)
    savC.arr = [];
    
    for(let nani of arr) savC.arr.push(nani);

    console.log(savC.arr);

    savF.yomikomi();
    savF.yomikomi2();
}

savF.yomikomi = () => {
    console.log('yomikomi now')
    savC.arr.sort((a,b) => a - b);
    let last = +savC.arr.at(-1) + 1;

    let max = Math.ceil(last / 4)

    savC.page = max;

    for(let i = 0; i < max*4; i++){
        let div = document.createElement('div');
        div.className = 'youso';

        let lavel = document.createElement('div');
        lavel.className = 'lavel';
        lavel.textContent = `No. ${i}`;
        div.appendChild(lavel);

        //この辺のUIはあのゲームの文字をか&#%$参考にしてくれ
        // アニメーションとかも録画して
    }

    
    // savF.open()
}

savF.dele = async function(){
    let ok = 0;

    let lis = [
        ['ほんとうに セーブデータを 削除しますか？', '#ffab91'],
        ['えまじ？？いいの？？？','#a82700'],
        ['やるんだな？？\n今！！ここで！！！！','#fed0c1']
    ]
    
    for(let l of lis){
        let [text, iro] = l;
        
        let mono = new tk('t', 'half', 'half', window.innerWidth/2, 300);
        mono.classAdd('mostop')
        mono.styleAdd({background: iro});
        mono.evAdd('click', () => {
            ok = 1;
            mono.remove();
        });

        let XD = new tk('div', '80%', 'half', 50, 50);
        XD.classAdd('saveXD');
        XD.classAdd('mostop');
        XD.styleAdd({textAlign: 'right'});
        XD.youso.innerText = 'x';
        XD.evAdd('click', () => {
            addtext('ふん..臆したか....');
            return;
        });

        let span = new tk('div', 'half', 'half', window.innerWidth/2, 100);
        if(iro == '#fed0c1') span.classAdd('color-red'), span.styleAdd({fontSize: '32px'});
        span.styleAdd({textAlign: 'center'});
        span.youso.innerText = text;

        mono.youso.appendChild(span.youso);

        mono.append();
        XD.append();
        while(!ok) await delay(10);

        ok = 0;
    }

    // 消すわよ～～ん♡♡
    let name = titC.selD.value;
    if(!name) return addtext('寝言はセーブしてから言おうねっ！');
    sendpyTx(`rem_save_${name}`);
}

//꒰𑁬⎛ಲළ൭⎞໒꒱
let datalist = document.getElementById('select');
savF.yomikomi2 = () => {
    console.log('yomikomi2 now')
    datalist.innerHTML = '';
    console.log(savC.arr)
    for(let i=0; i<savC.arr.length; i++){
        let name = savC.arr[i];
        // datalist.options.add(new Option('Orange', 'orange'));
        let opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        datalist.appendChild(opt);  
    }
}


savF.saveR = (num) => {
    // let num = titC.selD.selectedIndex;
    // let name = titC.selD.options[num].textContent;

    sendpyTx(`rem_save_${num}`);
    savC.num = num;
}
//#endregion

//#region reads
let allScripts = {};
async function loadScriptFile(src, code = 0){
    let url = 0;
    if(!code) url = `assets/txts/${src}.txt`;
    if(code == 1) url = `${src}.txt`;
    console.log(url);
    const res = await fetch(url);

    const text = await res.text();
    const lines = text.split(/\r?\n/);

    let currentSection = null;
    let sections = {};

    for(let line of lines){
        line = line.trim();
        if(line == '' || line.startsWith('//')) continue;

        if(line.startsWith('@')){
            currentSection = line.slice(1).trim();
            sections[currentSection] = [];
            continue;
        }

        if(currentSection){
            sections[currentSection].push(line);
        }
    }

    allScripts[src] = sections

    return sections;
}


const context = {};
let readed = [];
let nowread = '';
async function execute(src, event){
    let section = allScripts[src][event];
    if(!section) await loadScriptFile(src), execute(src, event);

    nowread = [src, event];
    await read(section, 'arrayed');
}
async function read(gen, type = 'organic'){
    // logadd(`原材料: ${gen}`)
    if(type == 'organic') readed.push(gen);
    if(type == 'arrayed') readed.push(gen.join('\n'));

    let bunkatsu = gen;
    if(type == 'organic') bunkatsu = gen.split('\n'); // "\n" で分割

    const stack = []; // 制御構文のネスト追跡
    let skip = false; // 現在この行を無視すべきか？

    // continueされた == その行は飛ばされた, 処理が終了した
    for(let moto of bunkatsu){
        // console.log(stack)

        let raw = moto.trim().split(','); // "," で分割
        if(raw.length == 0) continue;
        
        // console.log('↓↓↓↓↓')
        let line = raw.map(token => revision(token)).filter(Boolean); //全要素をrevisionしつつ、空要素を取り除く

        for(i = 0; i < line.length; i++){
            let le = line[i];
            if(typeof le != 'string' && typeof le != 'number'){
                //array または object)
                if(le instanceof Array){
                    let num = le.length;
                    if(num == 0) line.splice(i, 1); // 空の配列は削除

                    line.splice(i, 1);  

                    for(let i2 = 0; i2 < num; i2++){
                        line.splice(i + i2, 0, revision(le[i2]));
                    }
                    continue;
                }

                if(le instanceof Object){
                    // console.log(line)
                    console.error('さすがにエラー...もっかい↑これ↑、確認して？')
                }
            }
        }
        // console.log('↑↑↑↑↑')

        let cmd = line[0]

        if(cmd == 'if'){
            let [, left, operator, right] = line;
            let condition = false;
            switch(operator){
                case '==': condition =  left ==  right; break;
                case '===':condition = +left == +right; break;
                case '!=': condition =  left !=  right; break;
                case '!==':condition = +left != +right; break;
                case '<':  condition = +left <  +right; break;
                case '>':  condition = +left >  +right; break;
                case '<=': condition = +left <= +right; break;
                case '>=': condition = +left >= +right; break;
                default: console.error(`演算子${operator}は使えませんわ〜〜〜！！`);
            }
            console.log(`if:: (${left} ${operator} ${right}) => ${condition}`);

            stack.push(condition);
            skip = !condition;
            continue;
        }
        
        if(cmd == 'else'){ //ifの逆、もしくはnotで処理を。不必須
            if(stack.length == 0) console.error('ifがないのにelseされてるっす、先輩！！');
            const prev = stack[stack.length - 1];
            skip = prev; // 逆にする
            continue;
        }

        if(cmd == 'edif'){ //ifを終わらせる。必須
            if(stack.length == 0) console.error('ifがないのにedifされてるっす、先輩！！');
            stack.pop();
            skip = stack.some(val => !val); // ネスト内に1つでもfalseあればskip続行
            continue;
        }

        if(skip) continue;

        // logadd(`一行～${line}`);
        let res = await enter(line);
        if(res == 'continue') continue;
        if(res == 'break') break;
    }
}
async function enter(line){
    switch(line[0]){
        case '終了':{
            return 'break';
        }

        case 'イベント実行':{
            let [, name] = line;
            let src = nowread[0];
            execute(src, name);
            break;
        }

        case 'log':{
            let [, text] = line;
            logadd(text); //python用
            break;
        }

        case 'nico':{
            let [, text] = line;
            nicoText(text);//右から左にメッセージが横切っていく、って感じの関数。ロード完了とかを表示する予定
            break;
        };
        
        case '変数':{ 
            // 変数,変数名,値
            let [, name, value, value2] = line;
            console.log(`変数:: ${name} ${value} ${value2}`);

            if(value2){
                switch(value){
                    case '=' : context[name]  =  value2; break;
                    case '+=': context[name] += +value2; break;
                    case '-=': context[name] -= +value2; break;
                    case '*=': context[name] *= +value2; break;
                    case '/=': context[name] /= +value2; break;
                }
                console.log(`            => ${context[name]}`);
            }else{
                context[name] = value;
            }
            break;
        };

        case '乱数生成':{
            let [, min, max] = line.map(Number);
            let num = random(min, max);
            console.log(`乱数生成:: ${min}～${max} => ${num}`);
            context['乱数'] = num;
            break;
        };

        case '攻撃タイプランダム変更':{
            let [, ...arr] = line;
            context['攻撃タイプ'] = arraySelect(arr);
            break;
        }

        case 'ログ追加':{ // 3ダメージを受けた！ みたいなセリフじゃないけど表示はしたいやつみたいな
            let [, text] = line;
            addlog(text);
            break;
        };

        case '話者変更':{
        let [, name] = line;
        context['話者'] = name;
        break;
        };

        case 'セリフ':{
        let [, text] = line;
        await addtext(`${context['話者']}「${text}」`);
        console.log(`セリフ:: ${context['話者']}「${text}」`)
        break;
        };
        
        case 'サウンド':{ //currentTime = 0要らん気がしてきた 連発の可能性あるし
            let [, name] = line;
            if(!sounds[name]) return console.error(`サウンド"${name}"がありませんぜ not existってやつだね`);
            soundPlay(name);
            break;
        };
    }
}

function revision(moto){
    let after = moto.trim();

    if(after == '') return after;

    //数字またはなんか変なやつならばそのままお返し申す
    if(typeof after !== 'string'){
        //array または object)
        if(after instanceof Array){
            return after.map(revision);
        }
        if(after instanceof Object){
            return Object.fromEntries(Object.entries(after).map(([k, v]) => [k, revision(v)]));
        }

        return after;
    }

    // %%パンは['変数', 'パン']に置換 
    if (after.startsWith('%%')){
        // return ['変数', after.slice(2)].flat();
        return ['変数', after.slice(2)];
    }

    // %パンはcontext['パン']に置換
    if (after.startsWith('%') && !after.startsWith('%{')){
        return context[after.slice(1)];
    }

    // 文字列内の%{パン}はcontext['パン']に置換
    return after.replace(/\%{(.*?)}/g, (_, v) => context[v] ?? '');
}
//#endregion

//#region titleArea

// const selectSport = document.getElementById("pul");
let titD = document.getElementById('titleArea');
let titC = {
    newD: titD.querySelector('.buttons .new'),
    loaD: titD.querySelector('.buttons .load'),
    delD: titD.querySelector('.buttons .delload'),
    selD: titD.querySelector('.buttons input.pul'),
    savD_h: titD.querySelector(".buttons .save_h"),
    selD_focD: titD.querySelector(".buttons .focus.input"),
    setD: titD.querySelector('.bt.set')
}
let titF = {}

titF.new = () => {
    titD.classList.add('hidden');
}
titC.newD.addEventListener('click', titF.new);

titF.load = () => {
    let name = titC.selD.value;
    sendpyTx(`load_js_${name}`)
    // sendpyTx("get_savedataname");
}
titC.loaD.addEventListener('click', titF.load);

titC.savD_h.addEventListener("click", () => {
    let moz = inv_save_to();
    sendpyTx(`save_js_${titC.selD.value}_${moz}`);
});

titF.focusInput = async() => {
    let div = titC.selD_focD;
    let tdiv = titC.selD;
    
    let [tx, ty] = [tdiv.offsetLeft - 50, tdiv.offsetTop + 25];
    let [nx, ny] = [tx - 300, ty + 100]
    div.style.left = `${nx}px`;
    div.style.top = `${ny}px`;
    div.classList.add('appe');
    await delay(100)
    
    div.style.left = `${tx}px`;
    div.style.top = `${ty}px`;
}
titF.focusInputRem = async() => {
    let div = titC.selD_focD;

    let [tx, ty] = [window.innerWidth+200, -200];
    div.style.left = `${tx}px`;
    div.style.top = `${ty}px`;

    await delay(500)
    div.classList.remove('appe');
}
titC.selD_focD.addEventListener('mouseover', titF.focusInputRem);

//꒰𑁬⎛ಲළ൭⎞໒꒱
titC.selD.addEventListener('mouseover', () => {
    if(!loop) return
    sendpyTx('get_savedataname');
})
titC.delD.addEventListener('click', async() => {
    await savF.dele();
});

titC.setD.addEventListener('click',() => {
    undF.open()
})

//#endregion titleArea

//#region ビッグマシュマロ（唐突）
let bigmmD = document.getElementById('bigmashmaro');
let bigmmC = {
    kitekeyD: bigmmD.querySelector('.kitekey'),
    bodyD:bigmmD.querySelector('.bodies'),
    subD:bigmmD.querySelector('.sub'),
    jougeD:bigmmD.querySelector('.jouge'),
}
bigmmC.kitekeyD.addEventListener('click', async function(){
    bigmmC.kitekeyD.classList.toggle('tap');
    bigmmC.bodyD.classList.toggle('tap');
    bigmmC.subD.classList.toggle('tap');
    bigmmC.jougeD.classList.toggle('tap');

    let gen = bigmmC.bodyD.value.trim('');
    bigmmC.bodyD.value = '';
    if(gen == '') return;
    
    if(gen.startsWith('execute,')){
        [, wanchan, wanchan2] = gen.split(',');
        if(allScripts[wanchan]) await read(allScripts[wanchan][wanchan2], 'arrayed');
        else read(gen)
    }

    if(gen.startsWith('loadfile,')){
        [, src, name] = gen.split(',');
        await loadScriptFile(src);
        read(allScripts[src][name], 'arrayed');
    };
})
bigmmC.subL = [
    {
        name:'make inv',
        disp:'makeInv',
        func: async function(){
            sendpyTx('printTx,脳2に接続しています....')
            sendpyTx('create_inventry_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ_400_400_200_101325_9000_1013250_-3000_craft-table');
            sendpyTx('open_inventry_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ');
            sendpyTx('create_inventry_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ2_400_400_200_101325_9000_1013250_-3000_craft-table');
            sendpyTx('open_inventry_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ2');
            sendpyTx('make_paip_a_100');
            sendpyTx('connect_a_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ_0')
            sendpyTx('connect_a_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ2_0');
        }
    },
    {
        name: 'give me water',
        disp: 'Qoo! water is delisious!!', //くぅ～っ！水がうめぇ！！
        func: () => {for(let i = 0; i < 99; i++) get('water')}
    },
    {
        name:'give me stone',
        disp:'ishiwo kudasai',
        func: () => {for(let i = 0; i < 99; i++) get('log'), get('plank')}
    },
    {
        name:'nenryo denchi sha',
        disp:'sanso and suiso wo toridasu',
        func: () => {for(let i = 0; i < 99; i++) get('suiso'), get('sanso')}
    },
    {
        name:'save',
        desp:'save',
        func: () => {
            let moz = inv_save_to();
            sendpyTx(`save_js_0_${moz}`);
        }
    },
    {
        name:'0%0%0%',
        desp:'0%0%0%',
        func: () => {
            sendpyTx('rem_save_0');
        }
    }
];
for(let s of bigmmC.subL){
    let sD = document.createElement('div');
    sD.className = 's';
    sD.textContent = s.disp;
    sD.addEventListener('click', async function(){
        s.func();
    });
    bigmmC.subD.appendChild(sD);
}

/*
<div class="j heat">
    <div class="un"></div>
    <div class="do"></div>
    <div class="troa"></div>
</div>
*/
bigmmC.jougeL = [
    {
        name:'heat',
        num:20,
        img:'thermometer'
    },
    {
        name:'pressure',
        num:3000,
        img:'pressuregauge_pre'
    }
];
for(let j of bigmmC.jougeL){
    let jD = document.createElement('div');
    jD.className = `j ${j.name}`;
    
    let ageF = () => {sendpyTx(`${j.name}_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ_${+j.num}`)};
    let sgeF = () => {sendpyTx(`${j.name}_きみのぜんぜんぜんせかいぼっくぁきみをさがしはじめたよ～はっ_${-j.num}`)};
    let resF = () => {clearInterval(holdIn), clearTimeout(holdTi)};
    let holdTi, holdIn;

    let unD = document.createElement('div');
    unD.className = 'un';
    unD.addEventListener('mousedown', async function(){
        ageF();

        holdTi = setTimeout(() => {
            holdIn = setInterval(async function(){
                ageF();
            }, 50);
        }, 750);
    });
    unD.addEventListener('mouseup', resF);
    unD.addEventListener('mouseleave', resF);
    jD.appendChild(unD);
    
    let doD = document.createElement('div');
    doD.className = 'do';
    let img = document.createElement('img');
    img.src = `assets/images/systems/${j.img}_big.png`;
    doD.appendChild(img);
    jD.appendChild(doD);

    let troaD = document.createElement('div');
    troaD.className = 'troa';
    troaD.addEventListener('mousedown', async function(){
        sgeF();

        holdTi = setTimeout(() => {
            holdIn = setInterval(async function(){
                sgeF();
            }, 100);
        }, 750);
    });
    troaD.addEventListener('mouseup', resF);
    troaD.addEventListener('mouseleave', resF);
    jD.appendChild(troaD);

    bigmmC.jougeD.appendChild(jD);
}

//#endregion bigmashmaro

//#region sideL
let sideLD = document.getElementById('sideL');
let sideLC = {
    open:0,
    gararaD:sideLD.querySelector('.garara'),
}
let sideLF = {};

sideLC.list = [
    {
        name:'setting',
        img:'teethcar', // == 歯車
        func: () => {
            sideLF.toggle();
            undF.open()
        }
    },
    {
        name:'achievement',
        img:'achieve',
        func: () => {
            sideLF.toggle();
            achF.tog()
        }
    },
    {
        name:'dummy!',
        img:'gacha',
        func: () => {
            sideLF.toggle();
            gacF.tog();
        }
    },
    {
        name:'dummy!!',
        img:'gamble',
        func: () => {
            sideLF.toggle();
            gamF.tog();
        }
    },
]

sideLF.toggle = async function(){
    sideLC.open = sideLC.open ? 0 : 1;
    sideLD.classList.toggle('tog');
}
sideLC.gararaD.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if(sideLC.open) sideLF.toggle();
    log_open('o');
});
sideLC.gararaD.addEventListener('click', (e) => {
    if(e.button == 2) return;
    sideLF.toggle();
});

sideLF.load = () => {
    for(let ic of sideLC.list){
        let D = document.createElement('div');
        D.className = 'ic';
        D.addEventListener('click', ic.func);

        let srb = `assets/images/systems/${ic.img}_b.png`;
        let src = `assets/images/systems/${ic.img}.png`;
        let img = document.createElement('img');
        img.src = srb;
        D.appendChild(img);
        img.addEventListener('mouseover',() => {img.src = src});
        img.addEventListener('mouseout', () => {img.src = srb});

        sideLD.appendChild(D);
    }
}


//#endregion

//#region ________
let undD = document.getElementById('underBar'); //地下のbar(酒屋)
let undC = {
    open:0,
    checkD:undD.querySelector('.checks'),
    checking:{},
    sliD:undD.querySelector('.slider'),
    fooD:undD.querySelector('.footer'),
}
let undF = {};

undF.open = () => {
    undC.open = 0.5;
    undD.classList.add('tog');

    setTimeout(() => {
        undC.open = 1;
    }, 1000)
}
undF.clos = () => {
    undC.open = 0;
    undD.classList.remove('tog');
}
document.addEventListener('click', (e) => {
    if(undC.open != 1) return;
    if(!undD.contains(e.target)){
        undF.clos();
    }
});

undC.checks = [
    // [名前, 初期値]
    {
        name:'emozi',
        kitei:0,
        pro:2,
        func: () => {
            let Emozis = [`^~^`,`uwu`,`owo`,`;~;`,`$w$`,`┐o_o┌`,];
            let emozi = arraySelect(Emozis);
            logadd(`??? => ${emozi}`);
        }
    },
    {
        name:'follow',
        kitei:0,
        pro:10,
        func: () => {
            makeNotice();
        }
    },
    {
        name:'rabbit',
        kitei:0,
        pro:1,
        func: () => {
            setRabbit();
        }
    }
]

undC.slids = [
    {
        name:'sound',
        jpnm:'音量',
        shoki:50,
    },
    {
        name:'joiee',
        jpnm:'ねこ',
        shoki:50,
    },
    {
        name:'torys',
        jpnm:'とり',
        shoki:50,
    },
    {
        name:'kizys',
        jpnm:'きじ',
        shoki:50,
    },
]

undF.load = () => {
    for(let ch of undC.checks){
        let div = document.createElement('div');
        div.className = 'check';
        div.dataset.cl = ch.kitei ? 0 : 1;

        function clcl(){
            if(div.dataset.cl == 1) div.dataset.cl = 0;
            else div.dataset.cl = 1;
            undC.checking[ch.name] = div.dataset.cl;

            if(div.dataset.cl == 1) div.classList.add('tog');
            else div.classList.remove('tog');
        }
        div.addEventListener('click', clcl);

        let span = document.createElement('div');
        span.className = 'span';
        span.textContent = ch.name;
        div.appendChild(span);



        undC.checkD.appendChild(div);

        undC.checking[ch.name] = ch.kitei ? 0 : 1;
        clcl();
    }

    for(let slid of undC.slids){
        let div = document.createElement('div');
        div.className = `slid ${slid.name}`;
        
        let text = document.createElement('div');
        text.className = 'label';
        text.textContent = `${slid.jpnm}:`;
        div.appendChild(text);
        
        let range = document.createElement('input')
        range.type = "range"
        range.min = 0;
        range.max = 100;
        range.value = 50;
        range.step = 1;
        range.addEventListener('input', (e) => {
            switch(slid.name){
                case 'sound':
                    soundVolume(e.target.value);
                    break;
                default:
                    break;
            }
        })
        div.appendChild(range);

        undC.sliD.appendChild(div)
    }

    for(let foot of undC.foots){
        let div = document.createElement('div');
        div.className = `youso ${foot.name}`;
        div.addEventListener('click', foot.func);

        let img = document.createElement('img');
        img.src = `assets/images/systems/${foot.img}.png`;
        div.appendChild(img);

        div.addEventListener('mouseover', () => img.src = `assets/images/systems/${foot.img}_red.png`);
        div.addEventListener('mouseout', () => img.src = `assets/images/systems/${foot.img}.png`);

        undC.fooD.appendChild(div);
    }
}


undF.exit = () => {
    undF.clos();
    titD.classList.remove('hidden');
}

undC.foots = [
    {
        name:'exit',
        img: 'export',
        func:() => {
            undF.exit();
        }
    },
    {
        name:'del_save',
        img: 'delete',
        func:async () => {
            await savF.dele();
            undF.exit();
        }
    }
]
//#endregion

//#region achieve
let achD = document.getElementById('achieve');
let achC = {
    tog: 0,
}
let achF = {};

achF.tog = () => {
    achD.classList.toggle('tog');
}

//#endregion

//#region rainbow
let rainB = document.querySelector('#rainbt');
let rainC = {
    tapend: 0
}
rainB.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    let f = 0;
    if(rainC.tapend) f = 1, rainC.tapend = 0;
                else f = 0, rainC.tapend = 1;

    document.querySelectorAll('*').forEach(el => {
        if(f) el.classList.remove('rainback');
        if(!f) el.classList.add('rainback');
    });
});
//#endregion rainbow

//#region 金だ、金を持ってこい
let euro = 0;
let euroD = document.querySelector('#gamble .euro');
let euroF = {};
euroF.tekiou = () => {
    euroD.textContent = `${euro}€`;
}
euroF.add = (num) => {
    // - も対応
    euro += num;
    euroF.tekiou();
}
euroF.set = (num) => {
    euro = num;
    euroF.tekiou();
}
//#endregion

//#region インベン
let invD = document.querySelector('#inventory');
let invC = {
    openD: invD.querySelector('.opener'),
    areaD: invD.querySelector('.area'),
    tog:0
}
function inv_open(code = NaN){
    invD.classList.toggle('tog');
    invC.tog = !invC.tog;

    if(code == 1) invD.classList.add('tog');
    if(code == 0) invD.classList.remove('tog');
    if(!isNaN(code)) invC.tog = code;

}
invC.openD.addEventListener('click', inv_open);
invC.openD.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    connect();
});

function inv_make(){
    for(let i = 0; i < 5; i++){
        for(let i2 = 0; i2 < 9; i2++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.index = `c${+`${i}${i2}`}`;
            invC.areaD.appendChild(cell);
        }
    };
}
function get(item, yx = 'no', appe = 1){
    console.log(`get:: ${item} at ${yx}`);
    // console.log(item)
    let isrecipe = 0;
    if(!item) return nicoText('アイテム名を指定してください');
    let data = Items.find(o => o.name == item);

    if(item.endsWith('のレシピ')){
        isrecipe = 1;
        data = Items.find(o => o.name == 'recipe');
    }
    // console.log(data)
    // console.log(data)

    let cell = [...invC.areaD.querySelectorAll('.cell')].find(c => c.dataset.item == data.jpnm && +c.dataset.num < 99);
    
    let wairo = 0;

    let sitey = invC.areaD.querySelector(`.cell.c${yx}`);
    if(sitey){
        if(sitey.dataset.item != item) wairo = 1;

        else{
            sitey.dataset.num = (+sitey.dataset.num + 1).toString();
            inv_tekiou();
            if(appe) nicoText(`${item}を手に入れた`)
        }
    }
    
    if(!cell || wairo){
        cell = [...invC.areaD.querySelectorAll('.cell')].find(c => !c.dataset.item);

        if(yx != 'no') cell = invC.areaD.querySelector(`.cell.c${yx}`);
        if(!cell) return nicoText('インベントリがいっぱいです');

        let itemD = document.createElement('img');
        itemD.className = 'item';
        itemD.src = `assets/images/items/${data.jpnm}.png`;
        itemD.draggable = false;
        itemD.dataset.item = data.jpnm;
        itemD.dataset.description = data.jpnm;
        if(isrecipe) itemD.dataset.description = item;

        cell.innerHTML = '';
        cell.appendChild(itemD);
        cell.dataset.item = data.jpnm;
        cell.dataset.num = 1;
    }
    else{

        if(yx != 'no') cell = sitey;

        cell.dataset.num = (+cell.dataset.num + 1).toString();
    }

    inv_tekiou();
    if(appe) nicoText(`${item}を手に入れた`)
}
function inv_get(index){
    if(index < 0) return console.error('そのインデックスは存在しません');
    if(index >= invC.areaD.children.length) return {name:'', num:0};
}
function inv_data(name = null){
    let data = {};
    for(let cell of invC.areaD.children){
        if(!cell.dataset.item) continue;
        data[cell.dataset.item] = +cell.dataset.num;
    }
    if(name) data = data[name];
    return data
}
function inv_save_to(){
    // join と splitを、"|"で
    /*
    inv = [
        [01,椎名,4]
    ]
    */

    //dataset.indexの例 -> c23, c1

    let zen = [];
    for(let cell of invC.areaD.children){
        if(!cell.dataset.item) continue;

        let index = cell.dataset.index.slice(1);
        let x = index.slice(1);
        let y = index.slice(0, 1);
        if(!x) x = index.slice(0, 1), y = 0;
        
        let num = +cell.dataset.num;
        let name = cell.dataset.item;

        let moz = `${y}${x},${name},${num}`;
        zen.push(moz);
    }
    let ato = zen.join('|');

    console.log(ato);

    return ato;
}

function inv_save_from(moz){
    //'00,メブラの丸太,3|01, 椎名, 3|02, 棒, 2'
    let zen = moz.split('|');

    //[['00,メブラの丸太,3'],['01,椎名,3'],['02,棒,2']]
    for(let arr0 of zen){
        let arr = arr0.split(',');
        
        //['00','メブラの丸太','3']
        let [yx, name, num] = arr;
        for(let i = 0; i < num; i++){
            get(name, yx, 0);
        }
    }
    
}

function inv_tekiou(){
    let arr = Array.from(invC.areaD.children);
    arr.push(document.querySelector('#salen .cell'));

    for(let cell of arr){
        if(!cell.dataset.num && !cell.dataset.item) cell.innerHTML = '';
        if(!cell.dataset.item) continue;
        let num = +cell.dataset.num;
        let counter = cell.querySelector('.num');

        if(num <= 1){
            if(counter) counter.remove()
        }else{
            if(!counter){
                counter = document.createElement('div');
                counter.className = 'num';
                cell.appendChild(counter);
            }
            counter.textContent = num;
        }
    }
}

function inv_nearCell(mouseX, mouseY) {
    let cells = document.querySelectorAll('.cell');
    let nearest = null;
    let minDist = Infinity;
    cells.forEach(cell => {
        let rect = cell.getBoundingClientRect();
        let cx = rect.left + rect.width / 2;
        let cy = rect.top + rect.height / 2;
        let dx = mouseX - cx;
        let dy = mouseY - cy;
        let dist = dx*dx + dy*dy; // sqrt不要、二乗距離で十分
        if(dist < minDist){
            minDist = dist;
            nearest = cell;
        }
    });
    return nearest;
}

let css = getComputedStyle(document.documentElement);

let pickItem = null;
document.addEventListener('click', e => {
    // セルの中の item をクリックした場合
    if(e.target.classList.contains('item')){
        let cell = e.target.parentElement;

        // まだアイテムを持ってない場合 → 持ち上げ
        if(!pickItem){
            pickItem = e.target;
            let num = cell.dataset.num;
            if(num) pickItem.dataset.num = num, cell.querySelector('.num')?.remove();
            delete cell.dataset.item;
            delete cell.dataset.num;
            inv_pick(cell, e.pageX, e.pageY);
            return;
        }

        // 既に pickItem を持っている場合 → 交換処理
        if(pickItem){
            let pickItem2 = e.target;
            let cell2 = pickItem2.parentElement;
            let pickItem2Ref = pickItem2;
            inv_ock(cell2)
            let motopickItem = pickItem;
            let mwid = motopickItem.offsetWidth, mhei = motopickItem.offsetHeight;
            pickItem = pickItem2Ref;
            pickItem.style.width = mwid;
            pickItem.style.height = mhei;
            inv_pick(cell2, e.pageX, e.pageY);

            inv_tekiou();
            return;
        }
    }

    // 空セルクリックしたら置くだけ
    if(pickItem && e.target.classList.contains('cell')){
        let cell = e.target;
        if(!cell.dataset.item){
            inv_ock(cell)
            pickItem = null;
            inv_tekiou();

            if(cell.classList.contains('salen')) salF.ocked()
        }
    }
});
function inv_pick(cell, px, py){
    let rowG = +css.getPropertyValue('--inv_rowG').slice(0,1); //if2桁、変えろここ
    let colG = +css.getPropertyValue('--inv_colG').slice(0,1);
    let wid = (invD.offsetWidth*98/100 - colG*8)/9;
    let hei = (invD.offsetHeight*98/100 -rowG*4)/5;
    // console.log(wid, hei);
    pickItem.style.width = wid + 'px';
    pickItem.style.height = hei + 'px';
    pickItem.style.position = 'absolute';
    pickItem.style.left = px - pickItem.offsetWidth/2 + 'px';
    pickItem.style.top = py - pickItem.offsetHeight/2 + 'px';
    pickItem.style.display = 'block';
    pickItem.style.opacity = 1;
    document.body.appendChild(pickItem);
    pickItem.style.pointerEvents = 'none';

    let name = pickItem.dataset.item;
    let num = pickItem.dataset.num || 1;
    
    sendpyTx(`item_pick_${name}_${num}`);
}
function inv_ock(cell){
    pickItem.style = '';
    pickItem.style.pointerEvents = '';
    cell.innerHTML = '';
    cell.appendChild(pickItem);
    cell.dataset.item = pickItem.dataset.item;
    cell.dataset.num = pickItem.dataset.num || 1;

    let name = pickItem.dataset.item
    let num = pickItem.dataset.num || 1;
    
    sendpyTx(`item_ock_${name}_${num}`);
}

function inv_pick_decr(){
    pickItem.dataset.num -= 1;
    if(pickItem.dataset.num == 0){
        pickItem.remove();
        pickItem = null;
        sendpyTx('item_shositu');
    }
}

document.addEventListener('mousemove', e => {
    if(pickItem){
        pickItem.style.opacity = 1;
        pickItem.style.left = e.pageX - pickItem.offsetWidth/2 + 'px';
        pickItem.style.top  = e.pageY - pickItem.offsetHeight/2 + 'px';
        inv_tekiou();
    }
});
document.addEventListener('mouseleave', () => {
    if(pickItem) pickItem.style.opacity = 0;
})




//#endregion イシイ

//#region Blue Hearts

let HeaD = document.getElementById('health');
let HeaC = {
    barD: HeaD.querySelector('.bar'),
    max: 20,
    now: 20
}
let HeaF = {};

HeaF.load = () => {
    for(let i = 0; i < 10; i++){
        let img = document.createElement('img');
        img.src = 'assets/images/systems/heart.png';
        HeaC.barD.appendChild(img);
    }
    HeaF.tekiou();
}

HeaF.tekiou = () => {
    HeaC.barD.innerHTML = '';
    let max = HeaC.max;
    let now = HeaC.now;
    // nowを2で割って、商をval, 余りをsoloとする。でvalはheart。soloがあるかないかはわからない。数が奇数ならあり、偶数ならなし。soloがあるならば、最後のハートはheart_cakeになる。また、nowがmaxを超えることもある。その場合は超えた分はheart_exになる。heart_exかつ奇数かつ最後ならばheart_ex_cakeになる。

    let val = Math.floor(now/2);
    let solo = now%2;
    let hearts = val+solo;
    let maxHs = Math.ceil(max/2);
    let outHs = hearts - maxHs;
     if(outHs < 0) outHs = 0;
    let innHs = hearts - outHs;
    
    for(let i=0; i<hearts; i++){
        let src = "heart";
        let ex = innHs <= i;
        let cake = solo && i == hearts-1;

        if(ex) src += "_ex";
        if(cake) src += "_cake";

        let img = document.createElement('img');
        img.src = `assets/images/systems/${src}.png`;
        HeaC.barD.appendChild(img);
    }

    if(hearts > 50) HeaD.classList.add('oo');
    else HeaD.classList.remove('oo');
    if(hearts > 100) HeaD.classList.add('oo2');
    else HeaD.classList.remove('oo2');
}

HeaF.updw = (code, num = 1, nani = "now") => {
    if(code == '-') num *= -1;
    HeaC[nani] += num;
    if(code == "=") HeaC[nani] = num;
    if(HeaC.now < 1) HeaC[nani] = 1;
    // 上限は超えても良いものとする。

    HeaF.tekiou();
}

//#endregion

//#region 売るところ
let salD = document.getElementById('salen');
let salC = {
    open: 0,
    bai: 5,
    nedan: 0,
    yaziruD: salD.querySelector('.yazirushi'),
    payD: salD.querySelector('.payout'),
    euroD: salD.querySelector('.payout .euro'),
    XD: salD.querySelector('.x')
}
let salF = {};

salF.open = () => {
    salC.open = fl(salC.open); //flip
    salD.classList.toggle('tog');
}
euroD.addEventListener('click', salF.open);
salF.clos = () => {
    salC.open = 0;
    salD.classList.remove('tog');
}
salC.XD.addEventListener('click', salF.clos);

salF.ocked = () => {
    let cell = salD.querySelector('.cell');
    let item = cell.dataset.item;
    let num = +cell.dataset.num;

    let data = Items.find(o => o.jpnm == item);
    if(!data) return console.error(`${item} ←これ、存在してないらしいっすよ〜？`);
    let price = data.price * num * salC.bai;

    salC.euroD.textContent = price;
}

salF.pay = () => {
    let cell = salD.querySelector('.cell');
    if(!cell.dataset.item) return nicoText('売るものがありません');
    let item = cell.dataset.item;
    let num = +cell.dataset.num;

    let data = Items.find(o => o.jpnm == item);
    if(!data) return console.error(`${item} ←これ、存在してないらしいっすよ〜？`);
    let price = data.price * num * salC.bai;

    euroF.add(price);
    nicoText(`${item}を${num}個、全部で${price}€で売りました`);
    soundPlay("money")

    salC.euroD.textContent = '0';

    cell.innerHTML = '';
    delete cell.dataset.item;
    delete cell.dataset.num;
    inv_tekiou();
}
salC.payD.addEventListener('click', salF.pay);
//#endregion

//#region ギャンブル/syudou
let gamD = document.getElementById('gamble');
let gamC = {
    open: 0,
    now: 'loby',
    moving: 0,
    togD: gamD.querySelector('.opener'),
    lobyD: gamD.querySelector('.loby'),
    blaD: gamD.querySelector('.blacky'),
    rouD: gamD.querySelector('.roulette'),
}
gamC.basyos = [
    {
        name:'loby',
        can:1
    },
    {
        name:'blacky', //blackjack
        can:1
    },
    {
        name:'roulette',
        can:0
    }
]
let gamF = {};

gamF.tog = () => {
    gamC.open = fl(gamC.open);
    gamD.classList.toggle('tog');
}
gamC.togD.addEventListener('click', gamF.tog);

gamF.load = () => {
    gamC.now = 'loby';

    for(let gam of gamC.basyos){
        let div = document.createElement('div');
        div.className = `bt ${gam.name}`;
        
        let text = document.createElement('div');
        text.className = 'text';
        text.textContent = gam.name;
        div.appendChild(text);

        let img = document.createElement('img');
        // img.src = `assets/images/systems/${gam.name}.png`;
        img.src = `assets/images/systems/error.png`;
        div.appendChild(img);

        gamC.lobyD.querySelector('.row').appendChild(div);
    }
}



gamF.move = async function(to){
    if(gamC.moving) return;
    
    let from = gamC.now;
    if(from == to) return;

    gamC.moving = 1;

    let fromD = gamD.querySelector(`.${from}`);
    let toD = gamD.querySelector(`.${to}`);

    fromD.classList.remove('tog');
    fromD.classList.add('mae');
    toD.classList.add('ato');
    
    await delay(50);
    fromD.classList.add('go');
    toD.classList.add('go');

    await delay(1000);
    fromD.classList.remove('mae');
    fromD.classList.remove('go');
    toD.classList.remove('ato');
    toD.classList.remove('go');

    toD.classList.add('tog');
    gamC.moving = 0;
    gamC.now = to;
}

//#region loby
//#endregion

//#region blacky
let gamDB = gamD.querySelector('.blacky');
let gamCB = {
    h:{
        p:{list:[],D:gamD.querySelector('.p')},
        d:{list:[],D:gamD.querySelector('.d')},
    }
}
let gamFB = {};
gamFB.hiku = () => {
    let val = random(1, 13);
    let num = val;
    if(val == 1)  num = 'A';
    if(val == 10) num = 'X';
    if(val == 11) num = 'J';
    if(val == 12) num = 'Q';
    if(val == 13) num = 'K';

    let arr = ['♡', '♤', '♢', '♧'];
    let suit = arraySelect(arr);

    let card = {num, val, suit} //表示、実際の値、スート

    return card;
}
gamFB.add = (whi, card) => {
    let div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;

    let num = document.createElement('div');
    num.className = 'num';
    num.textContent = card.num;
    div.appendChild(num);

    let suit = document.createElement('div');
    suit.className = 'suit';
    suit.textContent = card.suit;
    div.appendChild(suit);

    gamCB.h[whi].D.querySelector('.holder').appendChild(div);
}
gamFB.draw = (whi) => {
    let id = gamCB.h[whi].list.length;
    let card = gamFB.hiku();
    card.id = id;

    gamFB.add(whi, card);

    gamCB.h[whi].list.push(card);
}
//#endregion

//#endregion

//#region canvas
let canV = document.getElementById('canvas');
let canC = {
    ctx: canV.getContext('2d'),
    mas: 10,
    size: null,
    objs:[
        {
            id: 0,
            name: 'player',
            type: 'players',
            img: 'select',
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
            yx: 0,
            yy: 0,
        }
    ],
    get: (id) => {
        if(!id) id = 0;
        let res = canC.objs[id]

        if(!res) return nicoText(`idが${id}のやつなんて存在しねぇよ`);
        return res;
    },
    find: (name) => {
        let ress = canC.objs.filter(obj => obj.name == name);

        if(ress.length == 0) return nicoText('なんの成果も!!得られませんでした!!');
        if(ress.length == 1) return ress[0];
        return ress;
    },
    draw: () => {
        //back
        for(let y = 0; y < canC.mas; y++){
            for(let x = 0; x < canC.mas; x++){
                if(!backmap[y][x]) continue;
                let img = images['maps'][backmap[y][x]];
                if(img) canC.ctx.drawImage(img, x*canC.size, y*canC.size, canC.size, canC.size);
                else console.error(`assets/maps/${backmap[y][x]}.png is not found.`);
                
            }
        }
    
        //obj
        //x,y 0~9等の、現在いる"マス"のこと。sx,syは、現在いる位置のこと。yx,yyは、今向かっている位置のこと。
        for(let i=0; i < canC.objs.length; i++){
            let ob = canC.objs[i];
            if(ob.name == 0) canC.objs.splice(i, 1);
    
            // ob.x = Math.floor(ob.sx/canC.size);
            // ob.y = Math.floor(ob.sy/canC.size);
            ob.x = ob.sx;
            ob.y = ob.sy;
    
            let type = ob.type;
            let img = ob.img;
    
            canC.ctx.drawImage(images[type][img], ob.sx*canC.size, ob.sy*canC.size, canC.size, canC.size);
        }

        drawGrid()
    },
    resize: () => {
        // let wid =  window.innerWidth/2;
        let wid =  360;
        canV.width = wid;
        canV.height = wid;
        canC.size = wid / canC.mas;
        canC.ctx.clearRect(0, 0, canV.width, canV.height);
        canC.draw();
    }
}
canV.width = window.innerWidth/2;
canV.height = window.innerWidth/2;
canC.ctx.fillStyle = '#ffffff';
canC.ctx.clearRect(0, 0, canV.width, canV.height);
window.addEventListener('resize', canC.resize);

async function drawGrid(){
    canC.ctx.strokeStyle = '#555555';
    for(let i = 0; i <= canC.mas; i++){
        canC.ctx.beginPath();
        canC.ctx.moveTo(i * canC.size, 0);
        canC.ctx.lineTo(i * canC.size, canV.height);
        canC.ctx.stroke();

        canC.ctx.beginPath();
        canC.ctx.moveTo(0, i * canC.size);
        canC.ctx.lineTo(canV.width, i * canC.size);
        canC.ctx.stroke();
    }
}

let backmap = [];
let objmap = [];
function map_load(){
    let mas = canC.mas;
    for (let i = 0; i < mas; i++) {
        backmap[i] = [];
        objmap[i] = [];
        for (let i2 = 0; i2 < mas; i2++) {
            backmap[i][i2] = 0;
            objmap[i][i2] = 0;
        }
    }
}
function chooseWeighted(weights) {
    // 重み付き乱択
    let total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
        if (r < weights[i]) return i;
        r -= weights[i];
    }
    return weights.length - 1; // fallback
}
function map_make(){
    let tiles = ['a','b']
    let mas = canC.mas;
    for (let i = 0; i < mas; i++) {
        backmap[i] = [];
        for (let i2 = 0; i2 < mas; i2++) {
            if(i == 0 && i2 == 0){
                // 左上だけ完全ランダム
                backmap[i][i2] = tiles[Math.floor(Math.random() * tiles.length)];
            }else{
                // 重みを初期化（全種類1からスタート＝最低限の確率確保）
                let weights = new Array(tiles.length).fill(1);
    
                if(i2 > 0){ //左
                    let left = tiles.indexOf(backmap[i][i2 - 1]);
                    weights[left] += 5; // 重み補正（数値で調整）
                }
    
                if(i > 0){ //上
                    let up = tiles.indexOf(backmap[i - 1][i2]);
                    weights[up] += 5;
                }
    
                // 選択
                let choice = chooseWeighted(weights);
                backmap[i][i2] = tiles[choice];
            }
        }
    }

    //#region obj
    for(let i = 0; i < canC.mas; i++){
        objmap[i] = [];
        for(let i2 = 0; i2 < canC.mas; i2++){
            objmap[i][i2] = {
                name: 0,
            };
        }
    }
    //#endregion
    
    // sendpyTx('printTx,-------mapmaked--------')

    drawGrid();

    canC.draw();
}
let mapmakeD = document.getElementById('mapmake');
mapmakeD.addEventListener('click', map_make);


function objmake(){
    console.log('objつくるよ！')

    let obses = Objects.filter(o => o.appe).map(o => o.name);
    if(batC.now) obses.push(Objects.find(o => o.name == 'enemy').name);

    let num = random(3,7);
    for(let i = 0; i < num; i++){
        let mono = arraySelect(obses);
        // console.log(mono);

        let x, y;
        do{
            x = random(0, canC.mas-1);
            y = random(0, canC.mas-1);
        }while(objmap[y][x].name != 0);

        let ob = {
            id: canC.objs.length,
            name: mono,
            type: 'objects',
            img: mono,
            sx: x,//*canC.size,
            sy: y,//*canC.size,
            x: x,
            y: y,
            yx: x,//*canC.size,
            yy: y,//*canC.size
            moving: 0
        }

        canC.objs.push(ob);
    }
    canC.draw();
}


function move(id, code, x, y){
    let harbor = canC.mas*canC.size;
    let ob = canC.objs[id];
    let yosouX = x, yosouY = y;

    if(ob.moving) return nicoText('移動中なのでキャンセルed');

    if(code == 'add'){
        yosouX = ob.sx + x, yosouY = ob.sy + y;
        if(yosouX < 0 || yosouX >= harbor) return nicoText('xが一線越えてる');
        if(yosouY < 0 || yosouY >= harbor) return nicoText('yが一線越えてる');

        if(yosouX == ob.sx && yosouY == ob.sy) return nicoText('それ同じマスやで');
        gomove(id, yosouX, yosouY);
    }
    if(code == 'set'){
        yosouX = x, yosouY = y;
        if(yosouX < 0 || yosouX >= harbor) return nicoText('xが一線越えてる');
        if(yosouY < 0 || yosouY >= harbor) return nicoText('yが一線越えてる');
        gomove(id, yosouX, yosouY);
    }
}
async function gomove(id, fyx, fyy){
    let ob = canC.objs[id];

    ob.yx = fyx, ob.yy = fyy;

    ob.moving = 1;

    let go = [];
    if(fyx != ob.sx) go.push({k:'sx', o:fyx});
    if(fyy != ob.sy) go.push({k:'sy', o:fyy});
    go = arrayShuffle(go);

    for(let g of go){
        // 移動量依存で移動速度を変えないver
        // let idou = g.o - ob[g.k];
        // let ikkai = 5;
        //  if(idou < 0) ikkai *= -1;
        // let kaisu = Math.ceil(idou/ikkai);

        // 回数依存で移動速度を変えるver
        let idou = g.o - ob[g.k];
        let kaisu = 50;
        let ikkai = idou/kaisu;

        //console.log(`移動:: 量:${idou}, 回数:${kaisu}, 速度:${ikkai}`);
        for(let i = 0; i < kaisu; i++){
            ob[g.k] += ikkai;
            canC.draw();
            await delay(5);
        }

        await delay(100);
        ob[g.k] = g.o;
    }

    canC.draw();
    nicoText('移動完了ed');
    ob.moving = 0;

    if(ob.name =='player') pmoved();
}
async function pmoved(){
    let ob = canC.objs[0];

    let kasane = []
    for(let ob2 of canC.objs){
        if(ob2.name == 'player') continue;
        if(ob2.x == ob.x && ob2.y == ob.y) kasane.push(ob2);
    }

    for(let ob3 of kasane){
        if(ob3.name == 0) continue;

        let name = ob3.name;
        let data = Objects.find(o => o.name == name);
        if(!data) console.error(`エラー！${name}のdataがねーぜ！！`)
        if(!hask(data, 'dest')) continue;
        if(!data.dest) continue;
        
        if(!hask(data, 'sozai')) continue;

        let sozais = data.sozai;
        if(data.kind.includes('stone')){
            soundPlay("breakstone")
        }
        else if(data.kind.includes('tree')){
            soundPlay("breakgrass");
        }
        for(let so of sozais){
            if(!probability(so.p)) continue;
            
            let item = so.name;
            await get(item);
            await delay(10);
        }

        ob3.name = 0;
        
        canC.draw();

        if(name == 'enemy') encount();
    }

    await delay(50)
    canC.draw()
}

canV.addEventListener('click', e => {
    // canvas上でのクリック座標を取得
    let rect = canV.getBoundingClientRect();
    let mx = e.clientX - rect.left;
    let my = e.clientY - rect.top;

    // ピクセル座標→マス座標
    let x = Math.floor(mx / canC.size);
    let y = Math.floor(my / canC.size);

    // プレイヤー(id=0)をクリックしたマスへ移動
    move(0, 'set', x, y);
});


//#endregion canvas

//#region gacha
let gacD = document.getElementById('gachan');
let gacC = {
    open:0,
    mode:"a",
    actB:gacD.querySelectorAll('.hontai .sita .maru'),
    chanD:gacD.querySelector('.change')
}
let gacF = {};
gacF.tog = () => {
    gacC.open = fl(gacC.open);
    gacD.classList.toggle('tog');
}

gacF.act = () => {
    let mode = gacC.mode;
    gacF[mode]();
}
for(let a of gacC.actB) a.addEventListener('click', gacF.act);

gacC.Modes = [
    {
        name:"a",
        jpnm:"Friend",
        desc:"未来の巨匠koppepan_orangeの手がけたロント・コネクト...\nのキャラたちがやってきた！！\n引け！！！！"
    },
    {
        name:"b",
        jpnm:"Various",
        desc:"なんかいろいろ出る！！\nほぼほぼしょぼいぞ！でも演出はすごい！！\n引け！！！！"
    },
    {
        name:"c",
        jpnm:"Errored",
        desc:"これは..故障中だ！\nしばし待たれよ！！"
    }
]
gacF.change = (code = 0) => {
    let arr = gacC.Modes.map(a => a.name);
    let name = gacC.mode;
     if(typeof code == 'string') name = code;
    let now = arr.indexOf(name);
    let next = now + 1;
    if(next >= arr.length) next = 0;
    name = arr[next];
    gacC.mode = name;

    for(let a of arr) gacD.querySelector(`.hontai.${a}`).classList.remove('show');
    gacD.querySelector(`.hontai.${name}`).classList.add('show');
}
gacC.chanD.addEventListener('click', gacF.change);


gacC.listA = {};
gacF.a = (code = 0) => {
    if(typeof code != 'number') code = 0, console.error('なんかコードが数値じゃなかったんですケド〜？ 0にしておきますね〜♪');

    let list = [
        Friends.filter(a => a.rare == 1),
        Friends.filter(a => a.rare == 2),
        Friends.filter(a => a.rare == 3),
    ];

    let s = 0;
    let r = random(0,99);
    if(r<3) s = 3;
    if(3<=r && r<20) s = 2;
    if(20<=r) s = 1;
    
    if(code) s = code, console.log(`promocode => ${s}`);
    
    console.log(s)
    let item = arraySelect(list[s-1]);
    let n = `${item.name} [☆ ${s}]`;
    // if(s == 3) n = `ミミミミ   ${n}   ミミミミ`;
    
    if(!gacC.listA[item.name]) gacC.listA[item.name] = 0;
    gacC.listA[item.name] += 1;
    
    sendpyTx(`printTx,${n}`);
    return n;
}
gacF.appe = () => {
    let arr0 = Object.keys(gacC.listA);
    let arr = [] 
    for(let name of arr0){
        let num = gacC.listA[name];
        let text = `${name}(☆${Friends.find(a => a.name == name).rare})`;

        let text2 =  1 < num ? ` [${num-1}凸]` : '';
        
        let text3 = '';
        if(10 < num) text3 = '  ←被りすぎだろwww';
        if(23 < num) text3 = '  ←な、なんかごめんね？w';
        if(40 < num) text3 = '  ←うん..えと....はい。ごめんなさい';
        if(99 < num) text3 = '  ←一周回ってこれはあなたが悪いっすよ';

        // arr.push([name, gacC.listA[name]]); //名前, 数
        arr.push(`${text}${text2}${text3}`);
    }

    let text = arr.join('\n');
    sendpyTx(`printTx,${text}`);
}

gacF.b = () => {
    // https://scratch.mit.edu/projects/971489912/fullscreen/   
}

gacF.c = () => {
    sendpyTx('砂埃[☆0]')
}

//#endregion

//#region jamer_popup
async function popup_dasu(num = 1){
    for(let i = 0; i < num; i++){
        let div = document.createElement('div');
        div.className = 'jamerP';
        div.style.top = `${random(0, (window.innerHeight - 100))}px`;
        div.style.right = `${random(0, (window.innerWidth - 100))}px`;

        let code = random(1,1);
        switch(code){
            case 1:{
                div.classList.add('A');
                div.dataset.code = probability(20) ? 1 : 0; // 1 == 増えるタイプ, 0 == 無個性劣等生
                if(div.dataset.code == 1){
                    div.addEventListener('click', async function(e){
                        div.remove();
                        await popup_dasu(10)
                    })
                }
                
                let bodie = document.createElement('div');
                bodie.className = 'body';
                
                let text = 'click here!';
                if(div.dataset.code == 1) text += '!';
                bodie.textContent = text;
                div.appendChild(bodie);

                let upper = document.createElement('div');
                upper.className = 'upper';
                
                let under = document.createElement('div');
                under.className = 'mono under';
                under.textContent = '-';
                upper.appendChild(under);

                let mouth = document.createElement('div');
                mouth.className = 'mono mouth';
                mouth.textContent = 'o';
                upper.appendChild(mouth);
                
                let mett = document.createElement('div');
                mett.className = 'mono mett';
                mett.textContent = 'x';
                mett.addEventListener('click', async function(e){
                    div.remove();
                });
                upper.appendChild(mett);
                div.appendChild(upper);
            }       
        }

        document.body.appendChild(div);

        await delay(50);
    }
}
//#endregion

//#region mass_cod
const head = document.getElementById('head');
const headTop = head.querySelector('.top');
const headBottom = head.querySelector('.bottom');
const bubble = document.getElementById('bubble');
const bubbleText = bubble.querySelector('.text');
const ghost = document.getElementById('ghost');

// --- 設定（必要ならいじれ） ---
const WINDOW_MS = 700;             // 何msの履歴を見るか
const MIN_MOVE_PX = 2;             // このpx以下の移動未満は無視（ノイズ対策）
const REQUIRED_DIR_CHANGES = 4;    // この回数で撫で判定
const COOLDOWN_MS = 1100;          // 反応後のクールダウン
// -------------------------------

let samples = []; // {x, t}
let lastPetAt = -9999;
let lastPointerId = null;

// util: 指定座標が head の内部にあるか
function isInsideHead(x, y){
    const r = headTop.getBoundingClientRect();
    return (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
}

// document 全体のポインター移動で監視（早い動きでも拾える）
document.addEventListener('pointermove', (ev) => {
    // ev.preventDefault();
    const x = ev.clientX, y = ev.clientY, t = performance.now();

    if (!isInsideHead(x,y)) return;
    // 頭から外れたら履歴は少し残すが基本ここで終わり
    // Option: samples = []; で外れた瞬間リセットすることもできる

    // add sample
    samples.push({x, t});
    const cutoff = t - WINDOW_MS;
    // prune old
    while (samples.length && samples[0].t < cutoff) samples.shift();

    // compute direction changes among significant moves
    let lastSign = 0;
    let dirChanges = 0;
    let lastX = null;
    for(const s of samples){
        if (lastX === null){lastX = s.x; continue};
        const dx = s.x - lastX;
        lastX = s.x;
        if (Math.abs(dx) < MIN_MOVE_PX) continue; // ノイズ小さいやつは無視
        const sign = dx > 0 ? 1 : -1;
        if (lastSign === 0) lastSign = sign;
        else if (sign !== lastSign){
            dirChanges++;
            lastSign = sign;
        }
    }

    if (dirChanges >= REQUIRED_DIR_CHANGES){
        tryPet(t, dirChanges);
        // 反応させたら履歴を軽くクリアして連続トリガーを抑える
        samples = [];
    }
});

function tryPet(now, dirChanges){
    if (now - lastPetAt < COOLDOWN_MS) return;
    lastPetAt = now;
    doPetReaction(dirChanges);
}

function doPetReaction(intensity){
    // intensity に応じてリアクションを変えられる（今は短いアニメと台詞）
    let text = arraySelect(['ん','..','満足？'])
    showBubble(text);
}

function showBubble(text){
    bubbleText.textContent = text;
    bubble.classList.add('show');
    // 表示時間は文字数で変える（短いほど短め）
    const displayMs = Math.max(900, Math.min(2200, 300 + text.length * 120));
    setTimeout(()=> bubble.classList.remove('show'), displayMs);
}

headBottom.addEventListener('dblclick', async function(){
    showBubble('何？');
    await delay(1000);
    // menuShow();

    // ./serif.txtをload
    await loadScriptFile('serif', 1);
    read(allScripts["serif"]["イベント"], 'arrayed');
});

// --- タッチでも動く（pointer イベント使用してあるからそのまま動く） ---

// ------- デバッグ用: キーで閾値をいじれる（任意） -------
window.__ghost = {
    tweak: (k, v) => {
        if (k === 'window') WINDOW_MS=v;
        if (k === 'minmove') MIN_MOVE_PX=v;
        if (k === 'req') REQUIRED_DIR_CHANGES=v;
        if (k === 'cool') COOLDOWN_MS=v;
        return {WINDOW_MS, MIN_MOVE_PX, REQUIRED_DIR_CHANGES, COOLDOWN_MS};
    }
};
//#endregion

//#region battle
mapmakeD.addEventListener('click', () => sele());
mapmakeD.addEventListener('contextmenu', () => encount());

//あとはbattle.jsに記述

//#endregion

//#region bullet festabal
let bleC = {
    canvas:document.getElementById('bleBack'),
    ctx:document.getElementById('bleBack').getContext('2d'),
    bleD:document.getElementById('ble'),
    canW:0,
    canH:0,
    ing:0,
    bls:[],
    loop:0,
    hited:0,
}
bleC.hiteD = bleC.bleD.querySelector('.hited');
bleC.p = {
    x: 0,
    y: 0,
    w: 8,
    h: 8,
    color: '#000000',
    seigyo: 0,
}
let bleF = {}

/* 
水色 #f0f8ff, #eaf5ff, #def0ff, #cfe9ff, #b5dcff
紫色 #f8f6ff, #f5f2ff, #f1edff, #ece8ff, #e9e4ff
橙色 #fffaf3, #fff7eb, #fff3e2, #fff0d9, #ffeccf
緑色 #f6fff2, #eeffe7, #e6ffdc, #ddffd0, #d4ffc3
*/

bleC.Colors = {
    red:['ff0000', 'ff8080'],
blue:['0000ff', '8080ff', '4473ad'],
alice:['f0f8ff', 'eaf5ff', 'def0ff', 'cfe9ff', 'b5d9ff'], //水色
orange:['fffaf3', 'fff7eb', 'fff3e2', 'fff0d9', 'ffeccf'],
green:['f6fff2', 'eeffe7', 'e6ffdc', 'ddffd0', 'd4ffc3'],
sion:['f8f6ff', 'f5f2ff', 'f1edff', 'ece8ff', 'e9e4ff'], //紫色
}
isCol = (iro, mono) => {
    let res = bleC.Colors[iro].includes(mono);
    if(res) return 1;

    return 0;
}

bleF.resize = () => {
    bleC.canvas.width = window.innerWidth;
    bleC.canvas.height = window.innerHeight;
    bleC.canW = window.innerWidth;
    bleC.canH = window.innerHeight;
    bleF.draw();
}  

bleF.tekiou = () => {
    bleC.hiteD.textContent = `hited: ${bleC.hited}`;
}

bleF.draw = () => {
    bleC.ctx.clearRect(0, 0, bleC.canW, bleC.canH);
    // bleC.ctx.fillStyle = '#cecece'
    
    //player
    bleC.ctx.fillStyle = bleC.p.color;
    bleC.ctx.fillRect(bleC.p.x - bleC.p.width / 2, bleC.p.y - bleC.p.height / 2, bleC.p.width, bleC.p.height);

    //bullets
    for(let bl of bleC.bls){
        if(bl.shape == 'maru'){
            bleC.ctx.beginPath();
            bleC.ctx.fillStyle = bl.color;
            bleC.ctx.arc(bl.x, bl.y, bl.w, 0, Math.PI * 2);
            bleC.ctx.fill();
            bleC.ctx.closePath();
        }
        if(bl.shape == 'rect'){
            bleC.ctx.fillStyle = bl.color;
            bleC.ctx.fillRect(bl.x, bl.y, bl.w, bl.h);
        }
    }
}

//player
bleF.pUpdate = (event) => {
    if(!bleC.loop) return;
    bleC.p.x = event.clientX;
    bleC.p.y = event.clientY;
}
window.addEventListener('mousemove', bleF.pUpdate);

//bulletたちはどう生きるか
bleF.update = () => {
    let p = bleC.p;
    bleC.bls.forEach((bl, i) => {
        function destroy(){bleC.bls.splice(i, 1)};
        
        bl.x += bl.dx;
        bl.y += bl.dy;
        
        if (bl.y - bl.h > bleC.canH || 
            bl.y + bl.h < 0 || 
            bl.x + bl.w < 0 || 
            bl.x - bl.w > bleC.canW) {
            if(bl.name != 'meteo') destroy();
        }

        if(isCol('red', bl.color) && bl.y <= bleC.canH*0.75 && bl.name != 'meteo'){
            destroy()
        }
        if(bl.name == 'meteo' && bl.y - bl.w > bleC.canH){
            destroy();
        }
        
        if (!isCol('red', bl.color)) {
            let nearLava = bleC.bls.some(other => {
                // 自分自身は除外
                if (other == bl) return false;

                // 溶岩かどうか whetherやね
                if (!isCol('red', other.color)) return false;

                return bleF.shoto2(other, bl);
            });

            if(nearLava){
                bl.hp -= 1;
                if(bl.hp <= 0){
                    destroy()
                }
            }
        }


        if(bleF.shoto2(bl, p)){
            if(isCol('red', bl.color)) nicoText('溶岩来てますよ～')
            else nicoText('痛って〜〜〜〜');
            bleC.hited += 1;
            destroy();
        }
    });
}
bleF.kyori = (a, b) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}
bleF.shoto2 = (from, to) => {
    const kyorx = Math.abs(from.x - to.x);
    const kyory = Math.abs(from.y - to.y);
    const dist = Math.sqrt(kyorx * kyorx + kyory * kyory);

    return dist < from.w + to.w;
}

bleF.blMake = (color = '#000000', shape = 'maru', x = 0, y = 0, muki = 90, spd = 1, w = 1, h = 1, hw, hh) => {
    if(shape == 'maru') h = w; // というよりかは使わん
    let bl = {
        color,
        shape,
        x,
        y,
        dx: 0,
        dy: 0,
        muki,
        spd,
        w,
        h,
        hw: hw??w,
        hh: hh??h,

    }

    if(typeof muki == 'number'){
        let dir = bl.muki * Math.PI / 180;
        let si = Math.sin(dir);
        let co = Math.cos(dir);
        bl.dx = si * spd;
        bl.dy = co * spd;
        bleC.bls.push(bl);
        return;
    }

    if(muki == 'p'){
        let aim = bleC.p;
        let kx = aim.x - x;
        let ky = aim.y - y;
        let dir = Math.atan2(ky, kx);

        bl.dx = Math.cos(dir) * spd;
        bl.dy = Math.sin(dir) * spd;

        bleC.bls.push(bl);
        return;
    }
    
}

bleF.gameloop = () => {
    bleF.update();
    bleF.draw();
    bleF.tekiou();  

    let testSize = 5; 
    // if(keys.u) bleF.blMake('red', 'maru', bleC.canW/2, bleC.canH/2, 3, 3, random(0, 360), random(1,10), 1);
    if(keys.u) bleF.blMake('red', 'maru', bleC.canW/2, bleC.canH/2, random(0, 360), 1, testSize, testSize,);
    if(keys.y) bleF.blMake('red', 'maru', bleC.canW/2, bleC.canH/2, 'p',            1, testSize, testSize);
    // if(keys.u) bleF.blMake('red', 'maru', 0, bleC.canH/2, 3, 3, 90, 0.1, 1);
    
    if(!bleC.loop) return;
    requestAnimationFrame(bleF.gameloop);
}

bleF.kidou = async function(){
    if(bleC.ing) return;
    bleC.ing = 0.5;
    bleC.canvas.classList.add('tog');
    bleC.bleD.classList.add('tog');
    await delay(2000);
    // await delay(8000)
    bleC.ing = 1;
    
    bleC.p.x = bleC.canW/2;
    bleC.p.y = bleC.canH - 50;
    console.log(bleC.p.x, bleC.p.y);

    bleC.loop = 1;
    bleF.gameloop()
}
mapmakeD.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // bleF.kidou()
});


//#endregion

//#region intervalで動くやつ
window.setInterval(() => {
    let is = (name) => {
        if(undC.checking[name] == '1') return 1;
        
        return 0;
    };
    
    for(let nanka of undC.checks){
        if(probability(nanka.pro) && is(nanka.name)){
            nanka.func();
        }
    }
}, 1000)

let notiL = []
function makeNotice(nameOr = null){
    let name = genename();
    if(nameOr) name = nameOr;
    let app = arraySelect(['twitter2','isostagram','tictac'])//ツイッター2、イソスタグラム、チックタック
    let col = '';
    
    let id = 0;
    while(notiL.includes(id)) id += 1;
    notiL.push(id);

    let D = document.createElement('div');
    D.className = `notice ${app}`;
    D.style.backgroundColor = col;
    D.dataset.id = id;
    D.style.top = `${id*60}px`;
    
    let iconI = document.createElement('img');
    iconI.className = `icon`;
    iconI.src = `assets/images/systems/${app}.png`;
    D.appendChild(iconI);
    
    let userD = document.createElement('div');
    userD.className = 'text';
    userD.innerHTML = `@${name}さんに<br>フォローされました`;
    D.appendChild(userD);
    
    document.querySelector('body').appendChild(D);
    
    setTimeout(() => {
        D.classList.add('tap');
    }, 1000)
    
    setTimeout(() => {
        notiL = notiL.filter(a => a != id);
    }, 2500);

    setTimeout(() => {
        D.classList.remove('tap');
    }, 3000);

    setTimeout(() => {
        D.remove();
    }, 4000);
}
function genename(len = 14) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    const erab = () => chars[Math.floor(Math.random() * chars.length)];

    let name = '';
    for(let i = 0; i < len; i++){
        let n = erab();
        // 先頭・末尾が "_" ならNG
        // 先頭が数字ならNG
        while(
        ((i == 0 || i == len - 1) && n == '_') ||
            (i == 0 && n >= '0' && n <= '9')
        ) n = erab();
        name += n;
    }
    return name;
}

async function setRabbit(num = 0){
    if(!num) num = arrayGacha([1,2,3],[80,17,3]);

    for(let i = 0; i < num; i++){
        goRabbit();
        await delay(500);
    }
}
async function goRabbit(){
    let src = 'assets/images/elses/rabbit';
    let D = document.createElement('img');
    D.className = 'rabbit';
    D.src = `${src}[1].png`;
    let wid = window.innerWidth;
    document.querySelector('body').appendChild(D);
    let tek = () => D.style.left = `${wid}px`;

    let nowMai = 1;
    let maxMai = 8;
    setInterval(async function(){
        nowMai += 1;
        D.src = `${src}[${nowMai}].png`;

        if(nowMai == 3 || nowMai == 4) wid -= 10;
        tek();

        if(nowMai >= maxMai) nowMai = 0;
    }, 80)

    
    while (wid + 100 > 0) await delay(100);

    D.remove();
}

//#endregion


function start(){
    comC.logD.value += `hello! no name!`;
    connect();
    
    titF.focusInput();
    inv_make();
    HeaF.load()
    map_load()
    map_make();
    sideLF.load();
    undF.load();
    canC.resize();
    gamF.load();
    bleF.resize();

    loop = 1;
    gameloop();
}

let loop = 0;
let looped = 0;
async function gameloop(){
    looped++;
    let en = looped % 800 == 0 ? 1 : 0;

    // if(en) objmake();
    mapmakeD.textContent = pickItem?.dataset?.item;


    if(loop) requestAnimationFrame(gameloop);
}

//#region セクラテス
let secrates = [
    {
        ind:0,
        name:'koppepan',
        arr:['k','o','p','p','e','p','a','n'],
        limit:3,
        func: async function(){
            nicoText('なんにも起こらない＝ヨーン');
        }
    },
    {
        ind:0,
        name:'conami',
        arr:['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','a','b'],
        limit:'n',
        func: async function(){
            await setRabbit(67);
        }
    },
    {
        ind:0,
        name:'set',
        arr:['s','e','t'],
        limit:'n',
        func: async function(){
            undF.open()
        }
    },
    {
        ind:0,
        name:'darkness',
        arr:['d','a','r','k','n','e','s','s'],
        limit:'n',
        func: async function(){
            buffadd(cm(), cm(), 'pow', 2, 1);
            buffadd(cm(), cm(), 'she', 2, 1);
            buffadd(cm(), cm(), 'burn', 2, 1);
            buffadd(cm(), cm(), 'poison', 2, 1);
            buffadd(cm(), cm(), 'palsy', 2, 1);
            buffadd(cm(), cm(), 'freeze', 2, 1);
        }
    },
    {
        ind:0,
        name:'givememoney',
        arr:['g','i','v','e','m','e','m','o','n','e','y'],
        limit:'n',
        func: async function(){
            if(probability(60)) nicoText('乞食成功！'), euroF.add(100);
            else nicoText('乞食失敗');
        }
    },
    {
        ind:0,
        name:'gamble',
        arr:['g','a','m','b','l','e'],
        limit:'n',
        func: async function(){
            gamF.tog();
        }
    },
    {
        ind:0,
        name:'allover',
        arr:['a','l','l','o','v','e','r'],
        limit:'n',
        func: async function(){
            bigmmC.kitekeyD.click();
            batF.open();
            gacF.tog();
            achF.tog();
            salF.open();
            inv_open(1);
            sideLF.toggle();
            undF.open();
        }
    },
    {
        ind:0,
        name:'re',
        arr:['r','e'],
        limit:1,
        func: async function(){
            let img = document.createElement('img');
            img.id = 'hakaisatsu';
            img.src = 'assets/images/systems/hakai[1].png'
            img.dataset.phase = 1;
            document.querySelector('body').appendChild(img);

            setTimeout(() => {
                img.remove();
                this.ind = 0;
                this.limit = 1;
            }, 3000)

            return 0;
        }
    },
    {
        ind:0,
        name:'rere',
        arr:['r','e','r','e'],
        limit:1,
        func: async function(){
            let img = document.getElementById('hakaisatsu');
            if(!img) return;

            img.src = 'assets/images/systems/hakai[2].png'
            img.dataset.phase = 2;

            setTimeout(() => {
                img.remove();
                this.ind = 0;
                this.limit = 1;
            }, 3000)

            return 0;
        }
    },
    {
        ind:0,
        name:'rerere',
        arr:['r','e','r','e','r','e'],
        limit:1,
        func: async function(){
            let img = document.getElementById('hakaisatsu');
            if(!img) return 1;
            console.log(img.dataset.phase);
            if(img.dataset.phase != '2') return 1;
            location.reload();
        }
    },
]
document.addEventListener('keydown', async function(e){
    let key = e.key.toLowerCase();
    if(key == 'escape') loop = 0;


    //これ以降はinput内では機能しない
    if(document.activeElement == comC.texD) return;
    if(document.activeElement == bigmmC.bodyD) return;

    if(key == 'o') objmake();
    if(key == 'e') inv_open();

    for(let sec of secrates){
        let nke = sec.arr[sec.ind];
        // console.log(`必要は${nke}、押されたは${key}！`);
        if(key == nke){
            sec.ind += 1;
            if(sec.ind == sec.arr.length && sec.limit){
                console.log(`ジャンゴ！ ${sec.name}発動！！`);
                sec.ind = 0;
                let res = await sec.func();
                if(!res && sec.limit != 'n') sec.limit -= 1;
            }
        }
        else sec.ind = 0;
    }
})
//#endregion

//#region 画像の読み込み
let images = {}
let imgC = {
    imagesLoaded: 0,
    imagesNames: {
        'maps':['0', 'a', 'b'],
        'systems':['select', 'error', 'error_nico'],
        'players':['select'],
        'objects':['tree','tree_apple','tree_kare','stone','stone_kuro','stone_hai','stone_ao','stone_aka','stone_kiro','stone_cha','stone_mido','stone_mizu', 'enemy'],
    },
}
imgC.imagesTotal = Object.keys(imgC.imagesNames).map(a => imgC.imagesNames[a].length).reduce((a, b) => a + b);
for(let type of Object.keys(imgC.imagesNames)){
    for(let id of imgC.imagesNames[type]){
        let img = new Image();
        img.src = `assets/images/${type}/${id}.png`;
        img.onload = async function (){
            imgC.imagesLoaded++;
            if(imgC.imagesLoaded == imgC.imagesTotal && soundsLoaded == totalsounds) start();
        };
        img.onerror = () => {
            console.error(`Image assets/images/${type}/${id} failed to load.`);
            imgC.imagesLoaded++;
            img.src = `assets/images/systems/error.png`;
        };
        if(!images[type]) images[type] = {};
        images[type][id] = img;
    };
};
//#endregion
//#region 音をロードする機構
let sounds = {};
let souC = {
    loaded: 0,
    
}
let soundsLoaded = 0;
let soundsNames = ['doom', 'money', 'breakstone', 'breakgrass', 'error'] //増やしたけりゃここに増やしなねs
let totalsounds = soundsNames.length

soundsNames.forEach(num => {
    let sound = new Audio();
    sound.preload = 'auto';
    sound.src = `assets/sounds/${num}.mp3`;
    sound.addEventListener('canplaythrough', () => {
        soundsLoaded++;
        if(imgC.imagesLoaded == imgC.imagesTotal && soundsLoaded == totalsounds) start();
    }, {once: true});
    sound.onerror = () => {
        console.error(`Sound ${num} failed to load.`);
        soundsLoaded++;
        sound.src = `assets/sounds/error.mp3`;
    };
    sounds[num] = sound;
}); 

function soundPlay(name){
    let sound = sounds[name];
    if(!sound) return soundPlay("error");

    sound.currentTime = 0;
    sound.volume = souC.volume;
    sound.play();
}

function soundVolume(val){
    const v = Math.max(0, Math.min(1, val/100));
    console.log(`[soundVolume] ${souC.volume??null} => ${v}`);
    souC.volume = v;
    document.querySelectorAll('audio,video').forEach(el => {
        el.volume = v
    });
}
soundVolume(50);
//#endregion


let Colors = [
    [
        '#391b0a',
        '#6f3c0e',
        '#a66021',
        '#c88843',
        '#cfa776',
        '#e5d1b4'
    ]
]

