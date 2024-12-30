let mainDiv = document.querySelector("#main");
let row = document.getElementsByClassName("gridRow");
let col = document.getElementsByClassName("gridCol");

let size = 0;

const gridSize = document.querySelector(".size");
gridSize.addEventListener("input", (e) => {
    size = parseInt(e.target.value);
    makeGrid();
})
console.log(size);

// Makes rows
function makeRow(size) {
    mainDiv.innerHTML = "";

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";

        for (let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.className = "gridCol";
            row.appendChild(col);
        }

        mainDiv.appendChild(row);
    }
}

// Makes the grid
function makeGrid() {
    makeRow(size);
}
