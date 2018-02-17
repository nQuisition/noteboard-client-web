import { callApi } from '../config';

export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const ADD_NOTES_REQUEST = 'ADD_NOTES_REQUEST';
export const ADD_NOTES_SUCCESS = 'ADD_NOTES_SUCCESS';
export const ADD_NOTES_FAILURE = 'ADD_NOTES_FAILURE';

export const DELETE_NOTES_REQUEST = 'DELETE_NOTES_REQUEST';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';
export const DELETE_NOTES_FAILURE = 'DELETE_NOTES_FAILURE';

export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const EDIT_NOTE_START = 'EDIT_NOTE_START';
export const EDIT_NOTE_STOP = 'EDIT_NOTE_STOP';
export const EDIT_NOTE_CANCEL = 'EDIT_NOTE_CANCEL';

export function fetchNotes() {
  return dispatch => {
    dispatch({type: FETCH_NOTES_REQUEST});
    callApi('get', 'note/')
      .then(response => {
        dispatch({type: FETCH_NOTES_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: FETCH_NOTES_FAILURE, payload: err});
      });
  };
}

export function addNote(title, body) {
  return dispatch => {
    dispatch({type: ADD_NOTES_REQUEST});
    const params = { title, body };
    callApi('post', 'note/', params)
      .then(response => {
        dispatch({type: ADD_NOTES_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ADD_NOTES_FAILURE, payload: err});
      });
  };
}

export function deleteNote(id) {
  return dispatch => {
    dispatch({type: DELETE_NOTES_REQUEST, payload: {id}});
    const params = { noteId:id };
    callApi('delete', 'note/', params)
      .then(response => {
        dispatch({type: DELETE_NOTES_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: DELETE_NOTES_FAILURE, payload: err});
      });
  };
}

export function updateNote(id, title, body) {
  return dispatch => {
    dispatch({type: UPDATE_NOTE_REQUEST});
    const params = { noteId:id, note: {title, body} };
    callApi('patch', 'note/', params)
      .then(response => {
        dispatch({type: UPDATE_NOTE_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: UPDATE_NOTE_FAILURE, payload: err});
      });
  }
}

export function startNoteEdit(id) {
  return dispatch => {
    dispatch({type: EDIT_NOTE_START, payload: {id}});
  }
}

export function stopNoteEdit() {
  return dispatch => {
    dispatch({type: EDIT_NOTE_STOP});
  }
}

export function cancelNoteEdit() {
  return dispatch => {
    dispatch({type: EDIT_NOTE_CANCEL});
  }
}
