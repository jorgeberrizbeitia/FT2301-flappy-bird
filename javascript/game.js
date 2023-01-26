class Game {

  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png"
    // nota importante. TODOS LOS ACCESOS de src desde clases deberian empezar con "./"

    this.pollito = new Pollito()
    // console.log(this.pollito)
    this.tubos;

    
    // que los tubos avances
    // propiedades de los tubos
    // que los tubos aparezcan y desaparezcan
    
    // colisiones pollito con los tubos
    // collision con el suelo
    
    // gameOver => enviar a la pantalla final
    // boton de pausa
    
    // BONUS
    // puntuacion 
    // vidas => sistema de respawn
    // dificultad
    // cambio de direccion del pollito => cambio de imagen
    // animacion de alitas del pollito => rotacion de imagenes del pollito

  }


  // metodos

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
  }

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }


  gameLoop = () => {
    // console.log("recursion andando")

    // 1. limpiar el canvas
    this.clearCanvas()

    // 2. movimientos y acciones de todos los elementos
    this.pollito.gravityPollito()

    // 3. dibujado de los elementos
    this.drawBg()
    this.pollito.drawPollito()

    // 4. recursion y control
    requestAnimationFrame(this.gameLoop)

  }

}