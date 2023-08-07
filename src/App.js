import logo from './logo.svg';
import './App.css';
import Appbody from './components/Appbody';
import {Link,Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects';
import hackerrank from './images/hackerrank.svg'
import geeks from './images/geeksforgeeks.svg'
import leet from './images/leetcode-white.svg'


function App() {
  return (
    <>
     <div className="App" style={{backgroundColor:'black'}}>
      <Appbody/>
       <Routes>
        <Route  path = '/' >
        <Route index  element={<Home/>} />
        <Route path = '/projects' element={<Projects/>} />
        {/* <Route path = '/resume' element={Resume} /> */}
        </Route>
      </Routes>
     
    
    </div>
     <footer style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{minHeight:"80px"}}><h1 style={{color:"white",fontFamily:"Cyborg"}}>Connect with me.</h1>
        <span style={{display:"flex",flexDirection:"row" , margin:"8px"}}>
        <i class="fa fa-envelope" aria-hidden="true" style={{color:"#14e956",fontSize:"30px"}}></i>
        <h4 style={{color:"white",padding: "0px" ,margin: "0px",marginLeft: "10px"}}>  poojajoshi4321@gmail.com</h4>
        </span>
        <span style={{display:"flex",flexDirection:"row", margin:"8px"}}>
        <i class="fa fa-phone" aria-hidden="true" style={{color:"#14e956",fontSize:"30px"}}></i>
        <h4 style={{color:"white",padding: "0px" ,margin: "0px",marginLeft: "15px"}}>9917916733</h4>
        </span>
        </div>
        <div style={{marginTop: "1%"}}>
          <ul style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"0",margin:"0"}}>
            <li style={{listStyleType:"none",margin:"20px"}}><a href='https://github.com/PoojaAakashProjects'><i class='fa fa-github' color='white' style={{fontSize:"50px"}}></i></a></li>
            <li style={{listStyleType:"none",margin:"20px"}}><a href = "https://www.linkedin.com/in/pooja-joshi-7376b1166/"><i class="fa fa-linkedin"  style={{fontSize:"50px","color": "#0A66C2"}}></i></a></li>
            <li style={{listStyleType:"none",margin:"20px","paddingTop": "22px"}}><a href="https://auth.geeksforgeeks.org/user/pooja%20joshi%201"><img src='https://media.geeksforgeeks.org/gfg-gg-logo.svg' style = {{width:"50px",height:"80px"}}></img></a></li>
            <li style={{listStyleType:"none"}}><a href="https://leetcode.com/poojajoshi123/"><img src="https://leetcode.com/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png" style = {{width:"50px",height:"50px"}}></img></a></li>
          </ul>
        </div>
     </footer>
    </>

   
  );
}

export default App;
