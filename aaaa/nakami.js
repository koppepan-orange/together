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
//#region 音をロードする機構
let soundsLoaded = 0;
let sounds = {};
// let soundsNames = ['doom'] //増やしたけりゃここに増やしなねs
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
//#endregion

var webSocket; //ウェブソケット
var messageTextArea = document.getElementById("messageTextArea"); // HTML内のテキスト出力エリア
let message = document.getElementById("textMessage");
let sendBtn = document.querySelector('#commands .send');

sendBtn.addEventListener('click', () => {
    sendpyTx(message.value);
})

// サーバとの通信を接続する関数
function connect(){
    webSocket = new WebSocket("ws://localhost:8001"); // インスタンスを作り、サーバと接続

    // 接続したで～～！！
    webSocket.onopen = function(message){
        logadd(`Server connecten。`);
    };

    // 接続、切断...
    webSocket.onclose = function(message){
        logadd("Server Disconnected！！");
    };

    // エラー発生時の処理
    webSocket.onerror = function(message){
        logadd("errrrrrrrrrrrrrrrrrrr");
    };

    // 受け取ったとき
    webSocket.onmessage = function(message){
        let mes = message.data;
        read(mes);
        nicoText(mes);
        logadd(`Receive => ${mes}`);
        
        if(mes == 'helasu') inv_pick_decr();
    };
}

function logadd(text){
    if(text.includes('endgame')) window.open('about:blank', '_self').close();
    messageTextArea.value += `${text}\n`; // ${random(1000,2900)}-${random(1,12)}-${random(1,31)} ${random(0,23)}:${random(0,59)}:${random(0,59)} INFO
    messageTextArea.scrollTop = messageTextArea.scrollHeight;
};

function sendpy(content){
    let json = JSON.stringify(content);
    logadd(`Send => ${json}}`);
    webSocket.send(json);
};
function sendpyTx(text){
    if(IranMikans[text]) return 0;
    logadd(`Send => ${text}`);
    webSocket.send(text);
};

// サーバとの通信を切断する関数
function disconnect(){
    webSocket.close();
}

//#region reads
let allScripts = {};
async function loadScriptFile(src){
    const url = `assets/txts/${src}.txt`;
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
        console.log(stack)

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
                    console.log(line)
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
            sounds[name].currentTime = 0;
            sounds[name].play();
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


/*
//#region may
let mayList = document.getElementById('mayList');
let maylists = {
    'command':{
        id:'command',
        process:async function(item, description){
            message.value = item;
            sendBtn.click();
        },
        list:[
            {
                name:'koppepan',
                description:'ラップでタップなダンスをバック'
            },
            {
                name:'コッペ',
                description:'相互フォローの造語'
            },
            {
                name:'chack',
                description:'デバッグ用。俺もわからん'
            },
            {
                name:'endgame',
                description:'pythonのサーバーを終了させます<br>アベンジャーズではないです'
            },
            {
                name:'red_button',
                description:'赤いボタンを出します<br>音量注意'
            },
            {
                name:'command_box',
                description:'番号を入力することのできるやつを出します<br>気分はさながらハッカーですね<br>さながら腸爆裂礼砲'
            },
            {
                name:'craft_table',
                description:'何か。pick_のあとにmebra_plankとかで持てる'
            },
        ]
    },
    'items':{
        id:this,
        process:async function(item, description){
            let text = `pick_${item}`
            message.value = text;
            sendBtn.click();
        },
        list:[
            {
                name:'mebra_log',
                description:''
            },
            {
                name:'mebra_plank',
                description:''
            },
            {
                name:'stone',
                description:''
            }
        ]
    }
}
async function mayImport(){
    for(hotmoto of Object.keys(maylists)){
        let moto = hotmoto;
        let m = 0, s = 0;
        let div = document.createElement('div')
        div.className = `floatdiv draggable ${moto}`;
        div.style.top = `${random(0, (window.innerHeight - 100))}px`;
        div.style.right = `${random(0, (window.innerWidth - 100))}px`;
        div.addEventListener('mouseleave', async function(e){
            if(m){
                if(s) return;
                s = 1;
                while(m) await delay(10)
                s = 0;
            };
            desc.style.opacity = 0;
            list.style.height = '0px';
            m = 1;
            await delay(300)
            list.style.opacity = 0;
            m = 0;
        })
        div.addEventListener('click', async function(e){
            div.classList.toggle('hidden')
        })

        let focus = document.createElement('div');
        focus.className = 'focus';
        focus.textContent = moto;
        focus.style.width = '120px'
        focus.addEventListener('mouseenter', async function(e){
            if(m){
                if(s) return;
                s = 1;
                while(m) await delay(10)
                s = 0;
            };
            list.style.opacity = 1;
            list.style.height = `${listHgh}px`;
            m = 1;
            await delay(300);
            desc.style.opacity = 1;
            m = 0;
        })
        div.appendChild(focus)
        
        let list = document.createElement('div');
        list.className = 'list';
        list.style.height = 'auto';
        let listHgh = '0px';
        
        let desc = document.createElement('div');
        desc.className = 'desc';
        desc.style.height = '0px';
        div.appendChild(desc);

        for(a of maylists[moto].list){
            let item = document.createElement('div');
            let itemn = a.name;
            let itemd = a.description;
            item.className = 'item'
            item.textContent = a.name;
            // item.dataset.description = a.description;
            item.addEventListener('click', async function(){
                maylists[moto].process(itemn, itemd);
            })
            item.addEventListener('mouseenter', async function(){
                desc.innerHTML = itemd;
                desc.style.left = '120px';
                focus.style.width = '240px';
            });
            list.addEventListener('mouseleave', async function(){
                desc.innerHTML = '';
                desc.style.left = '0';
                focus.style.width = '120px';
            });
            
            list.appendChild(item);
        }
        div.appendChild(list);
        document.getElementById('mainArea').appendChild(div)

        listHgh = document.querySelector(`.floatdiv.draggable.${moto} .list`).offsetHeight;
        document.querySelector(`.floatdiv.draggable.${moto} .desc`).style.height = `${listHgh}px`;
        document.querySelector(`.floatdiv.draggable.${moto} .list`).style.height = `0px`;
    }
}
// document.addEventListener('mouseenter', e => {
//     let e = e.target;
//     if(!e) return 0;
//     if(!e.classList.contains('floatdiv')) return 0;
//     let list = e.querySelector('.list');
//     list.style.opacity = 1;
//     list.style.height = 'auto';
// });

// document.addEventListener('mouseleave', e => {
//     let e = e.target;
//     if(!e) return 0;
//     if(!e.classList.contains('floatdiv')) return 0;
//     let list = e.querySelector('.list');
//     list.style.opacity = 0;
//     list.style.height = '0px';
// });

//#endregion may
*/

//#region ビッグマシュマロ?（唐突）
let bigmmD = document.getElementById('bigmashmaro');
let bigmmC = {
    kitekeyD: bigmmD.querySelector('.kitekey'),
    bodyD:bigmmD.querySelector('.bodies'),
}
bigmmC.kitekeyD.addEventListener('click', async function(){
    bigmmC.kitekeyD.classList.toggle('tap');
    bigmmC.bodyD.classList.toggle('tap');

    let gen = bigmmC.bodyD.value.trim('');
    bigmmC.bodyD.value = '';
    if(gen == '') return;
    
    if(gen.startsWith('execute,')){
        [, wanchan, wanchan2] = gen.split(',');
        if(allScripts[wanchan]) await read(allScripts[wanchan][wanchan2], 'arrayed');
        else read(gen)
    }

    if(gen.startsWith('loadfile,')){
        [, src, event] = gen.split(',');
        await loadScriptFile(src);
        read(allScripts[src][event], 'arrayed')
    };
})
//#endregion bigmashmaro

//#region rainbow
let rainB = document.querySelector('#rainbt');
let rainC = {
    tapend: 0
}
rainB.addEventListener('click', () => {
    let f = 0;
    if(rainC.tapend) f = 1, rainC.tapend = 0;
                else f = 0, rainC.tapend = 1;

    document.querySelectorAll('*').forEach(el => {
        if(f) el.classList.remove('rainback');
        if(!f) el.classList.add('rainback');
    });
});
//#endregion rainbow

//#region インベン
let invD = document.querySelector('#inventory');
let invC = {
    openD: invD.querySelector('.opener'),
    areaD: invD.querySelector('.area'),
}
function inv_open(code = null){
    invC.openD.classList.toggle('tog');
    invC.areaD.classList.toggle('tog');

    if(code == 1) invC.openD.classList.add('tog'), invC.areaD.classList.add('tog');
    if(code == 0) invC.openD.classList.remove('tog'), invC.areaD.classList.remove('tog');
}
invC.openD.addEventListener('click', connect);

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
function get(item){
    if(!item) return nicoText('アイテム名を指定してください');4
    let data = Items.find(o => o.name == item);

    let target = [...invC.areaD.querySelectorAll('.cell')].find(c => c.dataset.item == data.jpnm && +c.dataset.num < 99);
    
    if(!target){
        target = [...invC.areaD.querySelectorAll('.cell')].find(c => !c.dataset.item);
        if(!target) return nicoText('インベントリがいっぱいです');

        let img = document.createElement('img');
        img.className = 'item';
        img.src = `assets/images/items/${data.jpnm}.png`;
        img.draggable = false;
        img.dataset.item = data.jpnm;

        target.innerHTML = '';
        target.appendChild(img);
        target.dataset.item = data.jpnm;
        target.dataset.num = 1;
    }else{
        target.dataset.num = (+target.dataset.num + 1).toString();
    }

    inv_tekiou();
    nicoText(`${item}を手に入れた`)
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

function inv_tekiou(){
    for(let cell of invC.areaD.children){
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
            inv_pick(cell, e.pageX, e.pageY, 1);
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
        }
    }
});
function inv_pick(cell, px, py){
    let rowG = +css.getPropertyValue('--inv_rowG').slice(0,1); //if2桁、変えろここ
    let colG = +css.getPropertyValue('--inv_colG').slice(0,1);
    let wid = (invD.offsetWidth*98/100 - colG*8)/9;
    let hei = (invD.offsetHeight*98/100 -rowG*4)/5;
    console.log(wid, hei);
    pickItem.style.width = wid + 'px';
    pickItem.style.height = hei + 'px';
    pickItem.style.position = 'absolute';
    pickItem.style.left = px - pickItem.offsetWidth/2 + 'px';
    pickItem.style.top = py - pickItem.offsetHeight/2 + 'px';
    pickItem.style.display = 'block';
    pickItem.style.opacity = 1;
    document.body.appendChild(pickItem);
    pickItem.style.pointerEvents = 'none';

    let name = pickItem.dataset.item
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
    if(pickItem.dataset.num == 0) pickItem.remove(), pickItem = null;
}

document.addEventListener('mousemove', e => {
    if(pickItem){
        pickItem.style.left = e.pageX - pickItem.offsetWidth/2 + 'px';
        pickItem.style.top  = e.pageY - pickItem.offsetHeight/2 + 'px';
        inv_tekiou();
    }
});




//#endregion イシイ


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
    imgs:{},
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
    }
}
canV.width = window.innerWidth/2;
canV.height = window.innerWidth/2;
canC.ctx.fillStyle = '#ffffff';
canC.ctx.clearRect(0, 0, canV.width, canV.height);

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

function resizeCanvas(){
    let wid =  window.innerWidth/2;
    canV.width = wid;
    canV.height = wid;
    canC.size = wid / canC.mas;
    canC.ctx.clearRect(0, 0, canV.width, canV.height);
    draw();
}
window.addEventListener('resize', resizeCanvas);


let canI = {
    imagesLoaded: 0,
    imagesNames: {
        'maps':['0', 'a', 'b'],
        'systems':['select', 'error', 'error_nico'],
        'players':['select'],
        'objects':['tree','tree_apple','tree_kare','stone','stone_kuro','stone_hai','stone_ao','stone_aka','stone_kiro','stone_cha','stone_mido','stone_mizu'],
    },
}
canI.imagesTotal = Object.keys(canI.imagesNames).map(a => canI.imagesNames[a].length).reduce((a, b) => a + b);
Object.keys(canI.imagesNames).forEach(type => {
    canI.imagesNames[type].forEach(id => {
        let img = new Image();
        img.src = `assets/images/${type}/${id}.png`;
        img.onload = () => {
            canI.imagesLoaded++;
            if(canI.imagesLoaded == canI.imagesTotal && soundsLoaded == totalsounds) start();
        };
        img.onerror = () => {
            console.error(`Image assets/images/${type}/${id} failed to load.`);
        };
        if(!canC.imgs[type]) canC.imgs[type] = {};
        canC.imgs[type][id] = img;
    });
});



function draw(){
    //back
    for(let y = 0; y < canC.mas; y++){
        for(let x = 0; x < canC.mas; x++){
            if(!backmap[y][x]) continue;
            let img = canC.imgs['maps'][backmap[y][x]];
            if(img) canC.ctx.drawImage(img, x*canC.size, y*canC.size, canC.size, canC.size);
            else console.error(`assets/maps/${backmap[y][x]}.png is not found.`);
            
        }
    }

    //obj
    //x,y 0~9等の、現在いる"マス"のこと。sx,syは、現在いる位置のこと。yx,yyは、今向かっている位置のこと。
    for(let ob of canC.objs){
        if(ob.name == 0) continue;

        // ob.x = Math.floor(ob.sx/canC.size);
        // ob.y = Math.floor(ob.sy/canC.size);
        ob.x = ob.sx;
        ob.y = ob.sy;

        let type = ob.type;
        let img = ob.img;

        canC.ctx.drawImage(canC.imgs[type][img], ob.sx*canC.size, ob.sy*canC.size, canC.size, canC.size);
    }
}

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
let objmap = [[],[],[],[],[],[],[],[],[],[]];

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
function mapMake(){
    let tiles = ['a','b']
    let mas = canC.mas;
    for (let i = 0; i < mas; i++) {
        backmap[i] = [];
        for (let j = 0; j < mas; j++) {
            if(i == 0 && j == 0){
                // 左上だけ完全ランダム
                backmap[i][j] = tiles[Math.floor(Math.random() * tiles.length)];
            }else{
                // 重みを初期化（全種類1からスタート＝最低限の確率確保）
                let weights = new Array(tiles.length).fill(1);
    
                if(j > 0){ //左
                    let left = tiles.indexOf(backmap[i][j - 1]);
                    weights[left] += 5; // 重み補正（数値で調整）
                }
    
                if(i > 0){ //上
                    let up = tiles.indexOf(backmap[i - 1][j]);
                    weights[up] += 5;
                }
    
                // 選択
                let choice = chooseWeighted(weights);
                backmap[i][j] = tiles[choice];
            }
        }
    }

    //#region obj
    for(let i = 0; i < canC.mas; i++){
        objmap[i] = [];
        for(let j = 0; j < canC.mas; j++){
            objmap[i][j] = {
                name: 0,
            };
        }
    }
    //#endregion
    
    sendpyTx('printTx,------------------mapmaked-------------------')

    drawGrid();

    draw();
}
document.getElementById('mapmake').addEventListener('click', mapMake);

function objmake(){
    console.log('objつくるよ！')
    let num = random(3,7);
    for(let i = 0; i < num; i++){
        let mono = arraySelect(Objects.filter(o => o.appe).map(o => o.name));
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
        }

        canC.objs.push(ob);
    }
    draw();
}


function move(id, code, x, y){
    let harbor = canC.mas*canC.size;
    let ob = canC.objs[id];
    let yosouX = x, yosouY = y;

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
            draw();
            await delay(5);
        }

        await delay(100);
        ob[g.k] = g.o;
    }

    draw();
    nicoText('移動完了ed')

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
        for(let so of sozais){
            if(!probability(so.p)) continue;
            
            let item = so.name;
            await get(item);
            await delay(10);
        }
        
        ob3.name = 0;
        draw();
    }
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


function start(){
    connect();
    
    inv_make();
    resizeCanvas();

    loop = 1;
    gameloop();
}

let loop = 1;
let looped = 0;
async function gameloop(){
    looped++;
    let en = looped % 800 == 0 ? 1 : 0;

    // if(en) objmake();
    document.getElementById('mapmake').textContent = pickItem?.dataset?.item;

    if(loop) requestAnimationFrame(gameloop);
}
document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') loop = 0;


    //これ以降はinput内では機能しない
    if (document.activeElement == message) return;
    if(document.activeElement == bigmmC.bodyD) return;

    if(e.key == 'o') objmake();
    if(e.key == 'e') inv_open();
})