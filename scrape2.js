const request = require('request');
const cheerio = require('cheerio');

request('https://cloudacademy.com/', (error, respnse, html) => {
    if(!error && respnse.statusCode == 200) {
        const $ = cheerio.load(html);


    }
});