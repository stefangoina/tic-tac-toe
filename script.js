let cards = document.querySelectorAll(".card");
let startBtn = document.querySelector(".start");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let restart = document.querySelector(".reset");
// add error
startBtn.addEventListener("click", playGame);
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
      winningConditions();
    });
  });
  function reset() {
    cards.forEach((card) => {
      card.innerHTML = "";
      card.classList.remove("isClicked");
      startText.textContent = "Game Started! It's Player X's Turn!";
      counter = 0;
    });
  }

  function winningConditions() {
    let win = false;
    if (
      cards[0].textContent == cards[4].textContent &&
      cards[4].textContent == cards[8].textContent &&
      cards[0].textContent != ""
    ) {
      console.log("You win!");
    }
    if (
      cards[2].textContent == cards[4].textContent &&
      cards[4].textContent == cards[6].textContent &&
      cards[2].textContent != ""
    ) {
      console.log("You WIN2 !!");
    }

    if (
      cards[0].textContent == cards[1].textContent &&
      cards[1].textContent == cards[2].textContent &&
      cards[2].textContent != ""
    ) {
      console.log("You WIN (ROW1) !");
    }

    if (
      cards[3].textContent == cards[4].textContent &&
      cards[4].textContent == cards[5].textContent &&
      cards[3].textContent != ""
    ) {
      console.log("You WIN (ROW2) !");
    }
    if (
      cards[6].textContent == cards[7].textContent &&
      cards[7].textContent == cards[8].textContent &&
      cards[6].textContent != ""
    ) {
      console.log("You WIN (ROW3) !");
    }
    if (
      cards[0].textContent == cards[3].textContent &&
      cards[3].textContent == cards[6].textContent &&
      cards[0].textContent != ""
    ) {
      console.log("You WIN (COL3) !");
    }

    if (
      cards[1].textContent == cards[4].textContent &&
      cards[4].textContent == cards[7].textContent &&
      cards[1].textContent != ""
    ) {
      console.log("You WIN (COL2) !");
    }

    if (
      cards[2].textContent == cards[5].textContent &&
      cards[5].textContent == cards[8].textContent &&
      cards[2].textContent != ""
    ) {
      console.log("You WIN (COL3) !");
    }
  }

  restart.addEventListener("click", reset);
}

//TODO :
// add reset button (DONE)
// make the cards clickable only once (DONE)
// add the winning conditions (DONE)
// add modal with the winner and disable the ability to click anymore and reset all the fields (WIP)
