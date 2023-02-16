import ball from "./elements/ball.js";
//global variables
const glob = {
    screen: {
        width: 1000,
        height: 600,
    },
    animation: {
        frameRate: 60, // per sec
    },
    time: {
        currentTime: 0,
    },
    clock() {
        this.time.currentTime += 1000 / this.animation.frameRate / 1000;
    },
};
// creating canvas dom element
const id = document.getElementById("app");
const canvasElement = document.createElement("canvas");
canvasElement.setAttribute("width", glob.screen.width.toString());
canvasElement.setAttribute("height", glob.screen.height.toString());
canvasElement.setAttribute("id", "canvas");
id === null || id === void 0 ? void 0 : id.appendChild(canvasElement);
const time = document.createElement("p");
time.setAttribute("id", "time");
id === null || id === void 0 ? void 0 : id.appendChild(time);
const clock = document.getElementById("time");
// setting document attribute
document.title = "nonogram";
// sellecting canvas env
const canvas = document.getElementById("canvas");
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    function gameLoop() {
        time.innerText = Math.floor(glob.time.currentTime).toString();
        glob.clock();
        ctx.clearRect(0, 0, glob.screen.width, glob.screen.height);
        ball.draw(ctx);
        ball.gravity(glob);
    }
    setInterval(gameLoop, 1000 / glob.animation.frameRate);
}
addEventListener("keypress", (e) => {
    if (e.key === "w" && ball.y + ball.r === glob.screen.height)
        ball.speedUp = 30;
});
