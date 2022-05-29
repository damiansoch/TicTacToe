//arrow title function
titleFunction = () => {
  return `TIC TAC TOE GAME`;
};
document.getElementById(`headher`).innerHTML = titleFunction();

//ticTacToe

// active player
let activePlayer = "X";
//array stores all moves
let selectedSquares = [];

//palcing X into the square
function placeXorO(squareNumber) {
  //checking if the square wasn't already clicked
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    //getting id of the clicked square
    let select = document.getElementById(squareNumber);
    //checking who's turn is it
    if (activePlayer === "X") {
      select.style.backgroundImage = "url(./Images/x.png)";
    } else {
      //if active player is O
      select.style.backgroundImage = "url(./Images/o.png)";
    }
    //square number and activePlayer are concanated together and added to array
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();
    //changing active player
    if (activePlayer === "X") {
      activePlayer = "O";
    } else {
      activePlayer = "X";
    }
    audio("./media/place.mp3");
    //checking if its computer turn
    if (activePlayer === "O") {
      disableClick();
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    return true;
  }
  //random square being selected
  function computersTurn() {
    // needed for while loop
    let success = false;
    let pickSquare;
    while (!success) {
      //storing random number 1-8
      pickSquare = String(Math.floor(Math.random() * 9));
      //if the random number evaluates return true, the square hasn't been selected
      if (placeXorO(pickSquare)) {
        placeXorO(pickSquare);
        // changing the boolean ends the loop
        success = true;
      }
    }
  }
}
function checkWinConditions() {
  //X 0,1,2 condition
  if (arrayIncludes("0X", "1X", "2X")) {
    drawWinLine(50, 100, 558, 100);
  }
  //X 3,4,5 condition
  else if (arrayIncludes("3X", "4X", "5X")) {
    drawWinLine(50, 304, 558, 304);
  }
  //X 6,7,8 condition
  else if (arrayIncludes("6X", "7X", "8X")) {
    drawWinLine(50, 508, 558, 508);
  }
  //X 0,3,6 condition
  else if (arrayIncludes("0X", "3X", "6X")) {
    drawWinLine(100, 50, 100, 558);
  }
  //X 1,4,7 condition
  else if (arrayIncludes("1X", "4X", "7X")) {
    drawWinLine(304, 50, 304, 558);
  }
  //X 2,5,8 condition
  else if (arrayIncludes("2X", "5X", "8X")) {
    drawWinLine(508, 50, 508, 558);
  }
  //X 6,4,2 condition
  else if (arrayIncludes("6X", "4X", "2X")) {
    drawWinLine(100, 508, 510, 90);
  }
  //X 0,4,8 condition
  else if (arrayIncludes("0X", "4X", "8X")) {
    drawWinLine(100, 100, 520, 520);
  }
  //O 0,1,2 condition
  else if (arrayIncludes("0O", "1O", "2O")) {
    drawWinLine(50, 100, 558, 100);
  }
  //O 3,4,5 condition
  else if (arrayIncludes("3O", "4O", "5O")) {
    drawWinLine(50, 304, 558, 304);
  }
  //O 6,7,8 condition
  else if (arrayIncludes("6O", "7O", "8O")) {
    drawWinLine(50, 508, 558, 508);
  }
  //O 0,3,6 condition
  else if (arrayIncludes("0O", "3O", "6O")) {
    drawWinLine(100, 50, 100, 558);
  }
  //O 1,4,7 condition
  else if (arrayIncludes("1O", "4O", "7O")) {
    drawWinLine(304, 50, 304, 558);
  }
  //O 2,5,8 condition
  else if (arrayIncludes("2O", "5O", "8O")) {
    drawWinLine(508, 50, 508, 558);
  }
  //O 6,4,2 condition
  else if (arrayIncludes("6O", "4O", "2O")) {
    drawWinLine(100, 508, 510, 90);
  }
  //O 0,4,8 condition
  else if (arrayIncludes("0O", "4O", "8O")) {
    drawWinLine(100, 100, 520, 520);
  }
  //tie
  else if (selectedSquares.length >= 9) {
    audio(`./media/tie.mp3`);
    //reset
    setTimeout(function () {
      resetGame();
    }, 1000);
  }
  //checking if array includes 3 strings
  // It is used to check the winning contition
  function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) {
      return true;
    }
  }
}
function disableClick() {
  document.body.style.pointerEvents = `none`;
  setTimeout(function () {
    document.body.style.pointerEvents = `auto`;
  }, 1000);
}
function audio(audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById("win-lines");
  const c = canvas.getContext("2d");
  let x1 = coordX1,
    x2 = coordX2,
    y1 = coordY1,
    y2 = coordY2,
    x = x1,
    y = y1;

  function animateLineDrawing() {
    //this variable creates the loop for when the game ends it restarts
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from the last loop iteration
    c.clearRect(0, 0, 608, 608);
    //this method starts a new path
    c.beginPath();
    //this method moves us to the starting point for our line
    c.moveTo(x1, y1);
    //this method indicates the end point in our line
    c.lineTo(x, y);
    //
    c.lineWidth = 10;
    c.strokeStyle = `rgba(70,255,33,.8)`;
    //drawing
    c.stroke();

    //checking if we reached the endpoint
    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y < y2) {
        y += 10;
      }
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }

    //it was necessary for 6,4,2 winning condition
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }
  function clear() {
    //starts animation frame
    const animationLoop = requestAnimationFrame(clear);
    //clearing canvas
    c.clearRect(0, 0, 608, 608);
    //cancel animation loop
    cancelAnimationFrame(animationLoop);
  }
  //disallowing clicking when winning audio sounds
  disableClick();
  //winning aoudi playing
  audio("./media/winGame.mp3");
  //calling main animation loop
  animateLineDrawing();
  //waiting and than clearing
  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}
//recer game
function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = ``;
  }
  selectedSquares = [];
}
