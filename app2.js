// const p = require('./utilities.js')
// // In the above line "./" helps us to go out of the actual file i.e., in this case "app2.js" and goes to the whole folder "NOTES-APP", then to other file "utilities.js"
// const sum = p(9, -3)
// console.log(sum)

// Here is my challenge-solution
// const res = require('./notes.js')
// const msg = res()
// console.log(msg)

const res = require('./notes.js')
const log = console.log;
const msg = res()
log(msg)

// Usage of 'validator' module
// const validator = require('validator')
// log(validator.isURL('https:/poojithajangili.github.io/PPortfolio.github.io/'))

// Challenge --> Using 'Chalk' module
const chalk = require('chalk')
log(chalk.green('Success!'))
log(chalk.strikethrough(msg))
// log(chalk.cyan(validator.isEmail('poojitha@example.com')))

console.log(process.argv[2])

