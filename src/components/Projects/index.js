import React from "react";

function PortfolioprojectCard(props) {
  return (
      <div className="card large">       
        <div className="card-title card-panel blue-grey darken-4">{props.title}</div>
          <div className="card-image">
            <img src={props.image} alt={props.title}/>                        
          </div>
          <div className="card-action z-depth-5 blue-grey lighten-4">
            <a className= "black-text" href={props.link} target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
            <a className= "black-text" href={props.githublink} target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
          </div>
     </div>
    )
}

export default PortfolioprojectCard


// function Projects () {

//     return (
//     <div className = "container">
//         <div className="row">
//             <div className="col s12 m6">
//               <div className="card large">       
//                   <div className="card-title card-panel blue-grey darken-4">Password Generator</div>
//                     <div className="card-image">
//                       <img src="./images/password-generator.png" alt="Password Generator"/>                        
//                     </div>
//                     <div className="card-action z-depth-5 blue-grey lighten-4">
//                       <a className= "black-text" href="https://benedictakim.github.io/passwordgenerator/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//                       <a className= "black-text" href="https://github.com/benedictakim/passwordgenerator/" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//                     </div>
//               </div>
//             </div>
//             <div className="col s12 m6">
//               <div className="card large">
//                 <div className="card-title card-panel blue-grey darken-4">Weather Dashboard</div>
//                 <div className="card-image">
//                   <img src="./images/weather-API.png" alt="weather dashboard"/>
//                 </div>
//                 <div className="card-action z-depth-5 blue-grey lighten-4">
//                   <a className= "black-text" href="https://benedictakim.github.io/weatherdashboard/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//                   <a className= "black-text" href="https://github.com/benedictakim/weatherdashboard" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//                 </div>
//               </div>
//             </div>      
//           </div>
//         <div className="row">
//           <div className="col s12 m6">
//             <div className="card large">
//               <div className="card-title card-panel blue-grey darken-4">Workday Planner</div>
//                 <div className="card-image">
//                   <img src="./images/workday-planner.gif" alt="workday planner"/>            
//                 </div>
//               <div className="card-action z-depth-5 blue-grey lighten-4">
//                 <a className= "black-text" href="https://benedictakim.github.io/workdayplanner/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//                 <a className= "black-text" href="https://github.com/benedictakim/workdayplanner/" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//               </div>
//             </div>
//           </div>
//           <div className="col s12 m6">
//             <div className="card large">
//               <div className="card-title card-panel blue-grey darken-4">Birthday Card Generator</div>
//               <div className="card-image">
//                 <img src="./images/bcard-example-image.jpg" alt="birthday card generator example"/>
//               </div>
//             <div className="card-action z-depth-5 blue-grey lighten-4">
//               <a className= "black-text" href="https://benedictakim.github.io/BirthdayCardGenerator/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//               <a className= "black-text" href="https://github.com/benedictakim/BirthdayCardGenerator" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//             </div>
//           </div>
//           </div>
//         </div>
//       <div className="row">
//         <div className="col s12 m6">
//           <div className="card large">
//             <div className="card-title card-panel blue-grey darken-4">Bored Jar</div>
//             <div className="card-image">
//               <img src="./images/bored-jar.gif" alt="Bored Jar"/>            
//             </div>
//             <div className="card-action z-depth-5 blue-grey lighten-4">
//               <a className= "black-text" href="http://boredjar.siminski.co/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//               <a className= "black-text" href="https://github.com/benedictakim/bored-jar" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//             </div>
//           </div>
//         </div>
//         <div className="col s12 m6">
//           <div className="card large">
//             <div className="card-title card-panel blue-grey darken-4">Ask Cleo</div>
//             <div className="card-image">
//               <img src="./images/askcleo.gif" alt="Ask Cleo"/>
//             </div>
//             <div className="card-action z-depth-5 blue-grey lighten-4">
//               <a className= "black-text" href="https://benedictakim.github.io/AskCleo/" target="_blank"><i className="tiny material-icons">pageview</i>Open Application</a> 
//               <a className= "black-text" href="https://github.com/benedictakim/AskCleo" target="_blank"><i className="tiny material-icons">code</i>Review Code</a>
//             </div>
//           </div>
//         </div>
//       </div>
//   </div>
//   );
// }

// export default Projects
