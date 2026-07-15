// bullet.js

let bullets = [];
let score = 0;

function shoot() {

    const b = document.createElement("div");

    b.className = "bullet";
    b.innerHTML = "🔸";

    b.style.left = (playerX + 18) + "px";
    b.style.top = playerY + "px";

    game.appendChild(b);

    bullets.push({
        el: b,
        x: playerX + 18,
        y: playerY,
        speed: 10
    });

}

// Auto Fire
setInterval(shoot, 300);

function updateBullets() {

    for (let i = bullets.length - 1; i >= 0; i--) {

        let b = bullets[i];

        b.y -= b.speed;
        b.el.style.top = b.y + "px";

        // Bullet बाहर चली गई
        if (b.y < -30) {
            b.el.remove();
            bullets.splice(i, 1);
            continue;
        }

        // Zombie Hit
        for (let j = zombies.length - 1; j >= 0; j--) {

            let z = zombies[j];

            if (
                b.x < z.x + 40 &&
                b.x + 20 > z.x &&
                b.y < z.y + 40 &&
                b.y + 20 > z.y
            ) {

                // Score
                score++;
                document.getElementById("score").innerHTML =
                    "⭐ Score : " + score;

                // Remove Zombie
                z.el.remove();
                zombies.splice(j, 1);

                // Remove Bullet
                b.el.remove();
                bullets.splice(i, 1);

                break;
            }
        }
    }

    requestAnimationFrame(updateBullets);
}

updateBullets();
