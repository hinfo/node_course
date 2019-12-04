
const fs = require('fs');
const book = {
    title: "Ego is our enemy",
    author: "Me"
};

const bookJSON = JSON.stringify(book);

const parseJSON = JSON.parse(bookJSON);

console.log("Object in string -> " + bookJSON);
console.log("String in object -> " + parseJSON.title);
fs.writeFileSync('1-json.json', bookJSON);
fs.readFileSync('1-json.json');
