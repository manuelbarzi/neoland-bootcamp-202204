const {
  connect,
  disconnect,
  Types: { ObjectId },
} = require("mongoose");
const { User, Note } = require("../models");
const { NotFoundError } = require("../errors");
const retrievePublicNotes = require("./retrievePublicNotes");
const { expect } = require("chai");

describe("retrievePublicNotes", () => {
  before(() => connect("mongodb://127.0.0.1:27017/notes-db-test"));

  beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]));
  afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]));

  describe("when user exists", () => {
    let userId;

    beforeEach(() => {
      return User.create({
        name: "Jordi",
        username: "Jorgesito",
        password: "123123123",
      }) //metodos staticos
        .then((user) => {
          userId = user.id;
        });
    });
    afterEach(() => User.deleteMany());

    describe("when user already has notes", () => {
      let allCreatedNotes;

      beforeEach(() => {
        const texts = [
          ["que paula me de los buenos dias", 1],
          ["comprar lejia", 1],
          ["sacar al perro", 0],
          ["hacer la cena", 0],
          ["ir a una playa nudista", 1],
        ];
        const notesPromises = texts.map((elem) =>
          Note.create({ user: userId, text: elem[0], audience: elem[1] })
        );
        return Promise.all(notesPromises).then((result) => {
          allCreatedNotes = result;
        });
      });
      afterEach(() => Note.deleteMany());

      it("success on correct credentials", () => {
        return retrievePublicNotes(userId).then((arrayNotas) => {
          expect(arrayNotas).to.be.instanceOf(Array);
          expect(arrayNotas.length).to.be.equal(3);

          arrayNotas.forEach((note) => {
            expect(note.audience).to.be.equal(1);
          });
        });
      });
    });

    it("success without notes but correct credentials", () => {
      return retrievePublicNotes(userId).then((arrayNotas) => {
        expect(arrayNotas).to.be.instanceOf(Array);
        expect(arrayNotas.length).to.be.equal(0);
      });
    });
  });

  describe("When user does not exist", () => {
    it("fails with wrong user Id", () => {
      const wrongId = new ObjectId().toString();

      return retrievePublicNotes(wrongId)
        .then(() => {
          throw new Error("should not reach this point");
        })
        .catch((error) => {
          expect(error).to.be.instanceOf(NotFoundError);
          expect(error.message).to.equal(
            `user with id ${wrongId} does not exist`
          );
        });
    });
  });

  after(() => disconnect());
});
