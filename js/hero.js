(() => {
    if (window.matchMedia("(min-width: 1170px)").matches) {
        let bg = document.querySelector('.hero__background');
        let heroImage = document.querySelector('.hero__image');

        document.onmousemove = (e) => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            bg.style.transform = "translate(-" + x * 100 + "px, -" + y * 50 + "px)";
            heroImage.style.transform = "translate(-" + x * 100 + "px, -" + y * 40 + "px)";
        };
    }
})();