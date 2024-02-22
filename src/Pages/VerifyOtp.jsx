import axios from 'axios';
import React, { useState, useRef } from 'react';

function VerifyOtp() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error,setError] = useState()
 

  const otpInputs = Array.from({ length: 6 }, () => useRef(null));

  const focusNextInput = (index) => {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (value && index < otpInputs.length - 1) {
      focusNextInput(index);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    // Handle form submission here, e.g., validate OTP

    try{
    const response = await axios.post("http://localhost:4004/send-otp", {phoneNumber})
    // Clear form fields after submission if needed
    
    if(response.status=== 200){

        console.log(response.data);
        setError("")
        
    }

    }catch(error){

        if(error.response &&  error.response.data.error){
            setError(error.response.data.error)
        }
        else{
            setError("Error occured please try again")
        }
    }  
   
};

const verifyOtp = async (e) =>{

    e.preventDefault()
    alert("verify")

    console.log(otp,phoneNumber);

    const response = await axios.post("http://localhost:4004/verifyOTp",{otp,phoneNumber});
  }
  


  

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-black border border-gray-800 rounded p-8 shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl mb-4">OTP Validation</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full rounded px-3 py-2 bg-gray-800 border border-gray-700 text-white"
            />
            <div className='text-gray-50'>{error && (<div>{error}</div>)}</div>
            
            <button
            type="submit"
            onClick={ handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4  mt-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get OTP
          </button>
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-white">
              OTP
            </label>
            <div className="flex">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="number"
                  id={`otp${index + 1}`}
                  name={`otp${index + 1}`}
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleInputChange(index, e)}
                  
                  ref={otpInputs[index]}

                  className="w-1/6 rounded px-3 py-2 bg-gray-800 border border-gray-700 text-white mr-2"
                />
              ))}
            </div>
          </div>
          <button
          
        //   onSubmit={}
            type="submit"
            onClick={verifyOtp}
           
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
