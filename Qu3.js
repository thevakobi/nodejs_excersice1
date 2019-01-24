var fs = require('fs');

fs.appendFile('ukinode.txt', 'uki is the coding accler programming school in jaffna.', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
