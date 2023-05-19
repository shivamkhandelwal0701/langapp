import lg from "../assets/girl-with-many-thoughts_1308-101790.jpeg";
import React from "react";
import "./dashboard.css";
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
   <nav className="navbar navbar-dark bg-dark">
  <h1 className="navbar-brand"> &nbsp; Language Learning App</h1>
  <div className="d-flex justify-content-end">
    <Dropdown className="drop">
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="btn btn-outline-light mr-2">
        User
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{user.name}</Dropdown.Item>
        <Dropdown.Item href="/home">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
</nav>



    <div className="main">
     
    <section>
      <div className="container mt-4">
        <div className="row h-100 justify-content-center align-items-center full-height">
          <div className="col-lg-6">
            <div className="card1 shadow-0">
              <img src={lg} className="card-image" alt="lg" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card1">
              <div className="card-body">
                <h1 className="card-title heading">
                  Which language do you want to learn?
                </h1>
                <div className="button-container">
                  <Link to="/Chinese">
                    <button
                      type="button"
                      className="btn btn-success fs-3 p-3 button"
                    >
                      Chinese
                    </button>
                  </Link>
                  <Link to="/french">
                    <button
                      type="button"
                      className="btn btn-warning mt-2 fs-3 p-3 button"
                    >
                      French
                    </button>
                  </Link>
                  <Link to="/korean">
                    <button
                      type="button"
                      className="btn btn-info mt-2 fs-3 p-3 button"
                    >
                      Korean
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
    <footer className="bg-dark text-center text-white py-3 ">
        &copy; {new Date().getFullYear()} Language Learning. All rights
        reserved.
      </footer>
    </>
  );
}

export default Dashboard;
