import React, { useState } from 'react'
import { useRef } from 'react';


function VerifyOtp() {



    // Refs for each OTP input field
  const otpInputs = Array.from({ length: 6 }, () => useRef(null));

  // Function to focus the next input field
  const focusNextInput = (index) => {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  // Function to handle input change in OTP fields
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    // If input value is entered and it's not the last input field, focus the next field
    if (value && index < otpInputs.length - 1) {
      focusNextInput(index);
    }
}
  return (
    <>
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">OTP Validation</h1>



       
        
        {/* OTP Input Fields */}



        {/* <div>
              <label htmlFor="phoneNumber" className="sr-only">
                MobleNumber
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                value={data.phoneNumber}
                onChange={changeData}
                autoComplete="phoneNumber"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="MobileNumber"
              />
            </div> */}



        <label htmlFor="otp" className="text-left">
          Enter OTP
        </label>
        <div className="flex justify-around mb-4">
          {otpInputs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              type="text"
              className="w-9 p-1 border rounded"
              maxLength="1"
              onChange={(event) => handleInputChange(index, event)}
            />
          ))}
        </div>
        {/* Validate OTP Button */}
        <button className="mt-6 bg-amber-400 text-white p-2 rounded w-full">
          Validate OTP
        </button>
      </div>
    </div>
    </>
  )
}

export default VerifyOtp
