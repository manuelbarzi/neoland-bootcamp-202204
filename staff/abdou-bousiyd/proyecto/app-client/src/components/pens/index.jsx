import { useState, useEffect } from "react";
import retrievePens from "../../logic/retrievePens";
import Alert from "../Alert";
import retrieveUser from "../../logic/retrieveUser";
import retrieveProject from "../../logic/retrieveProject";
import NavBar from "../Navbar";
import { useNavigate } from "react-router-dom";

import "./index.sass";

const Pens = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [alert, setAlert] = useState(null);
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    getPens();
  }, []);

  retrieveUser(sessionStorage.token, (error, user) => {
    if (error) {
        return;
    }
    setName(user.name);
    });

  const getPens = () => {
    retrievePens((error, projects) => {

      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);

        return;
      }
      setProjects(projects);
    });
  };

  const getCode = (code) => {
    try {
      const parsedCode =  JSON.parse(code)
      if (parsedCode instanceof Object) {
        return parsedCode
      }
      return null
    } catch (error) {
      return null
    }
  }

  const previewProject = (projectId) => {
    retrieveProject(sessionStorage.token, projectId, (error, _project) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        return;
      }

      setProject(_project);
      navigate(`/previewProject/${_project.id}`);
    });
  };


  return (
    <>
      <NavBar name={name} />

      {alert && alert}

      <div className="Dash">
        <div className="Dash__Container">
          {(projects || []).map((dash) => {
            const { title, _id, code } = dash;

            const parsedCode = getCode(code);

            if (!parsedCode) return null

            const renderPreview = `
            <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <title>JS Bin</title>
                <style>${parsedCode.css}</style>
                
              </head>
              <body>${parsedCode.html}</body>
              <script>${parsedCode.js}</script>
        
            </html>
            `;

            return (
              <div className="Dash__Container__Items">
                <div className="Dash__Container__Item">
                  <h1 className="Dash__Container__Item__Title" onClick={() => previewProject(_id)}>{title}</h1>
                  
                    <div className="Dash__Container__Items__Iframe" onClick={() => previewProject(_id)}>
                      <iframe
                        className="Iframe__target"
                        id="iframe target"
                        scrolling="no"
                        srcdoc={renderPreview}
                      />
                    </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pens;
