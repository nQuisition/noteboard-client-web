import React from 'react';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: this.props.note, editing: false };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(!this.state.editing && !this.props.note && nextProps.note) {
      this.setState({ note: nextProps.note, editing: true });
    } else if(this.state.editing && this.props.note && !nextProps.note) {
      this.setState({ note: nextProps.note, editing: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if(this.props.updateRequired) {
      const { onUpdateRequired } = this.props;
      const { note } = this.state;
      onUpdateRequired(note.id, note.title, note.body);
    }
  }

  handleTitleChange(event) {
    this.setState({ note: {...this.state.note, title: event.target.value} });
  }

  handleBodyChange(event) {
    this.setState({ note: {...this.state.note, body: event.target.value} });
  }

  render() {
    const { note } = this.state;
    console.log("Rendering!", note);
    let className = "note-editor";
    let style = { display: 'none' };
    if(note) {
      className += " active";
      style = {};
    }
    return <div style={style} className={className}>
      {note &&
        <div>
          <input type="text" value={note.title} onChange={this.handleTitleChange} />
          <textarea value={note.body} onChange={this.handleBodyChange} />
          <br />
          <button onClick={() => this.props.onCancelEditClick() }>CANCEL</button>
        </div>
      }
    </div>
  }
};

export default NoteEditor;
