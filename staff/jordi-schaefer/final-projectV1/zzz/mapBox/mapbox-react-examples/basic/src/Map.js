import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
  });
  // Initialize map when component mounts
  useEffect(() => {

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
      })
    );

      



      // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  const updateSource = setInterval(async () => {
    const geojson = await getLocation(updateSource);
    map.getSource('iss').setData(geojson);
  }, 2000);
     
    async function getLocation(updateSource) {
    // Make a GET request to the API and return the location of the ISS.
    try {
    const response = await navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude
      const lng =position.coords.longitude
      return {latitude: lat, longitude: lng} })

    const { latitude, longitude } = await response.json();
    // Fly the map to the location.
    map.flyTo({
      center: [longitude, latitude],
      speed: 0.5
    });
    // Return the location of the ISS as GeoJSON.
    return {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [longitude, latitude]
    }
    }
    ]
    };
    } catch (err) {
    // If the updateSource interval is defined, clear the interval to stop updating the source.
    if (updateSource) clearInterval(updateSource);
    throw new Error(err);
    }
    }


  const handleStartClick = () => {    
  }



  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <button className="Button__start" onClick={handleStartClick}>Start</button> 
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;
