// ===== Player Controls =====

let move = {
    x: 0,
    y: 0
};

// Keyboard (PC)
window.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase()) {
        case "w":
        case "arrowup":
            move.y = -1;
            break;
        case "s":
        case "arrowdown":
            move.y = 1;
            break;
        case "a":
        case "arrowleft":
            move.x = -1;
            break;
        case "d":
        case "arrowright":
            move.x = 1;
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch (e.key.toLowerCase()) {
        case "w":
        case "arrowup":
        case "s":
        case "arrowdown":
            move.y = 0;
            break;

        case "a":
        case "arrowleft":
        case "d":
        case "arrowright":
            move.x = 0;
            break;
    }
});

// Mobile Joystick
const joystick = document.getElementById("joystick");
const stick = document.getElementById("stick");

let centerX = 70;
let centerY = 70;

joystick.addEventListener("touchmove", (e) => {

    e.preventDefault();

    const rect = joystick.getBoundingClientRect();

    let x = e.touches[0].clientX - rect.left;
    let y = e.touches[0].clientY - rect.top;

    let dx = x - centerX;
    let dy = y - centerY;

    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 45) {
        dx = dx / distance * 45;
        dy = dy / distance * 45;
    }

    stick.style.left = (40 + dx) + "px";
    stick.style.top = (40 + dy) + "px";

    move.x = dx / 45;
    move.y = dy / 45;

}, { passive: false });

joystick.addEventListener("touchend", () => {

    move.x = 0;
    move.y = 0;

    stick.style.left = "40px";
    stick.style.top = "40px";

});

// Update Player
function updatePlayer() {

    player.x += move.x * player.speed;
    player.y += move.y * player.speed;

    if (player.x < 20) player.x = 20;
    if (player.y < 20) player.y = 20;

    if (player.x > world.width - 20)
        player.x = world.width - 20;

    if (player.y > world.height - 20)
        player.y = world.height - 20;

}

// Game Loop Hook
const oldLoop = gameLoop;

gameLoop = function () {

    updatePlayer();

    updateCamera();

    drawGround();
    drawTrees();
    drawTeaShop();
    drawPlayer();

    requestAnimationFrame(gameLoop);

};

// Restart Loop
requestAnimationFrame(gameLoop);
