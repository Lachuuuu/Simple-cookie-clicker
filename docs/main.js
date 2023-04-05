let bankValue = 0;
let cookiePerClick = 1;
let cookiePerSecond = 0;

let upgrade1Lvl = 0;
let upgrade2Lvl = 0;
let upgrade3Lvl = 0;
let upgrade4Lvl = 0;
let upgrade5Lvl = 0;

let upgrade1Cost = 10;
let upgrade2Cost = 100;
let upgrade3Cost = 500;
let upgrade4Cost = 1000;
let upgrade5Cost = 1500;

let cookie = document.getElementById("cookieImg");
let cpc = document.getElementById("cookiePerClick");
let cps = document.getElementById("cookiePerSecond");
let cookieCountBox = document.getElementById("cookieCount");
let upgradeButtons = document.getElementsByClassName("upgradeButton");
let upgrade1LvlElement = document.getElementById("upgrade1Lvl");
let upgrade2LvlElement = document.getElementById("upgrade2Lvl");
let upgrade3LvlElement = document.getElementById("upgrade3Lvl");
let upgrade4LvlElement = document.getElementById("upgrade4Lvl");
let upgrade5LvlElement = document.getElementById("upgrade5Lvl");
let upgrade1CostElement = document.getElementById("upgrade1Cost");
let upgrade2CostElement = document.getElementById("upgrade2Cost");
let upgrade3CostElement = document.getElementById("upgrade3Cost");
let upgrade4CostElement = document.getElementById("upgrade4Cost");
let upgrade5CostElement = document.getElementById("upgrade5Cost");

updateDisplay();

cookie.addEventListener("click", () => {
    bankValue = bankValue + cookiePerClick;
    updateDisplay();
    changeCookieBacground();
});

for(let i=0; i<upgradeButtons.length; i++){
    upgradeButtons[i].addEventListener("click", (e) => upgradeButtonHandler(e))
}

// add cps
setInterval(() =>{
    bankValue = bankValue + cookiePerSecond;
    updateDisplay();
}, 1000);

function upgradeButtonHandler(e) {
    switch (e.target.id){
        case "upgradeButton1":
            if(bankValue >= upgrade1Cost) {
                upgrade1Lvl = upgrade1Lvl + 1;
                bankValue -= upgrade1Cost;
                upgrade1Cost = upgrade1Cost + (upgrade1Cost * 0.3);
            }
            break;
        case "upgradeButton2":
            if(bankValue >= upgrade2Cost) {
                upgrade2Lvl = upgrade2Lvl + 1;
                bankValue -= upgrade2Cost;
                upgrade2Cost = upgrade2Cost + (upgrade2Cost * 0.3);
            }
            break;
        case "upgradeButton3":
            if(bankValue >= upgrade3Cost) {
                upgrade3Lvl = upgrade3Lvl + 1;
                bankValue -= upgrade3Cost;
                upgrade3Cost = upgrade3Cost + (upgrade3Cost * 0.3);
            }
            break;
        case "upgradeButton4":
            if(bankValue >= upgrade4Cost) {
                upgrade4Lvl = upgrade4Lvl + 1;
                bankValue -= upgrade4Cost;
                upgrade4Cost = upgrade4Cost + (upgrade4Cost * 0.3);
            }
            break;
        case "upgradeButton5":
            if(bankValue >= upgrade5Cost) {
                upgrade5Lvl = upgrade5Lvl + 1;
                bankValue -= upgrade5Cost;
                upgrade5Cost = upgrade5Cost + (upgrade5Cost * 0.3);
            }
            break;
    }
    calculateCPS();
    calculateCPC();
    updateDisplay();
}

function changeCookieBacground(){
    cookie.style.backgroundColor = "brown";
    setTimeout(function (){cookie.style.backgroundColor = ""},70);
}

function calculateCPS(){
    cookiePerSecond = (upgrade1Lvl * 0.1) +
        (upgrade2Lvl * 1) +
        (upgrade3Lvl * 5) +
        (upgrade4Lvl * 10) +
        (upgrade5Lvl * 100);
}
function calculateCPC(){
    cookiePerClick = 1 + upgrade1Lvl + (cookiePerSecond*0.3);
}

function updateDisplay(){
    cookieCountBox.innerText = bankValue.toFixed(2);
    cpc.innerText = cookiePerClick.toFixed(2);
    cps.innerText = cookiePerSecond.toFixed(2);
    upgrade1LvlElement.innerText = "lvl: " + upgrade1Lvl;
    upgrade2LvlElement.innerText = "lvl: " + upgrade2Lvl;
    upgrade3LvlElement.innerText = "lvl: " + upgrade3Lvl;
    upgrade4LvlElement.innerText = "lvl: " + upgrade4Lvl;
    upgrade5LvlElement.innerText = "lvl: " + upgrade5Lvl;
    upgrade1CostElement.innerText = upgrade1Cost.toFixed(2);
    upgrade2CostElement.innerText = upgrade2Cost.toFixed(2);
    upgrade3CostElement.innerText = upgrade3Cost.toFixed(2);
    upgrade4CostElement.innerText = upgrade4Cost.toFixed(2);
    upgrade5CostElement.innerText = upgrade5Cost.toFixed(2);

}
