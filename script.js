const container = document.querySelector(".container")
const startBtn = document.querySelector(".start-game")
const resetBtn = document.querySelector(".reset")
const welcome = document.querySelector(".welcome")
const root = document.documentElement

let rgbaColor = "rgba(102, 102, 102, 1)"

function createDivs(divCount){
    for (let i=0; i<divCount; i++) {
        const div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)
    }

    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.addEventListener("mouseover", function(){
            console.log(rgbaColor)
            square.style.background = `${rgbaColor}`
        })
    })

    resetBtn.addEventListener("click", function(){
        squares.forEach(square => {
            square.style.background = "#fff"
        })
    })
}

startBtn.addEventListener("click", function(){
    let gridSize = prompt("Enter grid size:", "25")
    if (gridSize <= 100) {
        welcome.style.display = "none"
        root.style.setProperty("--grid-size", gridSize)
        createDivs(gridSize**2)
    } else {
        alert("That's way too big!")
    }
})


const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: "#666666",

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            save: true
        }
    }
});

pickr.on("change", (color, instance)=> {
    rgbaColor = color.toRGBA().toString()
    root.style.setProperty("--draw-color", rgbaColor)
})
