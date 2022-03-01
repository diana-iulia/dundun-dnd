const alignOverlay = document.querySelector('.alignOverlay');
const alignIcon = document.querySelectorAll('.alignIcon');
const selectedAlign = document.querySelector('.selectedAlignment');
const emptyAlign = document.querySelector('.userNPCAlign');
const alignWord = document.querySelector('.alignWord');

for (i=0; i<alignIcon.length; i++) {
    alignIcon[i].addEventListener('click', (event) => {
        var src = event.currentTarget.getAttribute('src');
        var alt = event.currentTarget.getAttribute('alt');
        console.log(event.currentTarget)
        selectedAlign.setAttribute('aria-enabled', true);
        emptyAlign.setAttribute('data-visible', false);
        selectedAlign.setAttribute('src', src);
        alignOverlay.setAttribute('aria-enabled', false)
        alignWord.textContent = alt;
    })
};

selectedAlign.addEventListener('click', () => {
    alignOverlay.setAttribute('aria-enabled', true);
});

emptyAlign.addEventListener('click', () => {
    alignOverlay.setAttribute('aria-enabled', true);
});



const emptyIcon = document.querySelector('.userNPCIcon');
const selectedCharacter = document.querySelector('.selectedCharacter');
const npcIconOverlay = document.querySelector('.npcIconOverlay');
const characterIcon = document.querySelectorAll('.characterIcon');

for (i=0; i<characterIcon.length; i++) {
    characterIcon[i].addEventListener('click', (event) => {
        var src = event.currentTarget.getAttribute('src');
        selectedCharacter.setAttribute('src', src);
        selectedCharacter.setAttribute('aria-enabled', true);
        npcIconOverlay.setAttribute('aria-enabled', false);
        emptyIcon.setAttribute('data-visible', false);
    });
};

emptyIcon.addEventListener('click', () => {
    npcIconOverlay.setAttribute('aria-enabled', true);
});

selectedCharacter.addEventListener('click', () => {
    npcIconOverlay.setAttribute('aria-enabled', true);
});

const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    var menuStatus = menu.getAttribute('data-visible');
    if (menuStatus === "false") {
        menu.setAttribute('data-visible', true);
    } else {
        menu.setAttribute('data-visible', false);
    }
});