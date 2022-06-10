import React, {useState} from 'react'
import Split from 'react-split-grid'
import Navbar from '../Navbar';
import Modal from '../Modal'
import Settings from '../Settings'

import './splitGrid.css'
import './index.sass'
import '../../app.css';


const Project = () => {

    const toggle = () => {
        setActive(!active)
    }

    const [active, setActive] = useState(false)
    const [editorValues, setEditorValues] = useState({
        html: "",
        js: "",
        css: "",
    });
    
    
    const handleHtmlChange = ({target: {value: html}}) => {
        setEditorValues({
            ...editorValues,
            html
        });
    };

    console.log(editorValues, 99)

    const handleCsslChange = ({target: {value: css}}) => {
        setEditorValues({
          ...editorValues,
          css
        });
    };
      const handleJslChange = ({target: {value: js}}) => {
        setEditorValues({
          ...editorValues,
          js
        });
    };
    
    const renderPreview = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>JS Bin</title>
        <style>${editorValues.css}</style>
        
      </head>
      <body>${editorValues.html}</body>
      <script>${editorValues.js}</script>

    </html>
    `;

    return(

        <div className='project'>
            <Navbar toggle={toggle} />

            <Modal active={active} toggle={toggle}>
                <Settings />
            </Modal>

            <Split 
                render={({ getGridProps, getGutterProps, }) => (
                    <section className='grid' {...getGridProps()}>
                        <div>
                            <textarea id="html" className='editor html' placeholder='html' onChange={handleHtmlChange} defaultValue={editorValues.html}/>
                        </div>

                        <div>
                            <textarea id="css" className='editor css' placeholder='css' onChange={handleCsslChange} defaultValue={editorValues.css}/>
                        </div>
        
                        <div>
                            <textarea id="js" className='editor js' placeholder='js' onChange={handleJslChange} defaultValue={editorValues.js}/>
                        </div>

                        <div
                            className="vertical-gutter"
                            {...getGutterProps("column", 1)}
                        />
                
                        <div
                            className="horizontal-gutter"
                            {...getGutterProps("row", 1)}
                        />

                        {/* <iframe id="iframe"  srcdoc="<p>Hello world!</p>"/> */}
                        <div>
                            <iframe id="iframe" scrolling="no" srcdoc={renderPreview}/>
                        </div>
                    </section>
                )}
                
                />
        </div>
    )
}


export default Project;