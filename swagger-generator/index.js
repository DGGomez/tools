const program = require('commander');

program
  .version('0.0.1')
  .description('Life Choices');

program
  .command('generator')
  .alias('generate')
  .description('Make a choice')
  .action(require('./main'));

program.parse(process.argv);
