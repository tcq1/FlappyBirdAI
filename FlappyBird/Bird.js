class Bird {
    constructor() {
        // Bird stuff
        this.x = 120;
        this.y = 400;
        this.bird_width = 58;
        this.bird_height = 40;
        this.speed = 0;
        this.gravity = 0.3;
        this.flappable = true;
        this.tilt_up = false;
        this.score = 0;
        this.size = 40;
        this.fallRotation = this.fallRotation = -PI / 6;

        // AI stuff
        // this.brain = new NeuralNetwork(5, 5, 1);
    }

    show() {
        push();
        strokeWeight(1);
        stroke(0);
        fill(255, 255, 15);
        push();
        translate(this.x - this.size / 2 - 8 + bird_image.width / 2, this.y - this.size / 2 + bird_image.height / 2);
        if (this.speed < 8) {
            rotate(-PI / 6);
            this.fallRotation = -PI / 6;
        } else if (this.speed < -5) {
            this.fallRotation += PI / 8.0;
            this.fallRotation = constrain(this.fallRotation, -PI / 6, PI / 2);
            rotate(this.fallRotation);
        } else {
            rotate(PI / 2);
        }
        image(bird_image, -bird_image.width / 2, -bird_image.height / 2);
        pop();
    }

    move() {
        if (this.y + this.speed > (this.bird_height / 2)) {
            this.y += this.speed;
        } else {
            this.y = 20;
            this.speed = 1;
        }

        this.speed += this.gravity;
        // console.log(this.speed);
    }

    flap() {
        if (this.flappable) {
            this.speed = -7;
        }
    }

    checkGameOver() {
        if (this.y >= height - (this.bird_height / 2)) {
            return true;
        }

        return false;
    }

    checkHitPipe(pipe) {
        if (pipe.x <= (this.x) && (pipe.x + pipe.pipe_width) >= (this.x)) {
            if (this.y - this.bird_height / 2 <= pipe.y_top || this.y + this.bird_height / 2 >= pipe.y_bottom) {
                return true;
            }
            if (dist(this.x, this.y, this.x, pipe.y_top) <= this.bird_height / 2 || dist(this.x, this.y, this.x, pipe.y_bottom) <= this.bird_height / 2) {
                return true;
            }
        }

        return false;
    }
}