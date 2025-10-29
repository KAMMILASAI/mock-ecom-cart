import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="toast-close">×</button>
    </div>
  );
};

export default Toast;
