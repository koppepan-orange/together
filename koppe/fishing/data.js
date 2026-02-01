let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    ad:{
        wid:'300',
        asp:4/1
    },
    youare:{
        "wid": 230,
        "asp": 2/3
    },
    tekiou: function() {
        for (let section in this) {
            if (section == 'apply') continue;
            for (let key in this[section]) {
                document.documentElement.style
                    .setProperty(`--${section}-${key}`, this[section][key]);
            }
        }
    }
}


let SVList = [
    {
        i:0,
        name:"呪われた隣人の家",
        col: "#463c32",
        src:"QhFzkYjcpa",
        desc:`haunted neighbor's house [取り憑かれた隣人の家]\nこちらは口兄われた隣人の家です！\nここは口兄われています！！\nので、罪人は口兄われます！\n\nあるものs\n・個人に与えられる"個室"と"呟き部屋"\n・自由なロールの追加、削除\n・絵文字やスタンプの追加\n・寝ましょう通知\n・基本ずっとオンラインな主\n\nないものs\n・セキュリティ\n・自動荒らし対策\n・グローバルチャット\n・起きましょう通知\n・口うるさいご主人\n\n人付き合い無理だけど人と話したい〜なそこの弱々しいお前！\nぜひ来てねっ！`
    },
    {
        i:1,
        name:"何かしらの何か",
        col: "#ffe2bd",
        src:"bvHrMC6v5c",
        desc:`こちらは 何かしらの何か です！\nたぶん、呪われた隣人の家の方が楽しいです！\nいってらっしゃ〜い♪`
    },
    {
        i:2,
        name:"なんか...なんか。",
        col: "#e3ffe5",
        src:"A9AqFUkZAv",
        // desc:`なんか...なんか。へようこそ！\nここはとある友達「友達A」のみがいるんですけど、\n友達Aがなんだか最近冷たいので\n嫉妬させを行いたいと思っております\nなのでぜひみなさん入ってきてくださいまし。\nできる限り私が友達A以外と話している様子を見せて\n嫉妬させましょう！！お願いします！！！！`
        desc:` ☕ めっちゃ人が少ない弱小鯖！ ☕\nアイコンもただのネギと超手抜き！！\nこんな鯖に入る勇気はあるかい？\nあるなら来い！！\n来たれ！！！囲碁サッカー部\n本サーバーは囲碁サッカー部とは一切関係がございません\nあとルールとかないので荒らしさんとかもぜひどうぞ\n嵐さんでもいいですよ 愛とても甘いって感じです
`
    }
];

let ADs = {
    texts: ["知らなきゃ損！\nあなたの未来を変える“裏コマンド”","この広告を見たあなたにだけ教える“夢の裏メニュー”","一生に一度の“ありえない幸運”抽選会、参加は今だけ！","あなたの秘密を現金に換える!? ありえない話はここにある！！","無料で“次の人生”が試せるチャンス！","期間限定のヒミツ招待状\n登録するだけで明日が変わるかも","失われた記憶を取り戻す方法\nここをクリックで試してみる？"],
    urls:["game-site/ronto_connect/","game-site/stone-trader/","game-site/farm-game","game-site/a_borrowed_night","game-site/jung_keng_","game-site/lonely","game-site/origin.html","game-site/probability","game-site/Scuro_e_Nero_Soldato","game-site/witches-journey","test-site/tool","test-site/index.html","test-site/home.html","test-site/chat.html","together/koppe/arcana","together/koppe/drink-shop","together/koppe/dungeon","together/koppe/farm-game","together/koppe/kizuna","together/koppe/mindustry2","together/koppe/mass_cod","together/koppe/simpleTwo","together/koppe/sheken","together/koppe/danmaku_test.html"]
}

let Jamers = [
    {
        name:'popup',
        p:8,
        func:()=>{
            adF.summon();
        }
    },
    {
        name:'youare',
        p:3,
        func:()=>{
            youF.summon();
        }
    }
]