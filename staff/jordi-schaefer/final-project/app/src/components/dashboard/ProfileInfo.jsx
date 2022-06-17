import '../../styles/BoxHeader.sass'
import calculateUserData from '../../logic/calculateUserData'
import { isJwtValid } from 'validators'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import retrieveUser from '../../logic/retrieveUser'
import Context from '../Context'

function ProfileInfo ({activities}) {
    
    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)
    const [name, setName] = useState(null)
     // todo a 0

    // if activities.lenght>0, llamar a la logica que devuelve todosl os valores


    useEffect(() => {
        getUserName()
    }, [] ) 

    const getUserName = async() => {
        try {
        if (isJwtValid(sessionStorage.token)) {
            const result = await retrieveUser(sessionStorage.token)
            setName(result.name)
        } else {
            navigate('/') 
        }}catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const data = calculateUserData(activities)
    
    return <div className='BoxHeader'>
        <div className="Header__activity">
            <h2>{name}</h2>
            <h2>Total:</h2>
            <h2>Activities: {data.totalActivities}</h2>
            <h2>Positive altitude: {data.totalAltitude}</h2>
            <h2>Last Month:</h2>
            <h2>Activities: {data.totalMonthActivities}</h2>
            <h2>Positive altitude: {data.totalMonthAltitude}</h2>
        </div>

    </div>
}

export default ProfileInfo