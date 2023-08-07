import '../App.css';
import {Link,Route,Routes,NavLink} from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import Resume from '../images/Pooja_Resume_2023.pdf';

function Appbody() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <h2 style={{fontFamily:"fantasy"}}>Pooja Joshi</h2>
        </div>
        <div className = 'header-link'>
        <ul className='unorderd'>
        <li className='list'><NavLink to = '/'
        activeClassName="activeLink"
        className="links"
        >Home</NavLink></li>
        <li className='list'><NavLink to = '/projects'
        activeClassName="activeLink"
        className="links"
        >Projects</NavLink></li>
        <li className='list'><a className="links" href = {Resume}>Resume</a></li>
      </ul>
        </div>       
      </header>
      {/* <main>
      <Routes>
        <Route  path = '/' >
        <Route index  element={<Home/>} />
        <Route path = '/projects' element={<Projects/>} />
        <Route path = '/resume' element={<Resume/>} />
        </Route>
      </Routes>
     
      </main> */}
      
      {/* <footer>
         Hi this footer
       </footer> */}
    </div>
  );
}

export default Appbody;
