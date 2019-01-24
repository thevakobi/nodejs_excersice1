var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'this is my pharagraph', function (err) {
  if (err) throw err;
  console.log('updated!');
});
