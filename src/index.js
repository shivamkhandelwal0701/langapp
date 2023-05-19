import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import UserContext from "./UserContext";

// ReactDOM.render(
//   <Router>
//     <UserContext.Provider value={{ user: null }}>
//       <App />
//     </UserContext.Provider>
//   </Router>,
//   document.getElementById("root")
// );



// useContext.js
// import React from "react";

// const UserContext = React.createContext(null);

// export default UserContext;