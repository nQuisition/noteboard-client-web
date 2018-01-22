export const FADE_NOTIFICATION = 'FADE_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export function removeNotification(id) {
  return dispatch => {
    dispatch({type: REMOVE_NOTIFICATION, payload: { id: id }});
  }
}

/*export function removeNotification(id, fadeTime = 300) {
  return dispatch => {
    dispatch({type: FADE_NOTIFICATION, payload: { id: id }});
    setTimeout(() => {
      dispatch({type: REMOVE_NOTIFICATION, payload: { id: id }});
    }, fadeTime);
  }
}*/
