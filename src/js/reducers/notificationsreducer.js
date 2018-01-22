import { ADD_NOTES_SUCCESS, ADD_NOTES_FAILURE,
  DELETE_NOTES_SUCCESS, DELETE_NOTES_FAILURE,
  UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAILURE } from '../actions/notesactions';

import { REMOVE_NOTIFICATION } from '../actions/notificationsactions';

export default function reducer(state = {
  notifications: [],
  nextId: 0
}, action) {
  let type = 'error';
  let message = '';
  switch(action.type) {
    case ADD_NOTES_FAILURE: {
      message = 'Adding note failed';
      break;
    }
    case DELETE_NOTES_FAILURE: {
      message = 'Deleting note failed';
      break;
    }
    case UPDATE_NOTE_FAILURE: {
      message = 'Updating note failed';
      break;
    }

    case ADD_NOTES_SUCCESS: {
      type = 'success';
      message = 'Successfully added a note';
      break;
    }
    case DELETE_NOTES_SUCCESS: {
      type = 'success';
      message = 'Successfully deleted a note';
      break;
    }
    case UPDATE_NOTE_SUCCESS: {
      type = 'success';
      message = 'Successfully updated a note';
      break;
    }

    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter(item => item.id !== action.payload.id)
      };
    }

    default: {
      return state;
    }
  }
  return {
    ...state,
    nextId: state.nextId + 1,
    notifications:[...state.notifications, {id: state.nextId, type, message}]
  };
}
