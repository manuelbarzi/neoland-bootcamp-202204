import Apium from "apium";

const { isJwtValid, validateStringNotEmptyOrBlank } = require("validator");

function retrieveUsersRol(token, role) {
  isJwtValid(token);
  validateStringNotEmptyOrBlank(role);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .get(`users/role/${role}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ status, payload }) => {
      if (status === 200) {
        const data = JSON.parse(payload);
        return data;
      } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload);

        if (status === 401) throw new Error(data.error);
        if (status === 400) throw new Error(data.error);
        if (status === 409) throw new Error(data.error);

        throw new Error(data.error);
      } else {
        throw new Error("server error");
      }
    });
}

export default retrieveUsersRol;
