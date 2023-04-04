// Almost all of this code is stolen from W3Schools
// https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity

var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        var grd = ctx.createLinearGradient(0, 0, 0, 260);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.fillRect(450, 10, 460, 260);
        ctx.fillStyle = "#000000";
        ctx.font = "15px Arial";
        ctx.fillText("10",460 , 15); 
        ctx.fillText(" 0",460 , 255); 
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

document.addEventListener("keydown", (e) => {
    if (e.code === "KeyK") {
        myGamePiece.gravity = -0.1;
    }
    if (e.code === "Space") {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(40, myGamePiece.y + 15);
        ctx.lineTo(480, myGamePiece.y + 15);
        ctx.stroke();
        clearInterval(myGameArea.interval);
        document.getElementById("amount").value = (-1 * myGamePiece.y + 240) / 24;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "KeyK") {
        myGamePiece.gravity = 0.1;
    }
});
