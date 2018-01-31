import React from 'react';
import BaseNote from './note/basenote';
import NoteEditor from './noteeditor/noteeditor';
import NoteEditorBG from './noteeditor/noteeditorbg';

const Board = ({ notes, editingNote, updateRequired,
    onDeleteClick, onNoteClick, onEditorBGClick, onUpdateRequired,
    onCancelEditClick }) => {
  const className = "board";
  const items = notes.map(note =>
    <BaseNote key={note._id} note={note} onDeleteClick={onDeleteClick} onNoteClick={onNoteClick} />
  );
  return <div className={className}>
    { items }
    <NoteEditorBG onBGClick={onEditorBGClick} note={editingNote}/>
    <NoteEditor note={editingNote} updateRequired={updateRequired} onUpdateRequired={onUpdateRequired}
      onCancelEditClick={onCancelEditClick} />
  </div>
};

export default Board;
