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

const oldBook = document.querySelectorAll('.oldBook');

for (i=0; i<oldBook.length; i++) {
    oldBook[i].addEventListener('mouseover', (event) => {
        event.currentTarget.style.zIndex = "1000";
    });
    oldBook[i].addEventListener('mouseout', (event) => {
        event.currentTarget.style.zIndex = "999";
    });
};

const nextArrow = document.querySelector('.nextPage');
const campaign = document.querySelector('.campaign');
const bookDesc = document.querySelector('.bookDesc');
const bookDescHeader = document.querySelector('.bookDescHeader');
const userBookDesc = document.querySelector('.userBookDesc');

nextArrow.addEventListener('click', () => {
    pageStatus = nextArrow.getAttribute('data-visible');
    if (pageStatus === "false") {
        nextArrow.setAttribute('data-visible', true);
        campaign.setAttribute('data-visible', true);
        bookDesc.setAttribute('data-visible', true);
        bookDescHeader.setAttribute('data-visible', true);
        userBookDesc.setAttribute('data-visible', true);
    } else {
        nextArrow.setAttribute('data-visible', false);
        campaign.setAttribute('data-visible', false);
        bookDesc.setAttribute('data-visible', false);
        bookDescHeader.setAttribute('data-visible', false);
        userBookDesc.setAttribute('data-visible', false);
    }
});