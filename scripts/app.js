import confetti from "https://cdn.skypack.dev/canvas-confetti";

let container = document.getElementsByClassName("page-container")[0];

const confettiButton = document.getElementsByClassName("confetti-button")[0];

let canvasLeft = document.createElement("canvas");
let canvasRight = document.createElement("canvas");

canvasLeft.classList.add("confetti-canvas");
canvasLeft.width = 600;
canvasLeft.height = 600;
canvasLeft.style.bottom = 0;
canvasLeft.style.left = 0;

canvasRight.classList.add("confetti-canvas");
canvasRight.width = 600;
canvasRight.height = 600;
canvasRight.style.bottom = 0;
canvasRight.style.right = 0;

let leftConfetti = confetti.create(canvasLeft);
let rightConfetti = confetti.create(canvasRight);

function party(event) {


    container.appendChild(canvasLeft);
    container.appendChild(canvasRight);


    leftConfetti({
        angle: 45,
        spread: 80,
        particleCount: 150,
        origin: {
            x: 0,
            y: 1,
        },
    }).then(() => {
        container.removeChild(canvasLeft);
    });
    
    rightConfetti({
        angle: 135,
        spread: 80,
        particleCount: 150,
        origin: {
            x: 1,
            y: 1,
        },
    }).then(() => {
        container.removeChild(canvasRight);
    });
}

confettiButton.addEventListener("click", party);

// Cursor Movement

let cursor = document.getElementsByClassName("cursor")[0];

let mousePos = {
    x: 0,
    y: 0
}

let cursorPos = {
    x: 0,
    y: 0
}

let speed = .1;

function handleMouseMove(event) {
    mousePos.x = event.pageX,
    mousePos.y = event.pageY
}

function followCursor() {

    let dist = {x: mousePos.x - cursorPos.x,
    y: mousePos.y - cursorPos.y};

    cursorPos.x = cursorPos.x + (dist.x * speed);
    cursorPos.y = cursorPos.y + (dist.y * speed);

    cursor.style.left = cursorPos.x + "px";
    cursor.style.top = cursorPos.y + "px";

    requestAnimationFrame(followCursor);

}  

followCursor();

document.addEventListener("mousemove", handleMouseMove)