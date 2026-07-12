// ======================
// UI System
// ======================

let coins = 0;
let level = 1;

const coinsText = document.getElementById("coins");
const bladeText = document.getElementById("bladeCount");
const levelText = document.getElementById("level");

function updateUI(){

    if(coinsText) coinsText.textContent = coins;

    if(bladeText) bladeText.textContent = playerBlades.length;

    if(levelText) levelText.textContent = level;

}

// हर 100ms UI अपडेट
setInterval(updateUI,100);

// Pause Button
const pauseBtn = document.getElementById("pause");

if(pauseBtn){

    pauseBtn.onclick = ()=>{

        alert("Pause Menu अभी बनना बाकी है.");

    };

}
