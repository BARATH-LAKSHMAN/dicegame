document.querySelector("button").addEventListener("click", rollDice);

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var imageFile = "images/dice" + randomNumber1 + ".png";

  document.querySelector("img").setAttribute("src", imageFile);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var imageFile = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", imageFile);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "🏳️It's a Tie!🏳️";
  }
}
