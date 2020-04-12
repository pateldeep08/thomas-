import pokemon from './pokemons';
import React, { Component } from 'react';
import './Display.pokemon.css';
import Display from './Display.pokemon'
import Detail from './Detail.pokemon'
import Carte from './Carte';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
  } from "react-router-dom";

  
class Navigation extends Component {
    render() {
        return (
            <Router>
            <div>
              <nav>
                <ul>
                  <li>
                  <Link to="/DetailPokemon">pokemon</Link>
                  </li>
                </ul>
              </nav>
      
              <Switch>
                <Route path="/DetailPokemon">
                  <Detail/>
                </Route>
              </Switch>
            </div>
          </Router>
        );
    }
}

export default Navigation