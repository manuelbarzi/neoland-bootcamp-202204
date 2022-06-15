
import { useMap } from 'react-leaflet';


function ChangeView(props) {
    const map = useMap();
    map.flyTo(props.position);
    
    return null;
}

export default ChangeView