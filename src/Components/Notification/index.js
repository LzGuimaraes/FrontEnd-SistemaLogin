import React from 'react';
import { NotificationContainer, NotificationContent, CloseButton } from './style';

const Notification = ({ type, message, onClose }) => {
  return (
    <NotificationContainer type={type}>
      <NotificationContent>
        {message}
      </NotificationContent>
      <CloseButton onClick={onClose}>×</CloseButton>
    </NotificationContainer>
  );
};

export default Notification;