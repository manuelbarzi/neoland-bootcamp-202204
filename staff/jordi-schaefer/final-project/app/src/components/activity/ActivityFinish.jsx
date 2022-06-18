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

        await updateActivity(props.activityId, title, text, audience)
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



    
    return  <div className="Container Overflow mw mh">
        <header className="Header">
            <h1 className="Center">Save activity</h1>
        </header>


        <main className="Body__finish mw mh">
            <form id='myform' className="Container Form__finish" onSubmit={handleSaveClick}>
                <h1 className="Save__text">Title</h1>
                <input className="Title__form" type="text" name="title" placeholder=" Mountain Activity" />
                <h1 className="Save__text">Text</h1>
                <textarea className="Text__form" type="text" name="text" placeholder=" " />
                <select className="Select__form" name="audience">
                    <option defaultValue="public">public</option>
                    <option value="private">private</option>
                </select>
            </form>
            <button className="Button__finish_delete" onClick={handleDeleteClick}>Delete activity</button>  
        </main>


        
        <footer className="Footer Footer__activity">
            <div className="Footer__home">
            </div>

            <button className="Button__start" form='myform' type="submit">Save</button>         
        </footer>

    </div> 
}

export default ActivityFinish