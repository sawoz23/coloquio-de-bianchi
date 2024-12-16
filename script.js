document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    const menuHeight = header.offsetHeight;
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > menuHeight) {
            // Scrolling down
            header.classList.add('hide-menu');
        } else {
            // Scrolling up
            header.classList.remove('hide-menu');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});