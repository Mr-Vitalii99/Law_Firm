//* Пробіли
(() => {
    const form = document.querySelector('.form-base');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('input[name="user-name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const details = form.querySelector('textarea[name="details"]').value.trim();

        form.reset();
    });
})();

