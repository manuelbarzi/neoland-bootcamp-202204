
import { Route, Routes } from "react-router-dom"
import FormProfile from "../Components/Users/FormProfile"

import Navbar from "../Components/Navbar"


export default function Profile () {
    return (
      <Routes>
        <Route index element={
          
          <div>
            
            <h1 className="logo"> User </h1>
          <FormProfile/>
          <div>

        <Navbar/>
          </div>
     
        </div>
       }/>

        
      </Routes>
      
    )
}
