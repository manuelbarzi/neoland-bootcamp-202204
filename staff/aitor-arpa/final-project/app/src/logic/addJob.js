import Apium from "apium";
const { validateStringNotEmptyOrBlank, isJwtValid } = require("validator");

function addJob(token, title, description, address, worker) {
  isJwtValid(token);
  validateStringNotEmptyOrBlank(description);
  validateStringNotEmptyOrBlank(title);
  validateStringNotEmptyOrBlank(address);

  const api = new Apium(process.env.REACT_APP_API_URL);
  debugger;
  return api
    .post("job", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, address, worker }),
    })
    .then(({ status, payload }) => {
      if (status === 201) {
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

export default addJob;
