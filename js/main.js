// Create a 4x4 grid
const mainWrapper = document.querySelector(".main-wrapper");

const gridPrompt = prompt("Hey...what's your wish for this here square grid?")
const gridSize = parseInt(gridPrompt);

for (let i = 1; i <= gridSize; i++) {
    const singleRow = document.createElement("div");
    singleRow.classList.add("single-row");
    for (let j = 1; j<= gridSize; j++) {
        const smallSquare = document.createElement("div");
        smallSquare.classList.add("small-square");
        singleRow.appendChild(smallSquare);
    }
    mainWrapper.appendChild(singleRow);
}

const gridSquares = document.querySelectorAll(".small-square");

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "black";
        gridSquare.style.opacity = "1";
    })
});