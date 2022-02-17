console.log("test");

const dragon = document.querySelector('.dragon');
const egg = document.querySelector('.egg');


// dragon.addEventListener('click', () => {
//     egg.style.position = 'fixed';
//     egg.style.display = 'block';
// });

(function () {

    var parallax = document.querySelectorAll("body"),
        speed = 0.5;

    window.onscroll = function () {

        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };
})();

var ran50 = Math.floor(Math.random() * 51);

console.log(ran50);

const knight = document.querySelectorAll('.knight')

for (i=0; i<knight.length; i++) {
    knight[i].setAttribute('src', '../../npc-icons/' + Math.floor(Math.random() * 51) + '.png')
}



const npcCard = document.querySelectorAll('.card');
const dimmer = document.querySelector('.backgroundCover');


for (i=0; i<npcCard.length; i++) {
    npcCard[i].addEventListener('click', (event) => {
            var npcCardStatus = event.currentTarget.getAttribute('aria-enabled');
            if (npcCardStatus === "false") {
                console.log(event.currentTarget);
                event.currentTarget.setAttribute('aria-enabled', true);
                event.currentTarget.classList.add('cardSelected');
                dimmer.classList.add('Dimmer');
            } else {
                event.currentTarget.setAttribute('aria-enabled', false)
                event.currentTarget.classList.remove('cardSelected');
                dimmer.classList.remove('Dimmer');
            }
    });
}

dimmer.addEventListener('click', () => {
    for (i=0; i<npcCard.length; i++) {
        var npcCardStatus = npcCard[i].getAttribute('aria-enabled');

        if (npcCardStatus === "true") {
            npcCard[i].classList.remove('cardSelected');
            dimmer.classList.remove('Dimmer');
        }
    }
});