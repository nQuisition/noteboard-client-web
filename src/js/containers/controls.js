import { connect } from 'react-redux';
import { login, signIn } from '../actions/useractions';
import { fetchNotes, addNote } from '../actions/notesactions';
import ControlsBar from '../components/controlsbar';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchClick: () => { dispatch(fetchNotes()); },
    onAddClick: (title, body) => { dispatch(addNote(title, body)); },
    onSignInClick: () => { dispatch(signIn('user@noteboard.com', 'password'))
      .then(() => { dispatch(fetchNotes()) }); }
  };
};

const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlsBar);

export default Controls;
