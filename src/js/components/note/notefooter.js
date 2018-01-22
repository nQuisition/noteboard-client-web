import React from 'react';

const NoteFooter = ({ id, onDeleteClick, deleting }) => {
  const className = "note-footer";
  return <div className={className}>
    <button disabled={deleting} onClick={() => onDeleteClick(id)}>Delete</button>
  </div>
};

export default NoteFooter;
