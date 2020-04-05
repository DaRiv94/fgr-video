import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./PortfolioPage.css"

export class PortfolioPage extends Component {
    render() {
        return (
            <div className="portfolio-page">
                <h1>FGR Video Demo Reel</h1>
                <Link className="App-link" to="/">Home</Link>
                
                    <div className="portfolioDemoReel" >
                        <iframe title="DemoReel" className="DemoReel" src="https://www.youtube.com/embed/DzJR1_381G0" ></iframe>
                    </div>
                
                {/* <div className="DemoReelBox">
                    <div className="portfolioDemoReel" >
                        <iframe title="DemoReel" className="DemoReel" src="https://www.youtube.com/embed/DzJR1_381G0" ></iframe>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default PortfolioPage
