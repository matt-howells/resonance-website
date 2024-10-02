document.addEventListener('mousemove', function (e) {
    const logo = document.querySelector('.parallax-logo');
    const speed = 50;

    const x = (window.innerWidth / 2 - e.pageX) / speed;
    const y = (window.innerHeight / 2 - e.pageY) / speed;

    logo.style.transform = `translate(${x}px, ${y}px)`;
});