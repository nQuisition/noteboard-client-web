import React from 'react';
import NotificationBase from './notification/notificationbase';

const NotificationArea = ({ notifications, onNotificationExpire }) => {
  let className = "notification-area";
  if(notifications.length > 0) {
    className += " active";
  }
  const elements = notifications.map(notification =>
    <NotificationBase key={notification.id} notification={notification} onNotificationExpire={onNotificationExpire}/>
  );
  return <div className={className}>
    {elements}
  </div>
}

export default NotificationArea;
