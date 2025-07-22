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
function copy(obj){
    if (obj === null || typeof obj !== 'object') {
        return obj; // 基本型はそのまま返す
    }
    if (Array.isArray(obj)) {
        return obj.map(copy); // 配列の各要素を再帰コピー
    }
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = copy(obj[key]); // オブジェクトのプロパティを再帰コピー
        }
    }
    return result;
};
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
function setLocalStorage(key, value) {
    // オブジェクトならJSON文字列に変換して保存
    if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify({
            __type: 'object',
            data: value
        }));
    } else {
        // 文字列などはそのまま保存（ただし識別のためラップ）
        localStorage.setItem(key, JSON.stringify({
            __type: 'string',
            data: value
        }));
    }
}

function getLocalStorage(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
        const parsed = JSON.parse(item);
        return parsed.data;
    } catch (e) {
        // JSON解析に失敗した場合（旧形式など）はそのまま返す
        return item;
    }
}

function removeLocalStorage(name){
    localStorage.removeItem(name);
}
async function error(){
    addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    await delay(2000);
    window.open('about:blank', '_self').close();
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
//#region swipe
let startX, startY, endX, endY;
document.addEventListener("touchstart", (e) => {
    if(pMoving) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});
document.addEventListener("touchend", (e) => {
    if(pMoving) return;
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    const diffX = endX - startX;
    const diffY = endY - startY;

    if(30 < diffX) swiped(-1); //l
    if(diffX < -30) swiped(1); //r
});

let keys = {};
document.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key == " ") key = "space"; 
    keys[key] = true;
});
document.addEventListener("keyup", (e) => {
    let key = e.key;
    if(key == " ") key = "space";
    keys[key] = false;
});

// PC用：マウスによるスワイプ対応
document.addEventListener("keydown", e => {
    if(pMoving) return;
    let key = e.key;
    if (!e.shiftKey && (key === "ArrowRight" || key === "ArrowLeft")) return;

    if (key === "ArrowRight") swiped(1);
    if (key === "ArrowLeft") swiped(-1);
});


//#endregion

//#region page
let page = 'home';
let pagen = 0;
let Pages = ['home', 'memo', 'tool', 'login', 'chat'];
let pagenMax = Pages.length - 1;
let pMoving = 0;
function swiped(code){
    //-1 = l, 1 = r
    //console.log(`${pagen} => ${Pages[pagen + code]}`);
    if(pagen + code < 0) return;
    if(pagen + code > Pages.length-1) return;
    pagen += code;
    console.log(`${page} => ${Pages[pagen]}`);
    pageChange(code);
}
function pageAdd(name, att = null){
    //["mae", code]
    if(att == null) att = [null, null]
    if(att[0] == 'mae'){
        n = pageGet(att[1]);
        if (n != -1) Pages.splice(n - 1, 0, name);
    }
    if(att[0] == 'sel'){
        n = pageGet(att[1]);
        if (n != -1) Pages.splice(n, 0, name);
    }
    if(att[0] == 'ato'){
        n = pageGet(att[1]);
        if (n != -1) Pages.splice(n + 1, 0, name);
    }
    if(att[0] == null){
        Pages.push(name);
    }
}
function pageGet(name){
    let n = Pages.indexOf(name);
    if(n != -1) return n;
    else return console.log(`${name}は存在しねぇぜ`);
}
function pageDel(name){
    let n = Pages.indexOf(name);
    if(n != -1) Pages.splice(n, 1);
}
async function pageChange(code){
    //-1 = l, 1 = r
    pMoving = 1;
    let moto = page;
    page = Pages[pagen];
    let dir = 0;
    if(code == -1) dir = 'left';
    if(code == 1) dir = 'right';
    let ndir = dir == 'left' ? 'right' : 'left';

    let mdiv = document.getElementById(moto);
    mdiv.style[ndir] = '';
    let ndiv = document.getElementById(page);
    ndiv.style[ndir] = '';
    ndiv.style.opacity = '0';
    ndiv.style[dir] = '-100vw';
    ndiv.style.opacity = '1';

    //console.log(`ndir.. m(${mdiv.style.left}, ${mdiv.style.right}) n(${ndiv.style.left}, ${ndiv.style.right})`);
    
    requestAnimationFrame(() => {
        mdiv.style[dir] = '100vw';
        ndiv.style[dir] = '0px';
    });    

    await delay(500);

    mdiv.style.opacity = '0';
    pMoving = 0;
}
//#endregion page

//#region home

//#region リンクたちの動き
const Links = {
    'memo':{
        'files':{
            id: 'files',
            name: 'file-site',
            href: 'https://forest-inlet.github.io/tools/fileTransfer?koppepanorange',
            iframable:1,
            description: 'ファイルを送受信できるサイトです！！<br>まじですごいと思う<br>あ友達作です'
        },
        'memoWeb': {
            id: 'memoWeb',
            name: 'メモweb',
            href: 'https://memo.onl.jp/?Koppepan23',
            iframable:0,
            description: '昔使ってたところ。<br>今はmemo.html使ってるけどね'
        },
        'fileWeb': {
            id: 'fileWeb',
            name: 'ファイルweb',
            href: 'https://file.onl.jp/?Koppepan23',
            iframable:0,
            description: 'これは有用ちゃん<br>ファイルを送受信できる<br>そのうち作りたい.....'
        },
        'writebox': {
            id: 'writebox',
            name: 'writebox',
            href: 'https://write-box.appspot.com/',
            iframable:0,
            description: '簡単にhtmlのテストができるサイト<br>けどjsとcssは無効'
        },
    },
    'tool':{
        'dropbox': {
            id: 'dropbox',
            name: 'dropbox',
            href: 'https://www.dropbox.com/home',
            iframable:0,
            description: '単純に優秀な子<br>ファイルWebよりも持続性が高い<br>ログイン必須'
        },
        'roulette': {
            id: 'roulette',
            name: 'ルーレット等生成機',
            href: 'https://jp.piliapp.com/random/wheel/',
            iframable:1,
            description: '名の通り感。<br>他にも乱数とかもいける<br>暇つぶしできるかもね'
        },
        'colorSite': {
            id: 'colorSite',
            name: 'カラーサイト',
            href: 'https://www.color-site.com/',
            iframable:1,
            description: '色の種類を調べれるサイト<br>まじで優秀<br>rgbにも対応'
        },
        'mediaEdit': {
            id: 'mediaEdit',
            name: 'mp3、mp4編集サイト',
            href: 'https://123apps.com/ja/',
            iframable:1,
            description: '動画→音ができるサイト<br>いつも愛用させていただいております<br>かんしゃ〜'
        },
    },
    'make':{
        'scratch': {
            id: 'scratch',
            name: 'scratch',
            href: 'https://scratch.mit.edu/users/koppepan_orange/',
            iframable:0,
            description: '言わずもがな<br>前はここで作ってた..っていう名残<br>でもやってほしい'
        },
        'flat': {
            id: 'flat',
            name: 'flat',
            href: 'https://flat.io/ja',
            iframable:0,
            description: '音楽が比較的簡単に作れるサイト<br>ログイン必須'
        },
        'musescore': {
            id: 'musescore',
            name: 'musescore',
            href: 'https://musescore.com/user/41107809',
            iframable:0,
            description: '楽譜を調べれるサイト<br>人気な曲はありがちだけど<br>そんなそんなな曲はないことが多い'
        },
        'pixnote': {
            id: 'pixnote',
            name: 'pixnote',
            href: 'https://pixnote.net/',
            iframable:1,
            description: '簡単にドット絵が描けるサイト<br>まじで良い<br>ほんとに'
        },
        'pixlate': {
            id: 'pixlate',
            name: 'pixlate',
            href: 'https://www.pixilart.com/koppepanorange',
            iframable:0,
            description: 'ドット絵が描けるサイト2<br>ちょっと複雑だけど自由度は高め'
        },
        'thirtyDollar': {
            id: 'thirtyDollar',
            name: 'thirty dollar',
            href: 'https://thirtydollar.website/',
            iframable:0,
            description: '効果音で音楽を作れるサイト<br>internet overdoseやってる人もいたね'
        },
    },
    'study':{
        'duolingo': {
            id: 'duolingo',
            name: 'duolingo',
            href: 'https://www.duolingo.com/profile/koppepan_orange',
            iframable:0,
            description: '言語が学べるサイト<br>ﾁｮｳﾕｰﾒｲ!ﾔﾊﾞｵ'
        },
        'sushiDa': {
            id: 'sushiDa',
            name: '寿司打',
            href: 'http://typingx0.net/sushida/',
            iframable:0,
            description: 'タイピング競いの定番<br私は苦手です'
        },
        'ankey': {
            id: 'ankey',
            name: 'ankey',
            href: 'https://ankey.io/@koppepanorange',
            iframable:0,
            description: '歌詞とか色々でタイピングができるサイト<br>楽しい<br>好き'
        },
    },
    'sns':{
        'reddit': {
            id: 'reddit',
            name: 'reddit',
            href: 'https://www.reddit.com/user/koppepan_orange/',
            iframable:0,
            description: '外国掲示板定番のやつ<br>英語しかない<br>絵はほとんど転載<br>まあ常時喧嘩してるtwitterよりはマシ'
        },
        'github': {
            id: 'github',
            name: 'github',
            href: 'https://github.com/koppepan-orange',
            iframable:0,
            description: 'ほんとにいつもありがとね...<br>このサイトもあなたのおかげです'
        },
        'discord': {
            id: 'discord',
            name: 'discord',
            href: 'https://discord.com/channels/@me',
            iframable:0,
            description: 'いつもありがとな、ほんとに<br>感謝してるぜ👍🏻'
        },
        'chatWeb': {
            id: 'chatWeb',
            name: 'チャットweb',
            href: 'https://chat.onl.jp/?koppepan23',
            iframable:0,
            description: 'ちゃんと喋れるいいサイト<br>けどchat.htmlの方が良い'
        },
        'pixiv': {
            id: 'pixiv',
            name: 'pixiv',
            href: 'https://www.pixiv.net/users/93550041',
            iframable:0,
            description: '絵が見れるサイト<br>twitterよりも民度が良い<br>絵師さんの巣窟'
        },
        'twitch': {
            id: 'twitch',
            name: 'twitch',
            href: 'https://www.twitch.tv/koppepan_orange',
            iframable:0,
            description: '配信が見れるサイト<br>いつかはしてみたいねぇ....'
        },
        'instagram': {
            id: 'instagram',
            name: 'instagram',
            href: 'https://www.instagram.com/koppepan_orange/',
            iframable:0,
            description: '2番目に好きなSNS<br>けど最近投稿できてない...'
        },
        'twitter': {
            id: 'twitter',
            name: 'twitter',
            href: 'https://twitter.com/koppepan_orange',
            iframable:0,
            description: '日本で最も人気なSNS<br>色んな界隈が入り混じってて良いけど<br>気抜いたら関係ないやつらが流れ込んでくるのが難点<br>好きだけどね'
        },
        'youtube': {
            id: 'youtube',
            name: 'youtube',
            href: 'https://www.youtube.com/channel/UCFvmwWDRrVqM22icC7QLx1w',
            iframable:0,
            description: '言わずもがな〜な動画投稿サイト<br>たまーーーに投稿してる<br>のばまんさんはおすすめ'
        },
        'litLink': {
            id: 'litLink',
            name: 'lit.link',
            href: 'https://lit.link/koppepanorange',
            iframable:0,
            description: '私についてまとめてあるサイト<br>けど多分このサイトだけで事足りる'
        },
        'kiite': {
            id: 'kiite',
            name: 'kiite',
            href: 'https://kiite.jp/user/koppapan_orange',
            iframable:0,
            description: '音楽が広告なしで見れるサイト<br>ボカロのみ<br>けどニコ動基盤だから学校では無理<br>ガッデム..ってやつ？<br>ベアさんといよわさんはおすすめ'
        },
        'magicalDraw': {
            id: 'magicalDraw',
            name: 'MagicalDraw',
            href: 'https://draw.kuku.lu/pchat.php?hash=898857247',
            iframable:0,
            description: '俗にいう"絵チャ"<br>友達と合作ができる<br>楽しい'
        },
    },
    'game':{
        'cybercode': {
            id: 'cybercode',
            name: 'cybercodeonline',
            href: 'https://cybercodeonline.com',
            iframable:0,
            description: '硬派で古き良きMMORPG<br>まじで楽しい..いや人によるかも<br>AFKが充実してて好き'
        },
        'browserGame': {
            id: 'browserGame',
            name: 'browsergame',
            href: 'https://sdin.jp/browser/',
            iframable:0,
            description: '色んなゲームで遊べるサイト<br>カジノ系列もあるよ<br>確かブロック貫通'
        },
        'arealMe': {
            id: 'arealMe',
            name: 'ARealMe',
            href: 'https://www.arealme.com/',
            iframable:0,
            description: '色んなテストができるサイト<br>クリック速度とか反射神経とか<br>テストサイトではないです。'
        },
        'unityroom': {
            id: 'unityroom',
            name: 'unityroom',
            href: 'https://unityroom.com/new_arrivals',
            iframable:0,
            description: '色んな人の作ったゲームで遊べるサイト<br>"ゆめきゃわ"みたいなやつはおすすめ'
        }
    },
};

Object.keys(Links).forEach(type => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = type;
    details.appendChild(summary);
    details.id = `${type}tachi`;
    document.querySelector('#home .links').appendChild(details);

    Object.keys(Links[type]).forEach(key => {
        const link = Links[type][key];
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.name;
        a.className = 'hasd';
        a.target = '_blank';
        a.setAttribute('data-description', link.description);

        a.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            //リンクをコピーさせる
            navigator.clipboard.writeText(link.href);
            nicoText('リンクをコピーしました');
        })
        
        document.getElementById(`${type}tachi`).appendChild(a);
        document.getElementById(`${type}tachi`).appendChild(document.createElement('br'));
    });
    document.getElementById(`${type}tachi`).appendChild(document.createElement('br'));
})
//#endregion

//#region rakuraku-memo
let numberOfMemo = 4;
function memoRead(){
    numberOfMemo = +getLocalStorage("numberOfMemo")??4;
    console.log(`メモの数は${numberOfMemo}個やで`);
    for(let i = 1; i <= numberOfMemo; i++){
        let memo = getLocalStorage(`memo${i}`);
        let memodiv = memoCreate(memo, i);
        document.querySelector('#home .memos').appendChild(memodiv);
    }
    let memoAdd = memoAddCreate();
    document.querySelector('#home .memos').appendChild(memoAdd);
}
function memoCreate(memo, i){
    // if(!memo){
    //     memo = {
    //         title: `error`,
    //         text: "error",
    //     } 
    // }
    let div = document.createElement('div');
    div.className = 'memo';
    div.id = `memo${i}`;
    //dataにメモ名も保存..頼んだ
    div.dataset.num = i;

    let title = document.createElement('div');
    title.className = 'title';
    title.innerText = memo?.title??'error';
    title.setAttribute('contenteditable', 'true');
    div.appendChild(title);

    let text = document.createElement('div');
    text.className = 'text';
    text.innerText = memo?.text??'error';
    text.setAttribute('contenteditable', 'true');
    div.appendChild(text);

    let deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'M';
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(`memo${i}`);
        div.remove();

        document.querySelectorAll('.memo').forEach(memo => {
            let memoNum = +memo.getAttribute('data-num')
            if(memoNum > i){
                memo.setAttribute('data-num', memoNum - 1);
                memo.querySelector('.title').innerText = `memo${memoNum-1}`;
                memo.querySelector('.text').innerText = getLocalStorage(`memo${memoNum}`);
                setLocalStorage(`memo${memoNum-1}`, getLocalStorage(`memo${memoNum}`));
            }
        });
        
        numberOfMemo = +numberOfMemo - 1;
        setLocalStorage("numberOfMemo", +numberOfMemo);
    });
    div.appendChild(deleteButton);

    div.addEventListener('input', () => {
        setLocalStorage(`memo${i}`, {
            num: i,
            title: document.getElementById(`memo${i}`).querySelector('.title').innerText,
            text: document.getElementById(`memo${i}`).querySelector('.text').innerText
        });
    });

    return div;
}
function memoAddCreate(){
    const memoAdd = document.createElement('div');
    memoAdd.className = 'add';
    memoAdd.id = 'memoAdd';
    memoAdd.innerText = '+';
    memoAdd.addEventListener('click', () => {
        memoAdd.remove();
        numberOfMemo = +numberOfMemo + 1;
        setLocalStorage("numberOfMemo", +numberOfMemo);
        let memodiv = memoCreate('', numberOfMemo);
        document.querySelector('#home .memos').appendChild(memodiv);  
        let memoAdd2 = memoAddCreate();
        document.querySelector('#home .memos').appendChild(memoAdd2);
    })
    return memoAdd;
}
//#endregion

//#region iframeのお話
let NowLinkframe = 1;
function LinkframeGo(){
    document.getElementById(`Linkframe${NowLinkframe}`).setAttribute('data-src', document.getElementById("LinkInput").value);
    document.getElementById(`Linkframe${NowLinkframe}`).src = document.getElementById("LinkInput").value;
    nicoText('うぇいとふぉあな〜う'); //好きな言葉ランキング上位"wait for now"
}
document.querySelector('#LinkSelect').addEventListener('change', event =>{
    NowLinkframe = event.target.value;
    let Link = `Linkframe${NowLinkframe}`;

    document.querySelector('#Linkframe1').style.display = 'none';
    document.querySelector('#Linkframe2').style.display = 'none';
    document.querySelector('#Linkframe3').style.display = 'none';
    document.querySelector('#Linkframe4').style.display = 'none';

    document.getElementById(Link).style.display = 'block';

    document.querySelector('#LinkInput').value = document.getElementById(`Linkframe${NowLinkframe}`).getAttribute('data-src');
})

document.querySelector('#linkSite .iframe-full').addEventListener('click', event => {
    event.preventDefault();
    console.log('clicked~~~'+NowLinkframe);
    document.querySelector(`#Linkframe${NowLinkframe}`).requestFullscreen();
    // iframe.webkitRequestFullscreen();
})
//#endregion

//#endregion home

//#region memo
const bodyTextarea = document.querySelector('#memo .text');
const titleInput = document.querySelector('#memo .title');
const searchButton = document.querySelector('#memo .search');

titleInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); // 改行を防ぐ
    }
})

bodyTextarea.addEventListener('input', () => {
    if(username !== 'no name'){
        const title = titleInput.innerText.trim();
        const body = bodyTextarea.innerText;
        database.ref(`users/${username}/memo/${title}`).update({body:body});
    }
});

searchButton.addEventListener('click', () => {
    if(username !== 'no name'){
        const title = titleInput.innerText;
        database.ref(`users/${username}/memo/${title}`).once('value').then((snapshot) => {
            bodyTextarea.innerText = snapshot.val()?.body || '';
        });
    }else{
        bodyTextarea.innerText = 'ログインしてね！！  話はそれからだよ☆'
    }
});
//#endregion memo

//#region tool

//#region 文字数カウント
const Ccount = document.getElementById('count');
const Cin = Ccount.querySelector('.in');
const Cout = Ccount.querySelector('.out');
Cin.addEventListener('input', () => {
    let text = Cin.value;
    let count = text.length;
    let size = arraySize(text.split(''))
    Cout.textContent = `文字数${count} 種類${size}`;
});
//#endregion

//#region アナグラム生成器
let Aanag = document.getElementById('anagram');
let Ain = Aanag.querySelector('.in');
let Asend = Aanag.querySelector('.send');
let Aout = Aanag.querySelector('.out');
Asend.addEventListener('click', () => {
    let text = Ain.value;
    let res = anagramSaySay(text);
    Aout.innerHTML = res;
});
//#endregion

//#region 偏差値計算するやつ
let Hen = {
    valI: document.querySelector('#tool .Hen .input'),
    aveI: document.querySelector('#tool .Hen .average'),
    sumB: document.querySelector('#tool .Hen .sum'),
    outD: document.querySelector('#tool .Hen .output')
};
Hen.sumB.addEventListener('click', () => {
    let val = +Hen.valI.value;
    let ave = +Hen.aveI.value;
    let res = ((val - ave) / 18 * 10) + 50;
     //18の部分は変更可能。得点分布だから一点集中なら1とかなんじゃないかな
    res *= 100;
    res = Math.round(res);
    res /= 100;
    Hen.outD.textContent = res;
})
//#endregion

//#region カタカナランダム言葉生成器
let RanKana = {
    togB: document.querySelector('#tool .RanKana .toggle'),
    tog: 'stan',
    togs: [
        {
            name: 'stan',
            color: '#b5d9ff',
            desc: 'もっともオーソドックス',
            words: ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン','ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ','パ','ピ','プ','ペ','ポ']
        },
        {
            name: 'more',
            color: '#ffddcc',
            desc: '切れ音や長音、小文字を含むやつ',
            words: ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン','ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ','パ','ピ','プ','ペ','ポ','ァ','ィ','ゥ','ェ','ォ','ッ','ャ','ュ','ョ','ー'] 
        },
    ],
    actB: document.querySelector('#tool .RanKana .active'),
    inpI: document.querySelector('#tool .RanKana .input'),
    outD: document.querySelector('#tool .RanKana .output'),
    ove: 0,
    oveB: document.querySelector('#tool .RanKana .over'),
}
RanKana.togB.addEventListener('click', () => {
    let val = RanKana.togB.textContent;
    let arr = RanKana.togs.map(a => a.name);
    console.log(arr);
    let valn = arr.indexOf(val);
    let ele = RanKana.togs[valn];
    let nexn = (valn + 1) % RanKana.togs.length;
    let nexele = RanKana.togs[nexn];

    RanKana.tog = nexele.name;
    RanKana.togB.textContent = nexele.name;
    RanKana.togB.style.backgroundColor = nexele.color;
    RanKana.togB.setAttribute('data-description', nexele.desc);
})
RanKana.oveB.addEventListener('click', () => {
    console.log(RanKana.ove)
    if(RanKana.ove == 0){
        RanKana.ove = 1;
        RanKana.oveB.style.backgroundColor = '#a2ffa8';
    }else{
        RanKana.ove = 0;
        RanKana.oveB.style.backgroundColor = '#c4c4c4';
    }
})
RanKana.actB.addEventListener('click', () => {
    let ele = RanKana.togs.find(a => a.name == RanKana.tog);
    let words = ele.words;
    let val = RanKana.inpI.value
    if(val == '' || val <= 0) return nicoText('死ね');

    let outputs = [];
    RanKana.outD.innerHTML = '';    
    for(let i = 0; i < 10; i++){
        if(RanKana.ove == 0){
            let res = arrayShuffle(words).slice(0, val);
            res = res.join('');
            if(outputs.includes(res)){
                i -= 1;
                continue;
            }
            outputs.push(res);
        }   
        if(RanKana.ove == 1){
            let res = [];
            for(let i = 0; i < val; i++){
                let ares = arraySelect(words);
                res.push(ares);
            }
            res = res.join('');
            if(outputs.includes(res)){
                i -= 1;
                continue;
            }
            outputs.push(res);
        }
    }
    RanKana.outD.innerHTML = outputs.join('<br>');
})
//#endregion

//#region マリパのハチの巣のやつ
let COUNTx = 0;
let COUNTope = 0;
let COUNTgamebar = 0;
const COUNTgamebars = ['##@','####@','######@','########@','##########@','############@','##############@'];
const COUNTTips = ['パン工場〜','だから愛だよ','ひとえに、愛だよ','うにょ〜ん','異議あり!','ウロボロスの弟、ウヌボロス','もろたで四輪工藤','小籠包と小論文のハーフ、ショウロンプォゥン','なんだかすごそう建武の新政',"しのごの言わずにoh no, you know it's a pizza"];
function COUNTGameStart(){
    COUNTgamebar = COUNTgamebars[Math.floor(Math.random() * COUNTgamebars.length)];
    document.getElementById("COUNTGameBar").textContent = COUNTgamebar;
    document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTMove1()">1</button>   <button onclick="COUNTMove2()">2</button>';
    COUNTx = COUNTgamebar.length - 1;
    document.getElementById("COUNTLog").textContent = 'gamestart!今回は' + COUNTx + 'の長さです!!';
    COUNTope = 1;
}
async function COUNTMove1(){
    if(COUNTope == 1){
    COUNTope = 0;
    document.getElementById("COUNTButton").innerHTML = '';
    document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTMove1()">1</button>   <button onclick="COUNTMove2()">2</button>';
        if (COUNTgamebar.length == 1){
        COUNTGameOver();
        COUNTope = 0;
        } else {
            COUNTgamebar = COUNTgamebar.slice( 1 );
            document.getElementById("COUNTGameBar").textContent = COUNTgamebar;
            COUNTx -= 1;
            document.getElementById("COUNTLog").textContent = '1が取り除かれ,残りは' + COUNTx + '個になりました!';
            await new Promise(COUNTresolve => setTimeout(COUNTresolve, 300));
            COUNTope = 1;
            document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTMove1()">1</button>   <button onclick="COUNTMove2()">2</button>';
    }
    }
}
async function COUNTMove2(){
    if(COUNTope == 1){
    COUNTope = 0;
    document.getElementById("COUNTButton").innerHTML = '';
    if (COUNTgamebar.length == 1){
    COUNTope = 0;
    COUNTGameOver();
    } else {
    COUNTgamebar = COUNTgamebar.slice( 1 );
    document.getElementById("COUNTGameBar").textContent = COUNTgamebar;
    COUNTx -= 1;
    document.getElementById("COUNTLog").textContent = '1が取り除かれ,残りは' + COUNTx + '個になりました!';
    await new Promise(COUNTresolve => setTimeout(COUNTresolve, 300));
    if (COUNTgamebar.length == 1){
        COUNTope = 0;
        COUNTGameOver();
    } else {
        COUNTgamebar = COUNTgamebar.slice( 1 );
        document.getElementById("COUNTGameBar").textContent = COUNTgamebar;
        COUNTx -= 1;
        document.getElementById("COUNTLog").textContent = '1が取り除かれ,残りは' + COUNTx + '個になりました!';
        await new Promise(COUNTresolve => setTimeout(COUNTresolve, 300));
        COUNTope = 1;
        document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTMove1()">1</button>   <button onclick="COUNTMove2()">2</button>';
        }
    }
    }
    }
function COUNTGameOver(){
    document.getElementById("COUNTLog").textContent = 'gameover!';
    document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTGameReset()">reset</button>';
    }
function COUNTGameReset(){
    document.getElementById("COUNTGameBar").textContent = '';
    document.getElementById("COUNTLog").textContent = COUNTTips[Math.floor(Math.random() * COUNTTips.length)];
    document.getElementById("COUNTButton").innerHTML = '<button onclick="COUNTGameStart()">start</button>';
    COUNTx = 0;
    }
//#endregion

//#region 田中のレースのあれ
let RACEgamenow = 0;
let RACEtimer = 0;
let RACEnumber = ['one', 'two', 'three', 'four'];
let RACEtime = {
    one: 1000,
    two: 1000,
    three: 1000,
    four: 1000
};
let RACEloc = {
    one: 0,
    two: 0,
    three: 0,
    four: 0
};
let RACEgamebar = {
    one: ['@', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '='],
    two: ['@', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '='],
    three: ['@', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '='],
    four: ['@', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '='],
};
let RACEcode = {
    one: 0,
    two: 0,
    three: 0,
    four: 0
};
let RACEcodelist = {
    one: ['a', 'a', 'a', 'a', 'e', 'b', 'b', 'c'],//最善の策(?)
    two: ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b'],//慎重者の指輪
    three: ['e', 'e', 'b', 'b', 'b', 'b', 'c', 'c'],//大博打
    four: ['a', 'a', 'a', 'a', 'b', 'b', 'd', 'd'] //害悪鳥
}; // a..前進 b..後退 c..スタン(自分) d..スタン(!自分) e..加速
let RACEstanother = {
    one: 0,
    two: 0,
    three: 0,
    four: 0
};

function RACEtekiou(){
    document.querySelector('#RACEoutput-one').textContent   = RACEgamebar['one'].join('');
    document.querySelector('#RACEoutput-two').textContent   = RACEgamebar['two'].join('');
    document.querySelector('#RACEoutput-three').textContent = RACEgamebar['three'].join('');
    document.querySelector('#RACEoutput-four').textContent  = RACEgamebar['four'].join('');
}
function RACEmove(num, code) {
    switch (code) {
        case 'a':
            RACEgamebar[num][RACEloc[num]] = '=';
            RACEgamebar[num][RACEloc[num] + 1] = '@';
            break;
        case 'b':
            if (RACEloc[num] > 0) {
                RACEgamebar[num][RACEloc[num]] = '=';
                RACEgamebar[num][RACEloc[num] - 1] = '@';
            }
            break;
        case 'c':
            RACEgamebar[num][RACEloc[num]] = '=';
            RACEgamebar[num][RACEloc[num] + 3] = '@';
            break;
    }
}

function RACEbarup(num, angle) {
    RACEloc[num] = RACEgamebar[num].indexOf('@');
    if (angle == 1) {
        RACEmove(num, 'a');
    } else if (angle == 2) {
        RACEmove(num, 'b');
    } else if (angle == 3) {
        RACEmove(num, 'c');
    }
    RACEtekiou();            
    if (RACEgamebar[num].indexOf('@') == RACEgamebar[num].length - 1) {
        RACEgamenow = 0;
        document.querySelector('#RACElog').textContent = num + 'の勝利！！わーー！！！';
    }
}

async function RACEgamestart() {
    RACEgamenow = 1;
    RACEbarup('one', 0); RACEbarup('two', 0); RACEbarup('three', 0); RACEbarup('four', 0);
    RACEtimer = 3;
    document.querySelector('#RACElog').textContent = RACEtimer;
    await delay(300);
    RACEtimer = 2;
    document.querySelector('#RACElog').textContent = RACEtimer;
    await delay(300);
    RACEtimer = 1;
    document.querySelector('#RACElog').textContent = RACEtimer;
    await delay(300);
    RACEtimer = 'Start!';
    document.querySelector('#RACElog').textContent = RACEtimer;
    await delay(300);
    RACEtimer = 0;
    document.querySelector('#RACElog').textContent = '';
    RACELoopct = setInterval(RACEchangerandom, 100); // ゲーム終了時に処理を止める用
    await delay(500);
    RACEgameloop('one'); RACEgameloop('two'); RACEgameloop('three'); RACEgameloop('four');
}

async function RACEgameloop(num) {
    if (RACEgamenow == 1) {
        RACEcode[num] = RACEcodelist[num][Math.floor(Math.random() * RACEcodelist[num].length)];//いつものランダムのやつ
        switch (RACEcode[num]) {
            case 'a':
                RACEbarup(num, 1);
                break;
            case 'b':
                RACEbarup(num, 2);
                break;
            case 'c':
                RACEgamebar[num][RACEgamebar[num].indexOf('@')] = '囧';
                RACEtekiou();
                await delay(1000);
                RACEgamebar[num][RACEgamebar[num].indexOf('囧')] = '@';
                RACEtekiou();
                break;
            case 'd':
                await RACEstanOthers(num);
                break;
            case 'e':
                RACEbarup(num, 3);
                break;
        }
        if (RACEstanother[num] == 1) return;
        setTimeout(() => RACEgameloop(num), RACEtime[num]);
    }
}

function RACEchangerandom() {
    RACEtime.one = Math.floor(Math.random() * 1000) + 500; // 500~1500
    RACEtime.two = Math.floor(Math.random() * 1000) + 500; // 500~1500
    RACEtime.three = Math.floor(Math.random() * 1000) + 500; // 500~1500
    RACEtime.four = Math.floor(Math.random() * 1000) + 500; // 500~1500
    RACEloc['one'] = RACEgamebar['one'].indexOf('@');
    RACEloc['two'] = RACEgamebar['two'].indexOf('@');
    RACEloc['three'] = RACEgamebar['three'].indexOf('@');
    RACEloc['four'] = RACEgamebar['four'].indexOf('@');
}

async function RACEstanOthers(num) {
    let others = RACEnumber.filter(n => n !== num);
    RACEstanother[others[0]] = 1;
    RACEstanother[others[1]] = 1;
    RACEstanother[others[2]] = 1;
    document.querySelector('#RACElog').textContent = 'スタンしています！';
    await delay(1500);
    RACEstanother[others[0]] = 0;
    RACEstanother[others[1]] = 0;
    RACEstanother[others[2]] = 0;
    document.querySelector('#RACElog').textContent = '';
    RACEgameloop(others[0]);
    RACEgameloop(others[1]);
    RACEgameloop(others[2]);
}
//#endregion

//#region 連打するやつ
let count = 0;
let startTime;
let duration = 5000;
document.querySelector('#start-btn').addEventListener('click', () => {
    count = 0;
    startTime = Date.now();
    document.querySelector('#result').textContent = 'pless Enter(nandomo)';
    document.querySelector('#start-btn').style.display = 'none';
    document.addEventListener('keyup', countRensha);
    setTimeout(() => {
        document.removeEventListener('keyup', countRensha);
        document.querySelector('#result').textContent = `結果: ${count} 回`;
        document.querySelector('#start-btn').style.display = 'block';
    }, duration);
});
function countRensha(event) {if (event.key === 'Enter') {count++;}}
function RENDAchange(time) {
    document.getElementById(`RENDABUTTON${duration}`).style.color = '#000000';
    document.getElementById(`RENDABUTTON${time}`).style.color = '#23aa23';
    duration = time;
}
//#endregion

//#region WiiPartyのコックのあれ
let CGx = 0;
let CGy = 0;
let CGAllow = 0;
let CGArea = document.querySelector('#CookingGameArea');
let CGList = document.querySelector('#CookingGameList');
let CGLog = document.querySelector('#CookingGameLog');
let CGStart = document.querySelector('#CookingGameStart');
let CGListArray = [];
let CGListArrayAppear = [];
let CGListArrays = [
    ['1','4','2','3','5','4','2','3','4','6'],
    ['3','6','4','2','5','5','6','1','3','2'],
    ['2','1','3','5','4','3','5','6','2','4'],
    ['5','4','6','3','2','2','3','5','6','1'],
    ['6','3','5','1','4','1','5','3','4','2'],
    ['4','2','1','6','3','6','1','4','3','5'],
    ['5','6','3','4','2','4','3','6','5','1'],
    ['3','5','6','2','1','2','6','5','3','4']
];

CGArea.style.display = 'none';
async function Start(){
    CGStart.style.display = 'none'
    CGArea.style.display = 'block'
    CGListArray = CGListArrays[Math.floor(Math.random() * CGListArrays.length)]
    CGListArrayAppear = ['0','0','0','0','0','0','0','0','0','0']
    let firstHalf = CGListArrayAppear.slice(0, CGListArrayAppear.length / 2);
    let secondHalf = CGListArrayAppear.slice(CGListArrayAppear.length / 2);
    CGList.innerHTML = firstHalf.join(',') + '<br>' + secondHalf.join(',');
    CGx = 0;CGy = 0;
    CGLog.textContent = '色付いたやつを覚えてね〜？';
    for(nanka of CGListArray){
        document.querySelector('#CookingGameChoose-' + nanka).style.backgroundColor = 'yellow';
        await delay(800);
        document.querySelector('#CookingGameChoose-' + nanka).style.backgroundColor = 'aliceblue';
    }
    CGLog.textContent = 'じゃ〜〜〜ど〜ぞ！';
    CGAllow = 1

}
function CookingGameChoeese(num){
    if(CGAllow == 1){
        if(CGListArray.indexOf(num) >= 0){
        CGx = CGListArray.indexOf(num);
        CGListArray[CGx] = '0';
        CGListArrayAppear[CGx] = num;
        let firstHalf = CGListArrayAppear.slice(0, CGListArrayAppear.length / 2);
        let secondHalf = CGListArrayAppear.slice(CGListArrayAppear.length / 2);
        CGList.innerHTML = firstHalf.join(',') + '<br>' + secondHalf.join(',');
        CGLog.textContent = 'ナーイス！！';
    } else {
        CGLog.innerHTML = `あいミス〜〜〜〜〜乙〜〜〜〜〜〜〜〜〜<br>あ、これ答えね(0は正解したとこ)<br>${CGListArray.join(',')}`;
        CGAllow = 0;
    }
    }
}
//#endregion

//#endregion tool

//#region login //ワルシャワログイン機構
const firebaseConfig = {
    apiKey: "AIzaSyBN5V_E6PzwlJn7IwVsluKIWNIyathhxj0",
    authDomain: "koppepan-orange.firebaseapp.com",
    databaseURL: "https://koppepan-orange-default-rtdb.firebaseio.com",
    projectId: "koppepan-orange",
    storageBucket: "koppepan-orange.appspot.com",
    messagingSenderId: "730150198097",
    appId: "1:730150198097:web:076a074a3d406053155170",
    measurementId: "G-MYKJWD203Z"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
let username = 'no name';
let usersRef = null;

let loginD = document.getElementById('login')
let logF = loginD.querySelector('.form');
let logUsername = logF.querySelector('.username');
let logPassword = logF.querySelector('.password');
let logS = logF.querySelector('.send');
async function login(){
    setLocalStorage("banned", 0);
    usersRef = database.ref(`users/${username}`);

    nicoText('ログイン中...')
    await delay(500);
    logF.style.opacity = 0;
    logF.style.userSelect = 'none';
    
    //ここにloginのpage消す処理を
    loginD.style.display = 'none';
    pageDel('login');

    updateUI();

    usersRef.update({
        status: 'online'
    });

    selectRoom();
}

logS.addEventListener('click', () => {
    let kusername = logUsername.value;
    let kpassword = logPassword.value;

    let kariusersRef = database.ref(`users/${kusername}`);
    kariusersRef.once('value', function(snapshot){
        if(snapshot.exists()){
            if(snapshot.val().password == kpassword){
                username = kusername
                setLocalStorage("username", username)
                login();
            }
        }else{
            username = kusername
            let usersRef = database.ref(`users/${username}`);
            usersRef.update({
                password:kpassword,
                banned: 0,
                blocked: [],
            })
            nicoText('ようこそ');
            setLocalStorage("username", username)
            login();
        }
    })
})

function autoLogin(){
    username = getLocalStorage("username");
    if(username){
        console.log("自動ログインしました");
        login();
    }else{
        console.log("ログインしてください");
        username = 'no name';
    }
}

document.querySelector('#logout').addEventListener('click', logout);
function logout(){
    nicoText("ログアウトしました");
    username = 'no name';
    removeLocalStorage("username");
    
    pageAdd('login', ['ato', 'tool']);

    logUsername.value = '';
    logPassword.value = '';
}

window.addEventListener('beforeunload', () => {
    usersRef.once('value').then(function(snapshot) {
        if(snapshot.exists()){
            usersRef.update({
                status: 'offline'
            });
        }
    })
});

function updateUI(){
    logUsername.textContent = username;
}
//#endregion

//#region chat
let nickname = 'no name';
let AnonymousName = "はじめまして名無しです";
let maxMessage = 20;
let userData = null;

let sendButton = document.querySelector('#send-button');
let MessageIn = document.querySelector('#message-input');
let Messages = document.querySelector('#messages');
let roomSelect = document.querySelector('#room-select');
let room = roomSelect.value; //1
let messagesRef = database.ref(`rooms/${room}/messages`);

//rakuraku-memoのeditableを見習って
MessageIn.addEventListener('keypress', function(e) {
    if(e.key == 'Enter'){
        e.preventDefault();
        if(!e.shiftKey){
            sendButton.click();
        }else{
            MessageIn.value += '<br>';
        }
    }
});

let Stamps = [
    {
        name:'1',
        type:'png',
    },
    {
        name:'2',
        type:'png',
    },
    {
        name:'3',
        type:'png',
    },
    {
        name:'4',
        type:'png',
    },
    {
        name:'5',
        type:'png',
    },
    {
        name:'6',
        type:'png',
    },
    {
        name:'7',
        type:'png',
    },
    {
        name:'8',
        type:'png',
    },
    {
        name:'hownice',
        type:'png',
    },
    {
        name:'koresuki',
        type:'png',
    },
    {
        name:'ohitashi',
        type:'png',
    },
    {
        name:'spacecat',
        type:'png',
    },
    {
        name:'youaresick',
        type:'png',
    },
    {
        name:'nasanao',
        type:'png',
    },
    {
        name:'4coma1',
        type:'png',
    },
    {
        name:'4coma2',
        type:'png',
    },
    {
        name:'maxwell1',
        type:'gif',
    },
    {
        name:'maxwell2',
        type:'gif',
    },
    {
        name:'hello',
        type:'png',
    },
    {
        name:'gdng',
        type:'png',
    }
]
let stampawait = 0;
function stampRead(){
    Stamps.forEach(a => {
        let name = a.name;
        let type = a.type;
        let src = `assets/stamps/${name}.${type}`;
        let div = document.createElement('div');
        div.className = 'item';
        div.addEventListener('click', () => {
            if(stampawait == 1) return;
            if(room == 'debug') return;
            let Musername = username;
            let Mtext = `<img src='${src}' width="80" height="80"/>`;
            messagesRef.push({
                text: Mtext,
                nickname: nickname,
                username: Musername,
                timestamp: formatDate(new Date())
            });
            stampawait = 1;
            window.setTimeout(StampAwait, 100);//10s
        })

        let img = document.createElement('img');
        img.src = src;
        div.appendChild(img);
        document.getElementById('stamps').appendChild(div);
    })
}
function StampAwait(){stampawait = 0;}

let Commands = {
    'clear':{
        name:'clear',
        process:function(message){
            database.ref('rooms/'+room).remove();
            setTimeout(displayAllMessages, 200);
            nicoText('すべてのメッセージが消去されました。');
            nicoText('あなたがやったのです。反省してね♡')
            nicoText('草');nicoText('草');
            return null;    
        }
    },
    'reload':{
        name:'reload',
        process:function(message){
            window.location.reload();   
            return null;
        }
    },
    'online':{
        name:'online',
        process:function(message){
            usersRef.update({
                status: 'online'
            });
            return null;
        }
    },
    'offline':{
        name:'offline',
        process:function(message){
            usersRef.update({
                status:'offline'
            });
            return null;
        }
    },
    'nico':{
        name:'nico',
        process:function(message){
            nicoText(message);
            return null;
        }
    },
    'rename':{
        name:'rename',
        process:function(message){
            nickname = message;
            return null;
        }
    },
    'nanj':{
        name:'nanj',
        process:function(message){
            AnonymousName = message;
            return null;
        }
    },
    'ban':{
        name:'ban',
        process:function(message){
            database.ref(`users/${message}`).update({
                banned:1
            })
            nicoText('Nice Job!')
            return null;
        }
    },
    'unban':{
        name:'unban',
        process:function(message){
            database.ref(`users/${message}`).update({
                banned:0
            })
            nicoText('Good Job!')
            return null;
        }
    }
};

let MessageSendE;
function selectRoom(){
    messagesRef.off();
    sendButton.removeEventListener('click', MessageSendE);
    room = roomSelect.value;
    messagesRef = database.ref(`rooms/${room}/messages`);
    Messages.innerHTML = '';

    // メッセージ送信
    MessageSendE = sendButton.addEventListener('click', async function(){
        let message = MessageIn.value;
        let Musername = username;
        if(message.trim() !== ''){
            //commands
            if (message.startsWith('/')) {
                let matched = Object.keys(Commands).some(command => {
                    if (message.startsWith(`/${command}`)) {
                        let mes = message.replace(`/${command} `, '');
                        let result = Commands[command].process(mes);
                        console.log(result, !result);
                        if(!result){
                            MessageIn.value = '';
                            return true;
                        }
                        return true;
                    }
                    return false;
                });
            
                if(!matched){
                    nicoText('多分なんかコマンドミスってるで、君')
                }else{
                    return;
                }
            }

            messagesRef.push({
                text: message,
                nickname: nickname,
                username: Musername,
                timestamp: formatDate(new Date())
            });
            MessageIn.value = '';   
        }
    });

    // 新しいメッセージが追加された時のみ、そのメッセージを追加表示
    messagesRef.on('child_added', async function(snapshot){
        let uRef = database.ref(`users/${username}/banned`)
        uRef.on('value', function(ss) {
            //uRef = ss.val();
            uRef = 0; //一旦のやつ
            if(uRef == 1){ 
                nicoText('エラーが発生しました。')
                logout();
            }else{
                let messageData = snapshot.val();
                let messageElement = makeNanjPost(messageData,snapshot.key);
                messageElement.setAttribute('data-dokosan','追加の読み込み')
                let existing = Messages.querySelector(`.message[data-key="${snapshot.key}"]`);
                if(existing){
                    console.log("重複してますね...このバグ治したい:", snapshot.key);
                    return;
                }
                Messages.appendChild(messageElement);

                messagesRef.on('value', function(snapshot) {
                    if (snapshot.numChildren() > maxMessage) {
                        let firstMessageKey = Object.keys(snapshot.val())[0];
                        messagesRef.child(firstMessageKey).remove();
                    }
                });

                Messages.scrollTop = Messages.scrollHeight;
            }
        });
    });

    messagesRef.once('value', function(snapshot) {
        displayAllMessages();
    });    
}
function displayAllMessages(){
    room = roomSelect.value;
    Messages.innerHTML = '';

    // データベースから全てのメッセージを取得
    messagesRef.once('value', function(pealentsnapshot) {
        pealentsnapshot.forEach(function(snapshot) {
            let uRef = database.ref(`users/${username}/banned`)
            uRef.on('value', function(ss) {
                uRef = ss.val();
                if(uRef == 1){
                    nicoText('エラーが発生しました。')
                    logout()
                }else{
                    let messageData = snapshot.val();
                    
                    let messageElement = makeNanjPost(messageData,snapshot.key)
                    messageElement.setAttribute('data-dokosan','最初の読み込み')
                    let existing = document.querySelector(`#messages .message[data-key="${snapshot.key}"]`);
                    if(existing){
                        console.log("重複してますね...このバグ治したい:");
                        return;
                    }
                    Messages.appendChild(messageElement);

                    messagesRef.on('value', function(snapshot) {
                        if (snapshot.numChildren() > maxMessage) {
                            let firstMessageKey = Object.keys(snapshot.val())[0];
                            messagesRef.child(firstMessageKey).remove();
                        }
                    });

                    Messages.scrollTop = Messages.scrollHeight;
                }
            });
        });
    });
}


function makeNanjPost(messageData,key){
    let messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.setAttribute('data-key', key);

    let Musername = messageData.username;
    let Mnickname = messageData.nickname;
    let Mtimestamp = messageData.timestamp;
    let Mtext = messageData.text;

    if(room == 'Anonymous-1' || room == 'Anonymous-2' || room == 'Anonymous-3'){
        Mnickname = AnonymousName;
    }

    let usernameElement = document.createElement('span');
    usernameElement.className = 'username';
    usernameElement.textContent = Mnickname
    usernameElement.addEventListener('contextmenu', event => {
        event.preventDefault();
        nicoText(`送信者:${Musername}`);
    })
    messageElement.appendChild(usernameElement);

    let timestampElement = document.createElement('span');
    timestampElement.className = 'timestamp';
    timestampElement.textContent = '  —' + Mtimestamp;
    messageElement.appendChild(timestampElement);

    let copyButton = document.createElement('button');
    copyButton.textContent = '❐';
    copyButton.addEventListener('click', function(){
        navigator.clipboard.writeText(Mtext);
    });
    messageElement.appendChild(copyButton);

    if(username == messageData.username){
        let editButton = document.createElement('button');
        editButton.textContent = '✎';
        editButton.addEventListener('click', function(){
            Mtext = prompt('メッセージを編集', Mtext);//MessageIn.value;
            textElement.innerHTML = Mtext;
            const ImadakeRef = database.ref('rooms/'+room+'/messages/'+snapshot.key);
            ImadakeRef.update(messageData);
            setTimeout(displayAllMessages, 200);
        });
        messageElement.appendChild(editButton);
    }

    let brElement = document.createElement('br');
    messageElement.appendChild(brElement);

    let textElement = document.createElement('div');
    textElement.innerHTML = Mtext;
    messageElement.appendChild(textElement);

    return messageElement;
}
//#endregion

//読み込まれ be read
document.addEventListener('DOMContentLoaded', () => {
    memoRead();
    stampRead();
    autoLogin()
});