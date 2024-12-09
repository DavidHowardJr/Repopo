let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
   return num.toString();
}

function setMole() {
    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "whack/monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "whack/piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if(this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER " + score.toString();
        gameOver = true;
    }
}