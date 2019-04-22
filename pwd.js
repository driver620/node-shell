const pwdCommand = function(cmd){
       process.stdout.write(process.cwd());
       process.stdout.write('prompt > ')

};

// module.exports.pwdCommand = cmd => {
//     if (cmd === 'pwd'){
//         console.log('cmd', cmd, 'HIII');
//         process.stdout.write(process.cwd());
//     }
// };

module.exports.pwdCmd = pwdCommand;

console.log('changes')
