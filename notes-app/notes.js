const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return 'Your notes';
};

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)

};

const removeNote = (title) => {
    console.log("Removing " + title);
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed."));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
};

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse('Listing your notes!'))
    notes.forEach((note)=>{
        console.log(note.title);
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note){
        console.log(note.body);
    } else {
        console.log("Note not found!");
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};