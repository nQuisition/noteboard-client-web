import React from 'react';

const NOTIFICATION_FADE_TIME = 5000;

class NotificationBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fading: true };
  }

  componentDidMount() {
    this.liveTimeout = setTimeout(() => {
      this.liveTimeout = null;
      this.setState({ fading: true });
      setTimeout(() => {
        this.props.onNotificationExpire(this.props.notification.id)
      }, 500);
    }, NOTIFICATION_FADE_TIME);
    setTimeout(() => this.setState({ fading: false }));
  }

  render() {
    const { notification } = this.props;
    let className = "notification";
    className += " " + notification.type;
    if(this.state.fading) {
      className += " fading";
    }
    return <div className={className}>
      <div className="notification-body">
        {notification.message}
      </div>
      <div className="notification-close"
        onClick={() => {
          if(this.liveTimeout) {
            clearTimeout(this.liveTimeout);
            this.liveTimeout = null;
            this.props.onNotificationExpire(this.props.notification.id);
          }
        }}>
        X
      </div>
    </div>
  }
}

export default NotificationBase;
