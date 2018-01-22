import React from 'react';

import NoteBoard from '../containers/noteboard';
import Controls from '../containers/controls';
import NotificationBoard from '../containers/notificationboard';

import { connect } from 'react-redux';
import { login } from '../actions/useractions';
import { fetchNotes } from '../actions/notesactions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem('jwtToken');
    if(token) {
      props.login(token);
      props.fetchNotes();
    }
  }

  render() {
    const className = "board";
    return <div>
      <Controls />
      <NoteBoard />
      <NotificationBoard />
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: jwt => { dispatch(login(jwt)); },
    fetchNotes: () => { dispatch(fetchNotes()); }
  };
};

export default connect(null, mapDispatchToProps)(Main);
