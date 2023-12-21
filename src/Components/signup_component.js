 
import React, { Component, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "afrinj") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(firstName, lastName, email, password);
      fetch(`http://16.171.239.100:3004/register`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          firstName,
          email,
          lastName,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status  === "User Register") {
            var notifySuccess = () => toast.success("Registration success");
            notifySuccess()
            window.location.href = "./";
           // alert("Registration Successful");
          } else {
            var notifyError = () => toast.error("Registration Error");
            notifyError()
          //  alert("Something went wrong");
          }
        });
    }
  };

  return (<>
    <div className="auth-wrapper d-flex justify-content-center align-items-center ">
    <div className="auth-inner d-flex justify-content-center  align-items-center w-75 mt-5">
   <div class="container-fluid  "> 
      <form  className="  shadow-lg p-5 mb-5 bg-body rounded justify-content-space-between" onSubmit={handleSubmit}>
       
          <h1 className="text-primary">Sign Up</h1>
          <div className="px-2 d-flex gap-1">
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label className="col-form-label col-form-label-sm">Secret Key</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label className="col-form-label col-form-label-sm">First name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="First name"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="col-form-label col-form-label-sm">Last name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Last name"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="col-form-label col-form-label-sm">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="col-form-label col-form-label-sm">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-sm border border-light active shadow-lg    mb-5   rounded">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">Login?</a>
          </p>
      </form>   </div>
      </div>
    </div>
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
    /></>
  );
          }
          