const {
  connect,
  Types: { ObjectId },
} = require("mongoose");
const { User } = require("../models");
const unregisterUser = require("./unregisterUser");
const { expect } = require("chai");

describe("Unregister User", () => {
  before(() => connect("mongodb://localhost:27017/test"));

  beforeEach(() => User.deleteMany());

  describe("Delete for user alredy exist", () => {
    let user;

    beforeEach(() => {
      // creo nuevo usuario
      user = new User({
        name: "Wendy Pan",
        username: "wendypan",
        password: "123123123",
        rol: 1,
        DNI: "123123123s",
      });

      return user.save(); // lo guardo
    });
    it("succes on correct credentials", () =>
      unregisterUser(user.id) // uso mi funcion pasando el id ya que es un campo unico
        .then((result) => {
          // si todo a ido bien me duevelve undefine
          expect(result).to.be.undefined;

          return User.findOne({ id: result }); // lo busco en la base de datos
        })
        .then((find) => {
          // esperare que el no lo encuentre asi que sera un campo nul
          expect(find).to.be.null;
        }));
  });
  describe("when user id does not exist and try to delete", () => {
    it("cant delete an inexsting user", () => {
      const unexistingUserId = new ObjectId().toString();
      unregisterUser(unexistingUserId)
        .then(() => {
          throw new Error("should not reach this point");
        })
        .catch((error) => {
          expect(error).to.be.instanceOf(NotFoundError);
          expect(error.message).to.equal(
            `user with id ${unexistingUserId} does not exist`
          );
        });
    });
  });
});
