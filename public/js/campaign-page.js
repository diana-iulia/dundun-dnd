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