import '../../styles/BoxHeader.sass'


function ProfileInfo ({activities}) {
    
    const name = activities[0].user.name
    const totalActivities = activities.length
    const totalPosAltitude = 'todo'
    const monthActivities = activities.length
    const monthPosAltitude = 'todo'

    
    return <div className='BoxHeader'>
        <div className="Header__activity">
            <h2>{name}</h2>
            <h2>Total:</h2>
            <h2>Activities: {totalActivities}</h2>
            <h2>Positive altitude: {totalPosAltitude}</h2>
            <h2>Last Month:</h2>
            <h2>Activities: {monthActivities}</h2>
            <h2>Positive altitude: {monthPosAltitude}</h2>
        </div>

    </div>
}

export default ProfileInfo