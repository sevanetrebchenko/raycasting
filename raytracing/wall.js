
class Wall {
    constructor(xPos1, yPos1, xPos2, yPos2) {
        this.start = createVector(xPos1, yPos1);
        this.end = createVector(xPos2, yPos2);
    }

    render() {
        stroke(255);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}