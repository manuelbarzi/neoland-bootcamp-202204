import { useState, useEffect } from "react";
import retrievePens from "../../logic/retrievePens";
import Alert from "../Alert";
import retrieveUser from "../../logic/retrieveUser";
import NavBar from "../Navbar";

import "./index.sass";

const Pens = () => {

  const [name, setName] = useState(null);
  const [alert, setAlert] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getPens();
  }, []);

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
                  <h1 className="Dash__Container__Item__Title">{title}</h1>
                  
                    <div className="Dash__Container__Items__Iframe">
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
