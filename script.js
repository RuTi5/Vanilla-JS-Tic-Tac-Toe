let activePlayer = 1;

document.getElementById("box1").addEventListener("click", function () {
  if (
    document.getElementById("box1").classList.contains("x") ||
    document.getElementById("box1").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box1").classList.add("x");
      document.getElementById("imgbox1").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box1").classList.add("o");
      document.getElementById("imgbox1").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box2").addEventListener("click", function () {
  if (
    document.getElementById("box2").classList.contains("x") ||
    document.getElementById("box2").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box2").classList.add("x");
      document.getElementById("imgbox2").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box2").classList.add("o");
      document.getElementById("imgbox2").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box3").addEventListener("click", function () {
  if (
    document.getElementById("box3").classList.contains("x") ||
    document.getElementById("box3").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box3").classList.add("x");
      document.getElementById("imgbox3").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box3").classList.add("o");
      document.getElementById("imgbox3").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box4").addEventListener("click", function () {
  if (
    document.getElementById("box4").classList.contains("x") ||
    document.getElementById("box4").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box4").classList.add("x");
      document.getElementById("imgbox4").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box4").classList.add("o");
      document.getElementById("imgbox4").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box5").addEventListener("click", function () {
  if (
    document.getElementById("box5").classList.contains("x") ||
    document.getElementById("box5").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box5").classList.add("x");
      document.getElementById("imgbox5").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box5").classList.add("o");
      document.getElementById("imgbox5").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box6").addEventListener("click", function () {
  if (
    document.getElementById("box6").classList.contains("x") ||
    document.getElementById("box6").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box6").classList.add("x");
      document.getElementById("imgbox6").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box6").classList.add("o");
      document.getElementById("imgbox6").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box7").addEventListener("click", function () {
  if (
    document.getElementById("box7").classList.contains("x") ||
    document.getElementById("box7").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box7").classList.add("x");
      document.getElementById("imgbox7").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box7").classList.add("o");
      document.getElementById("imgbox7").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box8").addEventListener("click", function () {
  if (
    document.getElementById("box8").classList.contains("x") ||
    document.getElementById("box8").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box8").classList.add("x");
      document.getElementById("imgbox8").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box8").classList.add("o");
      document.getElementById("imgbox8").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }
  checkWinner();
});

document.getElementById("box9").addEventListener("click", function () {
  if (
    document.getElementById("box9").classList.contains("x") ||
    document.getElementById("box9").classList.contains("o")
  ) {
  } else {
    if (activePlayer == 1) {
      document.getElementById("box9").classList.add("x");
      document.getElementById("imgbox9").src = "/tictactoeX.png";
      activePlayer = 2;
    } else {
      document.getElementById("box9").classList.add("o");
      document.getElementById("imgbox9").src = "/tictactoeO.png";
      activePlayer = 1;
    }
  }

  checkWinner();
});

//check if player won
// row 1 win player 1

function checkWinner() {
  if (
    document.getElementById("box1").classList.contains("x") &&
    document.getElementById("box2").classList.contains("x") &&
    document.getElementById("box3").classList.contains("x")
  ) {
    document.getElementById("blurr").style.display = "block";
  } else {
  }
}

checkWinner();
