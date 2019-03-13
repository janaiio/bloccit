const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {
                    //test suite title matches HTTP verb; set route it will test
  describe("GET /", () => {

    it("should return status code 200", (done) => { //indicates request was successful
                                            //(done) as parameter tells Jasmine to wait until it is called
      request.get(base, (err, res, body) => { //second arg function required; contains server response, content, and errors
        expect(res.statusCode).toBe(200);


        done(); //tells Jasmine our test is completed
      });
    });

  });

  describe("GET /marco", () => {
    it("should return status code 200 and should contain the string 'polo'", (done) => {
      request.get("/marco"), (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("polo");
        done();
      };
    });
  });
});
