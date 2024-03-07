import React, { useState } from 'react';
import axios from 'axios';
import Login from '../Components/User/Login';

const Forgetpass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState("")
  const [page,setPage]=useState(false)

  // const handleResetPassword = () => {
  //   if (newPassword === confirmPassword) {
  //     // Code to handle password reset
  //     setMessage('Password successfully reset!');
  //   } else {
  //     setMessage('Passwords do not match.');
  //   }
  // };

  function regexpassword(newPassword) {
    if (newPassword) {
      console.log(newPassword)
      let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/
      const test = re.test(newPassword);
      if (!test) {
        setError(
          "Your password must contain 8 characters with uppercase, lowercase, special character, and number"
        );
      } else {
        setError("");
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const checkConfirm = newPassword === confirmPassword
    if (checkConfirm) {
      const response = await axios.patch('http://localhost:4004/resetpass', newPassword)
      setPage(true)
    }
    else {
      setError("password doesnt match!")
    }
    // Call regexpassword to perform password validation
  }




  return (
    <>
    {page ?(<Login/>):(<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', color: 'darkgoldenrod', padding: '20px', borderRadius: '5px' }}>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="newPassword">New Password:</label>
          <input
            required
            type="password"
            id="newPassword"
            value={newPassword}
            onBlur={(event) => regexpassword(event.target.value)}
            onChange={(event) => setNewPassword(event.target.value)}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', color: 'black' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            required
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', color: 'black' }}
          />
        </div>
        <button style={{ backgroundColor: 'darkgoldenrod', color: 'black', padding: '8px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Reset Password</button>
        {message && <p style={{ marginTop: '10px', textAlign: 'center', color: 'white' }}>{message}</p>}
        <p className='text-red-600'>{error}</p>
      </form>
    </div>)}
    </>
  );
};

export default Forgetpass;
