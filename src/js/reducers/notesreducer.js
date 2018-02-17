import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE,
  ADD_NOTES_REQUEST, ADD_NOTES_SUCCESS, ADD_NOTES_FAILURE,
  DELETE_NOTES_REQUEST, DELETE_NOTES_SUCCESS, DELETE_NOTES_FAILURE,
  UPDATE_NOTE_REQUEST, UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAILURE,
  EDIT_NOTE_START, EDIT_NOTE_STOP, EDIT_NOTE_CANCEL } from '../actions/notesactions';

function processNote(note) {
  return {
    ...note,
    active: true,
    deleting: false
  };
}

export default function reducer(state = {
  notes: [],
  fetching: false,
  fetched: false,
  editingNote: null,
  updateRequired: false
}, action) {
  switch(action.type) {
    case FETCH_NOTES_REQUEST: {
      return { ...state, fetching: true };
    }
    case FETCH_NOTES_SUCCESS: {
      return {
        ...state,
        notes: action.payload.notes.map(note => processNote(note)),
        fetching: false,
        fetched: true
      };
    }
    case FETCH_NOTES_FAILURE: {
      return {...state, fetching: false, error: action.payload};
    }

    case ADD_NOTES_SUCCESS: {
      return {...state, notes: [...state.notes, processNote(action.payload.note)]};
    }
    case ADD_NOTES_FAILURE: {
      return {...state, error: action.payload};
    }

    case DELETE_NOTES_REQUEST: {
      return {...state, notes: state.notes.map(note =>
        note.id === action.payload.id?{...note, deleting:true}:note)};
    }
    case DELETE_NOTES_SUCCESS: {
      return {...state, notes: state.notes.filter(note => note.id !== action.payload.note.id)};
    }
    //TODO need to enable delete button for the note, but where to get the note._id?
    case DELETE_NOTES_FAILURE: {
      return {...state, error: action.payload};
    }

    case UPDATE_NOTE_REQUEST: {
      return {...state, updateRequired: false, editingNote: null};
    }
    case UPDATE_NOTE_SUCCESS: {
      const updatedNote = action.payload.note;
      return {
        ...state,
        notes: state.notes.map(note => note.id!==updatedNote.id?note:{...note, ...updatedNote})
      };
    }

    case EDIT_NOTE_START: {
      return {
        ...state,
        editingNote: {
          ...state.notes.find(x => x.id === action.payload.id)
        }
      };
    }
    case EDIT_NOTE_STOP: {
      return {...state, updateRequired: true};
    }
    case EDIT_NOTE_CANCEL: {
      return {...state, updateRequired: false, editingNote: null};
    }
  }
  return state;
}
