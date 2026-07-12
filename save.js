// ===== SAVE SYSTEM =====

function saveGame() {

    const data = {

        coins: Number(document.getElementById("coins").textContent),

        level: Number(document.getElementById("level").textContent),

        playerX: player.x,

        playerY: player.y

    };

    localStorage.setItem(
        "VillageTycoonSave",
        JSON.stringify(data)
    );

}

function loadGame() {

    const data = JSON.parse(
        localStorage.getItem("VillageTycoonSave")
    );

    if (!data) return;

    document.getElementById("coins").textContent = data.coins;

    document.getElementById("level").textContent = data.level;

    player.x = data.playerX;

    player.y = data.playerY;

}

loadGame();

// हर 5 सेकंड में Auto Save
setInterval(saveGame,5000);

// गेम बंद होने से पहले भी Save
window.addEventListener("beforeunload",saveGame);
