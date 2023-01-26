class Game {

  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png"

    this.pollito;
    this.tubos;

    // que los tubos avances
    // que el pollita baje => gravedad
    // que el pollito suba
    // propiedades de los tubos
    // propiedades del pollito
    // colisiones pollito con los tubos
    // collision con el suelo
    // que los tubos aparezcan y desaparezcan
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


  gameLoop = () => {
    console.log("recursion andando")

    // 1. limpiar el canvas


    // 2. movimientos y acciones de todos los elementos


    // 3. dibujado de los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

    // 4. recursion y control
    requestAnimationFrame(this.gameLoop)

  }

}