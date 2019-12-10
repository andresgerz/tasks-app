const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author
  }); 
  await newNote.save(); 

  res.json({message: 'New note saved'});
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
}

notesCtrl.updateNote = async (req, res) => {
  const {title, content, duration, author} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    duration,
    author
  });
  
  res.json({message: 'Note updated'});
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({message: 'Note deleted'});
}

module.exports = notesCtrl;