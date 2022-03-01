const sword = document.querySelector('.sword-activate');
const rock = document.querySelector('.rock');

const proceed = document.querySelector('.proceed');

const SWORD = document.querySelector('.SWORD');

const introPage = document.querySelector('.introAnimation');


rock.addEventListener('click', () => {
    var swordStatus = sword.getAttribute('aria-enabled');
    if (swordStatus === "false") {
        sword.setAttribute('aria-enabled', true);
        sword.classList.remove('sword');
        sword.classList.add('SWORD');
        proceed.setAttribute('data-visible', true);
        // proceed.style.display = 'flex';
    }
});

proceed.addEventListener('click', () => {
    introPage.style.animation = '';
    introPage.style.animation = 'introBegone 12s';
    startTimer();
});

var timeLeft = 8;

function startTimer() {
    var Timer = setInterval(function() {
        if(timeLeft < 0){
            clearInterval(Timer);
            clearIntro();
        } else {
                timeLeft -= 1;
        } 
    }, 1000);
}

function clearIntro() {
    introPage.style.display = 'none';
}