function initMap() {
  var uferStudios = {lat: 52.552339, lng: 13.375280};
  var arTarget = {lat: 52.551619, lng: 13.373594};
    
 

  var map = new google.maps.Map(document.getElementById('map'), {
    center: uferStudios,
    scrollwheel: false,
    maxZoom: 20,
    minZoom: 15,
    zoom: 15
    
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
      destination: arTarget,
      origin: uferStudios,
      travelMode: google.maps.TravelMode.WALKING,
      
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}