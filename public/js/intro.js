const sword = document.querySelector('.sword-activate');
const rock = document.querySelector('.rock');


rock.addEventListener('click', () => {
    const swordStatus = sword.getAttribute('aria-enabled');
    if (swordStatus === "false") {
        sword.setAttribute('aria-enabled', true);
        sword.classList.remove('sword');
        sword.classList.add('SWORD');
    }
});