// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

//import '../css/App.css'; // Update the import path for App.css
import './LandingPage.css';
//mport BackgroundImage from '../assets/images/bg.jpg'; // Update the import path for the image

export default function LandingPage() {
  return (
    <header className="landing-page3">
      <h1 className="main-title3 ">WIZ-LEARN</h1>
      <p className="main-para3 ">Login & Register</p>
      <div className="buttons">
        <Link to="/login">
          <button className="primary-button">log in</button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
      </div>
    </header>
  );
}



