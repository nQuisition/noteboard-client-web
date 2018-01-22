import React from 'react';
import Draggable from 'react-draggable';

import NoteHeader from './noteheader';
import NoteBody from './notebody';
import NoteFooter from './notefooter';

const BaseNote = ({ note, onDeleteClick, onNoteClick }) => {
  const className = "note-container";
  return <div className={className} onClick={() => onNoteClick(note._id)}>
    <NoteHeader title={note.title} />
    <NoteBody text={note.body} />
    <NoteFooter id={note._id} onDeleteClick={onDeleteClick} deleting={note.deleting}/>
  </div>
  //<Draggable handle=".note-header" bounds=".board">
  //</Draggable>
};

export default BaseNote;
