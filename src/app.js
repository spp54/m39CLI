const yargs = require("yargs");

console.log(yargs.argv);

if (yargs.argv.actor) {
  console.log(`It's ${yargs.argv.actor}`);
}
