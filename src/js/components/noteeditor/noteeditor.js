import React from 'react';

class NoteEditor extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if(this.props.updateRequired) {
      const { note, onUpdateRequired } = this.props;
      onUpdateRequired(note._id, note.title + " Updated", note.body);
    }
  }

  render() {
    const { note } = this.props;
    let className = "note-editor";
    let style = { display: 'none' };
    if(note) {
      className += " active";
      style = {};
    }
    return <div style={style} className={className}>
      {note &&
        <div>
          <div>{note.title}</div>
          <div>{note.body}</div>
        </div>
      }
    </div>
  }
};

export default NoteEditor;
