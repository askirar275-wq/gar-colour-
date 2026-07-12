// ===== UI SYSTEM =====

const buildBtn = document.getElementById("buildBtn");

// बनाए गए घर/दुकानें
const placedBuildings = [];

// Build Menu
const menu = document.createElement("div");
menu.id = "buildMenu";

menu.style.position = "fixed";
menu.style.left = "50%";
menu.style.top = "50%";
menu.style.transform = "translate(-50%,-50%)";
menu.style.background = "rgba(0,0,0,.85)";
menu.style.padding = "20px";
menu.style.borderRadius = "15px";
menu.style.display = "none";
menu.style.zIndex = "999";
menu.style.minWidth = "260px";
menu.style.color = "white";
menu.style.border = "2px solid white";

menu.innerHTML = `
<h2 style="text-align:center;">🏗 BUILD</h2>

<button class="buildItem" data-name="Tea Shop" data-price="100">
☕ Tea Shop - ₹100
</button>

<button class="buildItem" data-name="Grocery" data-price="300">
🛒 Grocery - ₹300
</button>

<button class="buildItem" data-name="Farm" data-price="500">
🌾 Farm - ₹500
</button>

<button class="buildItem" data-name="Hospital" data-price="1000">
🏥 Hospital - ₹1000
</button>

<br><br>

<button id="closeMenu">Close</button>
`;

document.body.appendChild(menu);

// Button Style
document.querySelectorAll(".buildItem").forEach(btn=>{

    btn.style.width="100%";
    btn.style.margin="8px 0";
    btn.style.padding="12px";
    btn.style.fontSize="18px";
    btn.style.borderRadius="10px";
    btn.style.border="2px solid white";
    btn.style.background="#16a34a";
    btn.style.color="white";

});

// Close Style
document.getElementById("closeMenu").style.width="100%";
document.getElementById("closeMenu").style.padding="12px";

// Open Menu
buildBtn.onclick=()=>{

    menu.style.display="block";

}

// Close Menu
document.getElementById("closeMenu").onclick=()=>{

    menu.style.display="none";

}

// Buy Building
document.querySelectorAll(".buildItem").forEach(btn=>{

btn.onclick=function(){

let coins=Number(document.getElementById("coins").textContent);

let price=Number(this.dataset.price);

if(coins<price){

alert("Coins kam hain!");

return;

}

coins-=price;

document.getElementById("coins").textContent=coins;

// Player के सामने Building बनाओ

placedBuildings.push({

name:this.dataset.name,

x:player.x+120,

y:player.y,

w:80,

h:80

});

menu.style.display="none";

};

});

// Draw Buildings
function drawBuildings(){

placedBuildings.forEach(b=>{

ctx.fillStyle="#8b5a2b";

ctx.fillRect(

b.x-camera.x,
b.y-camera.y,
b.w,
b.h

);

ctx.fillStyle="white";

ctx.font="14px Arial";

ctx.fillText(

b.name,

b.x-camera.x+5,

b.y-camera.y+45

);

});

}
