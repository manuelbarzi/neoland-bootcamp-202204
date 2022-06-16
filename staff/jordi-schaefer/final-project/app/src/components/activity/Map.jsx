import ChangeView from './ChangeView'
import '../../styles/List.sass'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function Map(props) {

    const newicon = new L.icon({
    iconUrl: require("./circle.png"),
    iconSize: [25, 25]
    });


   return   <MapContainer 
                style={{width: '100%', height: '100%'}} 
                center={props.position} 
                zoom={17} 
                zoomControl={false}
                /* scrollWheelZoom={false} */
                attributionControl={false}
                > 
                {props.center && <ChangeView position={props.position} /> }
                <TileLayer
                attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position} icon={newicon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> 

}

export default Map