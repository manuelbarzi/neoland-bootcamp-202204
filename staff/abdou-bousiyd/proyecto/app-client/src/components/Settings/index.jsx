import React, { useState,useEffect } from 'react'
import '../Settings/index.sass'


const Settings = ({editorOptions: options, handleOnOptionsChanged}) => {

  const [editorOptions, setEditorOptions] = useState(options)

  useEffect(() => {
    handleOnOptionsChanged(editorOptions)
  }, [editorOptions])

  const handleOnchange = (e) => {
    if(e.target.name === 'minimap') {
      setEditorOptions({
        ...editorOptions,
        minimap: {
          enabled: e.target.checked
        } 
      })} 
      if(e.target.name === 'fontSize') {
        setEditorOptions({
          ...editorOptions,
          [e.target.name] : e.target.value
      })}
      if(e.target.name === 'lineNumbers') {
        setEditorOptions({
          ...editorOptions,
          lineNumbers: e.target.checked ? 'on' : 'off'
      })}
      if(e.target.name === 'theme') {
        setEditorOptions({
          ...editorOptions,
          theme: e.target.value
      })
    }
  }


    return (
        <form className="Settings">
          <div className="Settings__Options">
            <h2 className='Settings__Options__Title'>Settings </h2>

            <label className='Settings__Options__FontSize'>
                <label>Font Size :</label>
                <input type="number" placeholder='16' name="fontSize" onChange={handleOnchange} />
            </label>

            <label className='Settings__Options__Minimap'>
                <label>Minimap :</label>
                <input className="switch__input" type="checkbox" name="minimap" onChange={handleOnchange} checked={editorOptions.minimap.enabled === true } />
                <i className="switch__icon"></i>
            </label>

            <label className='Settings__Options__LineNumber switch'>
                <label className="switch__span">Line number :</label>
                <input className="switch__input" type="checkbox" name="lineNumbers" onChange={handleOnchange} checked={editorOptions.lineNumbers === 'on' } />
                <i className="switch__icon"></i>
            </label>
            
            <label className='Settings__Options__Themes'>
                <label>Themes :</label>
                <select name="theme" onChange={handleOnchange} >
                    <option selected value="vs-dark">Visual Studio Dark</option>
                    <option value="light">Visual Studio Light</option>
                </select>
            </label>

          </div>
    </form>
    )

}

export default Settings;