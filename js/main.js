const mainWrapper = document.querySelector(".main-wrapper");
const createButton = document.querySelector(".size-btn");
const clearButton = document.querySelector(".clear-btn");
const colorPicker = [""]
let gridSize = 12

createButton.addEventListener("click", () =>
{

    gridSize = parseInt(prompt("What size square grid do you have in mind?"));
    if (!isNaN(gridSize) && (gridSize > 0) && (gridSize <= 100)){
        createGrid(gridSize);
    } else {
        alert("Enter a number between 1 and 100")
}
}
);


clearButton.addEventListener("click", () => {
    clearGrid();
    createGrid(gridSize);
});

function createGrid(size=gridSize) {
    clearGrid();
    for (let i = 1; i <= size; i++) {
    const singleRow = document.createElement("div");
    singleRow.classList.add("single-row");
    for (let j = 1; j <= size; j++) {
        const smallSquare = document.createElement("div");
        smallSquare.classList.add("small-square");
        singleRow.appendChild(smallSquare);
    }
    mainWrapper.appendChild(singleRow);
    }

    const smallSquares = document.querySelectorAll(".small-square");
    smallSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        const squareStyle = getComputedStyle(square);
        const currentOpacity = parseFloat(squareStyle.opacity);
        const opacityIncrement = currentOpacity + 0.3;
        square.style.opacity = opacityIncrement.toString();
    });
});

}

function clearGrid() {
    let wrapperChild = mainWrapper.lastElementChild;
    while(wrapperChild) {
        wrapperChild.remove();
        wrapperChild = mainWrapper.lastElementChild;
    }
}


createGrid();


function rgbGenerator() {
    const rgb = [];
    
    for (let i = 1; i <= 3; i++) {
        const colorValue = Math.floor(Math.random() * 255);
        rgb.push(colorValue.toString());
    }

    const rgbValue = rgb.join(",");
    return `rgb(${rgbValue})`
}
