import '../App.css';
import {Link,Route,Routes,NavLink} from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import resume from '../images/Pooja_Resume_2023.pdf';

function Appbody() {
  return (
      <header className="App-header">
        <div className='logo'>
          <h2>Pooja Joshi</h2>
        </div>
        <div className = 'header-link'>
        <ul className='unorderd'>
        <li className='list'><NavLink to = '/portfolio-poojajoshi/'
        activeClassName="activeLink"
        className="links"
        >Home</NavLink></li>
        <li className='list'><NavLink to = '/portfolio-poojajoshi/projects'
        activeClassName="activeLink"
        className="links"
        >Projects</NavLink></li>
          <li className='list'><NavLink to = '/portfolio-poojajoshi/resume'
        activeClassName="activeLink"
        className="links"
        >Resume</NavLink></li>
        {/* <li className='list'><a className="links" href = {Resume}>Resume</a></li> */}
      </ul>
        </div>       
      </header>
  );
}

export default Appbody;
