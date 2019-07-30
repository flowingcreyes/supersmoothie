const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/yousmoothie/";
const sequelize = require("../../src/db/models/index").sequelize;
const bananaSmoothie = require("../../src/db/models").bananasmoothie;

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
    it("will return a valid route", done => {
      request.get(`${base}banana`, (err, res, body) => {
        //randomizes selection
        expect(err).toBeNull();
        done();
      });
    });
  });
});
