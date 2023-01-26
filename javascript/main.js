// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#my-canvas")
const startScreenDOM = document.querySelector("#splash-screen")
const ctx = canvas.getContext("2d")
let game; // el obj del juego sea accesible en todo el codigo



// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // console.log("intentando iniciar el juego")

  // 1. cambiar la pantalla
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // 2. crear un objeto de la clase Game
  game = new Game() // acceder a la variable global y crear un nuevo juego en ella
  console.log(game)

  // 3. iniciar el juego (el game loop)
  game.gameLoop()

}

const handleJumpPollito = (event) => {
  if (event.code === "Space") {
    console.log("haciendo volar al pollito")
    // como invocamos nosotros a la funcion jumpPollito
    game.pollito.jumpPollito()
  }
}



// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)
window.addEventListener("keydown", handleJumpPollito)




