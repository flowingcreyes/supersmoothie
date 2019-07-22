const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/";

describe("routes:yousmoothie", () => {
  describe("GET /yousmoothie", () => {
    it("will return a successful route", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        done();
      });
    });
  });
});
