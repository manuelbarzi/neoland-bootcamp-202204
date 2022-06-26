import Apium from "apium";
const { isJwtValid } = require("validator");

function deleteJob(token, jobId) {
  debugger;
  isJwtValid(token);
  const api = new Apium(process.env.REACT_APP_API_URL);

  return api
    .delete("job", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId }),
    })
    .then(({ status, payload }) => {
      if (status === 200) {
        return payload;
      } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload);

        if (status === 401) throw new Error(data.error);
        if (status === 409) throw new Error(data.error);

        throw new Error(data.error);
      } else {
        throw new Error("server error");
      }
    });
}

export default deleteJob;
