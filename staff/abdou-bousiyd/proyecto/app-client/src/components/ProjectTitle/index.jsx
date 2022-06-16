import React, { useState,useEffect } from 'react'
import './index.sass'

const ProjectTitle = ({projectTitle: title, handleTitleProject, save, toggleTitle}) => {

    const [projectTitle, setProjectTitle] = useState(title)

    useEffect(() => {
        handleTitleProject(projectTitle)
      }, [projectTitle])


    const handleOnChange = e => {

        setProjectTitle(e.target.value)
        // toggleTitle(false)
    }

    return (
            <div class="container">
                <input type="text" name="title" placeholder="title"  onChange={handleOnChange} required value={title} />
                <button onClick={save}>ok</button>
            </div>
    )
}
export default ProjectTitle;

