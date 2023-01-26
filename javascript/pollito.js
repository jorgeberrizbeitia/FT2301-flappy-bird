class Pollito {

  // propiedades del pollito
  constructor() {
    this.x = 50; // posicion en eje X
    this.y = 50; // posicion en eje Y
    this.h = 40; // altura
    this.w = 45; // ancho
    this.speed = 2;
    this.jumpSpeed = 40;
    this.image = new Image()
    this.image.src = "./images/flappy.png"
  }


  // metodos
  drawPollito = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  // que el pollito baje => gravedad
  gravityPollito = () => {
    this.y += this.speed
  }

  // que el pollito suba
  jumpPollito = () => {
    this.y -= this.jumpSpeed
  }

}