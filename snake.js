class Sprite {
  constructor(x, y, width, height, speed, dir){
  this.x=x
  this.y=y
  this.width=width
  this.height=height
  this.speed=speed
  this.s=speed
  this.dir=dir
  }
  draw(){
    noStroke()
    fill (0,255,0)
    rect(this.x,this.y,this.width,this.height)
  }
  update(){
    snake.speed--
  if (snake.speed<0){
    if (snake.dir=="N"){
      snake.y -=51
    }
    if (snake.dir=="S"){
      snake.y +=51
    }
    if (snake.dir=="E"){
      snake.x +=51
    }
    if (snake.dir=="W"){
      snake.x -=51
    }
    snake.speed=snake.s
  }
  if (keyIsDown(83)){
    snake.dir = "S"
  }
  if (keyIsDown(87)){
    snake.dir = "N"
  }
  if (keyIsDown(68)){
    snake.dir = "E"
  }
  if (keyIsDown(65)){
    snake.dir = "W"
  }
    if(this.x < 0)
      this.x=0
    if(this.y < 0)
      this.y=0
  }
}
