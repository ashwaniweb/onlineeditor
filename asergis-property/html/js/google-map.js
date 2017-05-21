// google map section
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 35.9099, lng: 14.4498}
  });
  
  var map1 = new google.maps.Map(document.getElementById('mapTwo'), {
    zoom: 15,
    center: {lat: 35.9045, lng: 14.4797}
  });

  var map2 = new google.maps.Map(document.getElementById('mapThree'), {
    zoom: 15,
    center: {lat: 35.9045, lng: 14.4797}
  });

  var map3 = new google.maps.Map(document.getElementById('mapFour'), {
    zoom: 15,
    center: {lat: 35.9045, lng: 14.4797}
  });

  // modified to pass two variables, both map instances. 
  setMarkers(map, map1, map2, map3);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
  ['Property 4', 35.904684, 14.450561, 3],
  ['Property 3', 35.9065598, 14.4502898, 3],
  ['Property 2', 35.9099206, 14.4498855, 2],
  ['Property 1', 35.9159643, 14.4484053, 1]
];

// SECOND MAP LOCATIONS
var beaches2 = [
  ['Property 3', 35.913123, 14.475234, 3],
  ['Property 2', 35.9045331, 14.479791, 2],
  ['Property 1', 35.9085012, 14.4786089, 1]
];

// Third MAP LOCATIONS
var beaches3 = [
  ['Property 2', 35.905677, 14.481300, 2],
  ['Property 1', 35.904300, 14.474562, 1]
];

// Forth MAP LOCATIONS
var beaches4 = [
  ['Property 4', 35.904885, 14.483625, 4],
  ['Property 3', 35.907395, 14.479101, 3],
  ['Property 2', 35.905677, 14.481300, 2],
  ['Property 1', 35.904300, 14.474562, 1]
];

function setMarkers(map, map1, map2, map3) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'images/googlemap-icon.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  } 
  
  // second map markers
  for (var i = 0; i < beaches2.length; i++) { 
    var beach = beaches2[i];
    // markers for second map
    var marker1 = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map1,  // make sure to point to your second map
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }

  // third map markers
  for (var i = 0; i < beaches3.length; i++) { 
    var beach = beaches3[i];
    // markers for second map
    var marker2 = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map2,  // make sure to point to your second map
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }

  // forth map markers
  for (var i = 0; i < beaches4.length; i++) { 
    var beach = beaches4[i];
    // markers for second map
    var marker3 = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map3,  // make sure to point to your second map
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
} 

// tab section reload
$('.manage-section a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  initMap();
});