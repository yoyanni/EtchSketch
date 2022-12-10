// Selecting the canvas using querySlector in contrast to getElementsByClassName (which brings back HTMLCollection)
// const canvas = document.querySelector(".canvas");
// Using getElementById because it brings back a HTMLElement not a normal Element (which does not have the style attribute)
const canvas = document.getElementById("canvas");

// Select input for the number lines for the canvas
// const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

// EventListener for the number input
// input.addEventListener("change", changeDivs);
btn.addEventListener("click", changeDivs);

function changeDivs(e) {
  if (canvas.innerHTML != "") {
    canvas.innerHTML = "";
    console.log("Cleared");
  }
  // createDivs(e.target.valueAsNumber);
  createDivs(myPrompt());
}

function myPrompt(str = "How many boxes per side would you like?") {
  let number = prompt(str);
  return number > 100 ? myPrompt("Wrong! Please enter between 2-100.") : number;
}

// When this first runs it will have 16 divs
function createDivs(num = 16) {
  numSquared = num * num;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  for (let i = 0; i < numSquared; i++) {
    let div = document.createElement("div");
    div.className = "pixel";
    div.style.width = `${width / num}px`;
    div.style.height = `${height / num}px`;
    canvas.appendChild(div);
  }
  eventL();
}

// Select all pixels (live HTMLCollection)
const pixels = document.getElementsByClassName("pixel");

// Selects specific pixel and appends the "active" class name
function eventL() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", (e) => {
      if (!pixels[i].classList.contains("active")) {
        e.target.className += " active";
      }
    });
  }
}

createDivs();
