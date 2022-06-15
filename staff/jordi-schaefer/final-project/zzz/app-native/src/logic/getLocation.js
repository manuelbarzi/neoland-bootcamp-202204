
function getLocation() {
    const result = navigator.geolocation.getCurrentPosition(success, error, options)
    
}


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('altitude: ' + crd.altitude)
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    console.log('Timestamp : ' + new Date(pos.timestamp));
    console.log('Date now : ' + new Date(Date.now()));
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);