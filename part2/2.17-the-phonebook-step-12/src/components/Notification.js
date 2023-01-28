import React from "react";

const Notification = ({ notification }) => {
  if (!notification || !notification.text || !notification.style) {
    return null;
  }

  const baseStyle = {
    backgroundColor: 'lightGrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  };

  const notificationStyle = notification.style === 'success' 
    ? {...baseStyle, color: 'green'}
    : {...baseStyle, color: 'red'};

    return (
    <div style={notificationStyle}>
      {notification.text}
    </div>
  )
}

export default Notification;