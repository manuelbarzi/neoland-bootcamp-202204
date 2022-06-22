import React from "react";
import FormLogin from "../components/users/FormLogin";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Login({ onLogin }) {
  return <FormLogin />;
}, false);
