import React, { useState } from 'react'
import createIncidence  from '../../logic/createIncidence'
import useGeolocation from 'react-hook-geolocation'



const Incidence = ({geolocation}) => {
    

    const [description, setDescription] = useState("")



    const handleInputChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      try {
        if (!geolocation.latitude || !geolocation.longitude) {
          return null;
        }
        createIncidence(geolocation.latitude, geolocation.longitude, description).then(function() {
          setDescription('')
        })
      } catch (error) {}
    };



    return(
        <form className='login_Container incidents' onSubmit={handleSubmit}>
            <div className='login_Container_Auth'>

                <input 
                    className='login_Input' 
                    placeholder='description' 
                    name='create incidence'
                    onChange={handleInputChange} 
                    value={description}
                />

                <button className='login_Btn' type='submit'><span>Incidence</span></button>

            </div>
        </form>
    )
}

export default Incidence