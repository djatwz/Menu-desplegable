let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
  let isOpen = false;

  listElement.addEventListener('click', () => {
    listElement.classList.toggle('arrow');

    let height = 0;
    let menu = listElement.nextElementSibling;

    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
      isOpen = true;
    } else {
      isOpen = false;
    }

    menu.style.height = `${height}px`;
  });

  document.addEventListener('click', (event) => {
    if (isOpen && !listElement.contains(event.target)) {
      listElement.classList.remove('arrow');
      listElement.nextElementSibling.style.height = '0px';
      isOpen = false;
    }
  });
});
