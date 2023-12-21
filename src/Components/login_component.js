 
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
    <div className="auth-wrapper d-flex justify-content-center align-items-center ">
    <div className="auth-inner d-flex justify-content-center  align-items-center w-75 mt-5">
   <div class="container-fluid  "> 
      <form  className="  shadow-lg p-5 mb-5 bg-body rounded justify-content-space-between" onSubmit={handleSubmit}>
           <h1 className="text-primary   d flex  justify-content-center align-items-center text-border border-dark     ">Log In</h1>

          <div className="mb-3 p-2 h-25">
            <label className=" md-text-light col-form-label col-form-label-sm">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm w-100"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 p-2">
            <label  className="col-form-label col-form-label-sm" clsfor="password">Password</label>
            <input
            id="password"
              type="password"
              className="form-control form-control-sm"
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
              <label className="custom-control-label fw-lighter m-1" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
<div className="bottom   ">
          <div className=" ">
            <button type="submit" className="btn btn-primary   float-start m-2  btn-sm border border-light active shadow-lg  p-2    rounded">
              Submit
            </button>
          </div>
          <p class="text-center text-muted mt-5 mb- fw-lighter">
          Not register  <a className="fw-bold  text-body" href="/sign-up"> Sign Up</a>
          </p></div>
        </form>  </div>
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