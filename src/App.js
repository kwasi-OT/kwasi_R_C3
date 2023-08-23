import React from "react";
import './App.css';

const picture = <img src="../kwasi-nobg.png" alt="personalPic" />

const summary = <p>Budding frontend developer with a strong background of 10+ years experience building, managing and maintaining visually appealing, functional and user friendly websites, using Joomla and WordPress. Proficient in HTML, CSS and JavaScript. Also have good working knowledge in AWS cloud technologies, Git and GitHub.</p>

const skills = <ul className="skills">
  <li className="li">WordPress</li>
  <li className="li">Joomla</li>
  <li className="li">HTML</li>
  <li className="li">CSS</li>
  <li className="li">JavaScript</li>
  <li className="li">Git</li>
  <li className="li">GitHub</li>
  <li className="li">AWS</li>
</ul>

function App() {
  return (
    <div className="myApp">
      <h1>My Portfolio</h1>
      <div><hr /></div>
      <div className="top">
        <div>
          {picture}
        </div>
        <span className="divider"></span>
        <div className="bio">
          <h2>Kwasi Ofori - Tweneboah</h2>
          <p>Frontend Developer</p>
          {summary}
        </div>
      </div>
      <div><hr /></div>
      <div className="middle">
        <h3>Skills: {skills}</h3>
      </div>
      <div><hr /></div>
    </div>
  );
}

export default App;
