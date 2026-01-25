let Style = {
    iPhone:{ //16
        "width": "393px",
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
        name:"呪われた隣人の家",
        src:"QhFzkYjcpa",
        desc:`haunted neighbor's house [取り憑かれた隣人の家]\nこちらは口兄われた隣人の家です！\nここは口兄われています！！\nので、罪人は口兄われます！\n\nあるものs\n・個人に与えられる"個室"と"呟き部屋"\n・自由なロールの追加、削除\n・絵文字やスタンプの追加\n・寝ましょう通知\n・基本ずっとオンラインな主\n\nないものs\n・セキュリティ\n・自動荒らし対策\n・グローバルチャット\n・起きましょう通知\n・口うるさいご主人\n\n人付き合い無理だけど人と話したい〜なそこの弱々しいお前！\nぜひ来てねっ！`
    },
    {
        name:"何かしらの何か",
        src:"bvHrMC6v5c",
        desc:`こちらは 何かしらの何か です！\nたぶん、呪われた隣人の家の方が楽しいです！\nいってらっしゃ〜い♪`
    },
    {
        name:"なんか...なんか。",
        src:"A9AqFUkZAv",
        desc:`なんか...なんか。へようこそ！\nここはとある友達「友達A」のみがいるんですけど、\n友達Aがなんだか最近冷たいので\n嫉妬させを行いたいと思っております\nなのでぜひみなさん入ってきてくださいまし。\nできる限り私が友達A以外と話している様子を見せて\n嫉妬させましょう！！お願いします！！！！`
    }
];