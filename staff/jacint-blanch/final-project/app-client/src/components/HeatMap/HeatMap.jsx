import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useGeolocation from 'react-hook-geolocation'
import Header from '../Header/Index.jsx'
import './HeatMap.css'


const HeatMap = () => {

const geolocation = useGeolocation()
console.log(geolocation.latitude)
console.log(geolocation.longitude)
if(!geolocation.latitude || !geolocation.longitude){
  return null
}
    return (
      <div>
        <Header />
        <MapContainer
          center={[geolocation.latitude, geolocation.longitude]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[geolocation.latitude, geolocation.longitude]}>
            <Popup>
              Current Location
            </Popup>
          </Marker>
        </MapContainer>
      </div>



    );
}
export default HeatMap
