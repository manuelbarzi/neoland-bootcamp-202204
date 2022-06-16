import { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import retrieveActivity from '../../logic/retrieveActivity'


import updateUserEmail from '../../logic/updateUserEmail'


function Comment({activityId}) {

    const { handleFeedback } = useContext(Context)
    const [activity, setActivity] = useState(null)


    useEffect(() => {
        loadComments()
    }, [])


    const loadComments = async() => {
        try {
            const activity = await retrieveActivity(sessionStorage.token, activityId)

            setActivity(activity)         
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }



    const handleSaveClick = event => {
        event.preventDefault()

        const email = event.target.email.value
        const confirmEmail = event.target.confirmEmail.value

        if (email !== confirmEmail) {
            handleFeedback({ type: 'error', message: 'Email does not match'})
            return 
        }

        try {
            updateUserEmail(sessionStorage.token, email, (error) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }

                handleFeedback({ type: 'success', message: 'Email changed'})
                
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return <div className="Container m__form mw">
        <ul className = "List__activities mw Overflow" >
            {activity.comments.map(comment => <li className="Li__activity" key={comment.id} >  
                <h2>{comment.text}</h2>
            </li>)}
        </ul>

        <form className="Container mw" onSubmit={handleSaveClick}>
            <textarea className="Comment__text" type="text" name="text" placeholder=" Add new comment.."/>
            <button className="Button__color mt_button">Send</button>
        </form>
    </div>
}

export default Comment