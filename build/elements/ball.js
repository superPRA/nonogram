const ball = {
    x: 500,
    y: -100,
    r: 50,
    s: 0,
    e: Math.PI * 2,
    color: {
        fill: "black",
    },
    P: 1,
    fallingTime: 0,
    speedUp: 0,
    speedDown(t) {
        return this.accelarationDown * t;
    },
    isFalling: false,
    v() {
        return Math.PI * this.r * this.r;
    },
    accelarationDown: 9.8,
    draw(ctx) {
        ctx.fillStyle = this.color.fill;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.s, this.e);
        ctx.fill();
    },
    gravity(glob) {
        console.log(this.speedUp);
        this.isFalling = this.y < glob.screen.height - this.r;
        if (this.isFalling) {
            this.fallingTime += 1000 / glob.animation.frameRate / 1000;
        }
        if (this.fallingTime === 0) {
        }
        if (!this.isFalling) {
            if (this.speedUp === 0) {
                this.speedUp = this.fallingTime * this.accelarationDown;
            }
            this.fallingTime = 0;
            this.y = glob.screen.height - this.r;
            this.speedUp /= 4;
            if (this.speedUp < 0.1)
                this.speedUp = 0;
        }
        this.y += this.speedDown(this.fallingTime) - this.speedUp;
    },
};
export default ball;
