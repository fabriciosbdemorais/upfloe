AOS.init({
    duration: 800,
});

window.addEventListener('scroll', function(event) {
    const scroll = this.scrollY;
    const classList = document.getElementById('nav').classList;
    scroll > 80 ? classList.add('scrolled') : classList.remove('scrolled');
});