import React from "react";
import './App.css';
import Button from "./components/Button";

const picture = <img src="../kwasi-nobg.png" alt="personalPic" />;

const summary = <p>Budding frontend developer with a strong background of 10+ years experience building, managing and maintaining visually appealing, functional and user friendly websites, using Joomla and WordPress. Proficient in HTML, CSS and JavaScript. Also have good working knowledge in AWS cloud technologies, Git and GitHub.</p>;

const skills = <ul className="skills">
  <li className="li">WordPress</li>
  <li className="li">Joomla</li>
  <li className="li">HTML</li>
  <li className="li">CSS</li>
  <li className="li">JavaScript</li>
  <li className="li">Git</li>
  <li className="li">GitHub</li>
  <li className="li">AWS</li>
</ul>;

const education = (
  <>
  <div className="edu">
    <div className="date">
      <p>04/2023 - 12/2023</p>
    </div>
    <div className="school">
      <h4>Frontend Development (JavaScript/React)</h4>
      <p>Azubi Africa - Accra</p>
    </div>
  </div>
  <div className="edu">
    <div className="date">
      <p>01/2023 - 04/2023</p>
    </div>
    <div className="school">
      <h4>AWS re/Start Program Learner (AWS CCP Certification)</h4>
      <p>Azubi Africa - Accra</p>
    </div>
  </div>
  <div className="edu">
    <div className="date">
      <p>01/2021 - 12/2023</p>
    </div>
    <div className="school">
      <h4>Bachelor of Commerce</h4>
      <p>Amity University Online - India</p>
    </div>
  </div>
  <div className="edu">
    <div className="date">
      <p>11/2007 - 08/2008</p>
    </div>
    <div className="school">
      <h4>Networking Essentials Plus (N+) / Microsoft Certified Systems Engineer</h4>
      <p>IPMC Training Center - Accra</p>
    </div>
  </div>
  <div className="edu">
    <div className="date">
      <p>02/2001 - 11/2004</p>
    </div>
    <div className="school">
      <h4>HND Mechanical Engineering</h4>
      <p>Kumasi Technical University</p>
    </div>
  </div>
    </>
);

function App() {
  return (
    <div className="myApp">
      <div className="header">
        <div><h1>My Portfolio</h1></div>
        <div className="topButtons">
          <Button label = "Login"/>
          <Button label = "Signin"/>
        </div>
      </div>
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
      <div className="eduTrain">
        <h3>Education:</h3>
        <span>{education}</span>
      </div>
    </div>
  );
}

export default App;
