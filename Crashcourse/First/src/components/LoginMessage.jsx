// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default LoginMessage;
