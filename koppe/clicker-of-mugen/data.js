let IranMikans = {
    'koppepan':{
        name:'koppepan',
        serifs:['理不尽な貴婦人岐阜民に寄付金', 'ヨットの用途を調べようっと..ww', 'geniusの字見やす', 'I think that 気のせい', '無二の剥きエビのムニエル', 'マッカーサーの雑多垢', '芝下行きはしばし待機', 'slay the spireにインスパイア', 'さすがに引かれる飛花レイル', '退席中？いや無いぜ気球', 'ジャラランガかはわからんが', 'タルトタタン犯罪に加担'],
    },
    'コッペ':{
        name:'コッペ',
        serifs:['まかせロンドン', 'まかせロンドン2階建て', 'まず無いバスラオ', 'ありがとう角砂糖(大パクリ)', 'こいつ好き ビフィズス菌', 'ヨスギルオス', '危なすワロスステゴサウルス', '髪長ザウルス', 'どっちにせよ理論', 'ニョロトノ', '流石にせざるオーエンは彼女なのか？', 'アクセン・クトゥ', 'ヤメトコの杖', '的なテキーラシャンパンタワー'],
    }
}
let Charas = {
  'wretch':{
    id:'wretch',
    name:'持たざる者',
    description:'持たざる者。何もないが、何でもあるとも言える。<br>平均的で普遍的。普通の凡才でただの人間。',
    ex:'null',
    ns:'null',
    ps:'null',
    atk:20,
    def:0,
    matk:10,
    mdef:0,
    maxhp:100,
    maxmp:50,
    critlate:5,
    critdmg:1.5,
    critresist:0,
    speed:50,
    buttonsolid:'#000000',
    buttonback:'#999999',
  },

  'greenslime':{
    id:'greenslime',
    name:'green_slime',
    description:'スライム。...まだできてないから使わない方が吉',
    ex:'null',
    ns:'null',
    ps:'null',
    atk:20,
    def:0,
    matk:10,
    mdef:0,
    maxhp:100,
    maxmp:50,
    critlate:0,
    critdmg:1.5,
    critresist:'absolute',
    speed:35,
    buttonsolid:'#000000',
    buttonback:'#999999',
  },

  'mechanic':{
    id:'mechanic',
    name:'メカニッカ',
    description:'メカニック。言うなれば「諸刃の刃」<br>ARMSのあの人ではない。打たれ弱いので繊細にね',
    ex:'placeturret',
    ns:'throwwrench',
    ps:'solplaceturret',
    atk:25,
    def:0,
    matk:20,
    mdef:20,
    maxhp:25,
    maxmp:30,
    critlate:7,
    critdmg:2.0,
    critresist:0,
    speed:65,
    buttonsolid:'#ff7373',
    buttonback:'#fcffc0',
  },
  
  'clown':{
    id:'clown',
    name:'週末の道化師',
    description:'ピエロさん。ランダム要素多め。<br>',
    ex:'trickyvaiavles',
    ns:'gambler',
    ps:'highsol',
    atk:20,
    def:0,
    matk:10,
    mdef:0,
    maxhp:100,
    maxmp:50,
    critlate:9,
    critdmg:3.0,//...ちょまってこれ大丈夫かな
    critresist:10,
    speed:40,
    buttonsolid:'#ffacf9',
    buttonback:'#acf8ff',
  },
  
  'magodituono':{
    id:'magodituono',
    name:'スオーノ・フルマイン',
    description:'雷電魔術師。"帯電"を用いて戦う<br>将軍ではない。誰だ将軍って言ったやつは',
    ex:'lightningstorm',
    ns:'elecbarrier',
    ps:'elecshock',
    atk:10,
    def:0,
    matk:30,
    mdef:20,
    maxhp:40,
    maxmp:100,
    critlate:5,
    critdmg:2.0,
    critresist:5,
    speed:60,
    buttonsolid:'#7f1184',
    buttonback:'#5f4894',
  },
}

let Friends = {
  '飛花レイル':{
    ruby:'ひか れいる',
    name:'飛花レイル',
    belongto:'', //所属
    rare:3,
    description:``, 
    comment:``,
    N:0,
    S:0,
    E:0,
    P:0,
  },
  '憚羅レイル':{
    ruby:'はばから れいる',
    name:'憚羅レイル',
    rare:3
  },
  '泡沫アリア':{
    ruby:'うたかた ありあ',
    name:'泡沫アリア',
    belongto:'',
    rare:2,
    description:``, 
    comment:``,
    N:0,
    S:0,
    E:0,
    P:0,
  },
  'メメント・ラメント':{
    ruby:'めめんと らめんと',
    name:'メメント・ラメント',
    rare:3
  },

  '小安見ニーク':{
    ruby:'おやすみ にーく',
    name:'小安見ニーク',
    rare:3,
  },
  '面戸ガリヤ':{
    ruby:'めんど がりや',
    name:'面戸ガリヤ',
    rare: 2,
  },
  '伊辣キキ':{
    ruby:'いらつ きき',
    name:'伊辣キキ',
    rare: 2,
  },

  '息留河鹿':{
    ruby:'いきる かしか',
    name:'息留 河鹿',
    rare: 1
  },
  'ジャンネ マジデ':{
    ruby:'じゃんね まじで',
    name:'ジャンネ マジデ',
    rare:1
  },
  '手斧バス':{
    ruby:'ておの ばす',
    name:'手斧バス',
    rare:1
  },

  '久須田和伊男':{
    ruby:'くすた わいお',
    name:'久須田 和伊男',
    rare:1,
  },
  'ゴードン・ソージィ':{
    ruby:'ごーどん そーじぃ',
    name:'ゴードン・ソージィ',
    rare:3
  }
}

let Effects = {
  buffs:{
    'powerup':{
        name:'powerup',
        type:'buffs',
        kind:'turn',
        addable:1,
        img:'power',
        description:'攻撃倍率が上がる。やったね！',
    },
    'shellup':{
        name:'shellup',
        type:'buffs',
        kind:'turn',
        addable:1,
        img:'shell',
        description:'防御倍率が上がる。あんまり実感しづらい。',
    },
    'luck':{
        name:'luck',
        type:'buffs',
        kind:'turn',
        addable:0,
        img:'luck',
        description:'ターン終了時、1/6の確率でもう一回行動できる。<br>願うと起きやすいです',
        effect:0
    },
    'luck_great':{
        name:'luck_great',
        type:'buffs',
        kind:'turn',
        addable:0,
        img:'luck',
        description:'ターン終了時、1/3の確率でもう一回行動できる。<br>気分はさながらラスボスですね',
        effect:0
    },
    'disappear':{
        name:'disappear',
        type:'buffs',
        kind:'turn',
        addable:0,
        img:'disappear',
        description:'姿を消し、攻撃を受けなくなる。<br>しかし範囲攻撃はちゃんと当たる。<br>lv1ならば範囲攻撃で解除される。',
    },
    'cheerup':{
        name:'cheerup',
        type:'buffs',
        kind:'turn',
        addable:0,
        img:'cheerup',
        description:'応援されている状態。攻撃力と速度が上がり会心率が下がる。<br>ちょっと緊張しちゃうよね、わかる',
        effect:{
          'power':1.0,
          'speed':20.0,
          'crit':-5.0
        }
    }
  },
  debuffs:{
    'powerdown':{
        name:'powerdown',
        type:'debuffs',
        kind:'turn',
        addable:1,
        img:'power',
        description:'攻撃力が下がる。stackするようにしたいけどまあいっか',
    },
    'shelldown':{
        name:'shelldown',
        type:'debuffs',
        kind:'turn',
        addable:1,
        img:'shell',
        description:'防御力が下がる。こっちは実感しやすいのよね',
    },
    'poison':{
        name:'poison',
        type:'debuffs',
        kind:'turn',
        addable:0,
        img:'poison',
        description:'ターン終了時割合で防御貫通ダメージ。<br>毒の苦しみもお好きなんですね',
        //ターン終了時体力のx%のダメージ
        effect:{
          'poison':0.05 //"毒ダメージ"として5%削れる
        }
    },
    'blood':{
        name:'blood',
        type:'debuffs',
        kind:'turn',
        addable:0,
        img:'blood',
        description:'ターン終了時固定ダメージ、徐々に増加。<br>増加率は"2倍"<br>そのままにしとくと普通に死にます',
        //ターン終了時xダメージ
        effect:{
          'blood':2
        }
    },
    'burn':{
        name:'burn',
        type:'debuffs',
        kind:'turn',
        addable:0,
        img:'burn',
        description:'ターン終了時固定ダメージ。ついでに攻撃力低下。<br>まじでこれ嫌い...ww',
        //ターン終了時xダメージ
        effect:{
          'burn':10,
          'atk':-3
        }
    },
    'injury':{
        name:'injury',
        type:'debuffs',
        kind:'turn',
        addable:0,
        img:'injury',
        description:'行動時固定ダメージ。<br>連続行動ビルドに大打撃',
        //ターン終了時xダメージ
        effect:{
          'injury':12
        }
    }
  },
  handles:{
    'freeze':{
        name:'freeze',
        type:'handles',
        kind:'turn',
        addable:0,
        img:'freeze',
        description:'凍っている状態。これ燃やされたら解除みたいにしたい',
        //1/xの確率で解除
    },
    'palsy':{
        name:'palsy',
        type:'handles',
        kind:'turn',
        addable:0,
        img:'palsy',
        description:'麻痺ですね。これ好き',
        //1/xの確率で行動不可
    },
    'stan':{
        name:'stan',
        type:'handles',
        kind:'turn',
        addable:0,
        img:'stan',
        description:'スタンなうです。おつおつお〜',
    },
    'skip':{
        name:'skip',
        type:'handles',
        kind:'turn',
        addable:0,
        img:'skip',
        description:'はいお前スキップ〜〜ww状態です。<br>ぴえん超えてだっさぁ',
    },
    'sleep':{
        name:'sleep',
        type:'handles',
        kind:'turn',
        addable:0,
        img:'sleep',
        description:'睡眠ですね...いやね....ちょ..っと......w',
    },
    'anger':{
        name:'anger',
        type:'handles',
        kind:'stack',
        addable:0,
        img:'anger',
        description:'すごいイラつかせてくる敵..だからメガさんとかと相性良さそう<br>で避けられてさらに煽られるみたいな',
        // stack/100の確率で殴りかかる
    }
  },
  uniques:{
    'onslime':{
        name:'onslime',
        type:'uniques',
        kind:'turn',
        addable:0,
        img:'onslime',
        description:'スライムが体に粘りついている状態です。やばいね(行動不可)',
        lv:{
          1:1,
        }
    },
    'stickyslime':{
        name:'stickyslime',
        type:'uniques',
        kind:'turn',
        addable:0,
        img:'stickyslime',
        description:'スライムがくっついているおかげで行動するとダメージを受けます',
        //行動時ダメージ(固定)
    },
    'letsthrow':{
        name:'letsthrow',
        type:'uniques',
        kind:'turn',
        addable:0,
        img:'wrench',
        description:'レンチを投げる準備をしている状態。次の攻撃与ダメ2倍',
    },
    'gambling':{
        name:'gambling',
        type:'uniques',
        kind:'turn',
        addable:0,
        img:'gamble',
        description:'次の攻撃が0,2,4倍になる。これぞ醍醐味..ってやつ？',
    },
  }
}

let Slashs = {
  'slash':{
    id:'slash',
    name:'シンプル斬り',
    description:'必中ー倍単体刹那斬', //そのうち武士作ってこれ作りたい
    mp:0,
    lv:1,
    tcam:'players',
    process:async function(cam,me,tcam,target){
        let result = await damage(cam,me,tcam,target,100,'sh',1);
        if(result) return 1;

        //elseesに移行よろ
        if(humans[cam][me].ps == 'sthree' && probability(25)){
          await addtext(`${get(cam, me).name}は頑張った!`);
          result = await damage(cam,me,tcam,target,100,'sh',1);
          if(result) return 1;
          result = await damage(cam,me,tcam,target,100,'sh',1);
          if(result) return 1;
        }
        return 0;
    }
  },
  'double slash':{
    id:'double slash',
    name:'つばめ返し',
    description:'二回攻撃。あたらないこともあるけど現環境最強',
    mp:0,
    lv:1,
    tcam:'players',
    process:async function(cam,me,tcam,target){
        if(probability(67)){//端数切り上げは許してくれ
          let result = await damage(cam,me,tcam,target,100,'sh',2);
          if(result) return 1;
        }else{
          addlog('miss!');
        }
        if(probability(67)){
          let result = await damage(cam,me,tcam,target,100,'sh',2);
          if(result) return 1;
        }else{
          addlog('miss!');
        }
        return 0;
    }
  },
  'slash of light':{
    id:'slash of light',
    name:'一閃',//まじん斬り も作りたいね 霹靂一閃も
    description:'初期のロマン技。<br>当たれば幸い的な感じで打ったほうが楽',
    mp:0,
    lv:1,
    tcam:'players',
    process:async function(cam,me,tcam,target){
        let who = humans[cam][me];
        let pro = 33;
        if(who.ps == 'highsol') pro = 20;

        let result = 0;
        if(probability(pro)){
          result = await damage(cam,me,tcam,target,300,'sh',3);
          if(result) return dead;
        }else{
          //let result = letsHappen(tcam, target, cam, me, 'missed', 'sl', 'slashoflight');
          /*if(who.ps != 'solx5but'){
              log.textContent = 'miss! ダメージを与えられない!';
              await delay(1000);
          }else{
              humans[cam][me].hp -= (humans[cam][me].atk + humans[cam][me].weapon.power);
              if(humans[cam][me].hp <= 0){humans[cam][me].hp = 1;};
              tekiou();
              log.textContent = humans[cam][me].name+'は混乱して自分を殴った！';
              await delay(1000);
          }*/
          if(result) return 1;
        }
        return 0;
    }
  }
}

let Magics = {
  'heal':{
    id:'heal',
    name:'heal',
    description:'体力を回復する。20%',
    mp:4,
    lv:1,
    process:async function(cam,me,tcam,target){
        await addtext(`${who.name}はhealを唱えた！`)
        await heal(who, tag, '20%', add)
        
        return 0;
    }
  },
  'power':{
    id:'power',
    name:'power',
    description:'攻撃力が1.25倍になります。やったね！',
    mp:5,
    lv:1,
    process:async function(cam,me,tcam,target){
        await addtext(`${who.name}はpowerを唱えた！`)
        await buffadd(tag,'powerup','turn',3,1);
        await letsElseed(tag, who, 'magic', 'power'); //読み方はワザップです
        //soldatoのシステム応用しつつで
        return 0;
    }
  },
  'shell':{
    id:'shell',
    name:'shell',
    description:'防御力が1.25倍になります！<br>実感あんまりないけど..',
    mp:5,
    lv:1,
    process:async function(cam,me,tcam,target){
        await addtext(`${who.name}はshellを唱えた!`);
        await buffadd(tag,'shellup','turn',3,1);
        await letsElseed(tcam, target, cam, me, 'magic', 'shell'); 
        return 0;
    }
  },
  'poison':{
    id:'poison',
    name:'poison',
    description:'相手を毒にします<br>毒ビルド強すぎてやばい',
    mp:7,
    lv:3,
    process:async function(cam,me,tcam,target){
        let who = get(can,me);
        let tag;
        await addtext(`${who.name}はpoisonを唱えた!`);
        await buffadd(tcam,target,'poison','turn',4,1);
        await letsElseed(tcam, target, cam, me, 'buff', 'poison'); 
        return 0;
    }
  },
  'thundee':{
    id:'thundee',
    name:'サンディ',
    description:'牽制に使われがち',
    mp:3,
    lv:4,
    process:async function(cam,me,tcam,target){
        await addtext(`${humans[cam][me].name}はサンディを唱えた!!`);
        let result = await damage(cam,me,tcam,target,30,'mg',4);//雷 なんかいい感じにしといて fi,aq,th,wi,da,liみたいな
        if(result) return 1;
        if(probability(2)) buffadd(cam, me, tcam, target, 'hirumi', 1)
        return 0;
    }
  },
  'garva':{
    id:'garva',
    name:'ガーヴァ',
    description:'濁点多いと強そうだよね<br>まれに火傷も',
    mp:4,
    lv:4,
    process:async function(cam,me,tcam,target){
        await addtext(`${humans[cam].name}はガーヴァを唱えた！`);
        let result = await damage(cam,me,tcam,target,110,'mg',2);//火
        if(result) return 1;
        if(probability(10)) await buffadd(tcam,target,'burn','turn',2,1);
        return 0;
    }
  },
  'healerthan':{
    id:'healerthan',
    name:'healer than',
    description:'体力を40%回復します。healよりも強い。だから比較のthanなんですね〜',
    mp:8,
    lv:6,
    process:async function(cam,me,tcam,target){
        let who = humans[cam][me];
        let tag = humans[tcam][target];
        await heal(who, tag, '40%', 'add')
        return 0;
    }
  },
  'luck':{
    id:'luck',
    name:'luck',
    description:'二回行動人間になれるかも？なやつ。lv1<br>欠けた運を施錠しましょう',
    mp:4,
    lv:7,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'luck','turn',4,1);
        addtext(`${who.name}はを唱えた!`);
        return 0;
    }
  },
  'thundos':{
    id:'thundos',
    name:'サンドス',
    description:'二段目。<br>サンドじゃないんです許してください',
    mp:8,
    lv:8,
    process:async function(cam,me,tcam,target){
        await addtext(`${humans[cam][me].name}はサンドスを唱えた!`);

        damage(cam,me,tcam,target,120,'mg',4);//雷
        if(probability(5)) buffadd(cam,me,tcam,target,'hirumi',1)
        return 0
    }
  },
  'morepower':{
    id:'morepower',
    name:'more power',
    description:'攻撃力が1.5倍になります。power使ってた人いるんかな',
    mp:8,
    lv:9,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'powerup',3,2)
        await addtext(`${humans[cam][me].name}はmore powerを唱えた!`);
        return 0
    }
  },
  'moreshell':{
    id:'moreshell',
    name:'more shell',
    description:'防御力が1.5倍になります。けどあんまり実感はないよね',
    mp:8,
    lv:9,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'shellup',3,2)
        await addtext(`${humans[cam][me].name}はmore shellを唱えた!`);
        return 0
    }
  },
  'deadlypoison':{
    id:'deadlypoison',
    name:'deadly poison',
    description:'敵を猛毒にします。やったね！！！',
    mp:12,
    lv:10,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'poison','turn',5,2);
        await addtext(`${humans[cam][me].name }はdeadly poisonを唱えた!`);
        return 0;
    }
  },
  'garvan':{
    id:'garvan',
    name:'ガーヴァン',
    description:'<br>notラージャン',
    mp:10,
    lv:11,
    process:async function(cam,me,tcam,target){
        log.textContent = humans[cam][me].name + 'はgiga fireを唱えた!';await delay(1000);
        let result = await damage(cam,me,tcam,target,230,'mg',2);//火
        await buffadd(tcam,target,'burn','turn',2,2);
        return result
    }
  },
  'thehealest':{
    id:'thehealest',
    name:'the healest',
    description:'60%回復。これ以上はない、っていう意味ですね。<br>xyzじゃないよ',
    mp:12,
    lv:12,
    process:async function(cam,me,tcam,target){
        log.textContent = humans[cam][me].name + 'はthe healestを唱えた!!!';await delay(1000);
        x = Math.round(humans[tcam][target].maxhp * 0.6);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000)
        return 'alive'
    }
  },
  'luckgreat':{
    id:'luckgreat',
    name:'luckgreat',
    description:'luckよりも行動しやすいです。嬉しいね',
    mp:12,
    lv:14,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'luck','turn',5,2);
        log.textContent = humans[cam][me].name + 'はluckgreatを唱えた!';await delay(1000);
        return 'alive'
    }
  },
  'merazoma':{
    id:'merazoma',
    name:'メラゾーマ',
    description:'ぬわーーっっ!!ってしてやりましょうぜ(炎の大ダメージ)',//対パパス最強にしたいね、これ
    mp:12,
    lv:12,
    process:async function(cam,me,tcam,target){
        log.textContent = humans[cam][me].name + 'はメラゾーマを唱えた!';
        await delay(1000);
        let result = await damage(cam,me,tcam,target,3.5,'mg',4);//雷
        await buffadd(tcam,target,'burn','turn',3,2);
        return result
    }
  },
  'thoron':{
    id:'thoron',
    name:'Thoron',
    description:'当たったらラッキー、シールドでされたら空前で追撃なつよつよ技。<br>けどギガサンダーの方が好き(雷の大ダメージ)',
    mp:20,
    lv:15,
    process:async function(cam,me,tcam,target){
        log.textContent = 'トロン！！！';await delay(1000);//byルフレ
        let result = await damage(cam,me,tcam,target,6,'mg',4);//雷
        return result
    }
  },
  'random':{
    id:'random',
    name:'Random',
    description:'自身が覚えてる魔法からランダム(mpは5固定)。これぞ醍醐味ってやつよな',
    mp:5,
    lv:1,
    process:async function(cam,me,tcam,target){
        log.textContent = 'randomを唱えた.......';await delay(1000);
        x = Object.keys(Magics).map(a => Magics[a].lv <= humans[cam][me].level ? Magics[a].name : null).filter(Boolean)
        y = Math.floor(Math.random() * x.length);
        log.textContent = x[y]+'が出た！';await delay(1000);
        x[y](cam,me,tcam,target);
    }
  },

  
}

let Weapons = {
  'none':{
    name:'なし',
    id:'none',
    num:0,
    power:0,
    price:0,
    description:'ないです。素手とか念とか自由に解釈しておk',
    buyable:0,
    ap:0,
    ce:0,
  },
  'woodenstick':{
    name:'木の棒',
    id:'woodstick',
    num:0,
    power:2,
    price:10,
    description:'初期装備あるあるの武器。値段に見合わず割と強い',
    buyable:1,//購入可能かどうか
    ap:0,
    ce:0,
    
  },
  'woodensword':{
    name:'木刀',
    id:'woodsword',
    num:0,
    power:4,
    price:20,
    description:'木の棒よりも強い。言うなれば気の剣。',
    buyable:1,
    ap:0,
    ce:0,
  },
  'bamboo_sword':{
    name:'竹刀',
    id:'bamboo_sword',
    num:0,
    power:6,
    price:30,
    description:'さあ、剣道しようぜ！！',
    buyable:1,
    ap:0,
    ce:0,
  },
  'stone':{
    name:'石ころ',
    id:'stone',
    num:0,
    power:8,
    price:50,
    description:'石です。よわよわ',
    buyable:1,
    ap:0,
    ce:0,
  },
  'bigrock':{
    name:'大きな石',
    id:'bigrock',
    num:0,
    power:10,
    price:80,
    description:'岩です。つよつよ',
    buyable:1,
    ap:0,
    ce:0,
  },
  'brick':{
    name:'レンガ',
    id:'brick',
    num:0,
    power:12,
    price:100,
    description:'岩にセメントつけたら強くなるのって意味わからなくね？',
    buyable:1,
    ap:0,
    ce:0,
  },
  'thinpaper':{
    name:'薄めの紙',
    id:'thinpaper',
    num:0,
    power:20,
    price:5,
    description:'薄い紙です。すって相手に切り付けて｢いたっ..｣ってさせる用です',
    buyable:1,
    ap:0,
    ce:1,
    combatEffect:{ //攻撃前の効果
        critlate: 70,
    }
  },
  'card':{
    name:'カード',
    id:'card',
    num:0,
    power:'Math.floor(Math.random()*13)+1',
    price:7,
    description:'ちょっとした運要素。攻撃方法は切り付けなので弱い',
    buyable:1,
    ap:0,
    ce:0,
  },
  'scissors':{
    name:'はさみ',
    id:'scissors',
    num:0,
    power:25,
    price:200,
    description:'持って｢近づいたら*すよ..?｣っていう用。実際*せない',
    buyable:1,
    ap:0,
    ce:1,
    combatEffect:{
        critdmg: 4.0,
    }
  },
  'knife':{
    name:'ほんもののナイフ',
    id:'knife',
    num:0,
    power:40,
    price:300,
    description:'つよつよ武器。<br>花や骨に向かって振り回しましょう',
    buyable:1,
    ap:0,
    ce:1,
    combatEffect:{
        critlate: 10,
    }
  },

  'blooddagger':{
    name:'ジェン・ソルテ',
    id:'blooddagger',
    num:0,
    power:0,
    price:150,
    description:'名前意味わからんランキング第1位。<br>攻撃時相手の体力を吸い回復する。<br>変換効率は80%..水力発電と同じくらい',
    buyable:1,
    ap:1,
    afterProcess:async function(cam,me,tcam,target,rate,kind,prop,dmg){
        x = (dmg * 0.80).toFixed(0);
        humans[cam][me].hp += x;
        if(humans[cam][me].hp > humans[cam][me].maxhp){humans[cam][me].hp = humans[cam][me].maxhp;}
        addtext('血を吸った！');
        tekiou();
        addtext(`体力が${x}回復した!`);
        return 'alive';
    },
    ce:0,
  },
  'timeontarget':{
    name:'time on target',
    id:'timeontarget',
    num:0,
    power:10,
    price:150,
    description:'ナギサ様の手好き',
    buyable:1,
    ap:1,
    afterProcess:async function(cam,me,tcam,target,rate,kind,prop,dmg){
        addtext(arraySelect(['トリニティの砲撃術は優秀ですから。','お口に合うと良いのですが..']));
        let result = await damage(cam,me,tcam,target,0.4,kind,['unpursuit']);
        if(result == 'end'){return 'end';}
        await buffadd(tcam,target,'shelldown','turn',3,1);
        return 'alive';
    },
    ce:0,
  },
  'biggamble':{
    name:'大博打',
    id:'biggamble',
    num:0,
    power:0,
    price:150,
    description:'大勝負..ってやつ？まじで賭け。がんばえ',
    buyable:1,
    ap:0,
    ce:1,
    combatEffect:{
        atk: Math.floor(Math.random()*100)+1,
    }
  },
  'contrarian':{
    name:'天邪鬼',
    id:'contrarian',
    num:0,
    power:80,
    price:150,
    description:'名前変更予定。',
    buyable:0,
    ap:0,
    ce:1,
    combatEffect:{
        critlate: 60
    }
  }
}

let Armors = {
  'none':{
    name:'なし',
    id:'none',
    num:0,
    shell:0,
    price:0,
    description:'ないです。<br>筋肉とでもフォースとでもなんとでも解釈しておk',
    buyable:0,
    sp:0
  },
  'mask':{
    name:'マスク',
    id:'mask',
    num:0,
    shell:0,
    price:1,
    description:'大事ですね。防御力は関係ありませんが病気にはならない',
    buyable:1,
    sp:0
  },
  'thinbook':{
    name:'薄い本',
    id:'thinbook',
    num:0,
    shell:1,
    price:5,
    description:'***なのは駄目！！死刑！！！！',//コハルさんなのでセーフ
    buyable:1,
    sp:0
  },
  'woodenplank':{
    name:'木の板',
    id:'woodenplank',
    num:0,
    shell:5,
    price:20,
    description:'これを使って最初はつるはしを作りましょう',
    buyable:1,
    sp:0
  },
  'ironplate':{
    name:'テッパン',
    id:'ironplate',
    num:0,
    shell:10,
    price:30,
    description:'突進してくるあいつ。こいつに手間取ると他のがきてす*ぬので注意',
    buyable:1,
    sp:0
  },
  'potlid':{
    name:'鍋の蓋',
    id:'potlid',
    num:0,
    shell:15,
    price:50,
    description:'初期装備あるあるⅡですね。多分コスパ最強',
    buyable:1,
    sp:0
  },
  'thickbook':{
    name:'厚めの本',
    id:'thickbook',
    num:0,
    shell:20,
    price:80,
    description:'辞書とかなのかな。いや六法全書かも',
    buyable:1,
    sp:0
  },
  'door':{
    name:'ドア',
    id:'door',
    num:0,
    shell:25,
    price:100,
    description:'え？木の板と一緒だって？-<br>君は知らないのかい...?<br>木の板を6つ並べるとドアが3つできるってことを',
    buyable:1,
    sp:0
  },
  'electricfan':{
    name:'扇風機',
    id:'electricfan',
    num:0,
    shell:30,
    price:200,
    description:'涼めるのに便利。また武器にもなり、ついでに敵から身を守れる万能装備',
    buyable:1,
    sp:0
  },
  'perorodoll':{
    name:'ペロロ様人形',
    id:'perorodoll',
    num:0,
    shell:50,
    price:400,
    description:'ペロロ様の出番です！！まじでヒフミさんいいよね',
    buyable:1,
    sp:0
  }

}

let Tools = {
  'aspirin':{
    id:'aspirin',
    name:'アスピリン',
    price:20,
    description:'頭痛薬らしいですね、これ。痛み止め薬とか耐えればいらんくね？とかいったら炎上するかな',
    num:5,
    process:async function(cam,me,tcam,target){
        await addtext(`おや、頭が痛いって？痛みに効くのはアスピリン！`);
        x = Math.round(humans[tcam][target].maxhp * 0.2);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou()
        await addtext(`体力が${x}回復した!`);
        return 'alive';
    }
  },
  'pablon':{
    name:'パブロン',
    id:'pablon',
    price:40,
    description:'風邪薬。大人とか向けらしいね',
    num:2,
    process:async function(cam,me,tcam,target){
        await addtext(`早めのパブロン♪`);
        x = Math.round(humans[tcam][target].maxhp * 0.4);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 'alive';
    }
  },
  'trypsin':{
    name:'トリプシン',
    id:'trypsin',
    price:60,
    description:'タンパク質を分解し、アミノ酸にする働きのある消化酵素。所属事務所は膵臓。',
    num:0,
    process:async function(cam,me,tcam,target){
        await addtext(`トリプシンを飲んだ！！え？これは薬じゃないって？`);
        x = Math.round(humans[tcam][target].maxhp * 0.6);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 'alive';
    }
  },
  'lulu':{
    name:'ルル',
    id:'lulu',
    price:80,
    description:'sick sickな頭痛薬。毒が流るルルですね。',
    num:0,
    process:async function(cam,me,tcam,target){
        await addtext(`求愛性 孤独 ドク 流るルル♪`)
        x = Math.round(humans[tcam][target].maxhp * 0.8);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 'alive';
    }
  },
  'potion':{
    name:'魔法薬',
    id:'potion',
    price:100,
    description:'投げつけたい。敵に',
    num:0,
    process:async function(cam,me,tcam,target){
        await addtext(`なんか一番しょうもないよね、これ<br>あ、全回復です`)
        x = Math.round(humans[tcam][target].maxhp);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 'alive';
    }
  },
  'throwknife':{
    name:'投げナイフ',
    id:'throwknife',
    price:20,
    description:'シンプルに20%ダメージ。十六夜さんが投げるあれ',
    num:5,
    process:async function(cam,me,tcam,target){
        await addtext('では、ナイフの錆にしてあげましょう');
        x = Math.ceil(humans[tcam][target].hp*0.2);
        let result = await damage(cam,me,tcam,target,x,'sh',['unpursuit','fixed'])
        tekiou();
        await addtext(`${humans[tcam][target].name}に${x}のダメージ！`);
        if(result == 'end'){return 'end'};
        return 'alive';
    }
  },
  'trickyvariables':{
    name:'トリッキーな変数',
    id:'trickyvariables',
    price:40,
    description:'黒崎コユキ、きちゃいました！！なんか面白いことないですか？<br>(10%,25%,40%からランダム)',
    num:1,
    process:async function(cam,me,tcam,target){
        x = Math.floor(Math.random() * 3) + 1;
        switch(x){
          case 1:
              await addtext('ま、これでいいですよね？');
              x = Math.floor(humans[tcam][target].hp*0.10);break;
          case 2:
              await addtext('結果良ければすべてオッケー！ってね？');
              x = Math.floor(humans[tcam][target].hp*0.25);break;
          case 3:
              await addtext('これぞ醍醐味、ってやつ？');
              x = Math.floor(humans[tcam][target].hp*0.40);break;
        };
        let result = await damage(cam,me,tcam,target,x,'sh',['unpursuit','fixed'])
        if(result == 'end'){return 'end'};
        return 'alive';
    }
  },
  'bottlegrenade':{
    name:'ボトルグレネード',
    id:'bottlegrenade',
    price:60,
    description:'殴るついでに燃やす。まじでつよい<br>レッドウィンターの問題児にしては上出来すぎる',
    num:0,
    process:async function(cam,me,tcam,target){
        await addtext('これはちょっと、スパイシーなやつだよ');
        let result = await damage(cam,me,tcam,target,0.8,'mg',['unpursuit'])
        if(result == 'end'){
          await addtext('レッドウィンターの問題児にしては上出来じゃない？');
          return 'dead';
        };
        await buffadd(tcam,target,'burn',3,1);
        return 'alive';
    }
  },
  'coveringfire':{
    name:'援護射撃',
    id:'coveringfire',
    price:80,
    description:'ダメージ与える。ゴミ箱に隠れてる人。',
    num:0,
    process:async function(cam,me,tcam,target){
        await addtext('え、援護します...');
        let x = Math.ceil(humans[tcam][target].hp*0.6);
        let result = await damage(cam,me,tcam,target,x,'mg',['unpursuit','fixed']);
        if(result == 'end'){
          await addtext('わ、私のことはお気になさらずに...');
          return 'dead';
        }
        return 'alive';
    }
  },
  'bomb':{
    name:'爆弾',
    id:'bomb',
    price:100,
    description:'エクスプローージョン！！！<br>敵を確殺します。嬉しいね',
    num:1,
    process:async function(cam,me,tcam,target){
        let x = humans[tcam][target].hp;
        let result = await damage(cam,me,tcam,target,x,'mg',['unpursuit',"fixed","penetrate"]);
        await addtext('爆発オチなんてサイテー！！');
        return 'dead';
    }
  },
  'redcard':{
    name:'レッドカード',
    id:'redcard',
    price:35,
    description:'退場です。帰れ(スキップ)',
    num:3,
    process:async function(cam,me,tcam,target){
        await buffadd(tcam,target,'skip',1,1);
        await addtext('カードを仕込みました!')
        return 'alive';
    }
  },
  'bluecard':{
    name:'ブルーカード',
    id:'bluecard',
    price:35,
    description:'リバースを召喚！このカードは相手と自分の体力を交換する！！割合だ！！！！',
    num:0,
    process:async function(cam,me,tcam,target){
        let who = humans[cam][me];
        let tag = humans[tcam][target]
        x = who.hp/who.maxhp*tag.hp;//割合交換(そのうちゲージにする時用)
        y = tag.hp/tag.hp*who.maxhp;
        tag.hp = x;
        if(tag.hp < tag.hp){tag.hp = tag.hp;}
        who.hp = y;
        if(who.maxhp < who.hp){who.hp = humans.players[me].maxhp;}
        tekiou();
        await addtext('これはリバースのモニュメントか？');
        return 'alive';
    }
  },
  'greencard':{
    name:'グリーンカード',
    id:'greencard',
    price:35,
    description:'バフを2個ランダムでつける。つよい',
    num:0,
    process:async function(cam,me,tcam,target){
        let rbuffs = ['powerup','shellup','luck'];
        rbuffs = arrayShuffle(rbuffs);
        let buff1 = rbuffs[0];
        let buff2 = rbuffs[1];
        await buffadd(tcam,target,x,3,Math.floor(Math.random()*2)+1);
        await buffadd(tcam,target,y,3,Math.floor(Math.random()*2)+1);
        await addtext(`${humans[tcam][target].name}にバフを二個つけました！！`);
        return 'alive';
    }
  },
  'blackcard':{
    name:'ブラックカード',
    id:'blackcard',
    price:35,
    description:'デバフを2個つける。割とつよい',
    num:0,
    process:async function(cam,me,tcam,target){
        let rbuffs = ['powerdown','shelldown','poison','burn','freeze'];
        rbuffs = arrayShuffle(rbuffs);
        for(i = 0;i < 2;i++){
          await buffadd(tcam,target,rbuffs[i],3,Math.floor(Math.random()*2)+1);
        }
        log.textContent = humans[tcam][target].name+'にバフをニ個つけました！！';await delay(1000);
        return 'alive';
    }
  },
}

let Skills = {
  ex:{
    'null':{
        type:'ex',
        id:'null',
        name:'null',
        description:'何もないです。まあこれが店頭に並ぶこともないでしょうけどね。はい論破',
        price:0,
        buyable:0,
    },
    '50%split':{//変更予定
        type:'ex',
        id:'50%split',
        name:'GO!SPLIT!!',
        description:`自分の体力を最大の50%削り、分身を作りだす`,
        price:95,
        buyable:1,
        process:async function(cam,me){
          console.log('slimeのex発動ですわ〜〜〜')
          return 0;
        }
    },
    'placeturret':{
        type:'ex',
        id:'placeturret',
        name:'雷ちゃん、召喚',
        description:'タレットを1つ配置する',
        price:95,
        buyable:1,
        process:async function(cam,me){
          turretPlace(cam);
          return 0;
        }
    },
    'trickyvariables':{
        type:'ex',
        id:'trickyvariables',
        name:'トリッキーな変数',
        description:'爆弾を投げる。効果はランダム',
        price:95,
        buyable:1,
        process:async function(cam,me){
          let [target, tcam] = await LetsTargetSelect();
          await addtext(`${humans[cam][me].name}は爆弾を投げた...`);
          x = random(0,5)
          switch(x){
              case 0:{
                await addtext('しかし不発弾だった!!');
                break;//これによる効果とかもあっていいかも
              };
              case 5:{
                await addtext('Lucky! 爆弾は焼夷弾だった!!!');
                break;
              };
              case 4:{
                await addtext('爆弾は花火だった!');
                break;
              };
              case 3:{
                await addtext('爆弾は毒ガス入りだった!!');
                await buffadd(tcam,target,'poison',3,1);
                break; //毒ガス入りだった場合
              };
              case 2:{
                await addtext('爆弾はスライム入りだった!!');
                await buffadd(tcam,target,'onslime',2,1);
                break;//スライム入りだった場合
              };
              case 1:{
                await addtext('爆発した..だがただの特殊な薬品だった!!');
                break;
              };
          }
          let result = await damage(cam,me,tcam,target,x,'sh',4);
          if(result == 'end'){return 1;}
          return 0;
        }
    },
    'bigdiamond':{
        type:'ex',
        id:'bigdiamond',
        name:'私がかけた魔法だよ',
        description:'敵に攻撃力の150%のダメージを与え、たまに凍らせる',
        price:80,
        buyable:1,
        process:async function(cam,me){
          let [target, tcam] = await LetsTargetSelect();
          await addtext(
            arraySelect(
              ['こんな大きなダイアモンド見たことないでしょ？あげるね～',
                'あなた…それじゃあダメだよ',
                'ちょっとは静かになさい！',
                '私が誰だか知ってるの？'
              ]
            )
          );
          let result = await damage(cam,me,tcam,target,1.5,'sh',4);
          if(result == 'end'){return 'end';}
          if(Math.floor(Math.random()*2)) await buffadd(tcam,target,'freeze',4,1)
          return 0;
        }
    },
    'lightningstorm':{
        type:'ex',
        id:'lightningstorm',
        name:'ライニングストーム',
        description:'敵全体に攻撃力の120%のダメージを与え、帯電にする<br>帯電:自身の行動時自傷ダメージが入る',
        price:60,
        buyable:1,
        process:async function(cam,me){
          let [target, tcam] = await LetsTargetSelect(3);
          let result = await damage(cam,me,tcam,target,1.5,'sh',4);
          if(result == 'end'){return 1;}
          await buffadd(tcam,target,'elec',2,1);
          return 'alive';
        }
    },
    'kylieeleison':{
        type:'ex',
        id:'kylieelison',
        name:'Kylie Eleison',
        description:'敵に攻撃力の200%のダメージ。もし敵の体力が70%以上ならば400%',
        price:110,
        buyable:1,
        process:async function(cam,me){
          phase = 0; disappear();
          let target = await LetsTargetSelect();
          x = 2;
          if(humans[target[1]][target].hp > humans[target[1]][target].maxhp * 0.7) x = 4;
          let result = await damage(cam,me,target[1],target,x,'sh',4);
          if(result == 'end'){return 'end';}
          return 'alive';
        }
    },
    'standrone':{
        type:'ex',
        id:'standrone',
        name:'自走式閃光ドローン',
        description:'敵に攻撃力の75%のダメージを与え、スタンさせる',
        price:60,
        buyable:1,
        process:async function(cam,me){
          phase = 0; disappear();
          let target = await LetsTargetSelect();
          let result = await damage(cam,me,target[1],target,0.75,'sh',4);
          if(result == 'end'){return 'end';}
          await buffadd(target[1],target,'stun',1,1);
          return 'alive';
        }
    },
    'recievechallenge':{//仲間にした方がいいかも
        type:'ex',
        id:'recievechallenge',
        name:'挑戦状を受け取ってください!!',
        description:'敵の防御力を下げ、自身の攻撃力を上げる',
        price:90,
        buyable:1,
        process:async function(cam,me){
          phase = 0; disappear();
          let [tcam,target] = await LetsTargetSelect();
          let result = await damage(cam,me,tcam,target,0.2,'sh',4);
          if(result == 'end'){return 'end';}
          await buffadd(tcam,target,'shelldown',3,1);
          await buffadd(cam,me,'powerup',3,2);
          return 'alive';
        }
    },
    'timedpursuit':{//上に同じく
        type:'ex',
        id:'timedpursuit',
        name:'小心者の観測',
        description:'敵を弱点把握状態を付与する',
        price:50,
        buyable:1,
        process:async function(cam,me){
          phase = 0; disappear();
          let [tcam,target] = await LetsTargetSelect();
          await addtext(arraySelect(['わたしはその辺の小石...','わたしのことなんて、気にしないでください...','すみません、一人にさせてください......']));
          await buffadd(tcam,target,'weaknessgrasp',2,1);//弱点把握状態
          return 'alive';
        },
    },
    //bombeはしんだよ
  },
  ns:{
    'null':{
        type:'ns',
        id:'null',
        name:'null',
        description:'(まじでnullです。効果無し。外れ。乙)',
        price:0,
        buyable:0,
        cool:0
    },
    'throwslime':{
        type:'ns',
        id:'throwslime',
        name:'Attach!Slime!!',
        description:'敵にスライムをくっつける',
        price:70,
        buyable:1,
        cool:3,
        process:async function(cam,me){
          let [tcam,target] = ShallTargetSelect(cam,me,'er',0);
          await buffadd(tcam,target,'onslime',1,1);
          await addtext(`${humans[tcam][target].name}にスライムが覆い被さった!`);
          return 'alive';
        }
    },
    'throwwrench':{
        type:'ns',
        id:'throwwrench',
        name:'匙を投げる？これはレンチだよ',
        description:'レンチを投げる準備をし、次の攻撃が二倍になる',
        price:70,
        buyable:1,
        cool:4,
        process:async function(cam,me){
          await buffadd(cam,me,'letsthrow',2,1);
          await addtext('wrenchを投げる準備ができた!');
          return 'alive';
        }
    },
    'gambler':{
        type:'ns',
        id:'gambler',
        name:'かけ上手',
        description:'次の攻撃時に0,2,4倍の倍率がかかる',
        price:70,
        buyable:1,
        cool:3,
        process:async function(cam,me){
          await buffadd(cam,me,'gambling',1,1);
          addtext('さあ、ギャンブルの時間だ!!');
          return 'alive';
        }
    },
    'improve':{
        type:'ns',
        id:'improve',
        name:'改善が必要だよ',
        description:'攻撃力を1.4倍に上昇させる',//変更予定,
        price:30, //"負荷"みたいにして、stackのbuffをつけて、攻撃力を上げさせる〜とかどう？
        buyable:1,
        cool:5,
        process:async function(cam,me){
          await buffadd(cam,me,'improve',4,1);
          await addtext('パーツアップグレード。');
          return 'alive';
        }
    },
    'elecbarrier':{
        type:'ns',
        id:'elecbarrier',
        name:'エレクトリックバリア',
        description:'体力が最も低い味方に帯電バリアを付与する。<br>帯電バリア:被攻撃時相手に帯電を付与する<br>帯電:自身の行動時自傷ダメージが入る',
        price:70,
        buyable:1,
        cool:3,
        process:async function(cam,me){
          let [tcam,target] = ShallTargetSelect(cam,me,'phpl',0);
          await buffadd(tcam,target,'elecshield',2,1);
          await addtext('帯電バリアを付与しました！');
          return 'alive';
        }
    },
  },
  ps:{
    'null':{
        type:'ps',
        id:'null',
        name:'null',
        description:'(まじでnullです。効果無し。外れ。乙)',
        price:0,
        buyable:0,
    },
    'sthree':{
        type:'ps',
        id:'sthree',
        name:'DoYourBest!!',
        description:'slash時、たまに3回攻撃する',
        price:90,
        buyable:1,
    },
    'solplaceturret':{
        type:'ps',
        id:'solplaceturret',
        name:'雷ちゃん、もうちょっと',
        description:'slash of light命中時、タレットを1つ配置する',
        price:90,
        buyable:1,
    },
    'highsol':{
        type:'ps',
        id:'highsol',
        name:'生粋の勝負師',
        description:'slash of lightの命中率が下がるが、命中時3倍のダメージ',
        price:90,
        buyable:1,
    },
    'enemy50%pursuit':{
        type:'ps',
        id:'enemy50%pursuit',
        name:'一度限りの取引',
        description:'攻撃によって敵の体力を50%以下だった場合、攻撃力の70%で追撃する',
        price:70,
        buyable:1,
    },
    'elecshock':{
        type:'ps',
        id:'elecshock',
        name:'エレクトリック衝撃',
        description:'会心時、相手に帯電を付与する。<br>帯電:自身の行動時自傷ダメージが入る',
        price:90,
        buyable:1,
    }
  }
}

let Stages = {
  '草原':{
    name:'創生黎明の原野',
    id:'草原',
    tiles: ['a','b'],
    num:1, //?
    phase:1, //?
    enemies:['蒼白の粘液','翠嵐の風刃','黄昏の穿影','燐光の妖花','琥珀の甲羅獣','蒼碧の震鱗','白霧の幻影獣']
  }
};

let Enemies = {
  '蒼白の粘液':{
    name:'蒼白の粘液',
    stage:1,
    maxhp:'+10',
    atk:'+0',
    def:'-10',
    maxmp:'0',
    matk:'0',
    mdef:'-20',
    critlate:'-0.01',
    critdmg:'-1',
    critresist:'+1',
    speed:'40',
    acts:{
        1:{
          name:'粘液飛ばし',
          probability:75,
          num:1,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は粘液を飛ばしてきた！`);
              let [tcam,target] = ShallTargetSelect(cam,me,'phph',0);
              let result = await damage(cam,me,tcam,target,1,'sh',1);
              if(result == 'end')return 'end';
              return 'alive';
          }
        },
        2:{
          name:'粘液付与',//やばい方のスライムも作りたいね 一緒に溶けよ....? みたいな..ってちょっと癖すぎるか....?よし、技名は自己責任で表示可にしよう その場合セリフは...?
          probability:25,
          num:3,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は粘液を絡ませてきた！`);//いやこれはこれでやばいか...?いや全然捉えようによってはやばいわ
              let [tcam,target] = ShallTargetSelect(cam,me,'phph',0);
              await buffadd(tcam,target,'stickyslime',2,1);
              return 'alive';
          }
        }
    }
  },
  '翠嵐の風刃':{
    name:'翠嵐の風刃',
    stage:1,
    maxhp:'+10',
    atk:'+10',
    def:'-10',
    maxmp:'0',
    matk:'+0',
    mdef:'+0',
    critlate:'+0.3',
    critdmg:'+0.5',
    critresist:'+0',
    speed:'75',
    acts:{
        1:{
          name:'体当たり',
          probability:70,
          num:1,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は体当たりを仕掛けてきた！`);
              let [tcam,target] = ShallTargetSelect(cam,me,'phpl',0);
              let result = await damage(cam,me,tcam,target,1,'sh',1);
              if(result == 'end')return 'end';
              return 'alive';
          }
        },
        3:{
          name:'体当たり・改',
          probability:30,
          num:3,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は回転しながら突進してきた！`);
              let [tcam,target] = ShallTargetSelect(cam,me,'phpl',0);
              let result = await damage(cam,me,tcam,target,1.5,'sh',1);
              if(result == 'end')return 'end';
              return 'alive';
          }
        }
    }
  },
  '黄昏の穿影':{
    name:'黄昏の穿影',
    stage:1,
    maxhp:'-10',
    atk:'+15',
    def:'+0',
    maxmp:'0',
    matk:'+0',
    mdef:'+0',
    critlate:'+0',
    critdmg:'+0',
    critresist:'+0',
    speed:'60',
    acts:{
        1:{
          name:'消滅',
          probability:60,
          type:'reinvisi',
          num:1,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は姿を消..あれどこ行った？`);
              let [tcam,target] = ShallTargetSelect(cam,me,'ec',0);
              await buffadd(tcam,target,'disappear',2,1);
              return 'alive';
          }
        },
        2:{
          name:'衝突',
          probability:20,
          type:'abinvisi',
          num:2,
          process:async function(cam, me){
              let x = buffhas(cam, me, 'disappear') ? (buffclear(cam, me, 'disappear'), 2) : 1;
              await addtext(`${humans[cam][me].name}は突進してきた！`);
              let [tcam,target] = ShallTargetSelect(cam,me,'pr',0);
              let result = await damage(cam,me,tcam,target,x,'sh',1);
              return result;
          }
        },
        3:{
          name:'ローキック',//ロストワンの号哭の号哭使いたいけど意味が泣くことらしい
          probability:20,
          type:'none',
          num:3,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}はローキックしてきた！`)
              let selected = ShallTargetSelect(cam,me,'phpl',0);
              let result = await damage(cam,selected[1],me,selected[0],x,'sh',1);
              await buffadd(selected[1],selected[0],'speeddown','turn',2,1);
              return result;
          }
        }
    }
  },
  '燐光の妖花':{
    name:'燐光の妖花',
    stage:1,
    maxhp:'-15',
    atk:'-10',
    def:'+0',
    maxmp:'0',
    matk:'+0',
    mdef:'+15',
    critlate:'+0',
    critdmg:'+0.5',
    critresist:'+0.1',
    speed:'50',
    acts:{
        1:{
          name:'しびれごな',
          probability:30,
          type:'none',
          num:1,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は痺れ粉を振りかけてきた！`)
              let selected = ShallTargetSelect(cam,me,'patkh',0);
              await buffadd(selected[1],selected[0],'palsy','turn',2,1);
              return 'alive';
          }
        },
        2:{
          name:'どくのこな',
          probability:30,
          type:'none',
          num:2,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は毒の粉を振りかけてきた！`)
              let selected = ShallTargetSelect(cam,me,'phph',0);
              await buffadd(selected[1],selected[0],'poison','turn',2,1);
              return 'alive';
          }
        },
        3:{
          name:'ねむりごな',
          probability:30,
          type:'none',
          num:3,
          process:async function(cam, me){
              await addtext(`${humans[cam][me].name}は眠り粉を振りかけてきた！`)
              let selected = ShallTargetSelect(cam,me,'patkh',0);
              await buffadd(selected[1],selected[0],'sleep','turn',1,1);
              return 'alive';
          }
        }
    }
  },






  '古書館の魔術師':{//ウイさん　コッペパンの"めっちゃ好きなキャラ"。ヒナタさんと仲がいい。
    name:'古書館の魔術師',
    maxhp:'-10',
    atk:'-15',
    def:'+5',
    maxmp:'0',
    matk:'+0',
    mdef:'+20',
    critlate:'+0.05',
    critdmg:'+0',
    critresist:'+0.1',
    speed:'40',
    acts:{
        1:{
          name:'攻撃！',//これはpazzlineね
          num:1,
          process:async function(cam, me){  
              log.textContent = `${humans[cam][me].name}はピストルカービンで撃った！`;await delay(1000);//ウイさんの武器やね デ・リーズル カービン
              let selected = ShallTargetSelect(cam,me,'phpl',0);
              let result = await damage(cam,selected[0],me,selected[1],1,'sh',1);
              return result;
          }
        },
        2:{
          name:'古書の専門家',
          num:2,
          process:async function(cam, me){
              log.textContent = `${humans[cam][me].name}は古書の専門家だ！！`;await delay(1000);//いやごめん、は？ (ウイさんのEX「古書の専門家」より)
              let selected = ShallTargetSelect(cam,me,'eatkh',0);//enemies atk high
              let result = await Magics.power.process(cam,selected[0],me,selected[1]);
              return result;
          }
        },
        3:{
          name:'伝達されていく知識',
          num:3,
          process:async function(cam, me){
              log.textContent = `${humans[cam][me].name}は知識を伝達した！`;await delay(1000);//ウイさんのNS「伝達されていく知識」..いやそのまますぎるか...?
              let selected = ShallTargetSelect(cam,me,'ec',1);//自分付近
              await Magics.boost.process(cam,selected[0],me,selected[1]);
              return 'alive';
          }
        }
    }
  },
  '読書マニアな司書':{ //シミコさん
    name:'読書マニアな司書',
    maxhp:'+10',
    atk:'+10',
    def:'-10',
    maxmp:'0',
    matk:'+0',
    mdef:'+0',
    critlate:'+0.3',
    critdmg:'+0.5',
    critresist:'+0',
    speed:'75',
    acts:{
        1:{
          name:'体当たり',
          num:1,
          process:async function(cam, me){
          }
        },
        2:{
          name:'体当たり',
          num:2,
          process:async function(cam, me){
          }
        },
        3:{
          name:'体当たり',
          num:3,
          process:async function(cam, me){
          }
        }
    }
  },
  '忍び寄るナース':{ //セリナさん
    name:'忍び寄るナース',
    maxhp:'+10',
    atk:'+0',
    def:'+10',
    maxmp:'0',
    matk:'+0',
    mdef:'+0',
    critlate:'+0',
    critdmg:'+0',
    critresist:'+0',
    speed:'50',
    acts:{
        1:{
          name:'体当たり',
          num:1,
          process:async function(cam, me){
          }
        },
        2:{
          name:'体当たり',
          num:2,
          provess:async function(cam, me){
              
          }
        },
        3:{
          name:'体当たり',
          num:3,
          process:async function(cam, me){
              
          }
        }
    }
  },
  '「救護」のプロ':{ //ミネさん
    name:'「救護」のプロ',
    maxhp:'+10',
    atk:'+0',
    def:'+10',
    maxmp:'0',
    matk:'+0',
    mdef:'+0',
    critlate:'+0',
    critdmg:'+0',
    critresist:'+0',
    speed:'50',
    acts:{
        1:{
          name:'体当たり',
          num:1,
          process:async function(cam, me){
          }
        },
        2:{
          name:'体当たり',
          num:2,
          process:async function(cam, me){
          }
        },
        3:{
          name:'体当たり',
          num:3,
          process:async function(cam, me){
          }
        }
    }
  }
};

let Prefixes = {
  'furious':{
    id:'furious',
    name:'激昂',
    rare:1,
    process:function(cam,me){
      humans[cam][me].atk  = Math.floor(humans[cam][me].atk*1.5);
      humans[cam][me].def = Math.floor(humans[cam][me].def*0.75);
      humans[cam][me].critlate = 0.05
    },
  },
  'calm':{
    id:'calm',
    name:'冷静沈着な',
    rare:1,
    process:function(cam,me){
      humans[cam][me].atk  = Math.floor(humans[cam][me].atk*0.75);
      humans[cam][me].def = Math.floor(humans[cam][me].def*2.0);
      humans[cam][me].critrate = 5
    },
  },
  'gambler':{
    id:'gambler',
    name:'ギャンブラーな',
    rare:1,
    process:function(cam,me){
      humans[cam][me].critrate += 4
      humans[cam][me].maxhp = Math.floor(humans[cam][me].maxhp*2.0);
    },
  },
  'tag':{
    id:'tag',
    name:'守りが固い',
    rare:2,
    process:function(cam,me){
      humans[cam][me].critresist += 5;
      humans[cam][me].maxhp = Math.floor(humans[cam][me].maxhp*1.25);
      humans[cam][me].def = Math.floor(humans[cam][me].def*1.5);
      humans[cam][me].atk = Math.floor(humans[cam][me].atk*0.3)
    },
  },
  'wise':{
    id:'wise',
    name:'心眼持ちの',
    rare:3,
    process:function(cam,me){
      humans[cam][me].critlate = 100; //確定会心人間
      humans[cam][me].critdmg = 1.2; //さすがに弱め
      humans[cam][me].atk = Math.floor(humans[cam][me].atk*0.3); //つまり防御力無視害悪敵ってこと
    },
  },
}

const Quests = {
  main:{
    1:{
      num:1,
      description:"このゲームを見つけてくれてありがとう！！",
      rewards: 200,
      type:0,
      term:[0],
      act:1,
      acted:1
    },
    2:{
      num:2,
      description:"敵を3体倒す",
      rewards: 100, 
      type:'k', //敵を倒す
      term:[0],   //条件(stage1で〜みたいな)
      act:3,    //必要実行数
      acted:0   //現在実行数
    },
    3:{
      num:3,
      description:"ダンジョンを一回クリアする",
      rewards: 100,
      type:'dc',
      term:[0],
      act:1,
      acted:0,
    },
  },
  daily:[
    {
      id: 1,
      description: "ボスを1体倒す",
      rewards: 20,
      type: 'k',
      term:[0],
      act: 1,
      acted: 0,
    },
    {
      id: 1,
      description: "敵を3体倒す",
      rewards: 20,
      type: 'k',
      term:[0],
      act: 3,
      acted: 0,
    },
    {
      id: 1,
      description: "敵を5体倒す",
      rewards: 20,
      type: 'k',
      term:[0],
      act: 5,
      acted: 0,
    },
    {
      id: 1,
      description: "敵を7体倒す",
      rewards: 20,
      type: 'k',
      term:[0],
      act: 7,
      acted: 0,
    },
    {
      id: 1,
      description: "ダンジョンを1回クリアする",
      rewards: 20,
      type: 'dc',
      term:[0],
      act: 1,
      acted: 0,
    }
  ]
};
let noticeData = [
  {
    date: '2025/3/29',
    title: 'お知らせ機能、ついに登場〜☆',
    description: "お知らせ機能を追加したよって話",
    body: "おちゃめ機能つってね\nガハハ\n笑え\n\nえ？ここから出してって？\n助けて！って？\n....右上のxを押したらどうです？\nあ赤いのじゃないですよ？？\n黒いのです、黒いの"
  },
]

let objProcesses = {
  'enemy': async function() {
    
  }
}
let NanigaOkirukana = {
  'none':{
    id:'none',
    name: 'none',
    process:async function(){},
  },
  'stair':{
    id:'stair',
    name:'階段',
    process:async function(){
      GoNextFloor();
    },
  },
  'enemy':{
    id:'enemy',
    name:'敵',
    process:async function(){
      EnemyAppear();
    },
  },
  'fire_on':{
    id:'fire_on',
    name:'焚き火',
    process:async function(){
      movable = 1;
      document.querySelector('#overfieldArea').style.display = 'none';
      document.querySelector('#eventArea').style.display = 'block';
      document.querySelector('#eventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
      log.textContent = '休憩できそうな場所を見つけた！';
      Camprestper = (Math.floor(Math.random() * 4)+3)/10;
      document.querySelector('#CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
      switch(Math.floor(Math.random() * 3)+1){
        case 1:
        if(Math.floor(Math.random() * 3)+1) y = 10,document.querySelector('#CampTrade').textContent = '放浪武器商人に話しかける';
        else  y = 1, document.querySelector('#CampTrade').textContent = '武器商人に話しかける';
        break;
        case 2: y = 2; document.querySelector('#CampTrade').textContent = '防具取扱専門家に話しかける'; break;
        case 3: y = 3; document.querySelector('#CampTrade').textContent = '道具屋24に話しかける'; break;
      }
    }
  },
  'fire_off':{
    id:'fire_off',
    name:'焚き火跡',
    process:async function(){
      await addtext(arrayGacha( //この重複感好き
        ['この焚き火はもう木炭になっている','まだ温かい..この辺りに誰かいるようだ'],
        [85,15]
      ));
    }
  },
  'shop_skill':{
    id:'shop_skill',
    name:'スキルショップ',
    process:async function(){
      SkillShopOpen();
    }
  },
  'chest_n':{
    id:'chest_n',
    name:'宝箱',
    process:async function(){
      if(!objMap.some(row => row.includes(2))){OpenChest(1);}
    }
  },
  'chest_r':{
    id:'chest_r',
    name:'レア宝箱',
    process:async function(){
      if(!objMap.some(row => row.includes(2))){OpenChest(2);}
    }
  },
  'hopebutton':{
    id:'hopebutton',
    name:'救いのボタン',
    process:async function(){
      HopeButtonact();
    },
  },
  'candytray':{
    id:'candytray',
    name:'あめ置き場',
    process:async function(){
      Candytake();
    }
  },
  'cookietray':{
    id:'cookietray',
    name:'クッキー置き場',
    process:async function(){
      Cookietake();
    }
  },
  'boss':{
    id:'boss',
    name:'boss',
    process:async function(){
      BossEnemyAppear();
    }
  },
  'door':{
    id:'door',
    name:'ドア',
    process:async function(){
      if(!objMap.some(row => row.includes(13))){NextStage();}
    }
  },
  16:{
    name:'chest',
    process:async function(){
      if(!objMap.some(row => row.includes(2))){OpenChest(1);}
    }
  },
  17:{
    name:'rarechest',
    process:async function(){
      if(!objMap.some(row => row.includes(2))){OpenChest(2);}
    }
  },
  19:{
    name:'サソリさん',
    process:async function(){
      ScorpionAct(1);
    }
  },
  20:{
    name:'サボテン', //ついに動いたサボテン
    process:async function(){
      CatusAct();
    }
  },
  21:{
    name:'オアシス',
    process:async function(){
      OasisAct();
    }
  },
  22:{
    name:'砂嵐',
    process:async function(){
      console.log('これはなんもないよ')
    }
  },
  23:{
    name:'サソリさんⅡ',
    process:async function(){
      ScorpionAct(2);
    }
  },
}

let Objectdatas = {
  'enemy':{
    'none':{
      id: 'enemy',
      name: 'none',
      w: 1, //1 == 1massの意
      h: 1,
      spd: 20,
      pass: 0,
    }
  }
}

//#region 移行よろ
async function damage(who, tages, value, kind, prop = []){
  if(!who || !tag) return console.log(who, tag, '対象が定まってないっぽい！！！')
  let hasa = (whi, name) => whi.ables.includes(name);
  // let hasp = (name) => prop.includes(name);
  // let hasa = (name) => prop.includes(name);
  if(!Array.isArray(tages)){tages = [tages];}
  for(let tag of tages){
    //攻撃x回復o = heal 攻撃+攻撃者与ダメ回復 = absorb
    //防御無視 = penetrate 確定会心 = crit 会心無効 = nocrit
    //固定値 = fixed
    console.log(hasa('fixed') ? `${who.name} => ${tag.name} ${kind}で${value}ダメージの予定！ [${prop}]` :
      `${who.name} => ${tag.name} ${kind}で攻撃力の${value}倍 [${prop}]`);


    /*
    let orgAtker = {...who};
    let orgDefer = {...tag};

    const stats = [
      'hp', 'maxhp', 'mp', 'maxmp'
      'atk', 'def',
      'power', 'shell', 'matk', 'mdef',
      'critlate', 'critdmg', 'critresist'
    ];

    let atker = {};
    stats.forEach(stat => {
      atker[stat] = orgAtker[stat];
    });

    let defer = {};
    stats.forEach(stat => {
      defer[stat] = orgDefer[stat];
    });
    */

    let atker = {...who};
    let defer = {...tag}

    stats.forEach(stat => {
      console.log(atker.buffs)
      Object.values(atker.buffs).forEach(buff => {
        if(!buff.data.addable){
          if(buff.data.effect.hasOwnProperty(stat)){
            atker[stat] += buff.data.effect[stat].value;
          }
        }else{
          if(buff.data.effect.hasOwnProperty(stat)){
            atker[stat] += buff.value
          }
        }
      });
      ['weapon','armor','ear','ring','neck'].forEach(bui => {Object.values(atker[bui]).forEach(buff => {
          
      })})

      Object.values(defer.buffs).forEach(buff => {
        if(!buff.data.addable){
          if(buff.data.effect.hasOwnProperty(stat)){
            defer[stat] += buff.data.effect[stat].value;
          }
        }else{
          if(buff.data.effect.hasOwnProperty(stat)){
            defer[stat] += buff.value
          }
        }
      })
    });

    //攻撃力
    let atkval = kind == 'sh' ? atker.atk : atker.matk;
    let dmg = (atkval * atker.power * value/100);
    if(hasa('fixed')) dmg = value;

    //会心
    let crited = 0;
    if(isCrit(atker, defer)) crited = 1;
    if((crited && !hasa('nocrit')) || hasa('crit')){
      dmg *= atker.critdmg / 100;
      if(who.cam == 'players') await addtext('かいしんのいちげき！');
      if(who.cam == 'enemies') await addtext('つーこんのいちげき！');
      //おつだね なんか壊れてるとか言われるんだよね　どのファイル？　画像ファイル全部　そっちでは見えるの？ みえるぜ　まじか、あとたまにjpegがあるからpngじゃないとダメでは？ ぇ
    };

    //防御力
    let defval = kind == 'sh' ? defer.def : defer.mdef;
    if(!hasa('penetrate')) dmg -= (defval * defer.shell);

    //整え
    dmg = Math.floor(dmg);
    if(defer.hp < dmg) dmg = defer.hp;
    console.log(`予測:: ${defer.hp} => ${defer.hp - dmg} | dmg:${dmg}`);

    //実装
    if(!hasa('heal')) await heal(atker, defer, dmg)
    else defer.hp += dmg;

    //ep
    if(atker.cam == 'players') atker.ep += Math.floor(10 * atker.epgain);

    tekiou()
    await addtext(`${defer.name}に${dmg}のダメージ`)

    //その後
    let result = 0;
    if(defer.hp <= 0) result = await killed(atker, defer);
    if(result) return 1;

    //追撃ゾーン　ここどしよ
    if(!hasa('unpursuit')){
      let res = 0;
      if(Weapons[atker.weapon.id].ap){
        res = await Weapons[atker.weapon.id].afterProcess(cam,me,tcam,target,value,kind,prop);
        if(res) return 1;
      }

      if(atker.name == 'herta' && defer.hp <= defer.maxhp / 2 && atker.level >= 10){ // 1凸効果「弱みは付け込み」
        res = damage(who, tag, 20, 'sh', ['unpursuit']);
        if(res) return 1;
      }
      if(atker.ps == 'enemy50%pursuit' && defer.hp <= defer.maxhp / 2 && enemy50pursuitenelgy == 1){
        enemy50pursuitenelgy = 0;
        await addtext(arraySelect(['くるくる〜っと','くるりん〜っと']));
        res = damage(who, tag, 50, 'sh', ['unpursuit']);
        if(res) return 1;
      }
    }
  }
  return 0;
}

async function heal(who, tag, value, code = 'add', ...prop){
  if(!who || !tag) return console.log(who, tag, '対象が定まってないっぽい！！！')
  let hasa = (whi, name) => whi.ables.includes(name);
  let hasp = (name) => prop.includes(name);

  let bh = tag.hp;
  
  let val = value;
  if(val.endsWith('%')){
    val = +val.slice(0, -1)/100;
    comsole.log(`%だったから${val}って値に変えといたぜ`);
    val *= tag.maxhp;
  }
  
  let ah = 0;
  if(code == 'add'){
    ah = tag.hp + val;
  }
  if(code == 'set'){
    ah = val;
  }
  
  if(tag.maxhp < ah) ah = tag.maxhp;
  
  console.log(`${who.nane} => ${tag.name}, val:${val} | ${bh} => ${ah}`);
  
  tag.hp = ah;
  
  return 0;
}
//#endregion


function cm(cam = '指定なし', me = '指定なし'){
  if(cam == '指定なし' && me == '指定なし') cam = 'players', me = 0; //超特別扱い
  
  let who;
  if(me == '指定なし') who = humans[cam];
  else who = humans[cam][me];

  return who;
}


function isCrit(who, tag){
  let lat = who.critlate;
  let res = tag.critresist;
  let is = 0;

  if(!prop.includes('nocrit')) return false;
  
  if(res == 'absolute'){
    is = false;
    console.log('会心無効！')
  }else if(lat == 'absolute'){
    is = true;
    console.log('確定会心！')
  }else{
    is = Math.random() < (lat - res) / 100;
    console.log(`${lat - res}%...結果は${is}!!`)
  }

  return is;
}