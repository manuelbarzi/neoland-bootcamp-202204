import Apium from "apium";
const { validateStringNotEmptyOrBlank, isJwtValid } = require("validator");

function registerUser(
  token,
  name,
  username,
  password,
  role,
  nid,
  email,
  address
) {
  isJwtValid(token);
  validateStringNotEmptyOrBlank(name);
  validateStringNotEmptyOrBlank(username);
  validateStringNotEmptyOrBlank(password);
  validateStringNotEmptyOrBlank(nid);
  validateStringNotEmptyOrBlank(email);
  validateStringNotEmptyOrBlank(role);
  validateStringNotEmptyOrBlank(address);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .post("users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        username,
        password,
        role,
        nid,
        email,
        address,
      }),
    })
    .then(({ status, payload }) => {
      if (status === 201) {
        return payload;
      } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload);

        if (status === 409) throw new Error(data.error);

        throw new Error(data.error);
      } else {
        throw new Error("server error");
      }
    });
}

export default registerUser;
