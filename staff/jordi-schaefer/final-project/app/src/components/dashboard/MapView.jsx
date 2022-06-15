import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../styles/Leaflet.sass'

function MapView(props) {   

    let centerPosition= { lat: 42.56990, lng: 1.93214 }
    let markerPosition= { lat: 42.56990, lng: 1.93214 }


    useEffect(() => {
        const length = props.points.length
        
        if (length > 1) {
            const first = [props.points[0].latitude, props.points[1].longitude]
            const last = [props.points[length-1].latitude, props.points[length-1].longitude]
            centerPosition = {lat: props.points[0].latitude, lng: props.points[1].longitude}
            markerPosition= centerPosition
        }
        else {
            centerPosition = {lat: props.points[0].latitude, lng: props.points[1].longitude}
            markerPosition= centerPosition
        }
        

    }, [])
    const zoom = 14

    return <MapContainer 
            style={{width: '100%', height: '100%'}} 
            center={centerPosition} 
            zoom={zoom} 
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
            >
        <TileLayer
        attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
  </MapContainer>
}

export default MapView