import React, { Component } from 'react';
import './App.css';
import Display from './component/Display.pokemon'
import Carte from './component/Carte'

//import Navigation from './component/Navigation'
import Detail from './component/Detail.pokemon'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

class App extends Component {
  render(){
    return(


      <div>
        <Router>
          <Switch>
            <Route exact path="/" children={<Display/>} />
            
            <Route 
              exact 
              path="/pokemon/:name"
              location={this.props.location} 
 
              render={({ 
                  location, 
                  match 
              }) => (
                  <Detail match={match} />
              )} 
          />
          
          </Switch>
        </Router>

      </div>

    )
  }

}

export default App;