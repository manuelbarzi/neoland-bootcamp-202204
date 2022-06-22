import Apium from "apium";

const { isJwtValid, validateId } = require("validator");

function clockUserOutJob(token, jobId, clockId) {
  isJwtValid(token);
  validateId(jobId);
  validateId(clockId);

  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .post(`clock/job/${clockId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ jobId, clockId }),
    })
    .then(({ status, payload }) => {
      if (status === 201) {
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

export default clockUserOutJob;
