const container = document.querySelector(".container")
const startBtn = document.querySelector(".start-game")
const resetBtn = document.querySelector(".reset")
const welcome = document.querySelector(".welcome")
const root = document.documentElement

function createDivs(divCount){
    for (let i=0; i<divCount; i++) {
        const div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)
    }

    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.addEventListener("mouseover", function(){
            square.classList.add("active")
        })
    })

    resetBtn.addEventListener("click", function(){
        squares.forEach(square => {
            square.classList.remove("active")
        })
    })
}

startBtn.addEventListener("click", function(){
    let gridSize = prompt("Enter grid size:", "55")
    if (gridSize <= 100) {
        welcome.style.display = "none"
        root.style.setProperty("--grid-size", gridSize)
        createDivs(gridSize**2)
        alert("Grid ready!")
    } else {
        alert("That's way too big!")
    }
})




