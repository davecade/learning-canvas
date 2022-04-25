const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", async () => {
    expect.assertions(2);
    const getResponse = await swapi.getPeoplePromise(fetch);
    expect(getResponse.count).toEqual(82);
    expect(getResponse.count).toBeGreaterThan(5);
});

it("calls swapi to get people", () => {
    expect.assertions(0);
    swapi.getPeoplePromise(fetch).then((response) => {
        expect(response.count).toEqual(82);
    });
});
