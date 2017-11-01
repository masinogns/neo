var map;
// var sliderInputBox = document.querySelector('#myRange');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var opt = { minZoom: 9, maxZoom: 15 };

function initMap() {
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 33.2920, lng: 126.2953}
  });

  map.setOptions(opt);

  slider.oninput = function() {
      output.innerHTML = this.value;
      var plusZoomSize = 10;
      map.setZoom(parseInt(this.value) + plusZoomSize);
    }

  // function updateZoom(){
  //   var plusZoomSize = 10;
  //   map.setZoom(parseInt(sliderInputBox.value) + plusZoomSize);
  //   console.log(2);
  // }
}
