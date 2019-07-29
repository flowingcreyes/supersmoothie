const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/smoothieshare/";
const sequelize = require("../../src/db/models/index").sequelize;
const subject = require("../../src/db/models").Subjects;

describe("routes : subjects", () => {
beforeEach((done) => {
  this.subject;
  sequelize.sync({force: true}).then((res) => {
    subject.create({
      title: "Sam Smoothie",
      description: "I TRIED THIS SMOOTHIE AND IT WAS INCREDIBLE! GOOGLE IT!"
    }).then((subject) => {
      this.subject = subject;
      done();
    }).catch((err) => {
      console.log(err)
      done();
    })
  })
})
  describe("GET /smoothieshare", () => {

    it("will return a status code 200 and all of the the subjects", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Super Smoothie")
        expect(body).toContain("Sam Smoothie")
        done();
      });
    });
  });
describe("GET /smoothieshare/new", () => {
  it("will return a new subject form", done => {
    request.get(`${base}new`, (err, res, body) => {
      expect(err).toBeNull();
      expect(body).toContain("New Subject")
    })
  })
})
});
