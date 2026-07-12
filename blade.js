// ===========================
// Blade System
// ===========================

const groundBlades = [];
const playerBlades = [];

// 100 Blades Spawn
for(let i=0;i<100;i++){

    groundBlades.push({
        x:Math.random()*WORLD.width,
        y:Math.random()*WORLD.height,
        taken:false
    });

}

// Draw Ground Blades
function drawGroundBlades(){

    groundBlades.forEach(b=>{

        if(b.taken) return;

        ctx.save();

        ctx.translate(
            b.x-camera.x,
            b.y-camera.y
        );

        ctx.rotate(Date.now()/300);

        // Blade
        ctx.fillStyle="#dddddd";
        ctx.fillRect(-2,-18,4,36);

        // Handle
        ctx.fillStyle="#7a4b25";
        ctx.fillRect(-6,10,12,5);

        ctx.restore();

    });

}

// Collect Blades
function updateBlades(){

    groundBlades.forEach(b=>{

        if(b.taken) return;

        const dx=player.x-b.x;
        const dy=player.y-b.y;

        if(Math.hypot(dx,dy)<35){

            b.taken=true;

            playerBlades.push({
                angle:0
            });

            document.getElementById("bladeCount").textContent=
            playerBlades.length;

        }

    });

}

// Draw Orbit Blades
function drawPlayerBlades(){

    const total=playerBlades.length;

    playerBlades.forEach((b,i)=>{

        b.angle+=0.03;

        const angle=(Math.PI*2/Math.max(total,1))*i+b.angle;

        const radius=55;

        const x=player.x+Math.cos(angle)*radius;
        const y=player.y+Math.sin(angle)*radius;

        ctx.save();

        ctx.translate(
            x-camera.x,
            y-camera.y
        );

        ctx.rotate(angle);

        ctx.fillStyle="#ffffff";
        ctx.fillRect(-2,-16,4,32);

        ctx.fillStyle="#8b5a2b";
        ctx.fillRect(-6,8,12,4);

        ctx.restore();

    });

}
