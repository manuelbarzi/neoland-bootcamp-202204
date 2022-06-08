import { Routes, Route } from 'react-router-dom'
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import Pen from "./components/Pen/Pen.jsx";

function App() {
  return (<div className="App Container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/pen' exact component={Pen}></Route>
        </Routes>
      </div>
  );
}

export default App;
