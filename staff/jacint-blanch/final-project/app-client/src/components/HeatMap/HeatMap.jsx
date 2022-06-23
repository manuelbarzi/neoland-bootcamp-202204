import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import useGeolocation from 'react-hook-geolocation'
import Header from '../Header/Index.jsx'
import retrieveIncidenceNearMe from "../../logic/retrieveIncidenceNearMe"
import './HeatMap.css'


const HeatMap = () => {
const [incedents, setIncidents] = useState([])
const geolocation = useGeolocation()
console.log(geolocation.latitude)
console.log(geolocation.longitude)

  useEffect(() => {
    if(geolocation.latitude && geolocation.longitude){
      retrieveIncidenceNearMe(geolocation.latitude, geolocation.longitude)
      .then(function(result) {
        setIncidents(result)
      })
    }

  }, [geolocation])

  console.log(incedents)

if(!geolocation.latitude || !geolocation.longitude){
  return null
}

var icon = L.icon({
  iconUrl: 'https://openclipart.org/image/800px/334004',
  iconSize: [35, 35],
})

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
              Yo
            </Popup>
          </Marker>
          {incedents.map(function(incedent){
            return <Marker position={[incedent.latitude, incedent.longitude]} icon={icon}>
            <Popup>
              {incedent.description} 
              <button>click</button>
            </Popup>
          </Marker>
          })}
        </MapContainer>
      </div>



    );
}
export default HeatMap
