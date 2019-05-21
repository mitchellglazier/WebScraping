const request = require('request');
const cheerio = require('cheerio');

request('https://cloudacademy.com/', (error, respnse, html) => {
    if(!error && respnse.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('.title');

        // console.log(siteHeading.html());
        // console.log(siteHeading.text());
        
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').text();

        // const output = siteHeading.children('h1').next().text();

        // const output = siteHeading.children('div').parent().text();

        // console.log(output)

        // $('.menu-item').each((i, el) => {
        //     const item = $(el).text();
        //     const link = $(el).attr('href');

        //     console.log(link);
        // })

    }
});