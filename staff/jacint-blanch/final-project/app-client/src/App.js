import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing/Landing.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import HeatMap from "./components/HeatMap/HeatMap.jsx";
import Services from './components/Landing/pages/Services.js';
import Products from './components/Landing/pages/Products.js';
import SignUp from './components/Landing/pages/SignUp.js';


function App() {
  return (<div className="App Container">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />

          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HeatMap" element={<HeatMap />} />
        </Routes>
      </div>
  );
}

export default App;

