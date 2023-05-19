import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
     <header><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand m-1">Language Learning</h1>

          <a className="navbar-brand m-1" aria-current="page" href="/login">
            <strong>Login</strong>
          </a>
        </div>
      </nav></header>
    <div className="main" >
     
      <div className="container container1 py-5 mt-0">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <h1 className="display-3">Welcome to Language Learning</h1>
              <p className="lead">
                Start your language learning journey today and explore the world
                of languages.
              </p>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-md-6 mb-4">
                <h2 className="text-primary">Why Learn a New Language?</h2>
                <p>
                  Learning a new language opens doors to new opportunities,
                  enhances cultural understanding, and boosts cognitive
                  abilities. Whether you're traveling, working, or simply
                  interested in expanding your horizons, language learning is a
                  valuable skill to have.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h2 className="text-primary">Our Language Learning Platform</h2>
                <p>
                  Our platform provides a comprehensive approach to language
                  learning. With interactive knowledge and understanding,
                  immersive exercises, and personalized feedback, you'll be able
                  to progress at your own pace and achieve fluency in your
                  desired language.
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <p className="lead">
                Ready to embark on your language learning journey?
              </p>
              <a href="/login" className="btn btn-primary btn-lg mt-3">
                Sign In / Register
              </a>
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

export default Home;
