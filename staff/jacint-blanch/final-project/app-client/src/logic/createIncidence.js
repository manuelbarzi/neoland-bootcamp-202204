import Apium from '../vendor/Apium'

function getToken() {
  var token = sessionStorage.getItem('token')
  return token
}

function createIncidence(latitude, longitude, description) {


    const api = new Apium('http://localhost:8080/api')

    return api
      .post("/incidence", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + getToken()
        },
        body: JSON.stringify({ latitude, longitude, description }),
      })

      .then(({ status, payload }) => {
        if (status >= 400 && status < 500) {
          const data = JSON.parse(payload);
          throw new Error(data.error);
        } else {
          throw new Error("server error");
        }
      });
}

export default createIncidence
