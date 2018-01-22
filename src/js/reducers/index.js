import { combineReducers } from 'redux';

import notes from './notesreducer';
import user from './userreducer';
import notifications from './notificationsreducer';

export default combineReducers ({
  notes, user, notifications
});
