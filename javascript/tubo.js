class Tubo {

  // propiedades de los tubos
  constructor() {
    this.x = canvas.width - 200;
    this.y = 0;
    this.w = 50;
    this.h = 200;
    this.speed = 2;
    this.image = new Image()
    this.image.src = "./images/obstacle_top.png";
  }


  // metodos

  // dibuje al tubo
  drawTubo = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
  }

  // que el tubo avance
  moveTubo = () => {
    this.x -= this.speed
  }

}