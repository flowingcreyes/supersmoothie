const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/smoothieshare/";
const sequelize = require("../../src/db/models/index").sequelize;
const Subjects = require("../../src/db/models").Subjects;
const Users = require("../../src/db/models").Users;

describe("routes : subjects", () => {
  beforeEach(done => {
    this.subject;
    this.user;
    sequelize
      .sync({
        force: true
      })
      .then(res => {
        Users.create({
          email: "thomasmuffinman@gmail.com",
          password: "courageandcowards1"
        })
          .then(user => {
            this.user = user;
            done();
          })
          .then(result => {
            Subjects.create({
              title: "Sam Smoothie",
              description:
                "I TRIED THIS SMOOTHIE AND IT WAS INCREDIBLE! GOOGLE IT!",
              userId: this.user.id
            });
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
      it("will create a new subject with an associated user", done => {
        const data = {
          url: `${base}create`,
          form: {
            title: "Cocount Smoothies are slept on",
            description:
              "I absolutely adore coconut smoothies! Nothing beats them",
          }
        };
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
              expect(result.userId).toBe(this.user.id);
              done();
            })
            .catch(err => {
              console.log(err);
              done();
            });
        });
      });
      it("will not make a new subject that fails validation", done => {
        const option = {
          url: `${base}create`,
          form: {
            title: "1",
            description: "2",
          }
        };
        request.post(option, (err, res, body) => {
          Subjects.findOne({
            where: {
              title: "1"
            }
          })
            .then(subject => {
              expect(subject).toBeNull();
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
          const subjectsBeforeDelete = subjects.length;
          expect(subjectsBeforeDelete).toBe(1);
          request.post(
            `${base}${this.subject.id}/destroy`,
            (err, res, body) => {
              Subjects.findAll().then(subjects => {
                expect(err).toBeNull();
                expect(subjects.length).toBe(subjectsBeforeDelete - 1);
                done();
              });
            }
          );
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
    describe("POST /smoothieshare/:id/update", () => {
      it("will update the subject's content", done => {
        const options = {
          url: `${base}${this.subject.id}/update`,
          form: {
            title: "Smoothie Luv",
            description: "Where are my smoothie luvers at?",
          }
        };
        request.post(options, (err, res, body) => {
          expect(err).toBeNull();
          Subjects.findOne({
            where: {
              id: this.subject.id
            }
          }).then(subject => {
            expect(subject.title).toBe("Smoothie Luv");
            done();
          });
        });
      });
    });
    describe("POST /users", () => {
      it("will create a user account", done => {
        const options = {
          url: "http://localhost:3000/users",
          form: {
            email: "donaldduck@gmail.com",
            password: "98789896!"
          }
        };
        request.post(options, (err, res, body) => {
          Users.findOne({
            where: {
              email: "donaldduck@gmail.com"
            }
          })
            .then(user => {
              expect(user.email).toBe("donaldduck@gmail.com");
              done();
            })
            .catch(err => {
              console.log(err);
              done();
            });
        });
      });
    });
    describe("GET /smoothieshare/signin", () => {
      it("will show a signing in form", done => {
        request.get(`${base}signin`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Sign in");
          done();
        });
      });
    });
  
});
