(function() {
    document.querySelector('#mobilemenubtn').addEventListener('click', menuClickHandler);

    function menuClickHandler() {
        if (document.documentElement.classList.contains('mobilemenuactive')) {
            document.documentElement.classList.remove('mobilemenuactive');
            stopBodyScrolling(false);
        } else {
            document.documentElement.classList.add('mobilemenuactive');
            stopBodyScrolling(true);
        }
    }

    function stopBodyScrolling(bool) {
        if (bool) {
            document.body.addEventListener("touchmove", preventScroll, false);
        } else {
            document.body.removeEventListener("touchmove", preventScroll, false);
        }
    }

    var preventScroll = function(e) {
        e.preventDefault();
    };
})();
