let timeline = anime.timeline ({
  easing: 'linear'
});

anime({
  targets: '.front-1',
  easing: 'linear',
  duration: 30000,
  rotate: '1turn',
  direction: 'alternate',
  loop: true
})

 anime({
  targets: '.front-2',
  easing: 'linear',
  duration: 80000,
  translateX: [0, -200],
  translateY: [0, 500],
  rotate: '-360',
  direction: 'alternate',
  loop: true
})

anime({
  targets: '.front-3',
  easing: 'linear',
  duration: 100000,
  translateX: [0, 200],
  rotate: '-360',
  direction: 'alternate',
  loop: true
})

anime({
  targets: '.front-4',
  easing: 'linear',
  duration: 100000,
  translateX: [0, 200],
  rotate: '360',
  direction: 'alternate',
  loop: true
})

const float = () => {
  anime({
    targets: '.starship',
    easing: 'easeInOutSine',
    duration: 5000,
    translateY: [0, 10],
    rotate: '2',
    direction: 'alternate',
    loop: true
  });
}

timeline
.add({
  targets: '.overlay',
  opacity: [1, 0],
  duration: 1000,
  complete: function(anim) {
    document.querySelector('.overlay').remove();
  }
})
.add({
  targets: '.starship',
  translateY: [-500, 0],
  translateX: [800, 0],
  scale: [0, 1],
  easing: 'easeOutQuint',
  delay: 1000,
  duration: 2000,
})
.add({
  targets: '.flame',
  scale: .5,
  opacity: [1, 0],
  easing: 'easeInElastic(3, 0.3)',
  duration: 800
}, '-=1900')

timeline.finished.then(float);

document.addEventListener("DOMContentLoaded", function () {
  const layers = document.querySelectorAll('.parallax');

  function parallax(e) {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const xOffset = (x * speed).toFixed(2);
      const yOffset = (y * speed).toFixed(2);

      layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  }

  document.addEventListener('mousemove', parallax);

  // Инициализация начального положения элементов
  function initializePositions() {
    layers.forEach(layer => {
      layer.style.transform = 'translate(0px, 0px)';
    });
  }

  initializePositions();
});
