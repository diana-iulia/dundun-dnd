const sword = document.querySelector('.sword-activate');
const rock = document.querySelector('.rock');

const SWORD = document.querySelector('.SWORD');

const introPage = document.querySelector('.introAnimation');


rock.addEventListener('click', () => {
    var swordStatus = sword.getAttribute('aria-enabled');
    if (swordStatus === "false") {
        sword.setAttribute('aria-enabled', true);
        sword.classList.remove('sword');
        sword.classList.add('SWORD');
    }
});