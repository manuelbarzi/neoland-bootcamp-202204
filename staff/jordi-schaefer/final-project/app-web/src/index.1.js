import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.sass';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <MapContainer style={{width: '100%', height: '100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </Router>
  </React.StrictMode>
);
