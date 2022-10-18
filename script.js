var x=[]
var y=[]
var snake

function setup() {
  createCanvas(511, 511);
  for (let n=0; n < 15; n++){
    x.push(1+(51*(n)))
    y.push(1+(51*(n)))
  }
  snake = new Sprite(0,0, 50, 50, 5, "E")
}

function draw() {
  background(0);
  fill(50)
  for (let n=0; n < 15; n++){
    for (let s=0; s < 15; s++){
      square(x[n],y[s],50)
    }
  }
  
  snake.update()
  snake.draw()
}
