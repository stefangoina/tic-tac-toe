let cards = document.querySelectorAll(".card");
let startBtn = document.querySelector(".start");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
// add error
startBtn.addEventListener("click", playGame());
function playGame() {
  let startText = document.querySelector(".start-text");
  startText.textContent = "Game Started! It's Player X's Turn!";
  let counter = 0; // x will be even and o will be odd
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (counter % 2 === 0) {
        let div = document.createElement("div");
        card.appendChild(div);
        div.textContent = "X";
        div.classList.add("shown");
        startText.textContent = "Player O's Turn";
      } else {
        let div = document.createElement("div"); // Create a new div for "O"
        card.appendChild(div);
        div.textContent = "O";
        div.classList.add("shown");
        startText.textContent = "Player X's Turn";
      }
      counter++;
    });
  });
}

//TODO :
// add reset button
// make the cards clickable only once
// add the winning conditions
