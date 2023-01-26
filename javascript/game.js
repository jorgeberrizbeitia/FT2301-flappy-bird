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
    this.frames = 1; // determina la cantidad de frames que han pasado en el juego

    this.tuboSeparation = 300;

    
    
    
    
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
    // no siempre se agregaran sino que estará condicionado
    
    // si el array está vacio, agrega un tubo
    // o si ha pasado un tiempo especifico (2 seg) (this.frames % 120 === 0) agrega un tubo
    if (this.tubosArr.length === 0 || this.frames % 120 === 0) {

      let randomPosY = Math.random() * (-100) // => 0 y -50

      let tuboDeArriba = new Tubo(randomPosY, true) // => posY 0
      this.tubosArr.push(tuboDeArriba)


      let tuboDeAbajo = new Tubo(tuboDeArriba.y + this.tuboSeparation, false) // => posY 400
      this.tubosArr.push(tuboDeAbajo)
      console.log(this.tubosArr.length)
    }

    // al final de clase tomar en cuenta los tubes que salen y sacarlos del array

  } 

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
  }

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }


  gameLoop = () => {
    // console.log("recursion andando") // 60 veces por segundo
    // console.log(this.frames)
    this.frames++

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