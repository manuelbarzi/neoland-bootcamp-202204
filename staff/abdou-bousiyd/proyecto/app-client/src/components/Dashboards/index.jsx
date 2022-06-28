import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import retrieveProjects from "../../logic/retrieveProjects";
import retrieveProject from "../../logic/retrieveProject";
import saveProject from "../../logic/saveProject";
import { isJwtValid } from "../../validators";
import retrieveUser from "../../logic/retrieveUser";
import Alert from "../Alert";

import NavBar from "../Navbar";

import "./index.sass";
import deleteProject from "../../logic/deleteProject";
import { withToken } from "../../containers";

const Dashboards = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [alert, setAlert] = useState(null);
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const [dashName, setDashName] = useState(null);
  const [editDashId, setEditDashId] = useState(null);
  const [projectsDash, setProjectsDash] = useState(null);

  useEffect(() => {
    getDashboards();
    getUser();
  }, []);

  const handleInputChange = (e) => {
    const newTitle = e.target.value;
    setDashName(newTitle);
  };
  const getDashboards = () => {
    retrieveProjects(sessionStorage.token, (error, projects) => {
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

  const save = (id) => {
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
    else navigate('/login')
  };
  const handleLogoutClick = () => {
    delete sessionStorage.token;
    window.location.reload();
  };

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
                  <h1 className="Dash__Container__Item__Title" onClick={() => previewProject(id)}>
                  {/* <a className="Dash__Container__Item__Author">Author: {name}</a> */}
                    <span>{title}</span>
                  </h1>
                  {editDashId === id && (
                    <input
                      className="dash_input "
                      onChange={handleInputChange}
                      type="text"
                      value={dashName === null ? title : dashName}
                      placeholder="title"
                    />
                  ) }
                    <div className="Dash__Container__Items__Iframe pointer" onClick={() => previewProject(id)}>
                      <iframe
                        className="Iframe__target"
                        id="iframe target"
                        scrolling="no"
                        srcdoc={renderPreview}
                      />
                    </div>
                    <div className="Dash__Container__Item__Btn">
                        {editDashId === id ? (
                        <i onClick={() => save(id)}  className="far fa-save save-icon actiones"></i>
                        ) : (
                        <i onClick={() => setEditDashId(id)} className="fas fa-pen edit-icon actiones"></i>
                        )}
                        <i onClick={() => deleteDash(id)} className="far fa-trash-alt remove-icon actiones"></i>
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

export default withToken(Dashboards);
