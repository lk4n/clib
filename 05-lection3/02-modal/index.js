(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    // document.body.overflow = 'hidden';       --incorrect
    document.body.style.overflow = 'hidden';
    //aria magic
    document.body.setAttribute('aria-hidden', 'true');
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    // document.body.overflow = 'initial';      --incorrect
    document.body.style.overflow = 'initial';
    //aria magic
    document.body.removeAttribute('aria-hidden');
  });
})();
