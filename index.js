let mainDiv = document.querySelector("#main");
let row = document.getElementsByClassName("gridRow");
let col = document.getElementsByClassName("gridCol");

let size = 0;

const color = ["red", "green", "blue", "violet", "indigo", "orange", "yellow"];

const gridSize = document.querySelector(".size");
gridSize.addEventListener("input", (e) => {
    size = parseInt(e.target.value);
    if (size > 20) {
        alert("Not more than 20");
        gridSize.value = "";
    } else {
        makeGrid();
    }
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
    
    // For hover effect
    const cols = document.querySelectorAll(".gridCol");
    cols.forEach((col) => {
        col.addEventListener("mouseover", function () {
            // For random color
            const randomNo = Math.floor(Math.random() * 7);
            this.style.backgroundColor = `${color[randomNo]}`;
        });
    
    });
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    size = 0;
    gridSize.value = "";
});