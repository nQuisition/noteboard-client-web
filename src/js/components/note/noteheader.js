import React from 'react'

const NoteHeader = ({ title }) => {
  const className = "note-header";
  return <div className={className}>
    {title}
  </div>
};

export default NoteHeader;
