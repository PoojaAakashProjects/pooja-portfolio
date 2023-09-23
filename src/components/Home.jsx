import '../App.css'
import image from '../images/pic2.jpeg'


export default function Home() {
    return (
        <>
            <div className="home">
                <div className='picture'>
                    <img src={image} className="image"
                    ></img>
                </div>
                <div className='name' >
                    <h1 className="name-header" style={{ margin: "20px" }}>
                        I'm
                        <span style={{ color: '#14e956' }}> Pooja Joshi </span>
                        .   A
                        <span style={{ color: '#14e956' }}> Full Stack Developer </span>
                        based in Bangalore.
                    </h1>


                    <p style={{ margin: "20px"}}>
                        I’m probably the most passionate coder you will ever get to work with.
                        If you have a great project that needs some amazing skills, give me a chances.
                    </p>
                    <div style={{ color: "white", display: "flex", justifyContent: 'flex-start', textAlign: "center", flexDirection: "column" }}>
                        <h1 style={{ textAlign: "center", color:"#8491a0",fontSize:"16px",fontWeight: "700" }}>Skills</h1>
                        <div style={{ backgroundColor: "black" }}>
                            <h3 style={{ color: "#14e956",color:"#8491a0",fontSize:"16px",fontWeight: "700"  }}>Frontend Development</h3>
                            <h4 >React js, Javascript, HTML, CSS</h4>
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                            <h3 style={{ color: "#14e956",color:"#8491a0",fontSize:"16px",fontWeight: "700"  }}>Backend Development</h3>
                            <h4 >Nodejs, mongoDB, PostgresSQL</h4>
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                            <h3 style={{ color: "#14e956" ,color:"#8491a0",fontSize:"16px",fontWeight: "700" }}>Quality Assurance</h3>
                            <h4 >Selenium, UFT, Automation</h4>
                        </div>


                        {/* <li>Mics</li>
                    <h4>Git, Agile, Jira</h4> */}
                    </div>
                </div>


            </div>
            <div id="Exp" data-w-id="9b6cb8cd-9551-102b-01b7-4b260b7d3226" className="experience-section">
   <div className="wrapper">
      <div className="flex-vertical_left_top">
         <div className="overline_16px">WORK EXPERIENCE</div>
         <h2 className="heading_55px">Companies I have worked for in the past.</h2>
      </div>
      <div className="w-layout-grid experience-grid">
         <div data-w-id="4e28eed4-39c1-89df-92b9-551fe582d8b2" 
         style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
           opacity: "1" }}
           className="experience-block">
            <div className="number">01</div>
            <h3 className="heading_24px">
               <span className="green" style={{color:"#14e956"}}>Bamboobox</span>, Full Stack Developer
            </h3>
            <p className="paragraph_16px">I worked as an associate Developer in Bamboobox for 1.6 years.</p>
         </div>
         <div data-w-id="64e7d109-0529-b91a-b15e-08accd24e160" 
         style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
           opacity: "1"}}
            className="experience-block">
            <div className="number">02</div>
            <h3 className="heading_24px"><span className="blue" style={{color:"#333399"}}>Tata Consultancy Services</span>, System Engineer</h3>
            <p className="paragraph_16px">I’ve worked as an Automation tester for almost 2 years.</p>
         </div>
        
      </div>
   </div>
</div>
        </>
    )

}

