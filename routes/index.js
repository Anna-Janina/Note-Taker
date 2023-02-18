// Import data
const fs = require('fs');
const write = require('../db/db.json');

// Middleware for notes
const writeNote = (note) => {
    note.id = Math.random().toString();
    const newNote = write || [];
    newNote.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) => {
        if (err) throw err;
    });
    console.info('New task has been added');
};

// Middleware for deleting notes
const deleteNote = (note) => {
    for (let i = 0; i < write.length; i++) {
        if (write[i].id === note.id) {
            write.splice(i, 1);
        }
    }
}

// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'DELETE': {
        console.info(`☠️ ${fgCyan}${req.method} request to ${req.path}`);
        break;
    }
      default:
        console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  module.exports = { writeNote, deleteNote, clog };
  

