let speed = 7;

let bird = new Bird({speed});


function setup() {
    createCanvas(500, 500);
    bird.restart();
}

function draw() {
  background('#333');
  bird.show();
  if(keyIsDown(32)) bird.jump();
}



