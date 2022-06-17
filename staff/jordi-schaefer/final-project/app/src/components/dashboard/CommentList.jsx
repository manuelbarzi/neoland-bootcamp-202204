import { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import retrieveActivity from '../../logic/retrieveActivity'
import saveComment from '../../logic/saveComment'


function CommentList({activityId}) { // TODO rename to Comments or CommentList

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


    const handleSaveClick = async(event) => {
        event.preventDefault()

        const text = event.target.text.value
        
        try {
            await saveComment(sessionStorage.token, activityId, text)
            loadComments()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    // BEM => Block__Element--Modifier
    return <div className="Container m__form mw Comments">
        {activity && <ul className = "Comments__list mw Overflow" >
            {activity.comments.map(comment => <li className="Comments__list-item" key={comment._id} >  
                <h2>{comment.text}</h2>
            </li>) }
        </ul> }

        <form className="Container mw Comments__new-comment" onSubmit={handleSaveClick}>
            <textarea className="Comments__text" type="text" name="text" placeholder=" Add new comment.."/>
            <button className="Comments__button mt_button">Send</button>
            <button className="Comments__button Comment__button--main mt_button">Send</button>
        </form>
    </div>  
}

export default CommentList