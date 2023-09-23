import logo from './logo.svg';
import './App.css';
import Appbody from './components/Appbody';
// import { Link, Route, Routes, NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
import Home from './components/Home'
import Projects from './components/Projects';
import hackerrank from './images/hackerrank.svg'
import geeks from './images/geeksforgeeks.svg'
import leet from './images/leetcode-white.svg'
import resume from './images/Pooja_Resume_2023.pdf';
import ResumePage from './components/ResumePage';
import image from './images/pic2.jpeg'
import Contact from './components/Contact';
import {GiHamburgerMenu} from "react-icons/gi";
import {useState,useRef,useEffect} from 'react';



function App() {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Initialize the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // The div is now in the viewport, apply changes
        skillsRef.current.classList.add('scroll-animation');
      } else {
        // The div is not in the viewport, remove changes
        skillsRef.current.classList.remove('scroll-animation');
      }
    });

    // Start observing the div
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const [showMediaIcon , setMediaIcon] = useState(false)
  return (
    <>
      <div class="header">
        <div class="header-logo">
          <h1>Pooja Joshi</h1>
        </div>
         <div
         className={showMediaIcon ? "hamburger-menu-list" : "header-link"}>
          <Link
            onClick={() => setMediaIcon(!showMediaIcon)}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Home</Link>
          <Link
            onClick={() => setMediaIcon(!showMediaIcon)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >Projects</Link>
          <Link
           onClick={() => setMediaIcon(!showMediaIcon)}
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Experience</Link>
          <Link
            onClick={() => setMediaIcon(!showMediaIcon)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Contact</Link>
        </div>
        <div className='hamburger-menu'>
          <a>
          <GiHamburgerMenu style={{color:"white"}} onClick = {() => setMediaIcon(!showMediaIcon)}/>
          </a>
        </div>
      </div>
      {/* <hr style={{color:'rgba(60, 56, 60, 0.51)'}}></hr> */}
      <div id="home" >
        <img src={image} className="image" />
        <div class="home-intro">
          <h1>
            I'm
            <span style={{ color: '#14e956' }}> Pooja Joshi </span>
            .   A
            <span style={{ color: '#14e956' }}> Full Stack Developer </span>
            based in Bangalore.
          </h1>


          <p >
            I’m probably the most passionate coder you will ever get to work with.
            If you have a great project that needs some amazing skills, give me a chance.
          </p>

          <div className='skills-container' ref={skillsRef}>
                        <h1>Skills</h1>
                        <div >
                            <h3>Frontend Development</h3>
                            <h4 >React js, Javascript, HTML, CSS</h4>
                        </div>
                        <div >
                            <h3>Backend Development</h3>
                            <h4 >Nodejs, mongoDB, PostgresSQL</h4>
                        </div>
                        <div >
                            <h3>Quality Assurance</h3>
                            <h4 >Selenium, UFT, Automation</h4>
           </div>
           </div>

        </div>
      </div>

      <div id="projects">
        <Projects/>
      </div>

      <div id="experience">
        <div id="Exp" data-w-id="9b6cb8cd-9551-102b-01b7-4b260b7d3226" className="experience-section">
          <div className="wrapper">
            <div className="flex-vertical_left_top">
              <div className="overline_16px">WORK EXPERIENCE</div>
              <h2 className="heading_55px">Companies I have worked for in the past.</h2>
            </div>
            <div className="experience-grid">
              <div className="experience-block">
                <div className='experience-block-number-one'>
                <div className="number">01</div>
                <h3 className="heading_24px">
                  <span className="green" style={{ color: "#14e956" }}>Bamboobox</span>, Full Stack Developer
                </h3>
                </div>
                <div className='experience-block-desc-one'>
                <ul>
                    <li>I’ve worked as an Automation tester for almost 2 years.</li>
                    <li>I worked on a model that helps clients find the best potential customers and determine which ones are more likely to become valuable opportunities</li>
                    <li>This model uses data analysis and predictions to identify prospects with a higher chance of turning into successful business deals</li>
                    <li>By using this model, clients can focus their efforts on the most promising prospects and increase their chances of closing successful deals</li>
                    <li>I have integrated many platforms such as Hubspot,Zoho,Salesforce and many more using OAuth authentication</li>
                    <li>Created RESTful APIs using Node.js with Express framework for data manipulation.</li>
                    <li>Developed and maintained front-end web applications using HTML, CSS, JavaScript, React.js.</li>
                    <li>Provided technical support during post-deployment stages including bug fixing and maintenance tasks.</li>
                  </ul>
                 
                </div>
              
                {/* <p className="paragraph_16px">I worked as an associate Developer in Bamboobox for 1.6 years.</p> */}
              </div>
              <div className="experience-block">
                <div className='experience-block-desc-two'>
                  <ul>
                    <li>I worked as an associate Developer in Bamboobox for 1.6 years.</li>
                    <li>Well-versed with Agile, Scrum methodologies.</li>
                    <li>Developed Scripts using Selenium, UFT, tech Stack as Java also used ARD and ALM.</li>
                    <li>Implemented CI/CD pipelines using TeamCity, ensuring seamless integration, automated testing, and efficient deployment processes.</li>
                    <li>Led a team of developers to successfully complete a major software project on time.</li>
                  </ul>
                </div>
                <div className='experience-block-number-two'>
                <div className="number">02</div>
                <h3 className="heading_24px"><span className="blue" style={{ color: "#333399" }}>Tata Consultancy Services</span>, System Engineer</h3>
                {/* <p className="paragraph_16px">I’ve worked as an Automation tester for almost 2 years.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact">
        <Contact/>
      </div>







    </>


  );
}

export default App;
