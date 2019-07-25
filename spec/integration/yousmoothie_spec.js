const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/";
const strawberrySmoothie = require("../../src/db/models").strawberrysmoothie;

describe("routes:yousmoothie", () => {
  beforeEach(done => {
    this.smoothie;
    sequelize.sync({ force: true }).then(() => {
      strawberrySmoothie
        .create({
          id: 2,
          name: "strawberry delight",
          recipe: "mix packet of the Strawberry Love mix with two cups of milk",
          calories: "800 cal.",
          source: "strawberrydelight.png",
          createdAt: "7/21/19",
          updatedAt: "7/21/19"
        })
        .then(smoothie => {
          this.smoothie = smoothie;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
  describe("GET /yousmoothie", () => {
    it("will return a successful route", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        done();
      });
    });
  });
  describe("GET /yousmoothie/strawberry", () => {
    it("will return a successful route", done => {
      request.get(`${base}strawberry`, (err, res, body) => {
        expect(err).toBeNull();
        expect()
        done();
      });
    });
  });
});
