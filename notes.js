const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}
// const getNotes = function () {
//     return 'Your notes...'
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //****'console.log' can also be used as debugger to find the error****
    // console.log(duplicateNote)

    debugger

    // if(duplicateNotes.length === 0) {
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    // const notesToKeep = notes.filter( function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'))
    }
    else{
        console.log(chalk.green.inverse('Note removed!'))
    }
    saveNotes(notesToKeep)
    // const ttr = notes.filter( function (note) {
    //     return note.title === title
    // })

    // if(ttr.length === 0){
    //     console.log('Title doesnt exists')
    // }
    // else{
    //     notes.delete({
    //         title:title,
    //         body:body
    //     })
    //     saveNotes(notes)
    //     console.log('Removed the title!')
    // }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your notes...'))
    // const titleNotes = this.notes.forEach((note) => {
    //     return note.title
    // })
    // return titleNotes
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
            
    if(noteToRead)
    {
        console.log(chalk.blue.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }
    else{
        console.log(chalk.red.inverse('Error'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}