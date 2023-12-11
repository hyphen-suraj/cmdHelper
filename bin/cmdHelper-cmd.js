const program = require('commander');
const cmd = require('../actions/cmd');

program
  .command('set')
  .description('Set Command')
  .action(cmd.set);

program
  .command('get')
  .description('Get Command')
  .action(cmd.get);

program
  .command('remove')
  .description('Remove Command')
  .action(cmd.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}