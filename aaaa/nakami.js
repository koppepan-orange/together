//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    const newDiv = document.createElement('div');
    newDiv.textContent = mes;
    newDiv.className = 'nicotext';
    newDiv.style.top = `calc(${random(0,100)}vh - 20px)`;
    newDiv.style.right = '0px';
    document.querySelector('body').appendChild(newDiv);
 
    requestAnimationFrame(() => {
       newDiv.style.right = `${window.innerWidth + newDiv.offsetWidth}px`; //なんか電車の問題解いてるみたいだね
    });
    
    await delay(2000); 
    newDiv.remove();
};
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
function arrayGacha(array,probability){
    if(array.length !== probability.length){throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");}
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probability[i]){
        return array[i];
        }
        random -= probability[i];
    }
};
function copy(moto) {
    if(Array.isArray(moto)) {
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
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す ==> つまり20%
};
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function countText(text){
    if(typeof text !== 'string'){text = text.toString();}
    let count = 0;
    text.split('').forEach(a => {
        if(/^[a-z_0-9]+$/.test(a)){
            count += 1;
        }else{
            count += 2;
        }
    })
    return count;
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
async function error(){
    addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    await delay(2000);
    window.open('about:blank', '_self').close();
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
let soundsNames = ['doom'] //増やしたけりゃここに増やしなねs
let totalsounds = soundsNames.length

soundsNames.forEach(num => {
    let sound = new Audio();
    sound.preload = 'auto';
    sound.src = `assets/sounds/${num}.mp3`; 
    sound.addEventListener('canplaythrough', () => {
        soundsLoaded++;
        if(soundsLoaded == totalsounds){
            nicoText('読み込みed');
            start();
        }
    }, {once: true});
    sound.onerror = () => {
        console.error(`Sound ${num} failed to load.`);
    };
    sounds[num] = sound;
}); 
//#endregion

function start(){
    connect();
    mayImport()
}

var webSocket; //ウェブソケット
var messageTextArea = document.getElementById("messageTextArea"); // HTML内のテキスト出力エリア
let message = document.getElementById("textMessage");
let sendBtn = document.querySelector('#commands .send')

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
        Senvonbary_Gyosatsu();
    };

    // 受け取ったとき
    webSocket.onmessage = function(message){
        let mes = message.data;
        read(mes);
        nicoText(mes);
        
        if(mes == 'Are you a cheater?'){
            Senvonbary_Gyosatsu();
            Senvonbary_Gyosatsu();
        }
    };
}

async function Senvonbary_Gyosatsu(){
    nicoText('血気術..千本針魚殺！！');
    await delay(1000);

    for(let i = 0; i < 23; i++){
        nicoText('<8≣≣ミ'); //魚
        nicoText('<8≣≣ミ');
        nicoText('<8≣≣ミ');
        nicoText('<8≣≣ミ');
        nicoText('<8≣≣ミ');
        nicoText('<8≣≣≣≣ミ');
        await delay(50);
    }
    //↑かわいい
}

//#region reads
let executions = {}
async function execute(arr){
   let [functionName, ...args] = arr;
   await executions[functionName](...args);
}

async function loadScriptFile(path){
   const res = await fetch(path);
   if (!res.ok) throw new Error('読み込み失敗');
   const text = await res.text();
   return text.split('\n').map(line => line.trim()).filter(Boolean); // 空行は除く
}
async function loadScriptFile(src){
   const url = `assets/txts/${src}.txt`;
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

async function read(gen){
    // logadd(`原材料: ${gen}`)
    readed.push(gen);

    let bunkatsu = gen.split('\n'); // "\n" で分割

    const stack = []; // 制御構文のネスト追跡
    let skip = false; // 現在この行を無視すべきか？

    // continueされた == その行は飛ばされた, 処理が終了した
    for(let moto of bunkatsu){
        // console.log(stack)

        let raw = moto.trim().split(','); // "," で分割
        if(raw.length == 0) continue;
        
        console.log('↓↓↓↓↓')
        let line = raw.map(token => revision(token)).filter(Boolean); //全要素をrevisionしつつ、空要素を取り除く

        for(i = 0; i < line.length; i++){
            let le = line[i];
            if(typeof le != 'string' && typeof le != 'number'){
                //array または object)
                if(le instanceof Array){
                    let num = le.length;
                    if(num == 0) line.splice(i, 1); // 空の配列は削除
                    console.log(`配列の長さ: ${num}、内容: ${le}`);

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
        console.log('↑↑↑↑↑')

        console.log(line)

        let cmd = line[0]

        if(cmd == 'if'){
            let [, left, operator, right] = line;
            let condition = false;
            switch(operator){
                case '==': condition = +left == +right; break;
                case '!=': condition = +left != +right; break;
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
        case 'log':{
            let [, text] = line;
            logadd(text);
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
                    case '=' : context[name]  = value2; break;
                    case '+=': context[name] += +value2; break;
                    case '-=': context[name] -= +value2; break;
                    case '*=': context[name] *= +value2; break;
                    case '/=': context[name] /= +value2; break;
                }
                console.log(`=> ${context[name]}`);
            }else{
                context[name] = value;
            }
            break;
        };

        case '乱数生成':{
            let [, min, max] = line.map(Number);;
            let num = random(min, max);
            console.log(`乱数生成:: ${min} ~ ${max} => ${num}`);
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
    console.log(after)

    return after.replace(/\%{(.*?)}/g, (_, v) => context[v] ?? '');
}
//#endregion

function logadd(text){
    if(text.includes('endgame')) window.open('about:blank', '_self').close();
    messageTextArea.value += `${text}\n`; // ${random(1000,2900)}-${random(1,12)}-${random(1,31)} ${random(0,23)}:${random(0,59)}:${random(0,59)} INFO
    messageTextArea.scrollTop = messageTextArea.scrollHeight;
};
function sendpy(text){
    if(IranMikans[text]) return 0;
    logadd(`Send => ${text}`);
    webSocket.send(text);
};




sendBtn.addEventListener('click', () => {
    let mes = message.value.trim();
    message.value = "";
    
    mesSend(mes)
});
function mesSend(mes){
    if(mes.startsWith('execute_')){
        console.log(mes)
        console.log(JSON.stringify(mes));
        read(mes.slice(8));
        return;
    };

    sendpy(mes)
    
    if(IranMikans[mes]){
       let serif = arraySelect(IranMikans[mes].serifs);
       addtext(`${mes}「${serif}」`)
       sendpy(`${mes}「${serif}」`)
    };
}

// サーバとの通信を切断する関数
function disconnect(){
    webSocket.close();
}

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
// document.addEventListener('mouseenter', event => {
//     let e = event.target;
//     if(!e) return 0;
//     if(!e.classList.contains('floatdiv')) return 0;
//     let list = e.querySelector('.list');
//     list.style.opacity = 1;
//     list.style.height = 'auto';
// });

// document.addEventListener('mouseleave', event => {
//     let e = event.target;
//     if(!e) return 0;
//     if(!e.classList.contains('floatdiv')) return 0;
//     let list = e.querySelector('.list');
//     list.style.opacity = 0;
//     list.style.height = '0px';
// });

//#endregion may

//#region ビッグマシュマロ（唐突）
let bigmmD = document.getElementById('bigmashmaro');
let bigmmC = {
    kitekeyD: bigmmD.querySelector('.kitekey'),
    bodyD:bigmmD.querySelector('.bodies'),
}
bigmmC.kitekeyD.addEventListener('click', () =>{
    bigmmC.kitekeyD.classList.toggle('tap');
    bigmmC.bodyD.classList.toggle('tap');

    let gen = bigmmC.bodyD.value.trim('');
    bigmmC.bodyD.value = '';
    if(gen == '') return;
    
    mesSend(gen)
})
//#endregion bigmashmaro


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
