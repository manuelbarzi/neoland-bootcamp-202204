import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../../styles/Leaflet.sass'

function MapView({points}) {   

    let dis

    const distance = () =>{
        const lat1=first[0]
        const lon1=first[1]
        const lat2=last[0]
        const lon2=last[1]


        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI/180; // φ, λ in radians
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres
        dis = d/1000
    }




    let centerPosition= { lat: 42.56990, lng: 1.93214 }
    let markerPosition= { lat: 42.56990, lng: 1.93214 }
    let first, last
    let zoom = 14

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
        //const lat = points.reduce((a, b)=> a.latitude+b.latitude, 0)/length
        //const lng = points.reduce((a, b)=> a.longitude+b.longitude, 0)/length
        //const lat = (first[0] + last[0])/2
        //const lng = (first[1] + last[1])/2
        centerPosition = {lat: lat, lng: lng}
        markerPosition = first

        distance()
    }
    else {
        centerPosition = {lat: points[0].latitude, lng: points[1].longitude}
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