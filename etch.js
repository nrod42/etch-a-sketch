const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.clearBtn')
const randomColorBtn = document.querySelector('.randomColorBtn')
const chooseColorBtn = document.querySelector('.chooseColorBtn')
const rainbowColorBtn = document.querySelector('.rainbowColorBtn')
let allCells;
gridGenerator(16);
let color = 'black';
chooseColor(color);

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
    
}

function chooseColor (color) {
    allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = color;
        })
    })
}

function randomColor () {
    color =  '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function rainbowColor () {
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = randomColor();
        })
    })
}

//Asks user for new grid size then deletes and replaces old grid with new user grid
function clear () {
    let userSize = prompt("Enter a grid size between 1 and 100:");
    if (userSize === null) return;
    userSize = parseInt(userSize, 10);
    while (userSize < 1 || userSize > 100 || isNaN(userSize)) {
        userSize = parseInt(prompt("Not valid!\nEnter a grid size between 1 and 100:"), 10);
    }
    //Deletes old grid then creates new one based on new inputed grid size
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    gridGenerator(userSize);
    chooseColor(color);
}

chooseColorBtn.addEventListener('click', function(e) {
    color = prompt('Enter color:');
    chooseColor(color);
})

randomColorBtn.addEventListener('click', function(e) {
    chooseColor(randomColor());
})

rainbowColorBtn.addEventListener('click', rainbowColor);

clearBtn.addEventListener('click', clear);