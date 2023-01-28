import React from "react";

const Notification = ({ notification }) => {
  if (!notification) {
    return null;
  }
  const notificationStyle = {
    backgroundColor: 'lightGrey',
    color: 'green',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  };

  return (
    <div style={notificationStyle}>
      {notification}
    </div>
  )
}

export default Notification;