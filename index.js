let mainDiv = document.querySelector("#main");
let row = document.getElementsByClassName("gridRow");
let col = document.getElementsByClassName("gridCol");

function makeGrid() {
    makeRow(16);
    makeCol(16);
}

function makeRow(rowNumber) {
    for (r = 0;r < rowNumber;r++) {
        let newRow = document.createElement("div");
        mainDiv.appendChild(newRow).className = "gridRow";
    }
}

function makeCol(colNumber) {
    for (i = 0;i < row.length;i++) {
        for (j = 0;j < colNumber;j++) {
            let newCol = document.createElement("div");
            row[j].appendChild(newCol).className = "gridCol";
        }
    }
}

makeGrid();