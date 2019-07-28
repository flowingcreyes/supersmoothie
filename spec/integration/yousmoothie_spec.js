const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/";
const bananaSmoothie = require("../../src/db/models").bananasmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes:yousmoothie", () => {

  describe("GET /yousmoothie", () => {
    it("will return a successful route", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        done();
      });
    });
  });
  describe("GET /yousmoothie/banana", () => {
    it("will return a banana smoothie's features", done => {
      request.get(`${base}banana`, (err, res, body) => {
        bananaSmoothie.findOne({
          where: {name: "Peanut Butter Banana Smoothie"}
        }).then(smoothie => {
          expect(smoothie.name).toBe("Peanut Butter Banana Smoothie")
          expect(smoothie.calories).toBe("335 calories per cup");
          done();
        }).catch(err => {
          console.log(err);
          done();
        });

    });

    });
  });
});
