// seting up active user
let movesArray = [];
let X = "active_user";
let O = "";
function XorO(clicked_id) {
  // action when clicked
  if (X == "active_user") {
    let clickedBox = document.getElementById(clicked_id);
    clickedBox.style.backgroundImage = "url(./IMG/x.png)";
    clickedBox.style.pointerEvents = "none";
    clickedBox.style.cursor = "wait";
    clickedBox.style.opacity = 1;
    // pushing to array
    movesArray.push(clicked_id + "X");
    checkArray("X");
    audio("./Sounds/clicked.mp3");
    X = "";
    O = "active_user";
  } else if (O == "active_user") {
    let clickedBox = document.getElementById(clicked_id);
    clickedBox.style.backgroundImage = "url(./IMG/o.png)";
    clickedBox.style.pointerEvents = "none";
    clickedBox.style.cursor = "";
    clickedBox.style.opacity = 1;
    // pushing to array
    movesArray.push(clicked_id + "O");
    checkArray("O");
    audio("./Sounds/clicked.mp3");
    X = "active_user";
    O = "";
  }
  console.log(movesArray);
}
//audio fuction
function audio(audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}
//checking array - function
function checkArray(user) {
  let player = user;
  //checking what moves were done
  const include1X = movesArray.includes("1X", 0);
  const include2X = movesArray.includes("2X", 0);
  const include3X = movesArray.includes("3X", 0);
  const include4X = movesArray.includes("4X", 0);
  const include5X = movesArray.includes("5X", 0);
  const include6X = movesArray.includes("6X", 0);
  const include7X = movesArray.includes("7X", 0);
  const include8X = movesArray.includes("8X", 0);
  const include9X = movesArray.includes("9X", 0);
  const include1O = movesArray.includes("1O", 0);
  const include2O = movesArray.includes("2O", 0);
  const include3O = movesArray.includes("3O", 0);
  const include4O = movesArray.includes("4O", 0);
  const include5O = movesArray.includes("5O", 0);
  const include6O = movesArray.includes("6O", 0);
  const include7O = movesArray.includes("7O", 0);
  const include8O = movesArray.includes("8O", 0);
  const include9O = movesArray.includes("9O", 0);
  //   checking for wining move
  //-----------
  //x1
  if (include1X && include2X && include3X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y1").style.opacity = "1";
  } //x2
  else if (include4X && include5X && include6X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y2").style.opacity = "1";
  } //x3
  else if (include7X && include8X && include9X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y3").style.opacity = "1";
  } //y1
  else if (include1X && include4X && include7X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x1").style.opacity = "1";
  } //y2
  else if (include2X && include5X && include8X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x2").style.opacity = "1";
  } //y3
  else if (include3X && include6X && include9X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x3").style.opacity = "1";
  } //cross1
  else if (include1X && include5X && include9X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("cross1").style.opacity = "1";
  } //cross2
  else if (include3X && include5X && include7X) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("cross2").style.opacity = "1";
  }
  //-----------
  //x1
  else if (include1O && include2O && include3O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y1").style.opacity = "1";
  } //x2
  else if (include4O && include5O && include6O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y2").style.opacity = "1";
  } //x3
  else if (include7O && include8O && include9O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("y3").style.opacity = "1";
  } //y1
  else if (include1O && include4O && include7O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x1").style.opacity = "1";
  } //y2
  else if (include2O && include5O && include8O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x2").style.opacity = "1";
  } //y3
  else if (include3O && include6O && include9O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("x3").style.opacity = "1";
  } //cross1
  else if (include1O && include5O && include9O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("cross1").style.opacity = "1";
  } //cross2
  else if (include3O && include5O && include7O) {
    document.getElementById("winner").innerHTML = winner(user);
    document.getElementById("cross2").style.opacity = "1";
  }
  if (movesArray.length >= 9) {
    document.getElementById("winner").innerHTML = `Its a TIE!!! Try again !!!`;
  }
}
function winner(user) {
  let imgContainers = document.getElementsByClassName("imgContainer");

  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].style.pointerEvents = "none";
    imgContainers[i].style.cursor = "";
  }
  audio("./Sounds/win.mp3");

  return `Player "${user}" is a winner!!! CONGRATULATIONS!!!`;
}
function reloadPage() {
  setTimeout(function () {
    window.location.reload(true);
  }, 500);
}
