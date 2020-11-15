function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function modalWindow(triggerSelector, modalSelector, modalTimerId) {
    // Модальные окна ; 

    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);



    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });



    modal.addEventListener('click', function (evt) {
        if (evt.target === modal || evt.target.getAttribute(`data-close`) == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        // window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
        // прокрученная часть + то-что сейчас видимо в окне без прокрутки >= общая длинна страницы
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modalWindow;
export { closeModal };
export { openModal };