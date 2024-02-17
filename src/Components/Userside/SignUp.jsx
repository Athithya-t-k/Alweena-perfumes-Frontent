import React from 'react';
// import {Button} from tailwind
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate()
  

  const [error, setErr] = useState('')

  const [data, setData] = useState({
    UserName: "eggvd",
    email: "vf@fd",
    password: "A!123asd",
    confPassword: "A!123asd",

  });

  const changeData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    console.log(data);

  }



  async function validation(event) {
    event.preventDefault()
    const password = data.password;
    const confPassword = data.confPassword;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const test = regex.test(password)
    if (test && password === confPassword) {
      try{
      setErr('');
      console.log("poooi");

        const res = await axios.post("http://localhost:4004/signuppost", data)
        
        return true;

      }catch(error){
        console.log(error);
        if(error.response.status===400)
        {
          setErr(error.response.data.error)
        }
      }

    } else {
      if (!test) {
        setErr('Password must contain 8 characters with uppercase, lowercase, special character, and number.');
      } else if (password !== confPassword) {
        setErr('Your passwords do not match.');
      }
      return false;
    }
    

  }





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action='post' onSubmit={validation}>
          <div className="rounded-md shadow-sm -space-y-px">


            <div>
              <label htmlFor="UserName" className="sr-only">
                UserName
              </label>
              <input
                id="UserName"
                name="UserName"
                type="UserName"

                // value = {data.userName}
                value={data.UserName}
                onChange={changeData}
                autoComplete="UserName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="UserName"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={data.email}
                onChange={changeData}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={changeData}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="Confpassword" className="sr-only">
                Password
              </label>
              <input
                id="Confpassword"
                name="confPassword"
                type="password"
                value={data.confPassword}
                onChange={changeData}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Conform Password"
              />
            </div>
          </div>
          <p className='text-red-600'>{error}</p>
          <div>
            <button className='bg-emerald-950 text-white w-16 h-10 rounded-xl' 


            > Create
            </button>
            

            <p >Already have an account ? please <Link to="/login">Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
