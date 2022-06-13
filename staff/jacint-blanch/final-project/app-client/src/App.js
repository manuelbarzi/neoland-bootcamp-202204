import { Routes, Route } from 'react-router-dom'
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import HeatMap from "./components/HeatMap/HeatMap.jsx";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {
  return (<div className="App Container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HeatMap" element={<HeatMap />} />
        </Routes>
      </div>
  );
}

export default App;

