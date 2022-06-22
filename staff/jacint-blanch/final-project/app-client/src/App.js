import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing/Landing.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import HeatMap from "./components/HeatMap/HeatMap.jsx";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Navbar from './components/Landing/Navbar.js';

function App() {
  return (<div className="App Container">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Navbar />} />

          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HeatMap" element={<HeatMap />} />
        </Routes>
      </div>
  );
}

export default App;

