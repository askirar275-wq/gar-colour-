const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Map Size
const world = {
    width: 5000,
    height: 5000
};

// Camera
const camera = {
    x: 0,
    y: 0
};

// Player
const player = {
    x: world.width / 2,
    y: world.height / 2,
    size: 40,
    speed: 4,
    color: "#ff4444"
};

// Demo Trees
const trees = [];

for (let i = 0; i < 150; i++) {
    trees.push({
        x: Math.random() * world.width,
        y: Math.random() * world.height
    });
}

// Tea Shop
const teaShop = {
    x: world.width / 2 + 250,
    y: world.height / 2,
    width: 90,
    height: 90
};

function drawGround() {

    ctx.fillStyle = "#6fcf5d";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="#59b94c";

    for(let x=0;x<world.width;x+=100){

        ctx.beginPath();
        ctx.moveTo(x-camera.x,-camera.y);
        ctx.lineTo(x-camera.x,world.height-camera.y);
        ctx.stroke();

    }

    for(let y=0;y<world.height;y+=100){

        ctx.beginPath();
        ctx.moveTo(-camera.x,y-camera.y);
        ctx.lineTo(world.width-camera.x,y-camera.y);
        ctx.stroke();

    }

}

function drawTrees(){

    trees.forEach(tree=>{

        ctx.fillStyle="#1d6d2b";

        ctx.beginPath();

        ctx.arc(
            tree.x-camera.x,
            tree.y-camera.y,
            18,
            0,
            Math.PI*2
        );

        ctx.fill();

    });

}

function drawTeaShop(){

    ctx.fillStyle="#d18b47";

    ctx.fillRect(
        teaShop.x-camera.x,
        teaShop.y-camera.y,
        teaShop.width,
        teaShop.height
    );

    ctx.fillStyle="white";
    ctx.font="18px Arial";
    ctx.fillText(
        "Tea",
        teaShop.x-camera.x+25,
        teaShop.y-camera.y+50
    );

}

function drawPlayer(){

    ctx.fillStyle=player.color;

    ctx.beginPath();

    ctx.arc(
        player.x-camera.x,
        player.y-camera.y,
        player.size/2,
        0,
        Math.PI*2
    );

    ctx.fill();

}

function updateCamera(){

    camera.x = player.x - canvas.width/2;
    camera.y = player.y - canvas.height/2;

}

function gameLoop(){

    updateCamera();

    drawGround();
    drawTrees();
    drawTeaShop();
    drawPlayer();

    requestAnimationFrame(gameLoop);

}

gameLoop();
