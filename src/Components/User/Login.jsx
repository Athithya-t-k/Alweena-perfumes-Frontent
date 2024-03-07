import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const [username,setUsername]= useState("")
  const[password,setPassword]=useState("")
  const [phoneNumber,setphoneNumber]= useState("")
  const [error,setError] = useState("")

  const backendUrl = "http://localhost:4004/login-post"

  async function handleSubmit(event){
    event.preventDefault();
    console.log(username,password);


    try{
      await axios.post(backendUrl,{
        username,
        phoneNumber,
        password
      });
      
    }catch(error){
      console.log("error occured",error);
    }
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login your Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">

          <div>
              <label htmlFor="UserName" className="sr-only">
                UserName
              </label>
              <input
                id="UserName"
                name="UserName"
                type="UserName"
                value ={username}
                onChange={(event)=>setUsername(event.target.value)}
                autoComplete="UserName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="UserName"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                phoneNumber
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                value ={phoneNumber}
                onChange={(event)=>setphoneNumber(event.target.value)}
                autoComplete="phoneNumber"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="phoneNumber"
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
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            
          </div>
         <p><Link to = "/resetotp">Forget Password</Link></p>
          <div>
            <button className='bg-emerald-950 text-white w-16 h-10 rounded-xl'>Login

            </button><br /><br />
             <p > <Link to = "/signup">Create Account</Link> </p>
          </div>
        </form>
        <p id='error'>{error}</p>
      </div>

    </div>
    </div> 
  )
}

export default Login
