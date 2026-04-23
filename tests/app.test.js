const request = require("supertest");
const app = require("../src/app");

describe("Notes API", () => {
  it("should return empty notes initially", async () => {
    const res = await request(app).get("/notes");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new note", async () => {
    const res = await request(app)
      .post("/notes")
      .send({ text: "Test note" });

    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe("Test note");
  });
});