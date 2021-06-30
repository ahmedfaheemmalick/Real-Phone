let circle = document.getElementById("circle")
let upArrow = document.getElementById("up-arrow")
let downArrow = document.getElementById("down-arrow")

let rotateValue = circle.style.transform
let rotateSum

upArrow.onclick = () => {
    rotateSum = rotateValue + "rotate(-90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}

downArrow.onclick = () => {
    rotateSum = rotateValue + "rotate(90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}