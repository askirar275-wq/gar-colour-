// guns.js

const Guns = {

    pistol: {
        name: "Pistol",
        emoji: "🔫",
        damage: 1,
        fireRate: 350,
        bullet: "🔸"
    },

    ak47: {
        name: "AK-47",
        emoji: "🪖🔫",
        damage: 2,
        fireRate: 180,
        bullet: "🟠"
    },

    shotgun: {
        name: "Shotgun",
        emoji: "💥",
        damage: 4,
        fireRate: 700,
        bullet: "🟡"
    },

    sniper: {
        name: "Sniper",
        emoji: "🎯",
        damage: 10,
        fireRate: 1200,
        bullet: "🔴"
    }

};

let currentGun = Guns.pistol;

function changeGun(name){

    if(Guns[name]){
        currentGun = Guns[name];
        console.log("Gun:", currentGun.name);
    }

}

// Auto Unlock Demo
setTimeout(()=>changeGun("ak47"),30000);
setTimeout(()=>changeGun("shotgun"),60000);
setTimeout(()=>changeGun("sniper"),90000);
