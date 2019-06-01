let bird;
let pipes;

// Images
let background_image;
let bird_image;
let top_pipe_image;
let bottom_pipe_image;

function preload() {
    background_image = loadImage('/images/background.png');
    bird_image = loadImage('/images/fatBird.png');
    top_pipe_image = loadImage('/images/full pipe top.png');
    bottom_pipe_image = loadImage('/images/full pipe bottom.png');
}

function setup() {
    createCanvas(600, 800);
    bird = new Bird();
    pipes = [new Pipe()];
}

function draw() {
    image(background_image, 0, 0, 600, 800);
    pipeStuff();
    textFont('Helvetica');
    textSize(18);
    fill(0);
    noStroke();
    text('Score: ' + bird.score, 10, 20);
    birdStuff();
}

function keyPressed() {
    if (key == ' ') {
        bird.flap();
    }

    console.log(key);
    print(key);
}

function mouseClicked() {
    bird.flap();
}

function birdStuff() {
    bird.show();
    if (bird.checkGameOver() || bird.checkHitPipe(pipes[0])) {
        noLoop();
    }
    bird.move();
    //bird.think(pipes);
}

function pipeStuff() {
    for (pipe of pipes) {
        pipe.show(top_pipe_image, bottom_pipe_image);
        pipe.move();
        if (pipe.atScorePoint()) {
            pipes.push(new Pipe());
            bird.score++;
        }
        if (pipe.outOfScreen()) {
            pipes.shift();
        }
    }
}