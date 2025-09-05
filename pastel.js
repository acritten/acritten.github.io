// pastel.js

function randomPastel() {
  const hue = Math.floor(Math.random() * 360);   // pick any hue
  const saturation = 70 + Math.random() * 20;    // 70–90% saturation
  const lightness = 75 + Math.random() * 10;     // 75–85% lightness
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Change background once on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = randomPastel();
});

// (Optional) keep changing every 2 seconds
// setInterval(() => {
//   document.body.style.backgroundColor = randomPastel();
// }, 2000);
