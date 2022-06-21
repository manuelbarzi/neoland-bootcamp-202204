import React, { useState, useEffect } from "react";
import { useNavigate,  useParams  } from "react-router-dom";
import Split from "react-split-grid";
import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import Navbar from "../Navbar";
import Modal from "../Modal";
import Settings from "../Settings";
import ProjectTitle from "../ProjectTitle";
import Alert from "../Alert";
import { isJwtValid } from "../../validators";
import retrieveUser from "../../logic/retrieveUser";
import saveProject from "../../logic/saveProject";
import retrieveProject from "../../logic/retrieveProject";
import Login from "../Login";

import "./splitGrid.css";
import "./index.sass";
import "../../app.css";

const Project = () => {
  // const [timestamp, setTimestamp] = useState(null)
  const [alert, setAlert] = useState(null);
//   const [project, setProject] = useState(null);
  const [name, setName] = useState(null);
  const [_, setIsEditorReady] = useState(false);
  const [active, setActive] = useState(false);
  const [activeTitle, setActiveTitle] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  let { projectId } = useParams();
  const [editorValues, setEditorValues] = useState({
    html: "",
    js: "",
    css: "",
  });
  const [editorOptions, setEditorOptions] = useState({
    fontSize: 14,
    minimap: {
      enabled: true,
    },
    lineNumbers: "on",
    theme: "vs-dark",
  });

  const navigate = useNavigate();

  const toggle = () => {
    setActive(!active);
  };

  const toggleTitle = () => {
    setActiveTitle(!activeTitle);
  };

  const save = () => {
    const code = JSON.stringify(editorValues);
    saveProject(sessionStorage.token, null, projectTitle, code, (error) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);

        return;
      }
      // setTimestamp(Date.now())
    });
    toggleTitle();
  };

  const loadUser = (openModal) => {
    if (isJwtValid(sessionStorage.token)) {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          setAlert(<Alert error message={error.message} />);
          setTimeout(() => {
            setAlert(null);
          }, 4000);

          // handleLogout()

          return;
        }
        setName(user.name);
        if (openModal) {
          toggleTitle();
        }
        // setView('project')
      });
    }
    // else navigate('/login')
  };

  useEffect(() => {
    loadUser();
    if (projectId) {
        getProject()
    }

  }, []);

  const getProject = () => {
    retrieveProject(sessionStorage.token, projectId, (error, _project) => {
        console.log(_project.id, 9898989)
        if (error) {
          setAlert(<Alert error message={error.message} />);
          setTimeout(() => {
            setAlert(null);
          }, 4000);
          return;
        }

       setTimeout( () => {
            const code = JSON.parse(_project.code)
            setEditorValues(code)
            console.log(editorValues)
       }, 200)


//   console.log(code, 67670000111)
        // setProject(_project);
        // navigate(`/previewProject/${_project.id}`)
      });
  }


//   console.log(project.code, 99000)

  const handleOnOptionsChanged = (options) => {
    setEditorOptions(options);
  };

  const handleTitleProject = (title) => {
    setProjectTitle(title);
  };

  const handleHtmlChange = (html) => {
    setEditorValues({
      ...editorValues,
      html,
    });
  };

  const handleCsslChange = (css) => {
    setEditorValues({
      ...editorValues,
      css,
    });
  };
  const handleJslChange = (js) => {
    setEditorValues({
      ...editorValues,
      js,
    });
  };

  const handleEditorDidMount = () => {
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

  return (
    <div className="project">
      <Navbar toggle={toggle} toggleTitle={toggleTitle} name={name} />

      <Modal active={active} toggle={toggle}>
        <Settings
          editorOptions={editorOptions}
          handleOnOptionsChanged={handleOnOptionsChanged}
        />
      </Modal>

      <Modal active={activeTitle} toggle={toggleTitle}>
        {name ? (
          <ProjectTitle
            projectTitle={projectTitle}
            handleTitleProject={handleTitleProject}
            save={save}
            toggleTitle={toggleTitle}
          />
        ) : (
          <Login toggleTitle={toggleTitle} loadUser={loadUser} />
        )}
      </Modal>

      {alert && alert}
      <Split
        render={({ getGridProps, getGutterProps }) => (
          <section className="grid" {...getGridProps()}>
            <div>
              <Editor
                className="editor html"
                defaultLanguage="html"
                placeholder="html"
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
                className="editor css"
                defaultLanguage="css"
                placeholder="css"
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
                className="editor js"
                defaultLanguage="js"
                placeholder="js"
                theme="vs-dark"
                onChange={handleJslChange}
                defaultValue={editorValues.js}
                options={editorOptions}
              />
            </div>

            <div className="vertical-gutter" {...getGutterProps("column", 1)} />

            <div className="horizontal-gutter" {...getGutterProps("row", 1)} />

            {/* <iframe id="iframe"  srcdoc="<p>Hello world!</p>"/> */}
            <div>
              <iframe
                className="iframeResult"
                id="iframe"
                scrolling="no"
                srcdoc={renderPreview}
              />
            </div>
          </section>
        )}
      />
    </div>
  );
};

export default Project;
