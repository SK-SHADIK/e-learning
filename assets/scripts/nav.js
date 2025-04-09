function toggleNavbar(el) {
    const container = document.querySelector('.nav-section-container');
    container.classList.toggle('show');

    el.classList.toggle('active');
    if (el.classList.contains('active')) {
        el.children[0].style.transform = 'rotate(45deg) translateY(8px)';
        el.children[1].style.opacity = '0';
        el.children[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        el.children[0].style.transform = '';
        el.children[1].style.opacity = '1';
        el.children[2].style.transform = '';
    }
}