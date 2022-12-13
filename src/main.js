let bankValue = 0;
let cookiePerClick = 1;
let cookiePerSecond = 0;

let upgrade1Lvl = 0;
let upgrade2Lvl = 0;
let upgrade3Lvl = 0;
let upgrade4Lvl = 0;
let upgrade5Lvl = 0;

let cookie = document.getElementById("cookieImg");
let cpc = document.getElementById("cookiePerClick");
let cps = document.getElementById("cookiePerSecond");
let cookieCountBox = document.getElementById("cookieCount");
let upgradeButtons = document.getElementsByClassName("upgradeButton");

updateDisplay();
// handle click
cookie.addEventListener("click", () => {
    bankValue = bankValue + cookiePerClick;
    updateDisplay();
});

function upgradeButtonHandler(e) {
    switch (e.target.id){
        case "upgradeButton1":
            upgrade1Lvl = upgrade1Lvl + 1
            break;
        case "upgradeButton2":
            console.log("2");
            break;
        case "upgradeButton3":
            console.log("3");
            break;
        case "upgradeButton4":
            console.log("4");
            break;
        case "upgradeButton5":
            console.log("5");
            break;
    }
    calculateCPS();
}


for(let i=0; i<upgradeButtons.length; i++){
    upgradeButtons[i].addEventListener("click", (e) => upgradeButtonHandler(e))
}

// add cps
setInterval(() =>{
    bankValue = bankValue + cookiePerSecond;
    updateDisplay();
}, 1000);

function calculateCPS(){
    cookiePerSecond = (upgrade1Lvl * 0.1) +
        (upgrade2Lvl * 1) +
        (upgrade3Lvl * 5) +
        (upgrade4Lvl * 10) +
        (upgrade5Lvl * 100);
}

function updateDisplay(){
    cookieCountBox.innerText = bankValue.toFixed(2);
    cpc.innerText = cookiePerClick.toFixed(2);
    cps.innerText = cookiePerSecond.toFixed(2);
}