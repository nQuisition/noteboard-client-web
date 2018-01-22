import React from 'react';

const NoteBody = ({ text }) => {
  const className = "note-body";
  return <div className={className}>
    {text}
  </div>
};

export default NoteBody;
