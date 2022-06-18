import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../../styles/Leaflet.sass'
import calculateDistanceBetweenTwoPoints from '../../logic/calculateDistanceBetweenTwoPoints'

function MapView({points}) {   

    let centerPosition= { lat: 42.56990, lng: 1.93214 }
    let markerPosition= { lat: 42.56990, lng: 1.93214 }
    let first, last
    let dis

    const greenIcon = new L.icon({ iconUrl: require('../../icons/2x-green.png'), iconSize: [25, 41], iconAnchor: [12, 41] });
    const redIcon = new L.icon({ iconUrl: require('../../icons/2x-red.png'), iconSize: [25, 41], iconAnchor: [12, 41] });
    const blueIcon = new L.icon({ iconUrl: require('../../icons/blue.png'), iconSize: [20, 32], iconAnchor: [10, 32] });

 
    const length = points.length
    
    if (length > 1) { // calculate the midle point between the first and last point
        first = [points[0].latitude, points[1].longitude]
        last = [points[length-1].latitude, points[length-1].longitude]

        let n=0
        points.map( elem => n += elem.latitude)
        const lat = n/length
        n=0
        points.map( elem => n += elem.longitude)
        const lng = n/length

        centerPosition = {lat: lat, lng: lng}
        markerPosition = first

        dis = calculateDistanceBetweenTwoPoints(first, last)/1000
    }
    else {
        centerPosition = {lat: points[0].latitude, lng: points[0].longitude}
        markerPosition = centerPosition
    }
    



    return <MapContainer 
            style={{width: '100%', height: '100%'}} 
            center={centerPosition} 
            zoom={ (dis > 7)? 11: (dis > 4.5)? 12: (dis > 3)? 13: 14 } 
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
            >
        <TileLayer
        attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        <Marker position={markerPosition}  icon={greenIcon}>
            <Popup> </Popup>
        </Marker>

        { points.slice(1, -1).map(point => {     // le quito el primer y ultimo elemento
            return (
                <Marker position={[point.latitude, point.longitude]} icon={blueIcon} key={point._id}>
                    <Popup> </Popup>
                </Marker> )
        })}

        {(length > 1)?     // si hay mas de uno pinto el ultimo
            (<Marker position={last} icon={redIcon}>
                <Popup> </Popup>
            </Marker> ) : <></>
        }



  </MapContainer>
}

export default MapView