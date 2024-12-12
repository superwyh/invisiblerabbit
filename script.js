document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');
  const bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  const rgb = bgColor.match(/\d+/g);

  // Calculate brightness of the background color
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000);

  // If brightness is high, use dark text; otherwise, use light text
  if (brightness > 125) {
      content.style.color = 'black';
  } else {
      content.style.color = 'white';
  }

  // Add CRT noise effect
  function createNoise() {
      const noise = document.createElement('div');
      noise.classList.add('crt-noise');
      document.body.appendChild(noise);
  }

  createNoise();
});
