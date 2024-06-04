// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import "../App.css"
import gii from "../taskyy.gif"
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setpassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      window.location.href="/todo"
    } catch (error) {
      alert(error.message);
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
      {/* <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form> */}

      {/*  */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#ff5459] sm:text-3xl logo-maintext">
          TaskNinja
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-[#162635]">
          "Ready to get organized? Let's do it together!"
          </p>
          <center>
  <img src={gii} width="150px"></img>
  </center>
          <form onSubmit={handleRegister}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium text-[#162635]">
              Create your Account
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
              Register
            </button>

            <p className="text-center text-sm text-[#162635]">
              Already have an Account?
              <a className=" text-[#ff5459]" href="/login">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;


/*
import { useState, useEffect } from "react";

function Register() {
  const [showpassword, setpassword] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setform((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const hidepass = () => {
    if (showpassword === true) {
      setpassword();
    } else {
      setpassword(true);
    }
  };
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  const Handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create", form)
      .then((res) => {
        setform({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            "Transform Your Vision into Reality - Build Your Stunning Website
            Today!"
          </p>

          <form
            onSubmit={Handlesubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Create your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={onInputChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
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
              <label htmlFor="text" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={onInputChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
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
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={onInputChange}
                />

                <span
                  onClick={hidepass}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
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
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-500">
              already have a account?
              <a className="underline" href="/login">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;

*/