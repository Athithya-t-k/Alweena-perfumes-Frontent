import React, { useState } from 'react';

const Forgetpass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      // Code to handle password reset
      setMessage('Password successfully reset!');
    } else {
      setMessage('Passwords do not match.');
    }
  };

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', color: 'darkgoldenrod', padding: '20px', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', color: 'black' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', color: 'black' }}
        />
      </div>
      <button onClick={handleResetPassword} style={{ backgroundColor: 'darkgoldenrod', color: 'black', padding: '8px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Reset Password</button>
      {message && <p style={{ marginTop: '10px', textAlign: 'center', color: 'white' }}>{message}</p>}
    </div>
  );
};

export default Forgetpass ;
