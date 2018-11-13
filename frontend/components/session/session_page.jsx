import React from 'react';
import { Link } from 'react-router-dom';

const SessionPage = ({ clearErrors, demoLogin }) => (
  <div className={`session-page bg-${Math.floor(Math.random()*37)}`}>
    <div className="session-page-form-placeholder"></div>
    <div className="session-page-form  animated fadeInUp">
      <div className="session-page-form-logo"> trendr. </div>
      <div className="session-page-slogan">
        <p>Come for what you love.</p>
        <p>Stay for what you discover.</p>
        <br/>
      </div>
      <div>
        <Link to="/signup" onClick={clearErrors} className="signup-button">Get Started</Link>
      </div>
      
      <div>
        <Link to="/login" onClick={clearErrors} className="login-button">Log In</Link>
      </div>
      <div>
        <Link to="/" onClick={demoLogin} className="demo-button">Demo Login</Link>
      </div>
      <div className='personal-icons'>
        <a className='animated rubberBand' href='https://github.com/ThinkSalat' target='_blank'><i className="fab fa-github-square github "></i></a>
        <a href='https://www.linkedin.com/in/shawnsalat/' target='_blank'><i className="fab fa-linkedin linkedin animated "></i></a>
        <a href='http://thinksalat.com/' target='_blank'><i className="fas fa-portrait portfolio animated "></i></a>
      </div>
    </div>
  </div>
)

export default SessionPage