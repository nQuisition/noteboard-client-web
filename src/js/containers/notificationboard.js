import { connect } from 'react-redux';
import { removeNotification } from '../actions/notificationsactions';
import NotificationArea from '../components/notificationarea';

const mapStateToProps = state => {
  return {
    notifications: state.notifications.notifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNotificationExpire: id => { dispatch(removeNotification(id)); }
  }
}

const NotificationBoard = connect(mapStateToProps, mapDispatchToProps)(NotificationArea);

export default NotificationBoard;
