import React, { useEffect, useState } from "react";

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); // Automatically hide the notification after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
      <p>{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="mt-2 text-sm underline"
      >
        Dismiss
      </button>
    </div>
  );
};

export default Notification;
