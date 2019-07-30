const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/smoothieshare/";
const sequelize = require("../../src/db/models/index").sequelize;
const Subjects = require("../../src/db/models").Subjects;

describe("routes : subjects", () => {
  beforeEach(done => {
    this.subject;
    sequelize.sync({ force: true }).then(res => {
      Subjects.create({
        title: "Sam Smoothie",
        description: "I TRIED THIS SMOOTHIE AND IT WAS INCREDIBLE! GOOGLE IT!"
      })
        .then(subject => {
          this.subject = subject;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
  describe("GET /smoothieshare", () => {
    it("will return a status code 200 and all of the the subjects", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Super Smoothie");
        expect(body).toContain("Sam Smoothie");
        done();
      });
    });
  });
  describe("GET /smoothieshare/new", () => {
    it("will return a new subject form", done => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Create a Subject");
        done();
      });
    });
  });
  describe("POST /smoothieshare/create", () => {
    const data = {
      url: `${base}create`,
      form: {
        title: "Cocount Smoothies are slept on",
        description: "I absolutely adore coconut smoothies! Nothing beats them"
      }
    };
    it("will create a new subject", done => {
      request.post(data, (err, res, body) => {
        Subjects.findOne({
          where: {
            description:
              "I absolutely adore coconut smoothies! Nothing beats them"
          }
        })
          .then(result => {
            expect(err).toBeNull();
            expect(result.title).toBe("Cocount Smoothies are slept on");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
  describe("GET /smoothieshare/:id", () => {
    it("will show a view with the selected subject", done => {
      request.get(`${base}${this.subject.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain(
          "I TRIED THIS SMOOTHIE AND IT WAS INCREDIBLE! GOOGLE IT!"
        );
        done();
      });
    });
  });
  describe("GET /smoothieshare/signup", () => {
    it("will return the signup page", done => {
      request.get(`${base}signup`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("email");
        expect(body).toContain("password");
        done();
      });
    });
  });
  describe("POST /smoothieshare/:id/destroy", () => {
    it("will delete the subject with the associated ID", done => {
      Subjects.findAll().then(subjects => {
        const subjectsBeforeDelete = Subjects.length;
        expect(subjectsBeforeDelete).toBe(1);
        request.post(`${base}${this.subject.id}/destroy`, (err, res, body) => {
          Subjects.findAll().then(subjects => {
            expect(err).toBeNull();
            expect(subjects.length).toBe(subjectsBeforeDelete - 1);
            done();
          });
        });
      });
    });
  });
  describe("GET /smoothieshare/:id/edit", () => {
    it("will show an edit subject form", done => {
      request.get(`${base}${this.subject.id}/edit`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Edit Your Subject");
        done();
      });
    });
  });
});
