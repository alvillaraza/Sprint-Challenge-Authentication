const request = require("supertest");

const server = require("./auth-router.js");

describe("auth-router.js", function() {
  describe("register /", function() {
    it("should return 200 OK", async function() {
      const response = await request(server).post("/register");
      expect(response.status).toBe(200);
    });
  });
  it("should return JSON", function() {
    return request(server)
      .post("/register")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});
