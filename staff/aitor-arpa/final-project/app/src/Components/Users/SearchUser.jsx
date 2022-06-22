import React, { useState } from "react";
import retrieveUsersRol from "../../logic/retrieveUsersRol";
import toast from "react-hot-toast";
import './CardUserList.sass'
import search from "../../Img/search.png"
import CardUser from "./CardUser";




export default function searchUser() {
  /* const [user, setUsers] = useState(null)


  const loadUsersRol = event => {
    event.preventDefault()
    const role = event.target.role.value
    retrieveUsersRol(sessionStorage.token, role)
      .then(users => {

        setUsers(user)

      })
      .catch(error => {
        toast.error(error)

      })

  } */

  return (
    <>
      <form /* onSubmit={loadUsersRol} */ className='CardUser'>
        <input type="text" name='role'placeholder="role"></input>
        <button type="onSubmit" ><img src={search} alt='' /></button>
      </form>
       {/*  users && users.length || users === undefine ?
    
      <ul>
        {user.map(users => <li key={users._id}>
          <CardUser id={users.id} title={users.title} description={users.description} addres={users.address} />
        </li>)}
      </ul>
      :
      <p>No hay usuarios añada alguno para empezar</p>  */}
    </>

  )

}

