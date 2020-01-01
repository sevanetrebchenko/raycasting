
class RaySource {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.fieldOfView = [];
        for (let angle = 0; angle < 360; angle += 1) {
            this.fieldOfView.push(new Ray(this.position, radians(angle)));
        }
    }

    render() {
        fill(255);
        ellipse(this.position.x, this.position.y, 4);
    }

    updatePosition(xPos, yPos) {
        this.position.set(xPos, yPos);
    }

    castRays(walls) {
        for (let ray of this.fieldOfView) {
            // point with closest distance to the wall
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const intersection = ray.cast(wall);
                if (intersection) {
                    const currentDistance = p5.Vector.dist(this.position, intersection);
                    if (currentDistance < record) {
                        record = currentDistance;
                        closest = intersection;
                    }
                }
            }
            if (closest) {
                line(this.position.x, this.position.y, closest.x, closest.y);
            }
        }
    }
}