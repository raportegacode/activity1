import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import gradpic from './image/gradpic.png';

function App() {
  const Contactref = useRef(null);
  const contact = () => {
    Contactref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const headerpage = useRef(null);
  const header = () => {
    headerpage.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const skillsref = useRef(null);
  const skills = () => {
    skillsref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const educref = useRef(null);
  const education = () => {
    educref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const aboutref = useRef(null);
  const about = () => {
    aboutref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="App">
      <nav>
        <ul className='navbar'>
          <li className='navlisttitle'><strong>Website Developer</strong></li>
          <li className='navlist'><a onClick={contact}>Contacts</a></li>
          <li className='navlist'><a onClick={skills}>Skills</a></li>
          <li className='navlist'><a onClick={education}>Education</a></li>
          <li className='navlist'><a onClick={about}>About</a></li>
          <li className='navlist'><a onClick={header}>Home</a></li>
        </ul>
      </nav>
      <header ref={headerpage} className="App-header">
        <h1>Raphael Mardean L. Ortega</h1>
        <img src={gradpic} alt='picture' />
      </header>
      <br ref={aboutref} />
      <div className='About section'>
        <h2>About me</h2>
        <p className='bionote'> &nbsp; &nbsp; &nbsp;Raphael Mardean L. Ortega is a 4th year student from University of Santo Tomas (UST) taking up Bachelor of Science in Information Technology.
          Currently residing in Taytay, Rizal who is currently taking up classes online in UST and an OJT working alongside Carlocab as an Intern.
          He is in the track of Web Development who is eager to learn and improve and provide what's best for the company.
          <tag ref={educref}></tag>
        </p>
      </div>

      <div className='Education section'>
        <h2>Education</h2>
        <div className='contEduc'>
          <p>University of Santo Tomas (2019 – Present)
            <br />
            Bachelor of Science in Information Technology</p>
          <p>San Beda University Taytay, Rizal (2017 – 2019)
            <br />
            Senior High School (STEM Strand)</p>

          <p>San Beda College Taytay, Rizal (2013 – 2017)
            <br />
            Junior High School</p>
        </div>
      </div>

      <div className='Skills section'>
        <h2 ref={skillsref}>Skills</h2>
        <ul className='skilllist'>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>Firebase</li>
          <li>MySQL</li>
          <li>PhpMyAdmin</li>
          <li>React.js</li>
          <li>React Native</li>
          <li>Microsoft Office</li>
          <li>Project Management Skills</li>
        </ul>

        <h2>Certification</h2>
        <p>PhilNITS IT certification October 2022 IP Passer</p>
        <p>Credential ID Examinee #IP01-0068</p>
        <p>Issued by: The Philippine National I.T. Standards (PhilNITS) Foundation, Inc.</p>
        <br />
        <a className='certBtn' href='https://www.philnits.org/passers_IP2018.html#Oct20022IP'>Show Credential</a>
      </div>
      <footer ref={Contactref} className='Contacts section'>
        <h3 className='left'>Contacts</h3>
        <p className='left'><small>Work Email: raphaelmar.ortega@gmail.com</small></p>
        <p className='left'><small>School Email: raphaelmardean.ortega.cics@ust.edu.ph</small></p>
        <p className='left'><small>Mobile Number: 09053248135</small></p>
        <br />
        <br />
        <p className='right'><small>Facebook:  <a className='links' href='https://www.facebook.com/Raaaphaaael'>Raphael Ortega</a> </small></p>
        <p className='right'><small>Instagram:  <a className='links' href='https://www.instagram.com/__raphaeel/'>@__raphaeel</a> </small></p>

        <p className='right'><small>Linkedin Account:  <a className='links' href='https://www.linkedin.com/in/raphael-ortega-279836240'>Raphael Ortega</a></small></p>

      </footer>


      <div className='portfolio'>
        <section id="portfolio">
          <h5>List of My Works</h5>
          <h2>Portfolio</h2>
        </section>
        <div className='portfolio-cont'>

          <p>
            Gab & Kate e-commerce website
            <br />
            Pizza Shop POS
            <br />
            Attendance Roll Call
            <br />
            Wake Me App UI
            <br />
            Medcure Pharmacy Management System
            <br />
            Graphics and Content Creations
          </p>
          <img className='portfolio-img' src={logo}>
          </img>
        </div>
      </div>

    </div >
  );
}

export default App;
