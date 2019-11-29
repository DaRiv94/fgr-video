import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class PortfolioPage extends Component {
    render() {
        return (
            <div>
                <h1>MY PortfolioPage</h1>
                <Link to="/">HomePage</Link>
            </div>
        )
    }
}

export default PortfolioPage
