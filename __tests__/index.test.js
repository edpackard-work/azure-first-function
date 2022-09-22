const handler = require("../HttpExample/index");

let fakeAzureContext;

beforeEach(() => {
  fakeAzureContext = { log: jest.fn() };
});

describe("azure function handler", () => {
  it("should return standard response if no params/query", async () => {
    req = { query: { name: "" }, body: { name: "" } };

    await handler(fakeAzureContext, req);

    expect(fakeAzureContext.res.body).toEqual(
      "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
    );
    expect(fakeAzureContext.res.status).toEqual(200);
  });

  it("should return customised response if query string provided", async () => {
    req = { query: { name: "A. Person" } };

    await handler(fakeAzureContext, req);

    expect(fakeAzureContext.res.body).toEqual(
      "Hello, A. Person. This HTTP triggered function executed successfully."
    );
    expect(fakeAzureContext.res.status).toEqual(200);
  });

  it("should return customised response if params provided", async () => {
    req = { query: {}, body: { name: "A. N. Other" } };

    await handler(fakeAzureContext, req);

    expect(fakeAzureContext.res.body).toEqual(
      "Hello, A. N. Other. This HTTP triggered function executed successfully."
    );
    expect(fakeAzureContext.res.status).toEqual(200);
  });

  it("should log a message when called", async () => {
    req = { query: { name: "" }, body: { name: "" } };

    await handler(fakeAzureContext, req);

    expect(fakeAzureContext.log).toHaveBeenCalledWith(
      "JavaScript HTTP trigger function processed a request."
    );
  });
});
