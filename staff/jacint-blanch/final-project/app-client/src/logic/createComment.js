import Apium from '../vendor/Apium'

function getToken() {
  var token =  sessionStorage.getItem('token')
  return token
}

function createComment(chat, incidentsId) {

    const api = new Apium('http://localhost:8080/api')


    return api
      .post("/comment", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + getToken()
        },
        body: JSON.stringify({ chat, incidentsId }),
      })

      .then(({ status, payload }) => {
        // if (status >= 400 && status < 500) {
        //   const data = JSON.parse(payload);
        //   throw new Error(data.error);
        // } else {
        //   throw new Error("server error");
        // }
      });
}

export default createComment