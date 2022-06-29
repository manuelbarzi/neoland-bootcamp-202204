import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import useGeolocation from 'react-hook-geolocation'
import retrieveIncidenceNearMe from "../../logic/retrieveIncidenceNearMe"
import createComment from "../../logic/createComment"
import Navbar from '../Landing/Navbar';
import Incidence  from '../Incidence/Incidence'


import './HeatMap.css'

function getToken() {
  var token = sessionStorage.getItem('token')
  return token
}

const HeatMap = () => {
  const [incidents, setIncidents] = useState([])
  const [chat, setChat] = useState('')

  const geolocation = useGeolocation()

    const navigate = useNavigate() 


  useEffect(() => {
    if(geolocation.latitude && geolocation.longitude){
      if (!getToken()) {
        return navigate('/login')
      }
      retrieveIncidenceNearMe(geolocation.latitude, geolocation.longitude)
      .then(function(result) {
        setIncidents(result)
      })
    }

    let refresh = setInterval(() => {
      if(geolocation.latitude && geolocation.longitude){
      retrieveIncidenceNearMe(geolocation.latitude, geolocation.longitude)
      .then(function(result) {
        setIncidents(result)
      })
    }
    }, 2000);

    return () => {
      clearInterval(refresh);
    };

  }, [geolocation])


  const handleOnChangeChat = ({target: {value}}) => {
    setChat(value)
  }

  const sendComment = (id) => {
    createComment(chat, id)
    .then(function(result) {
      retrieveIncidenceNearMe(geolocation.latitude, geolocation.longitude)
        .then(function(result) {
          setIncidents(result)
          setChat('')
        })
    })
  }

  var icon = L.icon({
    iconUrl: 'https://openclipart.org/image/800px/334004',
    iconSize: [35, 35],
  })

  console.log(geolocation, 888)
  if(!geolocation.latitude || !geolocation.longitude){
    return null
  }
    return (
      <div className="heatMap">
        <Incidence  geolocation={geolocation} />
        <Navbar />
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
                  <h1>Yo</h1>
            </Popup>
          </Marker>
          {incidents.map(function(incident){
            return <Marker position={[incident.latitude, incident.longitude]} icon={icon}>
            <Popup>
              <div className='chat'>
                <h3  className='chat__title'>{incident.description}</h3>
                  {incident.comments && <div className='chat__content'>
                  {incident.comments.map(function(comment) {
                    return <div>
                    <p>{comment.user && <span>{comment.user.username}:</span>}  {comment.message}</p>
                  </div>
                  })}
                </div>}
                <div className='chat__send'>
                  <input className='chat__input' type="text" onChange={handleOnChangeChat} value={chat} placeholder="Enviar mensaje"/>
                  <button className='chat__button' onClick={() => sendComment(incident._id)}>enviar</button>
                </div>
              </div>
            </Popup>
          </Marker>
          })}
        </MapContainer>
      </div>



    );
}
export default HeatMap
