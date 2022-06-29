import Apium from "apium";

const { isJwtValid } = require("validator");

function deleteUser(token, password) {
  isJwtValid(token);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api.delete(
    "users",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    },
    (error, response) => {
      if (error) return callback(error);

      const { status, payload } = response;

      if (status >= 400 && status < 500) {
        const data = JSON.parse(payload);

        callback(new Error(data.error));
      } else if (status >= 500) callback(new Error("server error"));

      if (status === 204) callback(null);
    }
  );
}
export default deleteUser;
