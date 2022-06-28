import Apium from "apium";
const { validateId } = require("validator");

function retrieveUserName(userId) {
  const api = new Apium(process.env.REACT_APP_API_URL);

  return api.get(`user/${userId}`, {}).then(({ status, payload }) => {
    if (status === 200) {
      const data = JSON.parse(payload);

      return data;
    } else if (status >= 400 && status < 500) {
      const data = JSON.parse(payload);

      if (status === 401) throw new Error(data.error);

      throw new Error(data.error);
    } else {
      throw new Error("server error");
    }
  });
}

export default retrieveUserName;
