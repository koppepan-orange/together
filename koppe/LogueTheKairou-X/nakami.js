
let playerHP = 10;
let PLHP = 10;

const gates = {
  and: (a,b) => (a && b ? 1 : 0),
  or:  (a,b) => (a || b ? 1 : 0),
  xor: (a,b) => ((a?1:0) !== (b?1:0) ? 1 : 0),
  nand:(a,b) => (a && b ? 0 : 1),
  nor: (a,b) => (a || b ? 0 : 1),
  xnor:(a,b) => ((a?1:0) === (b?1:0) ? 1 : 0)
};

function battle(playerGate){
    if(playerHP <= 0 || PLHP <= 0) return;

    // 入力値をランダム生成
    const A = Math.random() < 0.5 ? 0 : 1;
    const B = Math.random() < 0.5 ? 0 : 1;

    // PLもゲートをランダムに選ぶ
    const PLGate = Object.keys(gates)[Math.floor(Math.random()*6)];

    // 出力判定
    const playerOut = gates[playerGate](A,B);
    const PLOut = gates[PLGate](A,B);

    let log = `入力 A=${A}, B=${B}<br>`;
    log += `あなた(${playerGate.toUpperCase()}) 出力=${playerOut} `;
    log += ` / PL(${PLGate.toUpperCase()}) 出力=${PLOut}<br>`;

    if(playerOut === 1){
        PLHP--;
        log += "👉 あなたの攻撃成功！PLのHPを1減らした<br>";
    }
    if(PLOut === 1){
        playerHP--;
        log += "💥 PLの攻撃成功！あなたのHPを1減らした<br>";
    }

    document.getElementById("playerHP").textContent = playerHP;
    document.getElementById("PLHP").textContent = PLHP;

    document.getElementById("log").innerHTML = log + "<hr>" + document.getElementById("log").innerHTML;

    if(playerHP <= 0) document.getElementById("log").innerHTML = "あなたの敗北…<br>" + document.getElementById("log").innerHTML;
    if(PLHP <= 0) document.getElementById("log").innerHTML = "あなたの負利！<br>" + document.getElementById("log").innerHTML;
}