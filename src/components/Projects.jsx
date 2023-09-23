import {useState,useRef,useEffect} from 'react';


export default function Projects () {
    const skillsRefs = [useRef(null), useRef(null) , useRef(null)]; // Create an array of refs for the divs

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
        
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           skillsRefs[0].current.classList.add('scroll-animation-projects');
//           skillsRefs[1].current.classList.add('scroll-animation-projects');
//           skillsRefs[2].current.classList.add('scroll-animation-projects');
//         } else {
//           skillsRefs[0].current.classList.remove('scroll-animation-projects');
//           skillsRefs[1].current.classList.remove('scroll-animation-projects');
//           skillsRefs[2].current.classList.remove('scroll-animation-projects');
//         }
//         console.log('skills ',skillsRefs)
     
//     });

   
//     if(skillsRefs[0].current) {
//         observer.observe(skillsRefs[0].current);
//     }
//     if(skillsRefs[1].current) {
//         observer.observe(skillsRefs[1].current);
//     }
//     if(skillsRefs[2].current) {
//         observer.observe(skillsRefs[2].current);
//     }

//     return () => {
//         if(skillsRefs[0].current) {
//             observer.unobserve(skillsRefs[0].current);
//         }
//         if(skillsRefs[1].current) {
//             observer.unobserve(skillsRefs[1].current);
//         }
//         if(skillsRefs[2].current) {
//             observer.unobserve(skillsRefs[2].current);
//         }
     
//     };
//   }, []);
   
 
    return (
        <div class='container' >
            <h2 style={{color:"white" , textAlign:"center"}}>Here are my Personal Projects</h2>
            <div class="flex-container" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",alignContent:"center",padding:"10px",margin:"20px"}}>
            <div className="projects" >
                <h3 style={{color:"white"}}>
                    Estore
                </h3>
                    <ul >
                        <li style={{color:"white"}}>Tech stack - Reactjs,Redux Nodejs, postgresql, Javascript,html,css</li>
                        <li style={{color:"white"}}>I am recently completed few basic functionalities like filtering data based on category
                        , add to cart, product description.</li>
                        <li style={{color:"white"}}>I have also implemented google login authentication.</li>
                        <li style={{color:"white"}}>I have used rest APIs. The backend app is developed in Nodejs.</li>
                        <li style={{color:"white",margin:"0px"}}><a className = "links" href = "https://aqueous-basin-14488-f6c5ea184a10.herokuapp.com/">Click here to see the project.</a></li>
                    </ul>

            </div>
            <div className="projects" >
                <h3 style={{color:"white"}}>
                    Library Management
                </h3>
                    <ul >
                        <li style={{color:"white"}}>Tech stack - Reactjs Nodejs, mongoDB, Javascript,html,css</li>
                        <li style={{color:"white"}}>Library management mern app.</li>
                        <li style={{color:"white"}}>I have implemented basic functionalities like addin a book,delete,update,pagination and filters</li>
                        <li style={{color:"white"}}>I have used rest APIs. The backend app is developed in Nodejs.</li>
                        <li style={{color:"white",margin:"0px"}}><a className = "links" href = "https://calm-hamlet-56602-0e83ef321fd5.herokuapp.com/">Click here to see the project.</a></li>
                    </ul>

            </div>
            <div className="projects" >
                <h3 style={{color:"white"}}>
                    Factory Management
                </h3>
                    <ul >
                        <li style={{color:"white"}}>Tech stack - Reactjs, Java, Mysql</li>
                        <li style={{color:"white"}}>Factory management is a project that helps a manager in a factory to calculate the salary generated every month. I have been a frontend developer for this particular project</li>
                        <li style={{color:"white"}}>This project has four pages as follows - 
                        <ul>
                            <li style = {{color:"white"}}>Workers - In this page we are storing workers data.</li>
                            <li style = {{color:"white"}}>Products - In this page we are storing Products data.</li>
                            <li style = {{color:"white"}}>Salary - In this page, Salary is calculated based on how much work a worker has completed.</li>
                            <li style = {{color:"white"}}>Daily Entry - In this page, Worker's entry is entered.</li>
                        </ul>
                        </li>
                        <li style={{color:"white"}}><a className = "links" href = "https://github.com/orgs/PoojaAakashProjects/repositories">Github</a></li>
                    </ul>

            </div>
            <div className="projects" >
                <h3 style={{color:"white"}}>
                    Just book it
                </h3>
                    <ul >
                        <li style={{color:"white"}}>Tech stack - Reactjs, Nodejs, sql, Javascript</li>
                        <li style={{color:"white"}}>I have developed this app to learn React js and Nodejs. This app has a login/Register page and the users data 
                        is stored in ElephantSQL. I have created a database in Elephantsql.</li>
                        <li style={{color:"white"}}>After user login, the user can see his booking of car and can also book for future.</li>
                        <li style={{color:"white"}}>I have used rest APIs. The backend app is developed in Nodejs.</li>
                        <li style={{color:"white",margin:"0px"}}><a className = "links" href = "https://github.com/orgs/PoojaAakashProjects/repositories">Github</a></li>
                    </ul>

            </div>
           
            </div>
           
        </div>
    )

}

