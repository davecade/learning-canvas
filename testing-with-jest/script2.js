const fetch = require("node-fetch");

const getPeoplePromise = async (fetch) => {
    const getRequest = await fetch("https://swapi.dev/api/people");
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results,
    };
};

getPeoplePromise(fetch);

module.exports = {
    getPeoplePromise,
};
