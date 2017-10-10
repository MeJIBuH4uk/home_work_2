var fs = require('fs');
var file = fs.createWriteStream('data.json');
file.write("kek mather fucker");
file.end();