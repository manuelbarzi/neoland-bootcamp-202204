import React from "react"
import './FormProfile.sass'
import edit from "../../Img/edit.png"
import retrieveUser from "../../logic/retrieveUser"
import toast from "react-hot-toast"
import { useState} from "react"

export default function FormProfile() {
  
    const [user, setUser] = useState(null)
    const loadUser = () => {
        retrieveUser(sessionStorage.token)
            .then(user => {
                setUser(user)
            })

            .catch(error => {
                toast.error(error)

            })
    }

    return (

        <div className="box" >
            
           {/*  {user.map(nuser=> <p>{nuser.name}</p>)} */}
               
            <form className="Center">
               
                <input className="borderDawn" type='text' name="name" placeholder="Name" ></input>
                <input className="borderDawn" type='text' name="username" placeholder="Username"></input>
                <input className="borderDawn" type='text' name="password" placeholder="Password"></input>
                <input className="borderDawn" type='text' name="email" placeholder="Email"></input>
                <button className='imgnoneborde'>{<img src={edit} alt='' ></img>}</button>

            </form>
        </div>
    )
}

