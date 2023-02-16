const request = require('request');
// const { breedName } = require('./index');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      const noResults = 'error: No search results found'
      return callback(null, noResults);
    } else {
      const description = data[0].description;
      return callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
