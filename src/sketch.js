
let walls = [];
let source;
function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    walls[i] = new Wall(x1, y1, x2, y2);
  }

  walls.push(new Wall(0, 0, width, 0));
  walls.push(new Wall(width, 0, width, height));
  walls.push(new Wall(0, height, width, height));
  walls.push(new Wall(0, 0, 0, height));

  source = new RaySource();
}

function draw() {
  
  background(0);
  for (let wall of walls) {
    wall.render();
  }
  source.updatePosition(mouseX, mouseY);
  source.render();
  source.castRays(walls);
}
