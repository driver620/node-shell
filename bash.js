const pwdModule = require('./pwd');

//console.log('pwdMod ', pwdModule());
process.stdout.write('prompt');

process.stdin.on('data', (data) => {
   const cmd = data.toString().trim();
   pwdModule.pwdCommand(cmd);

   process.stdout.write('You typed: ' + cmd);
   process.stdout.write('\nprompt > ');

});
