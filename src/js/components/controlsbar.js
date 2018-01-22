import React from 'react';
import Config from '../config';

class ControlsBar extends React.Component {
  render() {
    const className = "controls-bar";
    return <div className={className}>
      <button onClick={() => { this.props.onSignInClick() }}>Sign In</button>
      <button onClick={() => { this.props.onFetchClick() }}>Get</button>
      <label for="note_title">Note title:</label>
      <input type="text" name="note_title" id="note_title" ref={input => this.note_title = input}/>
      <label for="note_body">Note body:</label>
      <input type="text" name="note_body" id="note_body" ref={input => this.note_body = input}/>
      <button onClick={() => { this.props.onAddClick(this.note_title.value, this.note_body.value) }}>Add</button>
      <span>Username: {this.props.user.name}</span>
    </div>
  }
}

export default ControlsBar;
