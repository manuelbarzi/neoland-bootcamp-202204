import Apium from "apium";
const { validateStringNotEmptyOrBlank } = require("validator");

function authenticateUser(username, password) {
  validateStringNotEmptyOrBlank(username);
  validateStringNotEmptyOrBlank(password);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .post("users/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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

export default authenticateUser;
