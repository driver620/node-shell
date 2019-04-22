let pwdCommand = function(cmd){
   if (cmd === 'pwd'){
       console.log('cmd', cmd, 'HIII');
       process.stdout.write(process.cwd());
   }
};

// module.exports.pwdCommand = cmd => {
//     if (cmd === 'pwd'){
//         console.log('cmd', cmd, 'HIII');
//         process.stdout.write(process.cwd());
//     }
// };

module.exports.pwdCommand = pwdCommand;

console.log('changes')
