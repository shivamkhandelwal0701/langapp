//login.js
//login page
import "./login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(res, "res")

      if (res.status === 200) {
        const { name, email, phone } = res.data.data;
        //
        console.log(res);
        console.log(res.data); //isme response.data me message aa rha hai jisme
        localStorage.setItem("user", JSON.stringify({ name, email, phone }));
        //
        navigate("/dashboard");
        alert("Login successful!");
      }
    } catch (error) {
      // console.log(res, "res")
      alert("Invalid email or password");
      console.error(error);
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
  };

  return (
    <><>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary">
          <h1 className="navbar-brand m-1">&nbsp; Login Page</h1>
        </nav>
      <div className="main">
        
      
        <div className="container mt-2">
          <div className="row ">
            <div className="col-md-6 mt-5 mx-auto">
              <div className="card mycard shadow-lg rounded-lg">
                <div className="card-body">
                  <div className="card-header bg-primary text-white">
                    <h1 className="text-center mt-3 mb-3">Login</h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="mt-3" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control mt-3"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="enter your email"
                        onChange={handleChangeEmail}
                        onBlur={handleChangeEmail}
                        required
                      />
                      {emailError && (
                        <span className="text-danger">{emailError}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="mt-3" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control mt-3"
                        id="password"
                        name="password"
                        placeholder="enter your password"
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
                      Log in
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary">
                        Sign up here
                      </Link>
                    </p>
                  </div>
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
    </>
  );
}

export default Login;

// navigate("/dashboard", { state: { name: res.data.data.name } });

// import UserContext from "./UserContext";
// setUser(res.data.data); // set the user in context
