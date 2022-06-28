import React, { useState, useEffect } from "react";
import JSZip from "jszip";
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
import { FILE_NAME, EXTENSIONS } from "../../constants";

import "./splitGrid.css";
import "./index.sass";
import "../../app.css";
import Skypack from "../Skypack";

const Project = () => {

  const navigate = useNavigate();
  const [timestamp, setTimestamp] = useState(null)
  const [alert, setAlert] = useState(null);
  const [name, setName] = useState(null);
  const [_, setIsEditorReady] = useState(false);
  const [active, setActive] = useState(false);
  const [activeSkypack, setActiveSkypack] = useState(false);
  const [activeTitle, setActiveTitle] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  let { projectId } = useParams();
  const [download, setDownload] = useState(false);
  const [project, setProject] = useState(null);
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

  useEffect(() => {
    loadUser();

    if (projectId) {
      getProject()
    }
    if (download) {
      downloadFiles();
      setDownload(false);
    }
  }, [timestamp, download]);

  const toggle = () => {
    setActive(!active);
  };
  
  const toggleSkypack = () => {
    setActiveSkypack(!activeSkypack);
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
    });
    toggleTitle();
  };

  const updateProject = () => {
    
    const code = JSON.stringify(editorValues);
    saveProject(sessionStorage.token, projectId, projectTitle, code, (error) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);

        return;
      }
    });
    console.log('saved')

  }

  const loadUser = (openModal) => {
    retrieveUser(sessionStorage.token, (error, user) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);

        return;
      }
      setName(user.name);
      if (openModal) {
        toggleTitle();
      }
    });
  };
  
  const getProject = () => {
    retrieveProject(sessionStorage.token, projectId, (error, project) => {

        if (error) {
          setAlert(<Alert error message={error.message} />);
          setTimeout(() => {
            setAlert(null);
          }, 4000);
          return;
        }
        const code = JSON.parse(project.code)

        setEditorValues(code)
        setProject(project)
      });
    }

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

  const handleProjectLikeClicked = () => setTimestamp(Date.now())

  const createCodeFile = (content, extension) => {
    const name = `${FILE_NAME[extension]}.${extension}`;
    return new window.File([content], name);
  };

  const getZip = (files) => {
    const zip = new JSZip();

    for (const file of files) {
      const filename = file.name;
      zip.file(filename, file);
    }

    return zip;
  };

  const downloadZip = (zip) => {
    zip.generateAsync({ type: "blob" }).then((blobdata) => {
      const zipblob = new window.Blob([blobdata]);
      const elem = window.document.createElement("a");
      elem.href = window.URL.createObjectURL(zipblob);
      elem.download = "code-neoland.zip";
      elem.click();
    });
  };

  const downloadFiles = () => {
    const files = EXTENSIONS.map((extension) => {
      let content = editorValues[extension];

      if (extension === "html") {
        content = `
        <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <link rel="stylesheet" href="styles.css">
            <title>Codepen</title>
          </head>
          <body>${editorValues.html}</body>
          <script src="main.js"></script>
        </html>
        `;
      }

      return createCodeFile(content, extension);
    });

    const zip = getZip(files);
    downloadZip(zip);
  };

  const handleDownload = () => {
    setDownload(true)
  }

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
      <script type="module">
        import react from 'https://cdn.skypack.dev/react';
        ${editorValues.js}
      </script>
    </html>
    `;

  return (
    <div className="project">
      <Navbar
        toggleSkypack={toggleSkypack}
        download={handleDownload}
        toggle={toggle}
        toggleTitle={toggleTitle}
        name={name}
        projectId={projectId}
        onLikeClicked={handleProjectLikeClicked}
        project={project}
        updateProject={updateProject}
      />

      <Modal active={active} toggle={toggle}>
        <Settings
          editorOptions={editorOptions}
          handleOnOptionsChanged={handleOnOptionsChanged}
        />
      </Modal>

      <Modal activeSkypack={activeSkypack}>
        <Skypack
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
                value={editorValues.html}
                onChange={handleHtmlChange}
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
                value={editorValues.css}
                onChange={handleCsslChange}
                editorDidMount={handleEditorDidMount}
                onMount={handleEditorDidMount}
                options={editorOptions}
              />
            </div>

            <div>
              <Editor
                className="editor js"
                defaultLanguage="javascript"
                placeholder="js"
                theme="vs-dark"
                value={editorValues.js}
                onChange={handleJslChange}
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