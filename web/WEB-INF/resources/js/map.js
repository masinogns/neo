// var sliderInputBox = document.querySelector('#myRange');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var opt = { minZoom: 9, maxZoom: 15 };

var latVal = 33.510634;
var lngVal = 126.491380;

function initMap() {

  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: latVal, lng: lngVal}
  });

  map.setOptions(opt);

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your location.');
            map.setCenter(pos);
        }, function() {
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

  slider.oninput = function() {
      output.innerHTML = this.value;
      var plusZoomSize = 10;
      map.setZoom(parseInt(this.value) + plusZoomSize);
    }

  var markers = setMarkers(map);

  var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

function setMarkers(map) {
    var markers = [];
    for(var i = 0; i < dataSet.length; i++){
        var latVal = parseFloat(dataSet[i].lat);
        var lngVal = parseFloat(dataSet[i].lng);
        markers[i] = marker = new google.maps.Marker({
            map: map,
            draggable: false,
            position : new google.maps.LatLng(latVal, lngVal),
            title : dataSet[i].name
        });
    }

    return markers;
}


initMap();


