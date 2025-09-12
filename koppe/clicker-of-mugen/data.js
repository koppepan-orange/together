let Style = {
  button: {
    solid: '#000000',
    back: '#ffffff',
  },
  text: {
    main: '#222222',
    sub: '#666666',
  },
  tekiou: function() {
    for (let section in this) {
      if (section === 'apply') continue;
      for (let key in this[section]) {
        document.documentElement.style
          .setProperty(`--${section}-${key}`, this[section][key]);
      }
    }
  }
}


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
    description:'持たざる者。何もないが、何でもあるとも言える。\n平均的で普遍的。普通の凡才でただの人間。',
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
    name:'アミー',
    description:'メカニック。工具を用いて割となんでも作れる。\nそのせいか助手には大きく慕われている。\n打たれ弱いので繊細にね',
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
    description:'ピエロさん。ランダム要素多め。\n',
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
    description:'雷電魔術師。"帯電"を用いて戦う\n将軍ではない。誰だ将軍って言ったやつは',
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
    belong:'', //所属
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
    belong:'',
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

let Buffs = {
  'power':{ //if value < 0, それはデバフ扱い
    name:'power', //keyと同じものを
    jpnm:'攻撃倍率',
    type:'buff', // buff/debuff/handle/unique
    kind:'free', // turn/stack/actは付与時に決定。kindはfixe（Lv依存で値決定）かfree（付与時の引数で値決定）を定める用に。 poison/deadpoisonはfixe、burnもfixe。cheerupはfixe。atkup等能力値上昇系はfree。
                 // if(data.kind??'fixed')ってすべきかも。あんまないと思うけど
     //これは廃止。意味わからんし。turn/actならばvalueが等しいならtimeを増加新を削除、等しくないならば新しいものを追加。stackならばtimeがvalueだからかどうかあがいても加算。同盟が増えるこたぁない。
    img:'power', //img名を。たいていそのまま
    description:'攻撃倍率が上がる。やったね！',
  },
  'shell':{
    name:'shell',
    jpnm:'防御倍率',
    type:'buff',
    kind:'free',
    img:'shell',
    description:'防御倍率が上がる。あんまり実感しづらい。',
  },
  'luck':{
    name:'luck',
    jpnm:'幸運',
    type:'buff',
    kind:'fixe',
    img:'luck',
    description:'ターン終了時、確率でもう一回行動できる。\nLv7ならば確定。\n願うと起きやすいです',
    lvs:[
      {luck:20},
      {luck:33},
      {luck:50},
      {luck:67},
      {luck:80},
      {luck:90},
      {luck:100},
    ],
    max:7
  },
  'disappear':{
    name:'disappear',
    jpnm:'消滅',
    type:'buff',
    kind:'fixe',
    img:'disappear',
    description:'姿を消し、攻撃を受けなくなる。\nしかし範囲攻撃はちゃんと当たる。\nLv1ならば範囲攻撃で解除される。',
  },
  'cheerup':{
    name:'cheerup',
    jpnm:'応援！',
    type:'buff',
    kind:'fixe',
    img:'cheerup',
    description:'応援されている状態。攻撃力と速度が上がり会心率が下がる。\nちょっと緊張しちゃうよね、わかる',
    lvs:[
      {
        power:1.0,
        speed:20.0,
        critlate:-5.0
      },
      {
        power: 1.5,
        speed: 25.0,
        critlate: -6.0
      }
    ],
    max:2
  },
  'poison':{
    name:'poison',
    jpnm:'毒',
    type:'debuff',
    kind:'fixe',
    dot:'poison',
    img:'poison',
    description:'ターン終了時HP割合で防御貫通ダメージ。\n毒の苦しみもお好きなんですね',
    //ターン終了時体力のx%のダメージ
    lvs:[
      {poison:'5%'},
      {poison:'7%'},
      {poison:'10%'},
      {poison:'15%'},
      {poison:'20%'},
    ],
    max:5
  },
  'poison_deadly':{
    name:'poison_deadly',
    jpnm:'猛毒',
    type:'debuff',
    kind:'fixe',
    dot:'poison',
    img:'poison_deadly',
    description:'ターン終了時HP割合で防御貫通ダメージ。\nついでにランダムで他のバフ(良)の持続時間を1減少\n徐々〜に蝕まれて終わります。解消を推奨す',
    lvs:[
      {poison:'7%'},
      {poison:'10%'},
      {poison:'15%'},
      {poison:'20%'},
      {poison:'25%'}, //4ターンで死にますね、これ。終わってる
    ],
    max:5
  },
  'blood':{
    name:'blood',
    jpnm:'出血',
    type:'debuff',
    kind:'fixe',
    dot:'blood',
    img:'blood',
    description:'ターン終了時固定ダメージ、非攻撃毎に1.5倍に増加。\nそのままにしとくと普通に死にます',
    //ターン終了時nダメージ、ダメージ喰らい後2倍に増加
    lvs:[
      {blood:2},
      {blood:5},
      {blood:7},
      {blood:10},
      {blood:20},
      {blood:35},
    ],
    max:6
  },
  'blood_born':{
    name:'blood_born', //大怒られしそうな名前だなこれ
    jpnm:'血の誕生',
    type:'debuff',
    kind:'fixe',
    dot:'blood',
    img:'blood_born',
    description:'ターン終了時固定ダメージ、ターン終了毎に2.0倍に増加。\nガチで死にかねん故早めに解除しよう',
    //ターン終了時nダメージ、ターン終了後2倍に増加
    lvs:[
      {blood:5},
      {blood:7},
      {blood:10},
      {blood:20},
      {blood:35},
      {blood:50}, //だめだろ。50→100→200→400→800→1600は。殺戮用
    ],
    max:6
  },
  'burn':{
    name:'burn',
    jpnm:'火傷',
    type:'debuff',
    kind:'fixe',
    dot:'burn',
    img:'burn', //
    description:'ターン終了時固定ダメージ\nマイクラだとすごいギリで耐えるか死ぬかのやつよね',
    //ターン終了時nダメージ
    lvs:[
      {burn:5},
      {burn:10},
      {burn:20},
      {burn:35, atk:-5},
      {burn:50, atk:-10},
    ],
    max:5
  },
  'burn_out':{
    name:'burn_out',
    jpnm:'燃え尽き症候群', //...結構ぴったりよな、俺の雑々ネーミングセンス
    type:'debuff',
    kind:'fixe',
    dot:'burn',
    img:'burn_out',
    description:'ターン終了時固定ダメージ。\nあと...このデバフのダメージで死んだ場合、お金が半分燃えて消えます\n珍しいしょ〜〜戦闘外干渉系',
     //ほんっとお前...もしこのゲームがローグライクカードゲームだったらカードを一枚ランダムに燃やしてたからな？？？ガチ感謝しろよ？？？
    //ターン終了時nダメージ
    lvs:[
      {burn:10},
      {burn:20},
      {burn:35, atk:-5},
      {burn:45, atk:-10},
      {burn:55, atk:-15},
      {burn:75, atk:-25},
    ],
    max:6
  },
  'elec':{
    name:'elec',
    jpnm:'帯電',
    type:'debuff',
    kind:'fixe',
    dot:'elec',
    img:'elec',
    description:'ターン終了時固定ダメージ\nターン終了時、確率で他の味方に伝染する', //"風邪"とかの方が良かったか...?
    //ターン終了時n1ダメージ、n2%の確率で他の味方に伝染
    lvs:[
      {elec:5, spread:10},
      {elec:10, spread:20},
      {elec:20, spread:35},
      {elec:30, spread:50},
      {elec:45, spread:80},
      {elec:60, spread:99},
    ],
    max:6
  },
  'elec_elec':{
    name:'elec_elec',
    jpnm:'帯電・帯電',
    type:'debuff',
    kind:'fixe',
    dot:'elec',
    img:'elec_elec',
    description:'ターン終了時固定ダメージ\nターン終了時、確率で他の味方に伝染する\nあと確率で麻痺のデバフを自身に付与します\n帯電・帯電ってなんだよ',
    //ターン終了時n1ダメージ、n2%の確率で他の味方に伝染
    lvs:[
      {elec:10, spread:20, palsy:10},
      {elec:20, spread:35, palsy:25},
      {elec:30, spread:50, palsy:33},
      {elec:45, spread:80, palsy:50},
      {elec:60, spread:99, palsy:67},
      {elec:80, spread:100, palsy:100},
    ],
    max:6
  },
  'injury':{
    name:'injury',
    jpnm:'傷口',
    type:'debuff',
    kind:'fixe',
    dot:'injury',
    img:'injury',
    description:'攻撃毎に固定ダメージ。\n連続攻撃/行動ビルドに大打撃\n私はこのデバフが最も嫌いです。まぢ無理',
    //攻撃毎にnダメージ
    lvs:[
      {injury:10},
      {injury:25},
      {injury:40},
      {injury:55},
    ],
    max:4
  },
  'injury_gore':{
    name:'injury_gore',
    jpnm:'裂痕', //れっこん..ほぼ造語。中国語にはあるらしい
    type:'debuff',
    kind:'fixe',
    dot:'injury',
    img:'injury_gore',
    description:'行動時固定ダメージ。\nあと被回復量が半減します。\nさっさと解除せんと結構やばいです',
    //攻撃毎にnダメージ
    lvs:[
      {injury:25},
      {injury:40},
      {injury:55},
      {injury:70},
    ],
    max:4
  },

  'freeze':{
    name:'freeze',
    jpnm:'氷結', //レモンサワーじゃないです
    type:'handle',
    kind:'fixe',
    img:'freeze',
    description:'凍っている状態。\nターン開始時、n%の確率で解除されます\n炎属性の攻撃を受けても解除できます',
    // n/100の確率で解除
    lvs:[
      {freeze:75},
      {freeze:67},
      {freeze:50},
      {freeze:33},
      {freeze:20},
      {freeze:5},
    ],
    max:5
  },
  'freeze_blue':{
    name:'freeze_blue',
    jpnm:'凍結', //blueの真意に気づけるかな〜〜？？
    type:'handle',
    kind:'fixe',
    img:'freeze_blue',
    description:'凍結されている状態。\nターン開始時、n%の確率で解除されます\n炎攻撃を受けても解除不可です',
    // n/100の確率で解除
    lvs:[
      {freeze:67},
      {freeze:50},
      {freeze:33},
      {freeze:20},
      {freeze:5},
      {freeze:1},
    ],
    max:6
  },
  'freeze_eternal':{
    name:'freeze_eternal',
    jpnm:'エターナルフリーズ',
    type:'handle',
    kind:'fixe',
    img:'freeze_eternal',
    description:'エターナルフリーズ！！', //どうあがいても解除不可です。この先、デバフ解除が有効だ
    // n/100の確率で解除
    lvs:[
      {freeze:0}
    ],
    max:1
  },
  'palsy':{
    name:'palsy',
    jpnm:'麻痺',
    type:'handle',
    kind:'fixe',
    img:'palsy',
    description:'麻痺ですね。これ好き',
    // n/100の確率で行動不可
    lvs:[
      {palsy:20},
      {palsy:25},
      {palsy:33},
      {palsy:50},
      {palsy:67},
      {palsy:99},
    ],
    max:6
  },
  'stan':{
    name:'stan',
    jpnm:'スタン',
    type:'handle',
    kind:'fixe',
    img:'stan',
    description:'スタンです。\n内部処理的には麻痺の延長',
    // n/100の確率で行動不可
    lvs:[
      {palsy:100}
    ],
    max:1
  },
  'skip':{
    name:'skip',
    jpnm:'スキップ',
    type:'handle',
    kind:'fixe',
    img:'skip',
    description:'はいお前スキップ〜〜笑笑\nぴえん超えてだっさぁですね\nえ？違う？',
  },
  'sleepiness':{
    name:'sleepiness',
    jpnm:'睡魔',
    type:'handle',
    kind:'fixe',
    img:'sleepiness',
    description:'睡魔..微熱魔じゃないです\nターン終了時にsleepyをnstack増加さかせます',
    // sleepy:sleepyをnstack増加
    lvs:[
      {sleepy:5},
      {sleepy:10},
      {sleepy:20},
      {sleepy:25},
      {sleepy:50},
      {sleepy:100},
    ],
    max:6
  },
  'sleepy':{
    name:'sleepy',
    jpnm:'眠気',
    type:'handle',
    kind:'fixe',
    img:'sleepy',
    description:'眠くなってる状態..です....\n100stack到達でsleepingに変化します....\n変化後のsleepingのLvはsleepinessに寄りけりです\nあと、行動時に確率でsleepyをnstack減少できます....',
    lvs:[ //-と捉へよ
      {sleepy:25},
      {sleepy:20},
      {sleepy:15},
      {sleepy:10},
      {sleepy:5},
      {sleepy:1},
    ]
  },
  'sleeping':{
    name:'sleeping',
    jpnm:'眠',
    type:'handle',
    kind:'fixe',
    img:'sleeping',
    description:'攻撃されると..ちょっと....起きます......\nzzz...',
    lvs:[
      {sleepy:50},
      {sleepy:65},
      {sleepy:80},
      {sleepy:90},
      {sleepy:95},
      {sleepy:100},
    ],
  },
  //この3つ、どれかは固定値にした方がいいかも。これだとLv4, 5が1眠後一緒になる。
  /*
    sleepy → sleeping 案

    ・sleepiness（睡魔）[stack]-[デバフ解除]
    ターン終了時に、sleepyをnstack増加

    ・sleepy（眠気）[stack]-[戦闘終了時解消]
    行動時にn1%の確率でn2stack減少（眠気の覚め）
    100stack到達でこのbuffを消去、sleepingを追加。Lvはsleepiness依存

    ・sleeping（睡眠）[stack]-[戦闘終了時解消]
    行動不能100%
    ダメージ受けたらn1%の確率で「sleepy(n2stack)に戻る」
    → これなら"直接解除"じゃないし、眠気が残るから再び寝落ちしやすい

    ↑これ、なんかのボス専用にした方がいいか？..否、それだとふつーのゲームと同じ。普遍を着飾っていこう
  */
  'anger':{
    name:'anger',
    type:'handle',
    kind:'fixe',
    img:'anger',
    description:'すごいイラつかせてくる敵..だからメガさんとかと相性良さそう\nで避けられてさらに煽られるみたいな', //メガさん == メスガキさん
    // stack/100の確率で殴りかかる
  },

  'onslime':{
    name:'onslime',
    type:'unique',
    kind:'fixe',
    img:'onslime',
    description:'スライムが体に粘りついている状態です。やばいね(行動不可)',
    lvs:{
      1:1,
    }
  },
  'stickyslime':{
    name:'stickyslime',
    type:'unique',
    kind:'fixe',
    
    img:'stickyslime',
    description:'スライムがくっついているおかげで行動するとダメージを受けます',
    //行動時ダメージ(固定)
  },
  'letsthrow':{
    name:'letsthrow',
    type:'unique',
    kind:'fixe',
    
    img:'wrench',
    description:'レンチを投げる準備をしている状態。次の攻撃与ダメ2倍',
  },
  'gambling':{
    name:'gambling',
    type:'unique',
    kind:'fixe',
    
    img:'gamble',
    description:'次の攻撃が0,2,4倍になる。これぞ醍醐味..ってやつ？',
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
    process:async function(who, are){
        let result = await damage(who, are, 100, 'sh');
        if(result) return 1;

        //elseesに移行よろ
        if(who.ps == 'sthree' && probability(25)){
          await addtext(`${who.name}は頑張った!`);
          result = await damage(who, are, 100, 'sh');
          if(result) return 1;
          result = await damage(who, are, 100, 'sh');
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
    process:async function(who, are){
        if(probability(67)){ //端数切り上げは許してくれ
          let result = await damage(who, are, 100, 'sh');
          if(result) return 1;
        }else{
          addlog('miss!');
        }

        if(probability(67)){
          let result = await damage(who, are, 100, 'sh');
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
    description:'初期のロマン技。\n当たれば幸い的な感じで打ったほうが楽',
    mp:0,
    lv:1,
    tcam:'players',
    process:async function(who, are){
        let pro = 33;
        if(who.ps == 'highsol') pro = 20;

        let result = 0;
        if(probability(pro)){
          result = await damage(who, are,300,'sh');
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
    process:async function(who, are){
        await addtext(`${who.name}はhealを唱えた！`)
        await heal(who, are, '20%', add)
        
        return 0;
    }
  },
  'power':{
    id:'power',
    name:'power',
    description:'攻撃力が1.25倍になります。やったね！',
    mp:5,
    lv:1,
    process:async function(who, are){
        await addtext(`${who.name}はpowerを唱えた！`)
        await buffadd(are,'powerup','turn',3,1);
        await letsElseed(are, who, 'magic', 'power'); //読み方はワザップです
        //soldatoのシステム応用しつつで
        return 0;
    }
  },
  'shell':{
    id:'shell',
    name:'shell',
    description:'防御力が1.25倍になります！\n実感あんまりないけど..',
    mp:5,
    lv:1,
    process:async function(who, are){
        await addtext(`${who.name}はshellを唱えた!`);
        await buffadd(are,'shellup','turn',3,1);
        // await letsElseed(tcam, target, cam, me, 'magic', 'shell'); 
        return 0;
    }
  },
  'poison':{
    id:'poison',
    name:'poison',
    description:'相手を毒にします\n毒ビルド強すぎてやばい',
    mp:7,
    lv:3,
    process:async function(who, are){
        await addtext(`${who.name}はpoisonを唱えた!`);
        await buffadd(who, are,'poison','turn',4,1);
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
    process:async function(who, are){
        await addtext(`${humans[cam][me].name}はサンディを唱えた!!`);
        let result = await damage(who, are,30,'mg',4);//雷 なんかいい感じにしといて fi,aq,th,wi,da,liみたいな
        if(result) return 1;
        if(probability(2)) buffadd(who, are, 'hirumi', 1)
        return 0;
    }
  },
  'garva':{
    id:'garva',
    name:'ガーヴァ',
    description:'濁点多いと強そうだよね\nまれに火傷も',
    mp:4,
    lv:4,
    process:async function(who, are){
        let result = await damage(who, are,110,'mg',2);//火
        if(result) return 1;
        if(probability(10)) await buffadd(who, are,'burn','turn',2,1);
        return 0;
    }
  },
  'healerthan':{
    id:'healerthan',
    name:'healer than',
    description:'体力を40%回復します。healよりも強い。だから比較のthanなんですね〜',
    mp:8,
    lv:6,
    process:async function(who, are){
        await heal(who, are, '40%', 'add')
        return 0;
    }
  },
  'luck':{
    id:'luck',
    name:'luck',
    description:'二回行動人間になれるかも？なやつ。lv1\n欠けた運を施錠しましょう',
    mp:4,
    lv:7,
    process:async function(who, are){
        await buffadd(who, are, 'luck', 'turn', 4, 1);
        return 0;
    }
  },
  'thundos':{
    id:'thundos',
    name:'サンドス',
    description:'二段目。\nサンドじゃないんです許してください',
    mp:8,
    lv:8,
    process:async function(who, are){

        damage(who, are,120,'mg',4);//雷
        if(probability(5)) buffadd(who, are,'hirumi',1)
        return 0
    }
  },
  'morepower':{
    id:'morepower',
    name:'more power',
    description:'攻撃力が1.5倍になります。power使ってた人いるんかな',
    mp:8,
    lv:9,
    process:async function(who, are){
        await buffadd(who, are,'powerup',3,2)
        return 0
    }
  },
  'moreshell':{
    id:'moreshell',
    name:'more shell',
    description:'防御力が1.5倍になります。けどあんまり実感はないよね',
    mp:8,
    lv:9,
    process:async function(who, are){
        await buffadd(who, are, 'shellup',3,2)
        return 0
    }
  },
  'deadlypoison':{
    id:'deadlypoison',
    name:'deadly poison',
    description:'敵を猛毒にします。やったね！！！',
    mp:12,
    lv:10,
    process:async function(who, are){
        await buffadd(who, are,'poison','turn',5,2);
        return 0;
    }
  },
  'garvan':{
    id:'garvan',
    name:'ガーヴァン',
    description:'\nnotラージャン',
    mp:10,
    lv:11,
    process:async function(who, are){
        let result = await damage(who, are,230,'mg',2);//火
        await buffadd(who, are,'burn','turn',2,2);
        return result
    }
  },
  'thehealest':{
    id:'thehealest',
    name:'the healest',
    description:'60%回復。これ以上はない、っていう意味ですね。\nxyzじゃないよ',
    mp:12,
    lv:12,
    process:async function(who, are){
        await heal(who, are, '60%', 'add')
        return 0
    }
  },
  'luckgreat':{
    id:'luckgreat',
    name:'luckgreat',
    description:'luckよりも行動しやすいです。嬉しいね',
    mp:12,
    lv:14,
    process:async function(who, are){
        await buffadd(who, are,'luck','turn',5,2);
        return 0
    }
  },
  'merazoma':{
    id:'merazoma',
    name:'メラゾーマ',
    description:'ぬわーーっっ!!ってしてやりましょうぜ(炎の大ダメージ)',//対パパス最強にしたいね、これ
    mp:12,
    lv:12,
    process:async function(who, are){
        let result = await damage(who, are, 3.5, 'mg',4);//雷
        await buffadd(who, are,'burn','turn',3,2);
        return result
    }
  },
  'thoron':{
    id:'thoron',
    name:'Thoron',
    description:'当たったらラッキー、シールドでされたら空前で追撃なつよつよ技。\nけどギガサンダーの方が好き(雷の大ダメージ)',
    mp:20,
    lv:15,
    process:async function(who, are){
        let result = await damage(who, are,6,'mg',4);//雷
        return result
    }
  },
  'random':{
    id:'random',
    name:'Random',
    description:'自身が覚えてる魔法からランダム(mpは5固定)。これぞ醍醐味ってやつよな',
    mp:5,
    lv:1,
    process:async function(who, are){
      // x = Object.keys(Magics).map(a => Magics[a].lv <= humans[cam][me].level ? Magics[a].name : null).filter(Boolean)
      // y = Math.floor(Math.random() * x.length);
      // log.textContent = x[y]+'が出た！';await delay(1000);
      // x[y](who, are);
      let arr = Object.values(Magics).filter(a => a.lv <= who.level && a.mp <= who.mp).map(a => a.name);
      if(arr.length >= 1){
        let mg = arraySelect(arr).name;
        await addtext(`${mg}が出た！`);
        await delay(500);
        let res = await Magics[mg].process(who, are);
        return res
      }else{
        await addtext(`失敗！`)
        await addtext(`マキシマイザ・マキシマイザー！！`);
        return 0;
      }
    }
  },

  
}

let Equips = {
  'weapon':{
    'none':{
      name:'なし',
      id:'none',
      num:0, //このnumはいらんとおもう、hasEquip( [] )で管理するし
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
      description:'つよつよ武器。\n花や骨に向かって振り回しましょう',
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
      description:'名前意味わからんランキング第1位。\n攻撃時相手の体力を吸い回復する。\n変換効率は80%..水力発電と同じくらい',
      buyable:1,
      ap:1,
      afterProcess:async function(cam,me,are,rate,kind,prop,dmg){
          x = (dmg * 0.80).toFixed(0);
          humans[cam][me].hp += x;
          if(humans[cam][me].hp > humans[cam][me].maxhp){humans[cam][me].hp = humans[cam][me].maxhp;}
          addtext('血を吸った！');
          tekiou();
          addtext(`体力が${x}回復した!`);
          return 0;
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
      afterProcess:async function(cam,me,are,rate,kind,prop,dmg){
          addtext(arraySelect(['トリニティの砲撃術は優秀ですから。','お口に合うと良いのですが..']));
          let result = await damage(cam,me,are,0.4,kind,['unpursuit']);
          if(result) return 1;
          await buffadd(who, are,'shelldown','turn',3,1);
          return 0;
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
    },
  },
  'shield':{
    'none':{
      name:'なし',
      id:'none',
      num:0,
      shell:0,
      price:0,
      description:'ないです。\n筋肉とでもフォースとでもなんとでも解釈しておk',
      buyable:0,
      sp:0
    },
    'mask':{
      name:'マスク',
      id:'mask',
      num:0,
      shell:0,
      price:1,
      // description:'大事ですね。\n防御力は関係ありませんが病気にはならない',
      description:'防御力はないです..が、\n精神的な防御力は激高です',
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
      description:'突進してくるあいつ。こいつに手間取ると他のが来てすぐ*ぬので注意',
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
      description:'え？木の板と一緒だって？-\n君は知らないのかい...?\n木の板を6つ並べるとドアが3つできるってことを',
      buyable:1,
      sp:0
    },
    'electricfan':{
      name:'扇風機',
      id:'electricfan',
      num:0,
      shell:30,
      price:200,
      description:'涼めるのに便利。\nまた武器にもなり、ついでに敵から身を守れる万能装備',
      buyable:1,
      sp:0
    },
    'perorodoll':{
      name:'ペロロ様人形',
      id:'perorodoll',
      num:0,
      shell:50,
      price:400,
      description:'ペロロ様の出番です！！\nhifumi daisuki',
      buyable:1,
      sp:0
    }
  },
  'ear':{
    'none':{
      name:'なし',
      id:'none',
      num:0, //そのうちhasEqでやって管理するようにしよーね
      power:0,
      shell:0,
      price:0,
      description:'なし',
      buyable:0,
      sp:0
    }
  },
  'ring':{
    'none':{
      name:'なし',
      id:'none',
      num:0,
      power:0,
      shell:0,
      price:0,
      description:'なし',
      buyable:0,
      sp:0
    }
  },
  'neck':{
    'none':{
      name:'なし',
      id:'none',
      num:0,
      power:0,
      shell:0,
      price:0,
      description:'なし',
      buyable:0,
      sp:0
    }
  }
}
let Weapons = {
  //errored!!
}

let Armors = {
  //errored!!
}

let Tools = {
  'aspirin':{
    id:'aspirin',
    name:'アスピリン',
    price:20,
    description:'頭痛薬らしいですね、これ。痛み止め薬とか耐えればいらんくね？とかいったら炎上するかな',
    num:5,
    process:async function(cam,me,are){
        await addtext(`おや、頭が痛いって？痛みに効くのはアスピリン！`);
        x = Math.round(humans[tcam][target].maxhp * 0.2);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou()
        await addtext(`体力が${x}回復した!`);
        return 0;
    }
  },
  'pablon':{
    name:'パブロン',
    id:'pablon',
    price:40,
    description:'風邪薬。大人とか向けらしいね',
    num:2,
    process:async function(cam,me,are){
        await addtext(`早めのパブロン♪`);
        x = Math.round(humans[tcam][target].maxhp * 0.4);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 0;
    }
  },
  'trypsin':{
    name:'トリプシン',
    id:'trypsin',
    price:60,
    description:'タンパク質を分解し、アミノ酸にする働きのある消化酵素。所属事務所は膵臓。',
    num:0,
    process:async function(cam,me,are){
        await addtext(`トリプシンを飲んだ！！え？これは薬じゃないって？`);
        x = Math.round(humans[tcam][target].maxhp * 0.6);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 0;
    }
  },
  'lulu':{
    name:'ルル',
    id:'lulu',
    price:80,
    description:'sick sickな頭痛薬。毒が流るルルですね。',
    num:0,
    process:async function(cam,me,are){
        await addtext(`求愛性 孤独 ドク 流るルル♪`)
        x = Math.round(humans[tcam][target].maxhp * 0.8);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 0;
    }
  },
  'potion':{
    name:'魔法薬',
    id:'potion',
    price:100,
    description:'投げつけたい。敵に',
    num:0,
    process:async function(cam,me,are){
        await addtext(`なんか一番しょうもないよね、これ\nあ、全回復です`)
        x = Math.round(humans[tcam][target].maxhp);
        if((x + humans[tcam][target].hp) > humans[tcam][target].maxhp){x = humans[tcam][target].maxhp - humans[tcam][target].hp;};
        humans[tcam][target].hp += x;
        tekiou();
        await addtext(`体力が${x}回復した!`);
        return 0;
    }
  },
  'throwknife':{
    name:'投げナイフ',
    id:'throwknife',
    price:20,
    description:'シンプルに20%ダメージ。十六夜さんが投げるあれ',
    num:5,
    process:async function(cam,me,are){
        await addtext('では、ナイフの錆にしてあげましょう');
        x = Math.ceil(humans[tcam][target].hp*0.2);
        let result = await damage(cam,me,are,x,'sh',['unpursuit','fixed'])
        tekiou();
        await addtext(`${humans[tcam][target].name}に${x}のダメージ！`);
        if(result == 'end'){return 1};
        return 0;
    }
  },
  'trickyvariables':{
    name:'トリッキーな変数',
    id:'trickyvariables',
    price:40,
    description:'黒崎コユキ、きちゃいました！！なんか面白いことないですか？\n(10%,25%,40%からランダム)',
    num:1,
    process:async function(cam,me,are){
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
        let result = await damage(cam,me,are,x,'sh',['unpursuit','fixed'])
        if(result == 'end'){return 1};
        return 0;
    }
  },
  'bottlegrenade':{
    name:'ボトルグレネード',
    id:'bottlegrenade',
    price:60,
    description:'殴るついでに燃やす。まじでつよい\nレッドウィンターの問題児にしては上出来すぎる',
    num:0,
    process:async function(cam,me,are){
        await addtext('これはちょっと、スパイシーなやつだよ');
        let result = await damage(cam,me,are,0.8,'mg',['unpursuit'])
        if(result == 'end'){
          await addtext('レッドウィンターの問題児にしては上出来じゃない？');
          return 1;
        };
        await buffadd(who, are,'burn',3,1);
        return 0;
    }
  },
  'coveringfire':{
    name:'援護射撃',
    id:'coveringfire',
    price:80,
    description:'ダメージ与える。ゴミ箱に隠れてる人。',
    num:0,
    process:async function(cam,me,are){
        await addtext('え、援護します...');
        let x = Math.ceil(humans[tcam][target].hp*0.6);
        let result = await damage(cam,me,are,x,'mg',['unpursuit','fixed']);
        if(result == 'end'){
          await addtext('わ、私のことはお気になさらずに...');
          return 1;
        }
        return 0;
    }
  },
  'bomb':{
    name:'爆弾',
    id:'bomb',
    price:100,
    description:'エクスプローージョン！！！\n敵を確殺します。嬉しいね',
    num:1,
    process:async function(cam,me,are){
        let x = humans[tcam][target].hp;
        let result = await damage(cam,me,are,x,'mg',['unpursuit',"fixed","penetrate"]);
        await addtext('爆発オチなんてサイテー！！');
        return 1;
    }
  },
  'redcard':{
    name:'レッドカード',
    id:'redcard',
    price:35,
    description:'退場です。帰れ(スキップ)',
    num:3,
    process:async function(cam,me,are){
        await buffadd(who, are,'skip',1,1);
        await addtext('カードを仕込みました!')
        return 0;
    }
  },
  'bluecard':{
    name:'ブルーカード',
    id:'bluecard',
    price:35,
    description:'リバースを召喚！このカードは相手と自分の体力を交換する！！割合だ！！！！',
    num:0,
    process:async function(who, are){
        x = who.hp/who.maxhp*are.hp;//割合交換(そのうちゲージにする時用)
        y = are.hp/are.hp*who.maxhp;
        are.hp = x;
        if(are.hp < are.hp){are.hp = are.hp;}
        who.hp = y;
        if(who.maxhp < who.hp){who.hp = humans.players[me].maxhp;}
        tekiou();
        await addtext('これはリバースのモニュメントか？');
        return 0;
    }
  },
  'greencard':{
    name:'グリーンカード',
    id:'greencard',
    price:35,
    description:'バフを2個ランダムでつける。つよい',
    num:0,
    process:async function(cam,me,are){
        let rbuffs = ['powerup','shellup','luck'];
        rbuffs = arrayShuffle(rbuffs);
        let buff1 = rbuffs[0];
        let buff2 = rbuffs[1];
        await buffadd(who, are,x,3,Math.floor(Math.random()*2)+1);
        await buffadd(who, are,y,3,Math.floor(Math.random()*2)+1);
        await addtext(`${humans[tcam][target].name}にバフを二個つけました！！`);
        return 0;
    }
  },
  'blackcard':{
    name:'ブラックカード',
    id:'blackcard',
    price:35,
    description:'デバフを2個つける。割とつよい',
    num:0,
    process:async function(cam,me,are){
        let rbuffs = ['powerdown','shelldown','poison','burn','freeze'];
        rbuffs = arrayShuffle(rbuffs);
        for(i = 0;i < 2;i++){
          await buffadd(who, are,rbuffs[i],3,Math.floor(Math.random()*2)+1);
        }
        log.textContent = humans[tcam][target].name+'にバフをニ個つけました！！';await delay(1000);
        return 0;
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
                await buffadd(who, are,'poison',3,1);
                break; //毒ガス入りだった場合
              };
              case 2:{
                await addtext('爆弾はスライム入りだった!!');
                await buffadd(who, are,'onslime',2,1);
                break;//スライム入りだった場合
              };
              case 1:{
                await addtext('爆発した..だがただの特殊な薬品だった!!');
                break;
              };
          }
          let result = await damage(cam,me,are,x,'sh',4);
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
          let result = await damage(cam,me,are,1.5,'sh',4);
          if(result == 'end'){return 1;}
          if(Math.floor(Math.random()*2)) await buffadd(who, are,'freeze',4,1)
          return 0;
        }
    },
    'lightningstorm':{
        type:'ex',
        id:'lightningstorm',
        name:'ライニングストーム',
        description:'敵全体に攻撃力の120%のダメージを与え、帯電にする\n帯電:自身の行動時自傷ダメージが入る',
        price:60,
        buyable:1,
        process:async function(cam,me){
          let [target, tcam] = await LetsTargetSelect(3);
          let result = await damage(cam,me,are,1.5,'sh',4);
          if(result == 'end'){return 1;}
          await buffadd(who, are,'elec',2,1);
          return 0;
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
          if(result == 'end'){return 1;}
          return 0;
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
          if(result == 'end'){return 1;}
          await buffadd(target[1],target,'stun',1,1);
          return 0;
        }
    },
    'recievechallenge':{//仲間にした方がいいかも
        type:'ex',
        id:'recievechallenge',
        name:'挑戦状を受け取ってください!!',
        description:'敵の防御力を下げ、自身の攻撃力を上げる',
        price:90,
        buyable:1,
        process:async function(who){
          phase = 0; disappear();
          let [tcam, tme] = await LetsTargetSelect();
          let result = await damage(cam,me,are,0.2,'sh',4);
          if(result == 'end'){return 1;}
          await buffadd(who, are,'shelldown',3,1);
          await buffadd(who,'powerup',3,2);
          return 0;
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
          let [tcam, tme] = await LetsTargetSelect();
          await addtext(arraySelect(['わたしはその辺の小石...','わたしのことなんて、気にしないでください...','すみません、一人にさせてください......']));
          await buffadd(who, are,'weaknessgrasp',2,1);//弱点把握状態
          return 0;
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
          let [tcam, tme] = ShallTargetSelect(cam,me,'er',0);
          await buffadd(who, are,'onslime',1,1);
          await addtext(`${humans[tcam][target].name}にスライムが覆い被さった!`);
          return 0;
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
        process:async function(who){
          await buffadd(who,'letsthrow',2,1);
          await addtext('wrenchを投げる準備ができた!');
          return 0;
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
        process:async function(who){
          await buffadd(who,'gambling',1,1);
          addtext('さあ、ギャンブルの時間だ!!');
          return 0;
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
        process:async function(who){
          await buffadd(who,'improve',4,1);
          await addtext('パーツアップグレード。');
          return 0;
        }
    },
    'elecbarrier':{
        type:'ns',
        id:'elecbarrier',
        name:'エレクトリックバリア',
        description:'体力が最も低い味方に帯電バリアを付与する。\n帯電バリア:被攻撃時相手に帯電を付与する\n帯電:自身の行動時自傷ダメージが入る',
        price:70,
        buyable:1,
        cool:3,
        process:async function(who){
          let are = ShallTargetSelect(who, 'phpl',0);
          await buffadd(who, are,'elecshield',2,1);
          await addtext('帯電バリアを付与しました！');
          return 0;
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
        description:'会心時、相手に帯電を付与する。\n帯電:自身の行動時自傷ダメージが入る',
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
    stage:'草原',
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
    acts:[
      {
        name:'粘液飛ばし',
        probable:75,
        num:1,
        process:async function(who){
          await addtext(`${who.name}は粘液を飛ばしてきた！`);
          let are = ShallTargetSelect(who, 'phph',0);
          let res = await damage(who, are, 1, 'sh');
          if(res) return 1;
          
          return 0;
        }
      },
      {
        name:'粘液付与',//やばい方のスライムも作りたいね 一緒に溶けよ....? みたいな..ってちょっと癖すぎるか....?よし、技名は自己責任で表示可にしよう その場合セリフは...?
        probable:25,
        num:3,
        process:async function(who){
          await addtext(`${who.name}は粘液を絡ませてきた！`);//いやこれはこれでやばいか...?いや全然捉えようによってはやばいわ
          let are = ShallTargetSelect(who, 'phph', 0);
          await buffadd(who, are,'stickyslime',2,1);
          return 0;
        }
      }
    ]
  },
  '翠嵐の風刃':{
    name:'翠嵐の風刃',
    stage:'草原',
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
    acts:[
      {
        name:'体当たり',
        probable:70,
        num:1,
        process:async function(cam, me){
          await addtext(`${humans[cam][me].name}は体当たりを仕掛けてきた！`);
          let [tcam, tme] = ShallTargetSelect(cam,me,'phpl',0);
          let result = await damage(cam,me,are,1,'sh',1);
          if(result == 'end')return 1;
          return 0;
        }
      },
      {
        name:'体当たり・改',
        probable:30,
        num:3,
        process:async function(cam, me){
          await addtext(`${humans[cam][me].name}は回転しながら突進してきた！`);
          let [tcam, tme] = ShallTargetSelect(cam,me,'phpl',0);
          let result = await damage(cam,me,are,1.5,'sh',1);
          if(result == 'end')return 1;
          return 0;
        }
      }
    ]
  },
  '黄昏の穿影':{
    name:'黄昏の穿影',
    stage:'草原',
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
    acts:[
      {
        name:'消滅',
        probable:60,
        type:'',
        prop:['reInvisi'],
        num:1,
        process:async function(who){
          await addtext(`${who.name}は姿を消..あれどこ行った？`);
          let are = ShallTargetSelect(who, 'ec', 0);
          await buffadd(who, are,'disappear',2,1);
          return 0;
        }
      },
      {
        name:'衝突',
        probable:20,
        type:'',
        prop:['abInvisi'],
        num:2,
        process:async function(who){
          let x = buffhas(who, 'disappear') ? (buffclear(who, 'disappear'), 2) : 1;
          await addtext(`${who.name}は突進してきた！`);
          let [tcam, tme] = ShallTargetSelect(who, 'pr',0);
          let result = await damage(who, are, x, 'sh', 1);
          return result;
        }
      },
      {
        name:'ローキック',//ロストワンの号哭の号哭使いたいけど意味が泣くことらしい
        probable:20,
        type:'none',
        num:3,
        process:async function(who){
          await addtext(`${who.name}はローキックしてきた！`)
          let are = ShallTargetSelect(who,'phpl',0);
          let result = await damage(who, are, x, 'sh', 1);
          await buffadd(are, 'speeddown', 'turn', 2, 1);
          return result;
        }
      }
    ]
  },
  '燐光の妖花':{
    name:'燐光の妖花',
    stage:'草原',
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
    acts:[
      {
        name:'しびれごな',
        probable:30,
        type:'none',
        num:1,
        process:async function(cam, me){
          await addtext(`${humans[cam][me].name}は痺れ粉を振りかけてきた！`)
          let selected = ShallTargetSelect(cam,me,'patkh',0);
          await buffadd(selected[1],selected[0],'palsy','turn',2,1);
          return 0;
        }
      },
      {
        name:'どくのこな',
        probable:30,
        type:'none',
        num:2,
        process:async function(cam, me){
          await addtext(`${humans[cam][me].name}は毒の粉を振りかけてきた！`)
          let selected = ShallTargetSelect(cam,me,'phph',0);
          await buffadd(selected[1],selected[0],'poison','turn',2,1);
          return 0;
        }
      },
      {
        name:'ねむりごな',
        probable:30,
        type:'none',
        num:3,
        process:async function(cam, me){
          await addtext(`${humans[cam][me].name}は眠り粉を振りかけてきた！`)
          let selected = ShallTargetSelect(cam,me,'patkh',0);
          await buffadd(selected[1],selected[0],'sleep','turn',1,1);
          return 0;
        }
      }
    ]
  },
};

let Prefixes = {
  'furious':{
    id:'furious',
    name:'激昂',
    rare:1,
    effects:{
      atk: '=150%',
      def: '=75%',
      critrate: '=5'
    }
  },
  'calm':{
    id:'calm',
    name:'冷静沈着な',
    rare:1,
    effects:{
      atk: '=75%',
      def: '=200%',
      critrate: '=5'
    },
  },
  'gambler':{
    id:'gambler',
    name:'ギャンブラーな',
    rare:1,
    effects:{
      critlate: '+4',
      maxhp: '=200%'
    }
  },
  'toudh':{
    id:'tough',
    name:'守りが固い',
    rare:2,
    effects:{
      critresist: '+5',
      maxhp: '=125%',
      atk: '=30%',
      def: '=150%',
    }
  },
  'wise':{
    id:'wise',
    name:'心眼持ちの',
    rare:3,
    effects:{
      critlate: '=100',
      critdmg: '=120',
      atk: '=30%',
    }
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
      document.querySelector('#eventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button>\n<button id="CampTrade" onclick="Camptrade()"></button>'
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