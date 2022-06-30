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
            <div className="container">
                <h1 className='container__title'>Title</h1>
                <input className='container__input' type="text" name="title" placeholder="title"  onChange={handleOnChange} required value={title} />
                <button className='container__btn' onClick={save}><span class="material-icons">check</span></button>
                
            </div>
    )
}
export default ProjectTitle;

