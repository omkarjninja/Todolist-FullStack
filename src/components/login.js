// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import "../App.css";
import gii from "../Tasky.gif"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setpassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href="/todo"
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };
  const hidepass = () => {
    if (showpassword === true) {
      setpassword();
    } else {
      setpassword(true);
    }
  };
  
  return (
    <div className='min-h-screen bg-[#f4f6f1]'>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-lg">
  <h1 className="text-center text-2xl font-bold text-[#ff5459] sm:text-3xl logo-maintext">
    TaskNinja
  </h1>

  <p className="mx-auto mt-2 max-w-md text-center text-[#162635]">
  "Time to continue your journey. Welcome back!"
  </p>
  <center>
  <img src={gii} width="150px"></img>
  </center>

  <form
    onSubmit={handleLogin}
    
    className="mb-0 mt-3 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
  >
    <p className="text-center text-lg font-medium text-[#162635]">
      Sign in to your account
    </p>

    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>

      <div className="relative">
        <input
          type="email"
          name="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#f4f6f1]"
          placeholder="Enter email"
           value={email} onChange={(e) => setEmail(e.target.value)}
         
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-[#ff5459]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>

      <div className="relative">
        <input
          type={showpassword ? "text" : "password"}
          name="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-[#f4f6f1]"
          placeholder="Enter password"
          value={password} onChange={(e) => setPassword(e.target.value)}
         
        />

        <span
          onClick={hidepass}
          className="absolute inset-y-0 end-0 grid place-content-center px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-[#ff5459]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <button
      type="submit"
      className="block w-full rounded-lg bg-[#ff5459] px-5 py-3 text-sm font-medium text-white"
    >
      Sign in
    </button>

    <p className="text-center text-sm text-[#162635]">
      No account? 
      <a className=" text-[#ff5459]" href="/signup">
        Sign up
      </a>
    </p>
  </form>
</div>
</div>

    </div>
  );
};

export default Login;

