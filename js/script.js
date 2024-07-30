"use strict";
function promptNumber() {
  let lastInput;
  for (let i = 0; i < 10; i++) {
    lastInput = prompt("Please enter a number more then 100");
    if (!lastInput?.trim() || isNaN(lastInput)) {
      alert("Your enter is cancelled");
      return;
    }
    lastInput = Number(lastInput);
    if (!isNaN(lastInput) && lastInput > 100) {
      alert("Your entered the number more then 100");
      return;
    }
  }
  console.log(`Maximum attempts reached. Last input was:, ${lastInput}`);
}

promptNumber();
