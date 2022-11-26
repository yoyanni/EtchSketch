// Selecting the canvas using querySlector in contrast to getElementsByClassName (which brings back HTMLCollection)
const canvas = document.querySelector(".canvas");

// Loops 16 times to create the divs for the canvas
for (let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.className = "pixel";
  canvas.appendChild(div);
}
