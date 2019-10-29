const rp = require('request-promise');
const $ = require('cheerio');

const parse = (url) => {
  return rp(url)
    .then((html) => {
      console.log({
        name: $('.firstHeading', html).text(),
        bday: $('.bday', html).text()
      })
    })
    .catch(console.error);
}

module.exports = parse;
