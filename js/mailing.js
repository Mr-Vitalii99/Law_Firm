//* Кнопка послуги в футері
(() => {
    const footerForm = document.querySelector('.mailing');


    console.log(footerForm);

    footerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        footerForm.reset();
    });
})();