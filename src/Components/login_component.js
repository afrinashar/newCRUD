 
import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigation=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://16.171.239.100:3004/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      
         if (data.status === "Login Success") {
          notifySuccess()
          window.location.href = "./";
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("token", data.data);
         // window.localStorage.setItem("loggedIn", true);

         
        }
        else{
        var notifyError = () => toast.success("Logged In success");
     notifyError()
        }
        navigation("/") 
      });
  }
 var notifySuccess = () => toast.success("Logged In success");
 
  return (
    <div className="auth-wrapper">
      <div className="auth-inner d-flex justify-content-center align-items-center w-50 mt-5">
    <Card className="card w-25 m-5 p-5 w-75 ">   <form onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div className="mb-3 h-25">
            <label className="text-bold">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
<div className="bottom float-end ">
          <div className="  ">
            <button type="submit" className="btn btn-primary float-end p-2 btn-sm active">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
          Not yet to register  <a href="/sign-up"> Sign Up</a>
          </p></div>
        </form></Card> 
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
    </div>
  );
 
 
}