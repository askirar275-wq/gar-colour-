// zombie.js

const game = document.getElementById("game");

let zombies = [];

function createZombie() {

    const z = document.createElement("div");

    z.className = "zombie";
    z.innerHTML = "🧟";

    z.style.left = Math.random() * (window.innerWidth - 60) + "px";
    z.style.top = "-60px";

    game.appendChild(z);

    zombies.push({
        el: z,
        x: parseFloat(z.style.left),
        y: -60,
        speed: 2 + Math.random() * 2
    });

}

setInterval(createZombie, 1200);

let health = 100;

function updateZombies() {

    for (let i = zombies.length - 1; i >= 0; i--) {

        let z = zombies[i];

        z.y += z.speed;

        z.el.style.top = z.y + "px";

        const playerTop = playerY;
        const playerLeft = playerX;

        if (
            z.y + 40 > playerTop &&
            z.x < playerLeft + 50 &&
            z.x + 40 > playerLeft
        ) {

            health -= 10;

            document.getElementById("health").innerHTML =
                "❤️ Health : " + health;

            z.el.remove();
            zombies.splice(i, 1);

            if (health <= 0) {

                alert("💀 Game Over");

                location.reload();

            }

        }

        if (z.y > window.innerHeight) {

            z.el.remove();
            zombies.splice(i, 1);

        }

    }

    requestAnimationFrame(updateZombies);

}

updateZombies();
