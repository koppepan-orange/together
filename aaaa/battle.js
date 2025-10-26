let humans = [];
let turn = 0;
let phase = 0;
let bar = {};
let acted = 0;

function cm(cam = '指定なし', me = '指定なし'){
    let who = 0;
    if(cam == '指定なし') cam = 'players';

    if(me != '指定なし') who = humans.find(a => a.cam == cam && a.id == me);
    else who = humans.filter(a => a.cam == cam);
    
    return who;
}

//#region みちとのそーぐー
async function encount(){
    let enemiesen = random(1,1);

    for(let i = 0; i < enemiesen; i++){
        let e = makeEnemy();
        humans.push(e);
    }

    let iran = ['うわっ！', '嗚呼、'];
    let iran2= ['きた！なんだって～？！', '来たり']
    let ran = random(0, iran.length-1);
    await addtext(`${iran[ran]}${enemiesen}人飛び出して${iran2[ran]}`);

    await nextTurn();
}

function makeEnemy(){
    let ed = arraySelect(Enemies);

    let e = { //うつわ
        name: ed.name,
        maxhp: ed.maxhp,
        atk: ed.atk,
        def: ed.def,
        matk: ed.matk,
        mdef: ed.mdef,
        maxmp: ed.maxmp,
        crl: ed.crl,
        crr: ed.crr,
        crd: ed.crd,
        spd: ed.spd,
    }; 

    e.id = humans.filter(a => a.cam == 'enemies');
    e.cam = 'enemies';

    return e;
}
//#endregion

//#region たーんのまねーじめんと～
async function nextTurn(who = 0){
    // console.log(`${turn}たーんめ`);

    phase = 0;
    if(who){
        for(let buff of who.buffs){
            let data = Buffs.find(a => a.name = buff.name);
            //アンコールの動き
            if(hask(data, 'luck')){//luck
                if(isCrit(data.luck)){
                    addlog('当たりが出たらもう一本！');
                    return playerturn();
                }
            }
        }
        
        /*
        for(let key in who.buffs){
            who.buffs[key].time -= 1; // -1する
            if(who.buffs[key].time <= 0){
                let index = who.buffs.indexOf(key);
                who.buffs.splice(index, 1)
            }
        }
        */
        for (let i = who.buffs.length - 1; i >= 0; i--) {
            who.buffs[i].time -= 1;
            if(who.buffs[i].time <= 0) who.buffs.splice(i, 1);
    }

        tekiou();
    }

    /*
    //強制スキルの動き
    while(skillQueue.length > 0){
        const nanka = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構".shift()"
        let cam = nanka.cam;
        let me = nanka.me;
        let dare = cm(cam,me);
        let skill = nanka.skill;
        let data = Skills.find(a => a.id == skill);
        console.log(`${dare.name}のスキル:"${skill}"を発動!`);
        await addtext(`${dare.name}は"${data.name}"を発動した！！`);
        let result = await skillAct(dare, skill);
        if(result) return 1;
    }
    */

    //ーーーーーーーこっから次のターン行く動き　ここでこの人のターンは終わるって感じだねーーーーーーー

    acted += 1;
    if(acted >= bar.me.length){
        turn += 1;
        const combined = humans.filter(a => a.status && a.hp > 0)// オブジェクトをリストに変換して合体
        .sort((a, b) => {// 降順でソート
            if(b.spd == a.spd){
                if(a.cam == b.cam){
                    return a.me - b.me;  // 同じcamならmeの小さい方が優先
                }
                return a.cam == 'players' ? -1 : 1;  // camが'p'なら優先
            }
            return b.spd - a.spd;  // 速度の高い順に並べる
        });
        bar = {
            cam: combined.map(c => c.cam),
            me: combined.map(c => c.me)
        };
        console.log(bar)
        acted = 0;
    } 

    let tcam = bar.cam[acted]
    let tme = bar.me[acted]
    are = cm(tcam, tme);

    let dots = {}; //DamegeOverTimeのdot
    for(let buff of are.buffs){
        let data = Buffs.find(a => a.name == buff.name)
        console.log(buff, data)

        if(hask(data, 'dot')){
            // これは hp:'-10'みたいにならなくて、hp:10 で10減る感じ
            let dot = data.dot;

            let val = 0;
            val = buff.value[dot];
            if(val.endsWith('%')) val = Math.round(are.maxhp * val.slice(0,-1) / 100);

            //出血の処理はここへ
            
            if(!dots[dot]) dots[dot] = 0;
            dots[dot] += val;
        }
    
        if(buff.name == 'onslime'){
            if(isCrit(buff.value)){
                buffremove(are, 'onslime');
                addlog('なんとかスライムを取り払った!!');
            }else{
                addlog('スライムが邪魔して動けない!!');//今思ったけどこれやばいのでは...?
                nextTurn();
                return;
            }; 
        }
        if(buffhas(are,'skip')){
            await addtext(`はい${are.name}、お前スキップ〜〜`);
            nextTurn(are); return;
        }
        if(hask(data, 'palsy')){
            if(!isCrit(data.palsy)) continue;
            data.name != 'stan'
            ? addlog(`${are.name}は麻痺している..`)
            : addlog(`${are.name}はスタンしている....`);
            nextTurn(are);
            return 1;
        }
        if(hask(data, 'freeze')){
            if(!isCrit(data.freeze)){
                await addtext(`氷が溶けた!`);
                buffremove(are,'freeze');
            }else{
                await addtext(`${are.name}は凍っている...`);
                nextTurn(are); return;
            }    
        }
    }

    console.log(`(${turn}) 現在、[${tcam}]${are.name}さんのターンですわ〜！`);

    switch(tcam){
        case 'players':
            playerturn(are);
            break;
        case 'enemies': 
            enemyturn(are);
            break;
    }
}
//#endregion

//#region playerturn
async function playerturn(who = 0){
    //back目的なら空欄、そうでなければwhoが必須
    jump:{
        if(!who) break jump;
        let nss = Skills.filter(a => a.type == 'ns');
        let datans = nss.find(a => a.id == who.ns.id);
        if(who.ns.process != undefined && (turncount % datans.cool) == 0){
            await data.process(who);
            await delay(1000)
        };

        tekiou();
    
        addtext('あなたのターンです！');
        playerturn();

        return;
    }

    phase = 1;
    batC.s1B.textContent = 'act';
    batC.s2B.textContent = 'magic';
    batC.s3B.textContent = 'tools';
    batC.s4B.textContent = 'run';
};
//#endregion
//#region playerの選択
batC.s1B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.id == 0);
    switch(phase){
        case 1:
            phase = 2;
            batC.s1B.textContent = who.slash[1].name;
            batC.s2B.textContent = who.slash[2].name;
            batC.s3B.textContent = who.slash[3].name;
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 1)
            break;
        case 3:
            Magic(who, 1)
            break;
        case 4:
            Tool(who, 1)
            break;
    }
})

batC.s2B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.id == 0);
    switch(phase){
        case 1:
            phase = 3;
            batC.s1B.textContent = who.magic[1].name;
            batC.s2B.textContent = who.magic[2].name;
            batC.s3B.textContent = who.magic[3].name;
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 2);
            break;
        case 3:
            Magic(who, 2);
            break;
        case 4:
            Tool(who, 2);
            break;
    }
})

batC.s3B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.id == 0);
    switch(phase){
        case 1:
            phase = 4;
            batC.s1B.textContent = who.tool[1].name;
            batC.s2B.textContent = who.tool[2].name;
            batC.s3B.textContent = who.tool[3].name;
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 3);
            break;
        case 3:
            Magic(who, 3);
            break;
        case 4:
            Tool(who, 3);
            break;
    }
})

batC.s4B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.id == 0);
    switch(phase){
        case 1:
            dassyutsu();
            break;
        case 2:
        case 3:
        case 4:
            playerturn();
            break;
    } 
})

function disappear(){
    phase = 0;
    batC.s1B.textContent = ' ';
    batC.s2B.textContent = ' ';
    batC.s3B.textContent = ' ';
    batC.s4B.textContent = ' ';
}

async function dassyutsu(){

    disappear();
    batD.classList.remove('tog');
    
    draw()
    movable = 1;
    await addtext('うまく逃げ切れた！');
}

function LetsTargetSelect(one){
    let code = one??1; //1:通常(1人) 2:選んだところと左右 3:選んだ陣営全体
    return new Promise((resolve) => {
        let color = '#fff450';
        let pcolor = '#f7f7f7';

        let arrs = [
            ...humans.filter(a => a.cam == 'players').map(a => `players${a.id}`), 
            ...humans.filter(a => a.cam == 'enemies').map(a => `enemies${a.id}`),
        ];

        let target = [];
        function handleClick(event) {
            let div = event.target;
            if(div && !arrs.includes(`${div.className}`)) div = div.parentElement;
            if(!div) return;

            let tcam = div.dataset.cam;
            let tme = +(div.dataset.me);

            arrs.forEach(a => {
                let div0 = batC[a.substring(0, 7)];
                let div = div0.querySelector(`.${a}`);
                
                div.removeEventListener('click', handleClick);
                div.classList.remove('sele')
            });

            target = [
                tme,
                tcam
            ]

            if(code == 2){ //拡散-3
                let zin = humans.filter(a => a.cam == tcam && a.status);
                let pnum = (zin[tme-1]?.status??0) ? tme - 1 : null;
                let nnum = (zin[tme+1]?.status??0) ? tme + 1 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(nnum) cn += 1;
                
                let cams = Array(cn).fill(tcam);
                
                target = [
                    [tme-1,tme,tme+1],
                    cams
                ];
            }
            if(code == 3){// 拡散-5
                let zin = humans.filter(a => a.cam == tcam && a.status);
                let pnum = (zin[tme-1]?.status??0 == 1) ? tme - 1 : null;
                let p2num = (zin[tme-2]?.status??0 == 1) ? tme - 2 : null;
                let nnum = (zin[tme+1]?.status??0 == 1) ? tme + 1 : null;
                let n2num = (zin[tme+2]?.status??0 == 1) ? tme + 2 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(p2num) cn += 1;
                if(nnum) cn += 1;
                if(n2num) cn += 1;
                
                let cams = Array(cn).fill(tcam);
                
                target = [
                    [tme-2,tme-1,tme,tme+1,tme+2],
                    cams
                ];
            }
            if(code == 4){ //相手陣営全員
                let nums = cm(tcam).filter(a => a.cam == tcam && a.status);
                let cams = Array(nums.length).fill(tcam); //fillは全ての値を同じ値にするやつ。同数にするために使用されがち
                target = [
                    nums,
                    cams
                ];
            }
            if(code == 5){ //全員
                let tnums = cm(tcam).filter(a => a.status);
                let gyaku = tcam == 'players' ? 'enemies' : 'players';
                let nums = cm(gyaku).filter(a => a.status);

                let awase = [...tnums, ...nums];
                
                // let cn = tnums.length + nums.length;

                let cams = [...Array(tnums.length).fill(tcam), ...Array(nums.length).fill(gyaku)];

                target = [
                    awase,
                    cams
                ];
            }

            let cs = target[1];
             if(typeof cs == 'string') cs = [cs]
            let ns = target[0];
             if(typeof ns == 'string' || typeof ns == 'number') ns = [ns]
            // console.log(cs, ns)
            let whoes = [];
            for(let i = 0; i < cs.length; i++){
                let c = cs[i];
                let n = ns[i];
                console.log(`humans[${c}][${n}]を狙います！`);
                let cn = cm(c, n);
                // console.log(cn);
                whoes.push(cn);
            }

            console.log(whoes);

            resolve(whoes);
        }

        arrs.forEach(a => {
            let div = document.getElementById(a);
            div.removeEventListener('click', handleClick)
            div.addEventListener('click', handleClick);
            div.style.backgroundColor = color;
        });
    });
}
 


//#endregion
//#region playerの斬撃
async function Slash(who, num){
    disappear();
    let sl = who.slash[num]
    if(!sl.name){
        await addtext('you dont have slash...');
        return playerturn()
    }

    let name = sl.name;
    let data = Slashs.find(a => a.id == name)
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);

        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough mp...');
        playerturn();
    }
}
//#endregion
//#region playerの魔法
async function Magic(who, num){    
    disappear();
    let mg = who.magic[num]
    if(!mg.name){
        await addtext('you dont have magic...');
        return playerturn()
    }

    let name = mg.name;
    let data = Magics.find(a => a.id == name)
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);
        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough mp...');
        playerturn();
    }
}

//#endregion
//#region playerの道具
async function Tool(who, num){
    disappear();
    let tl = who.tool[num]
    if(!tl.name){
        await addtext('you dont have tool...');
        return playerturn()
    }

    let name = tl;
    //今はいいけど、inven(tory)に全部詰め込むことになるならdata.jsのnumじゃなくて簡単関数でinven内の数を求めて、で〜って形にした方がいいかも
    let data = Tools.find(a => a.id == name)
    if(data.num > 0){
        data.num -= 1;

        let are = await LetsTargetSelect();
        await addtext(`${who.name}は${name}を使用した!`);
        
        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough tool...');
        playerturn();
    }
}
//#endregion
//#region playerのskill

/*
let Splithp = 0;
let Splitmaxhp = 0;
let clowngambling = ['0','0','2','2','2','4'];

// スキル予約関数
let skillQueue = [];
async function skillReserve(cam,me){
    if(cm(cam, me).ep == 100){
        x = cm(cam, me).ex;
        skillQueue.push({cam:cam,me:me,skill:x});
        skillReset(cam,me);
        console.log(`スキル予約済み: ${cam} ${me} -> ${x}  現在キューは次に表示します;`);
        console.log(skillQueue);

        if(phase > 0){
            let result = await skillAct(cam,me,x);
            skillQueue.shift();
            if(result == 'end'){return 'end';}
        }
    }else{
        nicoText('まだクールダウン中ですわ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
    }
}
async function skillAct(cam,me,skill){
    let dataex = Skills.filter(a => a.type == 'ex').find(a => a.id == skill);
    let result = await dataex.process(cam, me);
    await delay(1000);
    return result;
}
function skillReset(who){
    who.ep = 0;
    tekiou();
}
function turretPlace(cam){
    if(!document.querySelector(`#${cam}t`)){
        let newDiv = makeNewPlayer('t')
        cm(cam).t.kazu = 0;
        cm(cam).t.maxhp = 0;
        cm(cam).t.hp = 0;
        document.querySelector(`#${cam}`).appendChild(newDiv);
    }
    cm(cam).t.status = 1;
    cm(cam).t.kazu += 1;
    cm(cam).t.maxhp += 15;
    cm(cam).t.hp += 15;
    cm(cam).t.name = `Turret x${cm(cam).t.kazu}`;
    tekiou()
    document.querySelector(`#${cam}t`).style.display = 'block'
    document.querySelector(`#${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
    cm(cam).t.status = 0;
    cm(cam).t.kazu -= 1;
    if(cm(cam).t.kazu <= 0){
        cm(cam).t.kazu = 0;
        cm(cam).t.maxhp = 0;
        cm(cam).t.hp = 0;
        document.querySelector(`#${cam}t`).remove();
    }
}
function turretAllClear(){
    if(document.querySelector('#playerst')){
        document.querySelector('#playerst').remove();
        humans.players.t.kazu = 0;
        humans.players.t.status = 0;
    };
    if(document.querySelector('#enemiest')){
        document.querySelector('#enemiest').remove();
        humans.enemies.t.kazu = 0;
        humans.enemies.t.status = 0
    }
}

*/

//#endregion


//#region だめーじとかぎゃくだめーじとか
function isCrit(crl, crr){
    //crl, crrはそれぞれ整数。
    if(crr == 'ab') return addlog('確定抵抗！'), 0;
    if(crl == 'ab') return addlog('確定！'), 1;
    
    let kei = crl - crr;
    if(kei < 0) kei = 0;

    let is = Math.floor(Math.random() * 100) < kei;
    console.log(`率は${crl}%, 抵抗率は${crr}%... 結果は${is}！`);

    if(is) return 1;
    
    return 0;
}

async function damage(who, ares, val, props = []){
    let hasp = (name) => {return props.includes(name)}
    if(!Array.isArray(ares)) ares = [ares];

    if(val.endsWith('%')){
        let key = props.find(a => a.startsWith("%!"));
        if(key) key = key.substring(2);
        else key = "hp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }
    
    for(let are of ares){
        let atker = {...who}
        let defer = {...are}
        let W = {
            atk:0,
            pow:0,
            crl:0,
            crd:0,
            aim:0
        };
        let Wk = Object.keys(W);
        let A = {
            def:0,
            she:0,
            cut:0,
            crr:0,
            dod:0
        };
        let Ak = Object.keys(A);
        
        
        // [entity, keysArray, targetObj]
        const hyous = [
            [who, Wk, atker],
            [are, Ak, defer]
        ];
        
        for (let i = 0; i < hyous.length; i++) {
            const [entity, keys, target] = hyous[i];
            for(let buff of entity.buffs){
                const buffk = Object.keys(buff.effects);
                for(let k of keys){
                    if(!buffk.includes(k)) continue;
                    
                    const v = buff.effects[k];
                    if(typeof v !== 'string') continue; // 安全策
                    
                    if(v.startsWith('+') || v.startsWith('-')) target[k] = (target[k] ?? 0) + +v.substring(1);
                    if(v.startsWith('=')){
                        target[k] = +v.substring(1);
                        break; // 元コードと同じ挙動
                    }
                }
            }
        }
        
        for(let prop of props){
            if(prop.startsWith('ig!')) defer[prop.substring(3)] = 0;
            if(prop == 'fixed') atker.power = 1;
        }
        
        //計算
        let wep = atker.weapon;
        let weped = Weapons.find(a => a.id == wep.id);
        // (攻撃力+武器攻撃力) * 攻撃倍率
        let dmg = ((atker.atk+weped.atk)*(atker.power))
        
        let shi = defer.shield;
        let shied = Shields.find(a => a.id == shi.id);
        // (防御力+盾防御力) * 防御倍率 + ダメージカット
        let rer = ((defer.def+shied.def)*(defer.shell)) + defer.cut;
        
        //crit
        let is = isCrit((atker.crl + weped.crl), (defer.crr + shied.crr));
        if(is) dmg *= (atker.crd + weped.crd);

        //実装
        let damage = Math.floor(dmg - rer);
        if(damage < 0) damage = 0;
        if(damage > are.hp) damage = are.hp;
        are.hp -= damage;
        addlog(`(${turn}) [${who.cam}]${who.name} ==> [${are.cam}]${are.name} (${damage}ダメージ)`);

        if(are.hp < 0) are.hp = 0;
        if(are.hp == 0 && hasp('mine')) are.hp = 1;

        if(are.hp == 0) return dead(who, are);

        return 0;
    }
}

async function heal(who, ares, val, props = []){
    let hasp = (name) => {return props.includes(name)}
    let hasa = (whi, name) => whi.attr.includes(name);
    if(!Array.isArray(ares)) ares = [ares];

    if(val.endsWith('%')){
        let key = props.find(a => a.startsWith("%!"));
        if(key) key = key.substring(2);
        else key = "hp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }
    
    for(let are of ares){
        if(are.attr.includes('undead')){
            console.log('アンデッドなので逆回復 =>')
            let res = await damage(who, are, val, props);
            if(res) return 1;
            continue;
        }
        
        if(are.attr.includes('musha')) continue; //武者は回復を受けつけない

        are.hp += val;
        if(are.hp > are.maxhp) are.hp = are.maxhp;
    }
}
//#endregion

//#region みんな吹っ飛んじゃった？
async function dead(who, are){
    let hasa = (whi, name) => whi.attr.includes(name);

    let cam = who.cam;
    let tcam = are.cam;
    let tcams = humans.filter(a => a.cam == tcam);

    if(hasa(are, 'sinan')) return are.hp = are.maxhp*0.5, 0;

    //死
    are.hp = 0;
    are.stt = 0; //通常-1, 死-0
    let dom = batC[`${tcam}D`];
    let dom2 = dom.querySelector(`.h${are.id}`);
    dom2.classList.add('dead');

    //あれ？みんな死んじゃった？
    let res = tcams.every(a => a.stt == 0);
    if(!res) return 0;

    //勝敗を
    await finale(cam);
}
//#endregion

//#region けっか～
async function finale(cam){
    nicoText(`${cam}の勝ち`)
}
//#endregion