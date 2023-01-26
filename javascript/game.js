class Game {

  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png"
    // nota importante. TODOS LOS ACCESOS de src desde clases deberian empezar con "./"

    this.pollito = new Pollito()
    // console.log(this.pollito)
    // this.tuboTest = new Tubo()

    this.tubosArr = [];

    
    
    
    
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


  // que los tubos aparezcan y desaparezcan
  tubosAparecen = () => {
    let tuboParaAñadir = new Tubo()
    this.tubosArr.push(tuboParaAñadir)
    // no siempre se agregaran sino que estará condicionado
  } 

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
    // this.tuboTest.moveTubo()
    this.tubosAparecen()
    // quiero mover todos los tubos del array
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.moveTubo()
    })


    // 3. dibujado de los elementos
    this.drawBg()
    this.pollito.drawPollito()
    // this.tuboTest.drawTubo()
    // quiero dibujar todos los tubos del array
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.drawTubo()
    })

    // 4. recursion y control
    requestAnimationFrame(this.gameLoop)

  }

}