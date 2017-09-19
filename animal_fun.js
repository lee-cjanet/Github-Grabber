const fs = require('fs');

// https://nodejs.org/api/buffer.html

fs.readFile('./animals.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
