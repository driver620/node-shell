const fs = require('fs');

const lsCommand = () => {

  fs.readdir('./', 'utf8', (err, file) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(file.join('\n'));
      process.stdout.write('\nprompt > ')
    }
  })
}


module.exports.lsCmd = lsCommand;
