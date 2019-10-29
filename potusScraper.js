const rp = require("request-promise");
const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
const $ = require('cheerio');
const parser = require("./parser");

rp(url)
  .then(html => {
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    Promise.all(wikiUrls.map(url => parser(`https://en.wikipedia.org${url}`)))
  }).catch(console.error);