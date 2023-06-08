// Signup.js
//Signup page

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeName = (event) => {
    const name = event.target.value;
    setName(name);
    if (event.target.value.length === 0) {
      setNameError("First Name cannot be empty ");
    } else if (event.target.value.trim().length < 3) {
      setNameError("First Name should be at least 3 characters long.");
    } else {
      setNameError("");
    }
  };
  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (event.target.value.length === 0) {
      setEmailError("email cannot be empty");
    } else if (!emailPattern.test(event.target.value)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordError("");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setPasswordError("Password field cannot be empty.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
    }
  };
  const handleChangePhone = (event) => {
    const phone = event.target.value;
    setPhone(phone);
    const phonePattern = /^[6-9]\d{9}$/;
    if (event.target.value.length === 0) {
      setPhoneError("Phone Number cannot be empty ");
    } else if (!phonePattern.test(event.target.value)) {
      setPhoneError("Please enter a valid Indian phone number.");
    } else {
      setPhoneError("");
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        phone,
        password,
      });
      if (data.message === "User already exists.") {
        alert("User already exists with this email or phone number!");
      } else if (data.message === "User created successfully.") {
        // alert("Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      // alert("Signup failed, please try again later!");
    }

    // First name validation
    if (name.trim().length === 0) {
      setNameError("Name cannot be empty ");
    } else if (name.trim().length < 3) {
      setNameError("Name should be at least 3 characters long.");
    } else {
      setNameError("");
    }
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.trim().length === 0) {
      setEmailError("Email cannot be empty.");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setPasswordError("Password field cannot be empty.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }

    // Phone number validation
    const phonePattern = /^[6-9]\d{9}$/;
    if (phone.trim().length === 0) {
      setPhoneError("Phone Number cannot be empty ");
    } else if (!phonePattern.test(phone)) {
      setPhoneError("Please enter a valid Indian phone number.");
    } else {
      setPhoneError("");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary">
        <h1 className="navbar-brand m-1">&nbsp; Signup page</h1>
      </nav>
      <div className="main">
        <div className="container mt-5">
          <div className="row ">
            <div className="col-md-8  col-lg-6 mx-auto">
              <div className="mycard card shadow-lg">
                <div className="card-body">
                  <div className="card-header bg-primary text-white">
                    <h1 className="text-center mt-3 mb-3"> Signup</h1>
                  </div>
                  <form onSubmit={handleSignup}>
                    <div className="form-group">
                      <label className="mt-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChangeName}
                        onBlur={handleChangeName}
                        required
                      />
                      {nameError && (
                        <span className="text-danger">{nameError}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="mt-3" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control mt-3"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChangeEmail}
                        onBlur={handleChangeEmail}
                        required
                      />
                      {emailError && (
                        <span className="text-danger">{emailError}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="mt-2" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control mt-3"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={handleChangePhone}
                        onBlur={handleChangePhone}
                        required
                      />
                      {phoneError && (
                        <span className="text-danger">{phoneError}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="mt-3" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control mt-3"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordChange}
                        required
                      />
                      {passwordError && (
                        <span className="text-danger">{passwordError}</span>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Sign up
                    </button>
                    <div className="text-center mt-3">
                      <p>
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-center text-white py-3 ">
        &copy; {new Date().getFullYear()} Language Learning. All rights
        reserved.
      </footer>
    </>
  );
}

export default Signup;
