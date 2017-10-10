var fs = require('fs');
var http = require('http');
var https = require('https');
var course = require('./data');

https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (res) {
   res.on('data', function (data) {
      fs.writeFile('data.json', data, function () {
         console.log('File is writed!');
      });

      fs.readFile('data.json', 'utf8', function (err, data) {
         if(err) throw new Error();
         console.log(data);
      });
   });
}).on('error', function (err) {
   console.log(err);
});

console.log(
 "Гривня к евро: \nПродать: " + course[0].buy + "\n" + "Купить: " + course[0].sale + "\n========================\n" +
 "Гривня к рублю: \nПродать: " + course[1].buy + "\n" + "Купить: " + course[1].sale + "\n========================\n" +
 "Гривня к доллару: \nПродать: " + course[2].buy + "\n" + "Купить: " + course[2].sale + "\n========================\n"
);