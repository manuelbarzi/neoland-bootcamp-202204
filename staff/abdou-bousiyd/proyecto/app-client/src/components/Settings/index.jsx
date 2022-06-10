import React, { useState,useEffect } from 'react'


const Settings = () => {


    return (
        <form className="app">
          <h3>Settings </h3>
          <div>
            <label>Font Size </label>
            <input type="number" name="fontSize" />
            <br />

            {/* <label>Minimap </label>
            <input type="checkbox" name="minimap" />
            <br />

            <label>Line number </label>
            <input type="checkbox" name="lineNumbers" />
            <br /> */}
            
            <label>Themes </label>
            <select name="theme" >
              <option selected value="vs-dark">Visual Studio Dark</option>
              <option value="light">Visual Studio Light</option>
            </select>
          </div>
    </form>
    )

}

export default Settings;