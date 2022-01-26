const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.clearBtn')

function gridGenerator (gridSize) {
    //Creates a grid div of fixed size
    const gridWidth = 600;
    const gridHeight  = 600;
    grid.style.width = gridWidth.toString() + "px";
    grid.style.height = gridHeight.toString() + "px";

    //First loop creates the "row" divs and appends them to the grid div.
    for (let i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.classList.add('row')
        //row dimensions are based on the fixed grid dimensions
        row.style.width = gridWidth.toString() + "px";
        row.style.height = (gridHeight/gridSize).toString() + "px";
        grid.appendChild(row)
        
        //Second loop creates and appends "cell" divs inside of each of the old rows. Becuase, "row"'s display is flex, these "cell"s are in a row
        for (let j = 0; j < gridSize; j++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            //cell dimensions are based on the fixed grid dimensions
            cell.style.width = (gridHeight/gridSize).toString() + "px";
            cell.style.height = (gridHeight/gridSize).toString() + "px";
            row.appendChild(cell);
            //upon mouseover, each "cell" color changes
            cell.addEventListener("mouseover", function(e) {
                e.target.style.backgroundColor = "lightBlue";
            })
        }
    }
}

gridGenerator(16);

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
    gridGenerator(userSize)
}

clearBtn.addEventListener('click', clear);