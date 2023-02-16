const request = require('request');

const breedFetch = function() {
  const terminalInput = process.argv[2];
  request(`https://api.thecatapi.com/v1/breeds/search?q=${terminalInput}`, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.log('error: ', response.statusCode, response.statusMessage);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('error: No search results found');
      return;
    }
    
    processFetch(data);

  });
};

const processFetch = function(data) {
  console.log(data);
};

breedFetch();

