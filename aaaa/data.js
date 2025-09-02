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

let Items = [
    {
        name:'mebra_log', //amber、琥珀。砂漠の
        jpnm:'メブラの丸太',
        kind:'natural mebra tree log',
    },
    {
        name:'mebra_plank',
        jpnm:'メブラの板材',
        kind:'natural mebra tree plank',
    },
    {
        name:'mebra_seed',
        jpnm:'メブラの種子',
        kind:'natural mebra tree seed',
    },
    {
        name:'stick',
        jpnm:'棒',
        kind:'natural tree',
    },
    {
        name:'apple',
        jpnm:'椎名', //大怒られしそうだなこれ
        kind:'natural fruit tree',
    },
    {
        name:'bad_apple', //どう使おうねこれ
        jpnm:'Bad Apple!!',
        kind:'natural fruit tree',
    },

    {
        name:'stone',
        jpnm:'石',
        kind:'natural stone'
    },
    {
        name:'iron',
        jpnm:'鉄',
        kind:'natural metal magnetic' //magnetic == 磁気。鉄、コバルト、ニッケルしか持たぬ
    },
    {
        name:'gold',
        jpnm:'金',
        kind:'natural metal' //金は基本、科学反応しないそうな
    },
    {
        name:'copper',
        jpnm:'銅',
        kind:'natural metal' //metal == 金属。金属探知機にでも
    },
    {
        name:'aluminium',
        jpnm:'アルミニウム',
        kind:'natural metal' //金属は必ず電気を通す。これ絶対だからってやつだね（metakはconductor替わりになります）
    },
    {
        name:'titanium',
        jpnm:'チタン',
        kind:'natural metal'
    },
    {
        name:'uran',
        jpnm:'ウラン',
        kind:'natural metal'
    },
    {
        name:'tsukaretanodeyamerunium',
        jpnm:'ツカレタノデメルニウム', //自作金属。どうかしてるぜ
        kind:'natural metal'
    },

    {
        name:'石炭',
        jpnm:'石炭',
        kind:'natural fuel'
    },


    {
        name:'コバルト', //x
        jpnm:'コバルト',
        kind:'natural metal magnetic'
    },
    {
        name:'nikkel', //x
        jpnm:'ニッケル',
        kind:'natural metal magnetic'
    },

    {
        name:'ruby',
        jpnm:'ルビー',
        kind:'natural gem'
    },
    {
        name:'sapphire', //x
        jpnm:'サファイア',
        kind:'natural gem'
    },
    {
        name:'larimal',
        jpnm:'ラリマール', //自作宝石。
        kind:'natural gem'
    },
]

let Objects = [
    {
        name:'tree',
        appe:1,
        dest:1, //destroy.
        desc:'木。', //description.
        sozai:[
            {name:'mebra_log', p:100, amo:[5,8]},
            {name:'stick', p:50, amo:[1,4]},
            {name:'apple', p:10, amo:[1,1]}
        ]
    },
    {
        name:'tree_apple',
        appe:1,
        dest:1,
        desc:'木。\nなんとりんごがついている。',
        sozai:[
            {name:'mebra_log', p:100, amo:[5,8]},
            {name:'stick', p:50, amo:[1,4]},
            {name:'apple', p:100, amo:[3,7]}
        ]
    },
    {
        name:'tree_kare',
        appe:1,
        dest:1,
        desc:'枯木。',
        sozai:[
            {name:'mebra_log', p:100, amo:[4,7]},
            {name:'stick', p:75, amo:[1,7]},
        ]
    },
    {
        name:'stone',
        appe:1,
        dest:1,
        desc:'石。',
        sozai:[
            {name:'stone', p:100, amo:[3,5]},
        ]
    },
    {
        name:'stone_kuro',
        appe:1,
        dest:1,
        desc:'石。\n黒色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'石炭', p:75, amo:[2,4]},
        ]
    },
    {
        name:'stone_hai',
        appe:1,
        dest:1,
        desc:'石。\n灰色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'アルミニウム', p:40, amo:[3,6]},
            {name:'チタニウム', p:40, amo:[3,6]},
            {name:'鉄', p:65, amo:[4,5]},
        ]
    },
    {
        name:'stone_ao',
        appe:0,
        dest:1,
        desc:'石。\n青色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
        ]
    },
    {
        name:'stone_aka',
        appe:1,
        dest:1,
        desc:'石。\n赤色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'ルビー', p:25, amo:[1,3]},
        ]
    },
    {
        name:'stone_kiro',
        appe:1,
        dest:1,
        desc:'石。\n黄色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'金', p:50, amo:[3,6]},
        ]
    },
    {
        name:'stone_cha',
        dest:1,
        desc:'石。\n茶色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'銅', p:80, amo:[5,9]},
        ]
    },
    {
        name:'stone_mido',
        appe:1,
        dest:1,
        desc:'石。\n鉄色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'ウラン', p:30, amo:[2,5]},
        ]
    },
    {
        name:'stone_mizu',
        appe:1,
        dest:1,
        desc:'石。\n水色の鉱石が出てくるぞい。',
        sozai:[
            {name:'stone', p:100, amo:[1,3]},
            {name:'ツカレタノデヤメルニウム', p:40, amo:[4,7]},
            {name:'ラリマール', p:25, amo:[2,4]},
        ]
    },
]