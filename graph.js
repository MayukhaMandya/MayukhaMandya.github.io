// Pulse the stroke to look alive
const brainPath = document.querySelector('#brainSVG path');
let grow = true;

function animateBrain() {
  const current = parseFloat(brainPath.getAttribute('opacity'));
  let next = grow ? current + 0.005 : current - 0.005;
  if (next >= 0.8) grow = false;
  if (next <= 0.4) grow = true;
  brainPath.setAttribute('opacity', next.toFixed(3));
  requestAnimationFrame(animateBrain);
}
animateBrain();
