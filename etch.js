const body = document.querySelector('body');
const grid = document.createElement('div');
grid.classList.add('grid')
body.appendChild(grid);


for (let i = 0; i < 4; i++) {
    row = document.createElement('div');
    row.classList.add('row')
    grid.appendChild(row)
    for (let j = 0; j < 4; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
        cell.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "orange";
        })
    }
}

const clearBtn = document.querySelector('.clearBtn')
allCells = document.querySelectorAll('.cell')

function erase () {
    allCells.forEach(cell => cell.style.backgroundColor = "white");
}

clearBtn.addEventListener('click', erase);

