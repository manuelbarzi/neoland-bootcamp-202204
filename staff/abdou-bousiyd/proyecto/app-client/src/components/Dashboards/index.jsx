import { useState, useEffect } from "react";
import retrieveProject from "../../logic/retrieveProject";
import saveProject from "../../logic/saveProject";
import { isJwtValid } from "../../validators";
import retrieveUser from "../../logic/retrieveUser";
import Project from "../Project";
import Alert from "../Alert";

import NavBar from "../Navbar";

import "./index.sass";
import deleteProject from "../../logic/deleteProject";
import { withToken } from "../../containers";

const Dashboards = () => {
  const [name, setName] = useState(null);
  const [alert, setAlert] = useState(null);
  const [projects, setProjects] = useState(null);
  const [dashName, setDashName] = useState(null);
  const [editDashId, setEditDashId] = useState(null);
  const [projectsDash, setProjectsDash] = useState(null);
  // console.log(projects, 87878);
  useEffect(() => {
    getDashboards();
    getUser();
  }, []);

  const handleInputChange = (e) => {
    const newTitle = e.target.value;
    // console.log(newTitle)
    setDashName(newTitle);
  };

  const getDashboards = () => {
    retrieveProject(sessionStorage.token, (error, _projects) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        return;
      }
      setProjects(_projects);
    });
  };

  const save = (id) => {
    // console.log(newTitle, 44);
    if (!dashName) {
      setEditDashId(null);
      return;
    }

    saveProject(sessionStorage.token, id, dashName, null, (error) => {
      if (error) {
        setAlert(<Alert error message={error.message} />);
        setTimeout(() => {
          setAlert(null);
        }, 4000);

        return;
      }
      setEditDashId();
      getDashboards();
    });
  };

  const deleteDash = (projectId) => {
    // console.log(projectId, "delete")
    if (projectId) {
      deleteProject(sessionStorage.token, projectId, (error) => {
        if (error) {
          setAlert(<Alert error message={error.message} />);
          setTimeout(() => {
            setAlert(null);
          }, 4000);
          return;
        }
        handleRemoveSticker(projectId);
        getDashboards();
      });
    }
  };

  const handleRemoveSticker = (projectId) => {
    const _projects = projects.filter((project) => project.id !== projectId);

    setProjectsDash(_projects);
  };

  const getUser = () => {
    if (isJwtValid(sessionStorage.token)) {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          setAlert(<Alert error message={error.message} />);
          setTimeout(() => {
            setAlert(null);
          }, 4000);

          handleLogoutClick();

          return;
        }
        setName(user.name);
      });
    }
    // else navigate('/login')
  };
  const handleLogoutClick = () => {
    delete sessionStorage.token;
    window.location.reload();
  };

  return (
    <>
      <NavBar name={name} />

      {alert && alert}

      <div className="Dash">
        <div className="Dash__Container">
          {(projects || []).map((dash) => {
            const { title, id, code } = dash;

            const parsedCode = JSON.parse(code);

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
                {editDashId === id ? (
                  <i onClick={() => save(id)}>SAVE</i>
                ) : (
                  <i onClick={() => setEditDashId(id)}>EDIT</i>
                )}
                <i onClick={() => deleteDash(id)}>DELETE</i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withToken(Dashboards);
