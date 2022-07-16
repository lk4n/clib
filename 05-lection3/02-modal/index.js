(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');
  // aria magic
  const main = document.querySelector('.main');
  const title = document.querySelector('.modal__title');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    // document.body.overflow = 'hidden';       --incorrect
    document.body.style.overflow = 'hidden';
    // aria magic
    main.setAttribute('aria-hidden', 'true');
    title.focus();
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    // document.body.overflow = 'initial';      --incorrect
    document.body.style.overflow = 'initial';
    // aria magic
    main.removeAttribute('aria-hidden');
  });
})();
