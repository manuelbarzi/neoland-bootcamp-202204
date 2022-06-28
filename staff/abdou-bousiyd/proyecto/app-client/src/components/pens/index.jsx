import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import retrievePens from "../../logic/retrievePens";
import saveProject from "../../logic/saveProject";
import Alert from "../Alert";
import retrieveUser from "../../logic/retrieveUser";
import deleteProject from "../../logic/deleteProject";
import NavBar from "../Navbar";

import "./index.sass";

const Pens = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [alert, setAlert] = useState(null);
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const [dashName, setDashName] = useState(null);
  const [editDashId, setEditDashId] = useState(null);
  const [projectsDash, setProjectsDash] = useState(null);

  useEffect(() => {
    getPens();
  }, []);

  const handleInputChange = (e) => {
    const newTitle = e.target.value;
    setDashName(newTitle);
  };

  const getPens = () => {
    retrievePens((error, projects) => {
        console.log(projects, 90099)
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        console.log(error, 900);
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

  return (
    <>
      <NavBar name={name} />

      {alert && alert}

      <div className="Dash">
        <div className="Dash__Container">
          {(projects || []).map((dash) => {
            const { title, id, code } = dash;

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
                  <h1>{title}</h1>
                  {editDashId === id ? (
                    <input
                      onChange={handleInputChange}
                      type="text"
                      value={dashName === null ? title : dashName}
                      placeholder="title"
                    />
                  ) : (
                    <div className="Dash__Container__Items__Iframe">
                      <iframe
                        className="Iframe__target"
                        id="iframe target"
                        scrolling="no"
                        srcdoc={renderPreview}
                      />
                    </div>
                  )}
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
