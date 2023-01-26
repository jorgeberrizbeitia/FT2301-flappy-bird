class Tubo {

  // propiedades de los tubos
  constructor(yPos, isTuboImageUp) {
    this.x = canvas.width;
    this.y = yPos; // deberia cambiar dependiendo del tipo de tubo
    this.w = 50;
    this.h = 200;
    this.speed = 2;
    this.image = new Image()
    if (isTuboImageUp === true) {
      this.image.src = "./images/obstacle_top.png";
    } else {
      this.image.src = "./images/obstacle_bottom.png";
    }
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