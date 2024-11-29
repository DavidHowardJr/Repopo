let currBugTile;
let currManTile;


window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for game board html
    for ( let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id='0.8'></div>
        let tile = document.createElement('div');
        tile.id = i.toString();
        document.getElementById('board').appendChild(tile);
    }

    setInterval(setBug, 2000); //2000 milliseconds = 2 seconds
    setInterval(setMan, 3000); //3000 milliseconds = 3 seconds
}

function getRandomTile() {
    // math.random --> (0-9) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
function setBug() {

    if (currBugTile) {
        currBugTile.innerHTLM = '';
    }

    let bug = document.createElement('img');
    bug.src = 'Hoarder.webp';

    let num = getRandomTile();
    currBugTile = document.getElementById(num);
    currBugTile.appendChild(bug);
}

function setMan() {
    
    if (currManTile) {
        currManTile.innerHTML = '';
    }

    let man = document.createElement('img');
    man.src = './man.png'

    let num = getRandomTile();
    currManTile = document.getElementById(num);
    currManTile.appendChild(man);
}