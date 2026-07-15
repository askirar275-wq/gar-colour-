// boss.js

let boss = null;
let bossHealth = 50;

function spawnBoss() {

    if (boss) return;

    boss = document.createElement("div");
    boss.className = "boss";
    boss.innerHTML = "👹";

    boss.style.position = "absolute";
    boss.style.fontSize = "80px";
    boss.style.left = (window.innerWidth / 2 - 40) + "px";
    boss.style.top = "-100px";

    game.appendChild(boss);
}

function updateBoss() {

    if (!boss) {
        requestAnimationFrame(updateBoss);
        return;
    }

    let y = parseFloat(boss.style.top);

    y += 1.5;

    boss.style.top = y + "px";

    // Boss player तक पहुँच गया
    if (y > playerY - 40) {

        health -= 25;

        updateHealth(health);

        boss.remove();
        boss = null;
        bossHealth = 50;

    }

    requestAnimationFrame(updateBoss);
}

updateBoss();

// हर 20 स्कोर पर Boss
setInterval(() => {

    if (score > 0 && score % 20 === 0 && boss == null) {

        spawnBoss();

    }

}, 1000);
