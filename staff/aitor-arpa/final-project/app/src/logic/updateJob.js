import Apium from "apium";
const {
  validateStringNotEmptyOrBlank,
  isJwtValid,
  validateId,
} = require("validator");

function UpdateJob(token, jobId, title, description, address, workers) {
  isJwtValid(token);
  validateId(jobId);
  validateStringNotEmptyOrBlank(description);
  validateStringNotEmptyOrBlank(title);
  validateStringNotEmptyOrBlank(address);

  const api = new Apium(process.env.REACT_APP_API_URL);
  return api
    .post("jobs", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, jobId, description, address, workers }),
    })
    .then(({ status, payload }) => {
      if (status === 201) {
        const { data } = JSON.parse(payload);

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

export default UpdateJob;
