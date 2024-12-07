let currBugTile;
let currManTile;
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
    setInterval(setBug, 2000);
    setInterval(setMan, 3000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setBug() {
    if(gameOver) {
        return;
    }
    if(currBugTile) {
        currBugTile.innerHTML = "";
    }
    let bug = document.createElement("img");
    bug.src = "whack/Hoarder.webp";

    let num = getRandomTile();
    if(currManTile && currManTile.id == num) {
        return;
    }
    currBugTile = document.getElementById(num);
    currBugTile.appendChild(bug);
}

function setMan() {
    if(gameOver) {
        return;
    }
    if(currManTile) {
        currManTile.innerHTML = "";
    }
    let man = document.createElement("img");
    man.src = "whack/man.png";

    let num = getRandomTile();
    if(currBugTile && currBugTile.id == num) {
        return;
    }
    currManTile = document.getElementById(num);
    currManTile.appendChild(man);
}

function selectTile() {
    if(gameOver) {
        return;
    }
    if(this == currBugTile) {
        document.getElementById("score").innerText = score.toString();
        score += 10;
    }
    else if(this == currManTile) {
        document.getElementById("score").innerText = "GAME OVER " + score.toString();
        gameOver = true;
    }
}