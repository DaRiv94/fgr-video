import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class HomePage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>
                        FGR Video with cname change
                    </h1>
                    <a
                        className="App-link"
                        href="http://frankieriviera.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FrankieRiviera.com
                    </a>

                    <Link to="/portfolio">Portfolio</Link>
                </header>
            </div>
        )
    }
}

export default HomePage
