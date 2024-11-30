let currBugTile;
let currManTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setBug, 2000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setMan, 3000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setBug() {
    if (gameOver) {
        return;
    }
    if (currBugTile) {
        currBugTile.innerHTML = "";
    }
    let bug = document.createElement("img");
    bug.src = "whack/Hoarder.webp";

    let num = getRandomTile();
    if (currManTile && currManTile.id == num) {
        return;
    }
    currBugTile = document.getElementById(num);
    currBugTile.appendChild(bug);
}

function setMan() {
    if (gameOver) {
        return;
    }
    if (currManTile) {
        currManTile.innerHTML = "";
    }
    let man = document.createElement("img");
    man.src = "whack/man.png";

    let num = getRandomTile();
    if (currBugTile && currBugTile.id == num) {
        return;
    }
    currManTile = document.getElementById(num);
    currManTile.appendChild(man);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currBugTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currManTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}