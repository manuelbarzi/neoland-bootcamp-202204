import Apium from "apium";
const { validateStringNotEmptyOrBlank, isJwtValid } = require("validator");

function retrieveUsersRol(token, role) {
  isJwtValid(token);
  validateStringNotEmptyOrBlank(role);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .get("users/role", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
    .then(({ status, payload }) => {
      if (status === 200) {
        const data = JSON.parse(payload);

        return data.token;
      } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload);

        if (status === 401) throw new Error(data.error);

        throw new Error(data.error);
      } else {
        throw new Error("server error");
      }
    });
}

export default retrieveUsersRol;
