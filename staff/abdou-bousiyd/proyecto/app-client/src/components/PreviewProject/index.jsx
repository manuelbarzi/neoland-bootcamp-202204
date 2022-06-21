import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Login from "../Login";

// import "./splitGrid.css";
// import "./index.sass";
// import "../../app.css";

const previewProject = () => {
  // const [timestamp, setTimestamp] = useState(null)
  return null
};

export default previewProject;
