import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./HomePage.css"

export class HomePage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>
                        FGR Video
                    </h1>
                    <p>FGR Video is currently in develpment</p>

                    <Link className="App-link" to="/portfolio">Demo Reel</Link>

                    <a
                        className="App-link"
                        href="https://frankieriviera.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FrankieRiviera.com
                    </a>
                    <a
                        className="App-link"
                        href="https://legacy.fgrvideo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Legacy FGRVideo.com
                    </a>


                </header>
            </div>
        )
    }
}

export default HomePage
