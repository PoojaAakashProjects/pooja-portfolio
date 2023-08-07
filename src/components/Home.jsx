import '../App.css'
import image from '../images/Photograph_Psrt.jpeg'


export default function Home()  {
    return (
        <>
        <div className = "home">
            <div className='picture'>
             <img src = {image} style={{margin:"15%"}}
             ></img>
            </div>
            <div className='name' style={{padding:"40px"}}>
                {/* <h1 style={{margin: "20px",textAlign:"center"}}>
                I'm Pooja Joshi.</h1>
                <h1 style={{margin: "20px",textAlign:"center"}}>A Full Stack Developer</h1>
                <h1 style={{margin: "20px",textAlign:"center"}}>based in Bangalore.</h1> */}
                <h1 style={{fontFamily:"Cyborg",margin: "20px"}}>
                I'm
                    <span style={{color:'#14e956'}}> Pooja Joshi </span>
                     .   A 
                    <span style={{color:'#14e956'}}> Full Stack Developer </span>
                    based in Bangalore.
                </h1>

                
                <p  style={{margin: "20px",fontFamily:"ExoSpace"}}>
                I’m probably the most passionate coder you will ever get to work with.
                 If you have a great project that needs some amazing skills, give me a chance.
                </p>
                <div style={{color:"white", display:"flex",justifyContent:'flex-start',textAlign:"center",flexDirection:"column"}}>
                <h1 style={{textAlign:"center",fontFamily:"Cyborg"}}>Skills</h1>
                    <div style={{backgroundColor:"black"}}>
                        <h3 style={{color:"#14e956",fontFamily:"Cyborg"}}>Frontend Development</h3>
                        <h4 style={{fontFamily:"ExoSpace"}}>React js, Javascript, HTML, CSS</h4>
                    </div>
                    <div style={{backgroundColor:"black"}}>
                        <h3 style={{color:"#14e956",fontFamily:"Cyborg"}}>Backend Development</h3>
                        <h4 style={{fontFamily:"ExoSpace"}}>Nodejs, mongoDB, PostgresSQL</h4>
                    </div>
                    <div style={{backgroundColor:"black"}}>
                        <h3 style={{color:"#14e956",fontFamily:"Cyborg"}}>Quality Assurance</h3>
                        <h4 style={{fontFamily:"ExoSpace"}}>Selenium, UFT, Automation</h4>
                    </div>
                    
                
                    {/* <li>Mics</li>
                    <h4>Git, Agile, Jira</h4> */}
            </div>
            </div>
           
           
        </div>
       
       </>
    )

}

