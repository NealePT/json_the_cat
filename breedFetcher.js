const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (error, response, body) => {
  if (error) {
    return console.log(`Error: Failed to request: `, error);
  }
  
  const data = JSON.parse(body);
  const breedDesc = data[0];
  if (breedDesc) {
    console.log(breedDesc.description);
  } else {
    console.log(`Failed to find breed: ${breed}`);
  }
});
