import 'babel-polyfill';
import program from 'commander';

import emit from './cli-emit';

program
  .version(require('../package.json').version);

// emit
//
program
  .command('emit')
  .description('Emits an event into the goodly cluster')
  .option('-h, --host <host>', 'the RabbitMQ host, defaults to \'localhost\'')
  .option('-e, --event <event>', 'the route for the event')
  .option('-d, --data [data]', 'the data to send')
  .action((options) => emit(options).catch(console.log));

program
  .parse(process.argv);

if (!program.args.length) program.help();
