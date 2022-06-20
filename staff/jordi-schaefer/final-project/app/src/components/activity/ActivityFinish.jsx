import React, { useContext } from 'react'
import Context from '../Context'
import { useNavigate } from 'react-router-dom'
import updateActivity from '../../logic/updateActivity'
import deleteActivity from '../../logic/deleteActivity'


function ActivityFinish(props) {

    const { handleFeedback } = useContext(Context) 
    const navigate = useNavigate()


    const handleSaveClick = async(event) => {
        event.preventDefault()
        
        try {
        const title = event.target.title.value
        const text = event.target.text.value
        let audience = event.target.audience.value
        if(audience === 'private')
        audience=true
        else audience=false
        const sport = event.target.sport.value
        const dificult = event.target.dificult.value

        await updateActivity(props.activityId, title, text, audience, sport, dificult)
        navigate('/dashboard')
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        } 
    }


    const handleDeleteClick = async() => {
        try {
            await deleteActivity(sessionStorage.token, props.activityId)     
            navigate('/dashboard')
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleContinueClick = () => {
        props.onContinueClicked()
    }



    
    return  <div className="Container overflow mw mh">
        <header className="Activity__header">
        <button className="Activity__button--back" onClick={handleContinueClick}>Resume</button>
            <h1 className="center">Save activity</h1>
        </header>

        <main className="Finish__body mw mh">
            <form id='myform' className="Container Finish__form mw" onSubmit={handleSaveClick}>
                <h1 className="Finish__form--text">Title</h1>
                <input className="Finish__input--title" type="text" name="title" placeholder=" Mountain Activity" />
                <h1 className="Finish__form--text">Notes</h1>
                <textarea className="Finish__input--text" type="text" name="text" placeholder=" " />
                <select className="Finish__input--selector" name="sport">
                    <option value=''>sport</option>
                    <option value="Ride">Ride</option>
                    <option value="Hike">Hike</option>
                    <option value="Ski">Ski</option>
                    <option value="Snowshoe">Snowshoe</option>
                </select>
                <select className="Finish__input--selector" name="dificult">
                    <option value="Easy">easy</option>
                    <option defaultValue="Moderate">moderate</option>
                    <option value="Hard">hard</option>
                    <option value="Very hard">very hard</option>
                </select>
                <select className="Finish__input--selector" name="audience">
                    <option defaultValue="public">public</option>
                    <option value="private">private</option>
                </select>
            </form>
            <button className="Finish__button--delete" onClick={handleDeleteClick}>Discard Activity</button>           
        </main>

        <footer className="Activity__footer-finish">
            <div className="Activity__footerContainer__buttons">
                <button className="Activity__button-finish" form='myform' type="submit">Save Activity</button>         
            </div>
        </footer>

    </div> 
}

export default ActivityFinish