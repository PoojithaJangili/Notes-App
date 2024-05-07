const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
fs.writeFileSync('notes.txt', 'My name is Poojitha.\n')
//  'writeFile' or 'writeFileSync' methods are responsible for writing some data to a file 

//
// Challenge1: Append a message to notStrictEqual.txt
// 
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', 'I am a Node.js Developer.')
// fs.writeFileSync('notes.txt', 'My name is Poojitha. ')
fs.appendFileSync('notes.txt', '\nI like backend development.')