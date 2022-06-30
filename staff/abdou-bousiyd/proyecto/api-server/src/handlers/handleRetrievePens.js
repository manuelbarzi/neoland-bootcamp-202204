const { retrievePens } = require("../logic");
const { handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try { 

    retrievePens()
      .then((projects) => res.status(200).json(projects))
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};

