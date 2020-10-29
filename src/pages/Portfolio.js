import React, { Component } from "react";
import portfolioprojects from "../portfolio-projects.json";
import PortfolioprojectCard from "./components/projects"

class Portfolio extends Component {
    const portfolioprojects
    function grabaproject (props) {
        let portfolioprojects = []
        for (let i = 0; i < props.length; i++) {
            portfolioprojects.push(props.children(i));
        }
        return 
        <div class="container">
            <PortfolioprojectCard>
            {portfolioprojects}
            </PortfolioprojectCard>
        </div>
    }
    grabaproject ()
    // function listallprojects () {
    //     return (
    //         <grabaproject numTimes={6}>
    //             {(index) => <div key={index}</div>}
    //         </grabaproject>
    //     );
    // }

export default Portfolio