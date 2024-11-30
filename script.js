let cards = document.querySelectorAll(".card");
let startBtn = document.querySelector(".start");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let restart = document.querySelector(".reset");
// add error
startBtn.addEventListener("click", playGame());
function playGame() {
  let startText = document.querySelector(".start-text");
  startText.textContent = "Game Started! It's Player X's Turn!";
  let counter = 0; // x will be even and o will be odd
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (counter % 2 === 0 && !card.classList.contains("isClicked")) {
        card.classList.add("isClicked");
        let div = document.createElement("div");
        card.appendChild(div);
        div.textContent = "X";
        div.classList.add("shown");
        startText.textContent = "Player O's Turn";
      }
      if (counter % 2 !== 0 && !card.classList.contains("isClicked")) {
        card.classList.add("isClicked");
        let div = document.createElement("div"); // Create a new div for "O"
        card.appendChild(div);
        div.textContent = "O";
        div.classList.add("shown");
        startText.textContent = "Player X's Turn";
      }
      counter++;
    });
  });
  function reset() {
    cards.forEach((card) => {
      card.innerHTML = "";
      card.classList.remove("isClicked");
    });
  }

  restart.addEventListener("click", reset);
}

//TODO :
// add reset button
// make the cards clickable only once (DONE)
// add the winning conditions
