import { connect } from 'react-redux';
import { deleteNote, startNoteEdit, stopNoteEdit, updateNote } from '../actions/notesactions';
import Board from '../components/board';

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    editingNote: state.notes.editingNote,
    updateRequired: state.notes.updateRequired
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => { dispatch(deleteNote(id)); },
    onNoteClick: note => { dispatch(startNoteEdit(note)); },
    onEditorBGClick: () => { dispatch(stopNoteEdit()); },
    onUpdateRequired: (id, title, body) => { dispatch(updateNote(id, title, body)); }
  }
}

const NoteBoard = connect(mapStateToProps, mapDispatchToProps)(Board);

export default NoteBoard;
