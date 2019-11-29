import React from 'react';
import './App.css';
import { Route , Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">

          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route component={NotFound} />
          </Switch>

      
    </div>
  );
}

export default App;
