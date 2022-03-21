const axios = require("axios");
const fs = require("fs-extra");
const URL = "https://catfact.ninja/fact";
const file = "./public/catfact.json";

axios
  .get(URL)
  .then((response) => {
    response.data.time = new Date();
    fs.outputFile(file, JSON.stringify(response.data));
  })
  .catch((err) => {
    console.log(err);
  });
