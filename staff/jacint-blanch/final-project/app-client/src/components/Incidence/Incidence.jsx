import React, { useState } from 'react'
import createIncidence  from '../../logic/createIncidence'
import useGeolocation from 'react-hook-geolocation'



const Incidence = () => {
    

    const [description, setDescription] = useState("")

    const geolocation = useGeolocation();



    const handleInputChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        if (!geolocation.latitude || !geolocation.longitude) {
          return null;
        }
        await createIncidence(geolocation.latitude, geolocation.longitude, description)
      } catch (error) {}
    };



    return(
        <form className='login_Container' onSubmit={handleSubmit}>
            <div className='login_Container_Auth'>

                <input 
                    className='login_Input' 
                    type='password' 
                    placeholder='description' 
                    name='password'
                    onChange={handleInputChange} 
                    required
                />

                <button className='login_Btn' type='submit'><span>Incidence</span></button>

            </div>
        </form>
    )
}

export default Incidence