//Module Pattern
class Ball {
  constructor() {
    this.position = { x: 100, y: 100 };
    this.velocity = { x: 10, y: 0 };
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    circle(this.position.x, this.position.y, 20);

    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);
      World.grow();
    }
  }
}

//Singleton Pattern
var World = {
  boxes: [],
  bgcolor: [237, 119, 83],
  ballBeyond: function(whichBall) {
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];
    whichBall.position.x = 100;
    whichBall.velocity.x = (Math.random() - 0.5) * 20;
  },
  grow: function() {
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].big();
    }
  }
};

//class for a box
//Grows in size every time a ball hits an edge and is reset
// "For fun": multiple balls
class box {
  constructor() {
    this.position = { x: Math.random() * 100, y: 100, h: 10, w: 10 };
  }

  update() {
    rect(this.position.x, this.position.y, this.position.w, this.position.h);
  }

  big() {
    this.position.w += 5;
    this.position.h += 5;
  }
}

World.boxes.push(new box());
World.boxes.push(new box());

//Decorator Pattern
var ball = new Ball();

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(World.bgcolor);
  for (var i = 0; i < World.boxes.length; i++) {
    World.boxes[i].update();
  }
  ball.update();
}
