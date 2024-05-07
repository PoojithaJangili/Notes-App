const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2];

// console.log(process.argv)
// if(command === 'add')
// {
//   console.log('Adding note!')
// } else if(command === 'remove')
// {
//     console.log('Removing note!')
// }

//Customize yargs version
yargs.version('1.1.1')

// add, remove, read, list 

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  //'builder's value is an object
  builder: {
    title: {
       describe: 'Note title',
       demandOption: true,
       type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  // handler: function(argv) {
  //   console.log('Adding a new note!', argv)
  // }

  // handler: function(argv) {
  //   // console.log('Title: ' + argv.title)
  //   // console.log('Body: ' + argv.body)
  //   notes.addNote(argv.title, argv.body)
  // }

  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to Remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
  // handler: function(argv) {
  //   notes.removeNote(argv.title)
  // }

  // handler: function() {
  //   console.log('Removing the note!')
  // }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler(){
    notes.listNotes()
  }
  // handler(){
  //   console.log('Listing out all notes')
  // }

  // handler: function(){
  //   console.log('Listing out all notes')
  // }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title to be Read',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
  // Using ES6 method, for a function which is a 'method'
  // handler() {
  //   console.log('Reading a note!')
  // }
  // handler: function() {
  //   console.log('Reading a note!')
  // }
})

yargs.parse()

// console.log(yargs.argv)