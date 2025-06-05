document.addEventListener('mousemove', function (e) {
    const logo = document.querySelector('.parallax-logo');
    const speed = 15;

    const x = (window.innerWidth / 10 - e.pageX) / speed;
    const y = (window.innerHeight / 10 - e.pageY) / speed;

    logo.style.transform = `translate(${x}px, ${y}px)`;
});