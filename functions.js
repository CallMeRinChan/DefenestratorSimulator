// classes
// fuck you, i couldnt link 2 js files to each other so im doing this in one file

class Upgrade {

    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.effect = 1;
    }

    get buyUpgrade() {
        if(defenestrates >= this.cost) {
            defenestrates -= this.cost;
            if(this.name == "Worth Upgrade") { // Worth Upgrade
                this.effect = this.effect * 1.1; // 10% effect increase per upgrade
                this.cost = this.cost * 1.2; // 20% price increase per upgrade
            }else if(this.name == "Double Upgrade")
            { // Double Upgrade
                this.effect = this.effect * 2; // 100% effect increase per upgrade
                this.cost = this.cost * 2.5; // 150% price increase per upgrade
            }
            updateDefenestrates();
        }
    }

    get getName() {
        return this.name;
    }

    get getEffect() {
        return this.effect;
    }
}

//functions

var defenestrates = 0; // the amount of currency
var worthUpgrade = new Upgrade("Worth Upgrade", 10); // make a worth upgrade, base cost 10
var doubleUpgrade = new Upgrade("Double Upgrade", 100); // make a double upgrade, base cost 100

function updateDefenestrates() { // updating data
    document.getElementById("defenestratesText").innerHTML = defenestrates.toFixed(1); // change the text to the amount of defenestrates
    document.getElementById("defenestrateBtn").innerHTML = "Defenestrate: " + (worthUpgrade.getEffect*doubleUpgrade.getEffect).toFixed(1) + " gained"; // change the text to the amount of defenestrates gained
}

function doDefenestrate() { // commit a felony
    defenestrates += (worthUpgrade.getEffect * doubleUpgrade.effect); // add the effect of the worth upgrade
    updateDefenestrates();
}

function doWorthUpgrade() { // buy an upgrade
    worthUpgrade.buyUpgrade;
    document.getElementById("WorthUpgrade").innerHTML = worthUpgrade.getName + ": " + Math.floor(worthUpgrade.cost); // change the text to the name of the upgrade and the cost
}

function doDoubleUpgrade(){
    doubleUpgrade.buyUpgrade;
    document.getElementById("DoubleUpgrade").innerHTML =  "Double Earnings: " + Math.floor(doubleUpgrade.cost);
}
