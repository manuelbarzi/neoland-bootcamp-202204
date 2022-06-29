const { connect, disconnect } = require("mongoose");
const { User } = require("../models");
const { ConflictError } = require("../errors");
const createUser = require("./createUser");
const { expect } = require("chai");

describe("createUser", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos

  beforeEach(() => User.deleteMany());

  it("succeeds on correct credentials", () => {
    return createUser("Peter Pan", "peterpan", "123123123")
      .then((result) => {
        expect(result).to.be.undefined; // como mi funcion create no envia resultado espero que sea undefine
        return User.findOne({ username: "peterpan" }); // buscare el ususario por su nombre de usuario
      })
      .then((user) => {
        // compruevo que la funcion a introducido todo los datos bien mirando el la base de datos
        expect(user.name).to.equal("Peter Pan");
        expect(user.username).to.equal("peterpan");
        expect(user.password).to.equal("123123123");
      });
  });

  it("fails when user already exists", () => {
    return User.create({
      name: "Wendy Pan",
      username: "wendypan",
      password: "123123123",
    })
      .then(() => createUser("Wendy Pan", "wendypan", "123123123")) // intento crear un usuario con el mismo nombre de usuario
      .catch((error) => {
        // el resultado de la funcion
        expect(error).to.be.instanceOf(ConflictError); // me data el error de conflicto ya que ese usuario existe en ls BD
        expect(error.message).to.equal(
          `user with username wendypan already exists`
        ); // devuevle el mensaje
      });
  });

  afterEach(() => User.deleteMany());

  after(() => disconnect());
});
