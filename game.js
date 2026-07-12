// ====================================
// Blade Arena V2 - Game Engine
// ====================================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// =====================
// WORLD
// =====================

const WORLD = {
    width: 5000,
    height: 5000,
    grid: 100
};

// =====================
// CAMERA
// =====================

const camera = {
    x: 0,
    y: 0
};

// =====================
// PLAYER
// =====================

const player = {
    x: WORLD.width / 2,
    y: WORLD.height / 2,
    radius: 22,
    speed: 4,
    color: "#2E86FF"
};

// =====================
// CAMERA FOLLOW
// =====================

function updateCamera() {

    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;

    camera.x = Math.max(
        0,
        Math.min(camera.x, WORLD.width - canvas.width)
    );

    camera.y = Math.max(
        0,
        Math.min(camera.y, WORLD.height - canvas.height)
    );

}

// =====================
// GROUND
// =====================

function drawGround() {

    ctx.fillStyle = "#6BCB5A";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#59B74A";
    ctx.lineWidth = 1;

    for (let x = 0; x <= WORLD.width; x += WORLD.grid) {

        ctx.beginPath();
        ctx.moveTo(x - camera.x, -camera.y);
        ctx.lineTo(x - camera.x, WORLD.height - camera.y);
        ctx.stroke();

    }

    for (let y = 0; y <= WORLD.height; y += WORLD.grid) {

        ctx.beginPath();
        ctx.moveTo(-camera.x, y - camera.y);
        ctx.lineTo(WORLD.width - camera.x, y - camera.y);
        ctx.stroke();

    }

}

// =====================
// PLAYER
// =====================

function drawPlayer() {

    // Shadow
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,.25)";
    ctx.ellipse(
        player.x - camera.x,
        player.y - camera.y + 18,
        18,
        8,
        0,
        0,
        Math.PI * 2
    );
    ctx.fill();

    // Body
    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(
        player.x - camera.x,
        player.y - camera.y,
        player.radius,
        0,
        Math.PI * 2
    );
    ctx.fill();

}

// =====================
// LOOP
// =====================

function gameLoop() {

    if (typeof updatePlayer === "function") {
        updatePlayer();
    }

    updateCamera();

    drawGround();

    if (typeof drawGroundBlades === "function")
        drawGroundBlades();

    if (typeof drawEnemies === "function")
        drawEnemies();

    drawPlayer();

    if (typeof drawPlayerBlades === "function")
        drawPlayerBlades();

    if (typeof updateEnemies === "function")
        updateEnemies();

    if (typeof updateBlades === "function")
        updateBlades();

    requestAnimationFrame(gameLoop);

}

gameLoop();
