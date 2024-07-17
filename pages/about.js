import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
    <img src="/profile.jpeg" alt="Nicola Vandyar" />
    <h1>About Me</h1>
    <p>
      My name is Nicola Vandyar. I am a Front End Developer based in Johannesburg, South Africa.
      With a passion for creating intuitive and dynamic user experiences, I specialize in front-end technologies, especially the MERN stack.
    </p>
    <h2>Skills</h2>
    <ul>
      <li>Web Technologies: MERN Stack</li>
      <li>Javascript</li>
      <li>MYOB</li>
      <li>Sage Vip</li>
      <li>Auto Cad – 2D Drafting /3D modeling</li>
      <li>Oracle Primavera P6 – Project Management</li>
      <li>Operational Management</li>
    </ul>
    <h2>Education</h2>
    <p>
      Full Stack Developer - HyperionDev, Johannesburg, South Africa (Current)<br />
      Bachelor of Social Science in Psychology and Media and Communication - University of the KwaZulu Natal
    </p>
    <h2>Work Experience</h2>
    <ul>
      <li>
        <strong>Front End Developer - Platform 45</strong><br />
        Johannesburg, South Africa | June 2022 - Current
      </li>
      <li>
        <strong>Payroll Consultant and Web Developer - People Factor Solutions</strong><br />
        Johannesburg, South Africa | January 2021 - Current
      </li>
      <li>
        <strong>Group Payroll Officer - SGRP MERIDIAN</strong><br />
        Durban, South Africa | September 2020 - June 2021
      </li>
      <li>
        <strong>Senior Payroll Specialist - Nat Industries</strong><br />
        Durban, South Africa | January 2017 - January 2020
      </li>
      <li>
        <strong>Account Manager - Zouki</strong><br />
        Melbourne, Australia | May 2015 - January 2016
      </li>
      <li>
        <strong>Personal Banker - Commonwealth Bank of Australia</strong><br />
        Melbourne, Australia | January 2013 - January 2015
      </li>
      <li>
        <strong>Legal Administrative Assistant - Novartis Pharmaceuticals</strong><br />
        Johannesburg, South Africa | January 2011 - January 2012
      </li>
   
    </ul>
    <style jsx>{`
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    `}</style>
  </div>
);

export default About;
