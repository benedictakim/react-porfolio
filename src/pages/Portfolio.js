import React, { Component } from "react";
import portfolioprojects from "./portfolio-projects.json";
import PortfolioprojectCard from "./components/projects"

class Portfolio extends Component {
    state = {
      portfolioprojects
    };

    render() {
        return (
            <div className = "container">
            <Portfolioprojectcard
            {this.state.portfolioprojects.map(portfolioprojects => (
                title={portfolioprojects.Title},
                image={portfolioprojects.Image},
                link={portfolioprojects.Deployed},
                githublink={portfolioprojects.GithubRepo}
            ))}
            />
            </div>
        );
    }
}

export default Portfolio