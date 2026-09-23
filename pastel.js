// pastel.js

// STATIC COLOUR CHANGING 10 SECONDS
/*function randomPastel() {
  const hue = Math.floor(Math.random() * 360);   // pick any hue
  const saturation = 70 + Math.random() * 20;    // 70–90% saturation
  const lightness = 75 + Math.random() * 10;     // 75–85% lightness
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Change background once on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = randomPastel();
});

// (Optional) keep changing every 10 seconds
 setInterval(() => {
   document.body.style.backgroundColor = randomPastel();
 }, 10000); */


// DYNAMIC CHANGES BUT ALWAYS STARTS YELLOW
function randomPastel() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 20; // 70–90%
  const lightness = 75 + Math.random() * 10;  // 75–85%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Smoothly transition background colour changes
  document.body.style.transition = "background-color 10s linear";

  // Initial colour
  document.body.style.backgroundColor = randomPastel();

  // Pick a new target colour every 10 seconds
  setInterval(() => {
    document.body.style.backgroundColor = randomPastel();
  }, 100);
});

// DYNAMIC CHANGE MK2
/*function randomPastel() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 20;
  const lightness = 75 + Math.random() * 10;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.transition = "background-color 10s linear";

  // Start on a random colour
  document.body.style.backgroundColor = randomPastel();

  // Force browser to render the initial colour
  requestAnimationFrame(() => {
    // Begin first transition immediately
    document.body.style.backgroundColor = randomPastel();
  });

  // Continue transitioning forever
  setInterval(() => {
    document.body.style.backgroundColor = randomPastel();
  }, 10000);
}); */