(function() {

    window.onload = function() {
        preloadImages();
	}

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

    function preventScroll(e) {
        e.preventDefault();
    };

    function preloadImages() {

        var images = [
            'https://maps.googleapis.com/maps/api/staticmap?center=57.698041,+11.970102&zoom=15&scale=2&size=600x600&maptype=roadmap&key=AIzaSyDxWGx-ci1aql2CBfuv1JgL7LkLrFECQhE&format=png&visual_refresh=true&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360&markers=scale:2%7Cicon:https://goo.gl/rRBofE?6666%26scale=2%7Cshadow:true%7Caschebergsgatan+17',
            'https://maps.googleapis.com/maps/api/staticmap?center=59.322985,+18.069892&zoom=15&scale=2&size=600x600&maptype=roadmap&key=AIzaSyDxWGx-ci1aql2CBfuv1JgL7LkLrFECQhE&format=png&visual_refresh=true&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360&markers=scale:2%7Cicon:https://goo.gl/rRBofE%7Cshadow:true%7Clilla+nygatan+20',
            'img/underbart-1.jpg',
            'img/underbart-2.jpg',
            'img/underbart-4.jpg',
            'img/underbart-31.jpg'
        ];

        images.forEach(function(src) {
            var image = new Image();
            image.src = src;
        });
    }
})();
