const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/";

describe("routes:static", () => {
  describe("GET /", () => {
    it("will return status code of 200", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
