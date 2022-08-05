// global variables
let heads = 0;
let headsPercent = 0;
let tails = 0;
let tailsPercent = 0;
let total = heads + tails;
let startMessage = "Let's Get Flipping!";
let tailsMessage = "You Flipped Tails!";
let headsMessage = "You Flipped Heads!";

// DOM content failsafe
document.addEventListener("DOMContentLoaded", function () {
  // you flipped tails
  document.querySelector("#flip").addEventListener("click", function () {
    let randomChance = Math.floor(Math.random() * 2) + 1;
    if (randomChance > 1) {
      document.querySelector("#penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.querySelector("#message").textContent = `${tailsMessage}`;
      tails++;
      total++;
      tailsPercent = Math.round((tails / total) * 100);
      document.querySelector("#tails").textContent = tails;
      document.querySelector("#tails-percent").textContent = tailsPercent + "%";
      if (heads > 0) {
        headsPercent = Math.round((heads / total) * 100);
        document.querySelector("#heads-percent").textContent =
          headsPercent + "%";
      }
    } else {
      // you flipped heads
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = `${headsMessage}`;
      heads++;
      total++;
      headsPercent = Math.round((heads / total) * 100);
      document.querySelector("#heads").textContent = heads;
      document.querySelector("#heads-percent").textContent = headsPercent + "%";
      if (tails > 0) {
        tailsPercent = Math.round((tails / total) * 100);
        document.querySelector("#tails-percent").textContent =
          tailsPercent + "%";
      }
    }
  });
  // clear scoreboard and reset all values
  document.querySelector("#clear").addEventListener("click", function () {
    heads = 0;
    headsPercent = 0;
    tails = 0;
    tailsPercent = 0;
    total = heads + tails;
    document.querySelector("#tails").textContent = 0;
    document.querySelector("#tails-percent").textContent = 0 + "%";
    document.querySelector("#heads").textContent = 0;
    document.querySelector("#heads-percent").textContent = 0 + "%";
    document.querySelector("#message").textContent = `${startMessage}`;
    document.querySelector("#penny-image").src =
      "./assets/images/penny-heads.jpg";
  });
});
