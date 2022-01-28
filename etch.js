const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.clearBtn')
const chooseColorBtn = document.querySelector('.chooseColorBtn')
const userColor = document.querySelector('.userColor')
const randomColorBtn = document.querySelector('.randomColorBtn')
const rainbowColorBtn = document.querySelector('.rainbowColorBtn')
const darkBtn = document.querySelector('darkBtn')
const eraserBtn = document.querySelector('.eraseBtn')

let allCells;
let color = 'black';

gridGenerator(16);

function gridGenerator (gridSize) {
    //Creates a grid div of fixed size
    const gridWidth = 600;
    const gridHeight  = 600;
    grid.style.width = gridWidth + "px";
    grid.style.height = gridHeight + "px";

    //First loop creates the "row" divs and appends them to the grid div.
    for (let i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.classList.add('row')
        //row dimensions are based on the fixed grid dimensions
        row.style.width = gridWidth + "px";
        row.style.height = (gridHeight/gridSize)+ "px";
        grid.appendChild(row)
        
        //Second loop creates and appends "cell" divs inside of each of the old rows. Becuase, "row"'s display is flex, these "cell"s are in a row
        for (let j = 0; j < gridSize; j++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            //cell dimensions are based on the fixed grid dimensions
            cell.style.width = (gridHeight/gridSize) + "px";
            cell.style.height = (gridHeight/gridSize) + "px";
            cell.style.backgroundColor = "white";
            row.appendChild(cell);
        }
    }
    allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = color;
        })
    })
}

function randomColor () {
    return color =  '#' + Math.floor(Math.random()*16777215).toString(16);
}

/*function darkColor () {
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'brightness(10%)'
        })
    })
}*/

/*function rainbowColor () {
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = randomColor();
        })
    })
}*/
    
//Asks user for new grid size then deletes and replaces old grid with new user grid
function clear () {
    let userSize = prompt("Enter a grid size between 1 and 100:");
    if (userSize === null) return;
    userSize = parseInt(userSize, 10);
    while (userSize < 1 || userSize > 100 || isNaN(userSize)) {
        userSize = parseInt(prompt("Not valid!\nEnter a grid size between 1 and 100:"), 10);
    }
    //Deletes existing grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    //New grid with user size created
    gridGenerator(userSize);
}

chooseColorBtn.addEventListener('click', () => color = userColor.value);

randomColorBtn.addEventListener('click', randomColor);

eraserBtn.addEventListener('click', () => color = "white");

clearBtn.addEventListener('click', clear);

//darkBtn.addEventListener('click', () => color = color.style.webkit

//rainbowColorBtn.addEventListener('click', rainbowColor);

// IMPORTANT DOOFUS, when u run rainbowColor, it is overriding the event listeners we added before so the other buttons besisedss clear wont work!