class Pipe {
    constructor() {
        this.x = 600;
        this.y_top = Math.floor(Math.random() * 300 + 200);
        this.y_bottom = this.y_top + 150;
        this.speed = 3;
        this.pipe_width = 80;
    }

    show(top_pipe_image, bottom_pipe_image) {
        stroke(0);
        strokeWeight(3);
        fill(55, 190, 28);
        //rect(this.x, 0, this.pipe_width, this.y_top);
        //rect(this.x, this.y_bottom, this.pipe_width, height);
        image(top_pipe_image, this.x, 0, this.pipe_width, this.y_top);
        image(bottom_pipe_image, this.x, this.y_bottom, this.pipe_width, height);
    }

    move() {
        this.x -= this.speed;
    }

    outOfScreen() {
        return (this.x <= -(this.pipe_width + 10));
    }

    atScorePoint() {
        return (this.x + this.pipe_width === 101);
    }
}