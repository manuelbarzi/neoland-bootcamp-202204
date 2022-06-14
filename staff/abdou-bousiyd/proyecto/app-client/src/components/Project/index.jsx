import React, {useState} from 'react'
import Split from 'react-split-grid'
import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
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

    const [_, setIsEditorReady] = useState(false);
    const [active, setActive] = useState(false)
    const [editorValues, setEditorValues] = useState({
        html: "",
        js: "",
        css: "",
    });
    const [editorOptions, setEditorOptions] = useState({
        fontSize: 14,
        minimap: {
        enabled: true
        },
        lineNumbers: 'on',
        theme:  'vs-dark',
    })

    const handleOnOptionsChanged = options => {
        console.log(options)
        setEditorOptions(options)
    }
    
    
    const handleHtmlChange = (html) => {
        setEditorValues({
            ...editorValues,
            html
        });
    };

    const handleCsslChange = (css) => {
        setEditorValues({
          ...editorValues,
          css
        });
    };
      const handleJslChange = (js) => {
        setEditorValues({
          ...editorValues,
          js
        });
    };

    const handleEditorDidMount = () => {
        console.log(window.monaco)
        emmetHTML(window.monaco);
        emmetCSS(window.monaco);
        setIsEditorReady(true);
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
                <Settings editorOptions={editorOptions} handleOnOptionsChanged={handleOnOptionsChanged} />
            </Modal>

            <Split 
                render={({ getGridProps, getGutterProps, }) => (
                    <section className='grid' {...getGridProps()}>
                        <div>
                            <Editor 
                                className='editor html'
                                defaultLanguage="html"
                                placeholder='html' 
                                theme="vs-dark"
                                height="100%"
                                onChange={handleHtmlChange} 
                                defaultValue={editorValues.html}
                                onMount={handleEditorDidMount}
                                options={editorOptions}
                            />
                        </div>

                        <div>
                            <Editor
                                className='editor css' 
                                defaultLanguage="css"
                                placeholder='css' 
                                theme="vs-dark"
                                height="100%"
                                onChange={handleCsslChange} 
                                defaultValue={editorValues.css}
                                editorDidMount={handleEditorDidMount}
                                onMount={handleEditorDidMount}
                                options={editorOptions}
                            />
                        </div>
        
                        <div>
                            <Editor
                                className='editor js' 
                                defaultLanguage="css"
                                placeholder='js' 
                                theme="vs-dark"
                                onChange={handleJslChange} 
                                defaultValue={editorValues.js}
                                options={editorOptions}
                            />
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