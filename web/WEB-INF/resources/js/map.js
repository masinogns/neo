// var sliderInputBox = document.querySelector('#myRange');

var slider = document.getElementById("myRange");
var plusBt = document.querySelector(".btn-right");
var minusBt = document.querySelector(".btn-left");

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var opt = {minZoom: 9};

var latVal = 33.510634;
var lngVal = 126.491380;
var pos;

function initMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: latVal, lng: lngVal}
    });

    map.setOptions(opt);

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Your location.');
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }

    slider.oninput = function sliderEvent () {
        map.setCenter(pos);
        var plusZoomSize = 10;
        map.setZoom(parseInt(slider.value) + plusZoomSize);
    };

    // minusBt.addEventListener('click',function (e) {
    //     var val = parseInt(slider.value);
    //     console.log(val);
    //     slider.value = ""+ (val-1) +"";
    //     console.log(slider.value);
    //     slider.oninput();
    // },false);

    var markers = setMarkers(map, infoWindow);
    // console.log(markers);
    //
    // var lat = markers[0].getPosition().lat();
    // var lng = markers[0].getPosition().lng();
    // var title = markers[0].title;
    //
    // console.log("lat : " + lat + "lng : " + lng);
    // console.log(title);

    directionsDisplay.setMap(map);
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

function setMarkers(map, infoWindow) {
    var markers = [];
    for (var i = 0; i < dataSet.length; i++) {
        var latVal = parseFloat(dataSet[i].lat);
        var lngVal = parseFloat(dataSet[i].lng);

        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            position: new google.maps.LatLng(latVal, lngVal),
            title: dataSet[i].name
        });

        markers[i] = marker;

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {

                infoWindow.setContent("<div>"+dataSet[i].name+"</div>" +
                                        "<div>"+ dataSet[i].phoneNum +
                                        "</div>" + "<div>" + dataSet[i].address + "</div>" +
                                        "<img src='" + dataSet[i].photoUrl + "'>" +
                                        "<button onclick='findLocation(event)' data-lat='" + dataSet[i].lat + "' data-lng='"+ dataSet[i].lng +"' >길찾기</button>");
                infoWindow.open(map, marker);
            }
        })(marker, i,infoWindow));

    }

    return markers;
}

google.maps.event.addDomListener(window, 'load', initMap);

function calcRoute(targetPos) {

    var start = pos.lat+ ', ' + pos.lng;
    console.log(start);
    console.log(targetPos);

    var request = {
        origin: start,
        destination: targetPos,
        travelMode: google.maps.TravelMode["TRANSIT"]
    };
    directionsService.route(request, function(result, status) {
        console.log(status);

        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}

function findLocation(e) {
    console.log("run");

    var targetPos = e.target.dataset.lat + ', ' + e.target.dataset.lng;

    calcRoute(targetPos);
}


initMap();


