// ===== Canvas =====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ===== World =====
const world = {
    width:4000,
    height:4000
};

// ===== Camera =====
const camera = {
    x:0,
    y:0
};

// ===== Player =====
const player = {
    x:2000,
    y:2000,
    radius:20,
    color:"#2196f3",
    speed:4
};

// ===== Blades on Ground =====
const blades=[];

for(let i=0;i<100;i++){

    blades.push({
        x:Math.random()*world.width,
        y:Math.random()*world.height,
        taken:false
    });

}

// ===== Draw Ground =====
function drawGround(){

    ctx.fillStyle="#55b84a";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="#6dd15f";

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

// ===== Draw Blades =====
function drawGroundBlades(){

    blades.forEach(b=>{

        if(b.taken) return;

        ctx.save();

        ctx.translate(
            b.x-camera.x,
            b.y-camera.y
        );

        ctx.rotate(Date.now()/300);

        ctx.fillStyle="silver";

        ctx.fillRect(-3,-18,6,36);

        ctx.fillStyle="#654321";
        ctx.fillRect(-6,10,12,5);

        ctx.restore();

    });

}

// ===== Draw Player =====
function drawPlayer(){

    ctx.beginPath();

    ctx.fillStyle=player.color;

    ctx.arc(
        player.x-camera.x,
        player.y-camera.y,
        player.radius,
        0,
        Math.PI*2
    );

    ctx.fill();

}

// ===== Camera =====
function updateCamera(){

    camera.x=player.x-canvas.width/2;
    camera.y=player.y-canvas.height/2;

}

// ===== Game Loop =====
function gameLoop(){

    if(typeof updatePlayer==="function"){
        updatePlayer();
    }

    updateCamera();

    drawGround();

    drawGroundBlades();

    drawPlayer();
    drawPlayerBlades();
    drawEnemies();
    if(typeof updateBlades==="function"){
        updateEnemies();
        updateBlades();
    }

    requestAnimationFrame(gameLoop);

}

gameLoop();
