import Apium from '../vendor/Apium'

function retrieveIncidenceNearMe(lat, long) {

    const api = new Apium('http://localhost:8080/api')

    var param =  lat + '/' +long
    return api
      .get("incidents-near-me/" +param, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then(({ status, payload }) => {
        if (status == 200) {

          return JSON.parse(payload);
        } else {
          throw new Error("server error");
        }
      });
}

export default  retrieveIncidenceNearMe