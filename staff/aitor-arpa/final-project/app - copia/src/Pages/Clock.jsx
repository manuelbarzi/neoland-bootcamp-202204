import React from "react"
import { Route, Routes,useNavigate } from "react-router-dom"
import ClockAll from "../Components/Cloks/ClockAll"
import ClockRegister from "../Components/Cloks/ClockRegister"
import Logout from "../Components/Logout"
import Navbar from "../Components/Navbar"
import getUserRole from "../logic/getUserRole"
import { toasta } from "react-hot-toast";
import toast from "react-hot-toast"


function Clocked() {
const navigate = useNavigate()

  const control = () =>{
    if (sessionStorage.token)
   var role = getUserRole(sessionStorage.token)
    if (!(role === "worker" || role === 'admin'))
        toast.error(`no tienes permiso`)
    if (role === "worker")
        navigate('/login')
    if (role === "admin")
        navigate('/admin')

  }
  return (

    <Routes>
      <Route index element={
      <div>
        <Logout/>
        <ClockAll></ClockAll>
        <ClockRegister></ClockRegister>
        <Navbar></Navbar>
        </div>} />


    </Routes>


  )
}
export default Clocked