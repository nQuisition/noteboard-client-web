import React from 'react';

class NoteEditorBG extends React.Component {
  constructor(props){
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  componentWillMount() {
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    let className = "note-editor-bg";
    let style = { display: 'none' };
    if(this.props.note) {
      className += " active";
      style = {
        width: this.state.width,
        height: this.state.height
      };
    }
    return <div style={style} className={className} onClick={() => this.props.onBGClick()}></div>
  }
}

export default NoteEditorBG;
