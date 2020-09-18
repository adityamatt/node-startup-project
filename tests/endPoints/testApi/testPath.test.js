require("../../../config/config");
const app = require("../../../app");
const connectionManager = require("../../../database/databaseManager");
const { describe, expect, test } = require("@jest/globals");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();
const CONSTANTS = require("../../../config/constants");

const ENDPOINT = "/test/TestPath";

const insertMockRecordsInTable = async (connection) => {
  await Promise.all([]);
};
const destroyMockRecordsInTable = async (connection) => {
  await Promise.all([]);
};

beforeAll(async () => {
  await insertMockRecordsInTable(connectionManager.getInstance());
});
afterAll(async () => {
  await destroyMockRecordsInTable(connectionManager.getInstance());
  requester.close();
  connectionManager.getInstance().close();
});

describe("Testing endpoint ".concat(ENDPOINT), () => {
  test("BASE CASE", async () => {
    const data = {
      email: "email@email.com",
      password: "password",
      role: "tnp",
    };
    let res = await requester
      .post(ENDPOINT)
      .type("application/json")
      .send(data);
    let responseBody = res.body;
    expect(res.status).toBe(CONSTANTS.RESPONSE_CODES.SUCCESS);
    expect(responseBody.message).toBe("This is a test API");
  });
  test("EMAIL REQUIRED CASE", async () => {
    const data = {
      password: "password",
      role: "tnp",
    };
    let res = await requester
      .post(ENDPOINT)
      .type("application/json")
      .send(data);
    let responseBody = res.body;
    expect(res.status).toBe(CONSTANTS.RESPONSE_CODES.BAD_REQUEST);
    // prettier-ignore
    expect(responseBody.message).toBe(" 0\"email\" is required ");
  });
});
