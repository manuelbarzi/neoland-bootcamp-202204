import { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/Leaflet.sass'

function MapView(props) {   
    const currentLocation= { lat: 42.56990, lng: 1.93214 }
     
    const zoom = 14

    return <MapContainer 
            style={{width: '100%', height: '100%'}} 
            center={currentLocation} 
            zoom={zoom} 
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
            >
        <TileLayer
        attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={currentLocation}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
  </MapContainer>
}

export default MapView