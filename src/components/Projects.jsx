export default function Projects () {
    return (
        <div class='container'>
            <h2 style={{color:"white" , textAlign:"center"}}>Here are my Personal Projects</h2>
            <div class="flex-container" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",alignContent:"center",padding:"10px",margin:"20px"}}>
            <div style={{backgroundColor:"#3c383c82",display:"block" ,width:"60%",height:"40%",padding:"10px",margin:"20px"}}>
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
            <div style={{backgroundColor:"#3c383c82",display:"block",width:"60%",height:"40%",padding:"10px",margin:"20px"}}>
                <h3 style={{color:"white"}}>
                    Just book it
                </h3>
                    <ul >
                        <li style={{color:"white"}}>Tech stack - Reactjs, Nodejs, sql, Javascript</li>
                        <li style={{color:"white"}}>I have developed this app to learn React js and Nodejs. This app has a login/Register page and the users data 
                        is stored in ElephantSQL. I have created a database in Elephantsql.</li>
                        <li style={{color:"white"}}>After user login, the user can see his booking of car and can also book for future.</li>
                        <li style={{color:"white"}}>I have used rest APIs. The backend app is developed in Nodejs.</li>
                        <li style={{color:"white"}}><a className = "links" href = "https://github.com/orgs/PoojaAakashProjects/repositories">Github</a></li>
                    </ul>

            </div>
            </div>
           
        </div>
    )

}

