// effects.js

function createHitEffect(x, y) {

    const effect = document.createElement("div");
    effect.innerHTML = "💥";
    effect.style.position = "absolute";
    effect.style.left = x + "px";
    effect.style.top = y + "px";
    effect.style.fontSize = "35px";
    effect.style.pointerEvents = "none";
    effect.style.zIndex = "999";

    game.appendChild(effect);

    setTimeout(() => {
        effect.remove();
    }, 250);
}

function createBlood(x, y) {

    const blood = document.createElement("div");
    blood.innerHTML = "🩸";
    blood.style.position = "absolute";
    blood.style.left = x + "px";
    blood.style.top = y + "px";
    blood.style.fontSize = "26px";
    blood.style.pointerEvents = "none";

    game.appendChild(blood);

    setTimeout(() => {
        blood.remove();
    }, 600);
}

function createCoin(x, y) {

    const coin = document.createElement("div");
    coin.innerHTML = "🪙";
    coin.style.position = "absolute";
    coin.style.left = x + "px";
    coin.style.top = y + "px";
    coin.style.fontSize = "28px";

    game.appendChild(coin);

    setTimeout(() => {
        coin.remove();
    }, 1200);
}
