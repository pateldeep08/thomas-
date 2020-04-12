import pokemon from './pokemons';
import React, { Component } from 'react';
import Carte from './Carte';
import Detail from './Detail.pokemon'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
//import './Display.pokemon.css';

//import PaginacionTabla from "PaginacionTabla/PaginacionTabla";


class Display extends Component {

    renderPokemon() {
        return pokemon.map(item => {
            return (
                <div>
                    <Carte num={item.num} src={item.img} type={item.type} name={item.name} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="App">
                <h1 style={mystyle1}>Pokédex</h1>
                <h2 style={mystyle2}>{this.renderPokemon()}</h2>
            </div>

            /*<table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id. pedido</th>
                        <th>Agregado</th>
                        <th>Despacho</th>
                        <th>Cliente</th>
                        <th />
                    </tr>
                </thead>
                <PaginacionTabla
                    itemsperpage={this.state.itemsperpage}
                    nocolumns={this.state.nocolumns}
                    items={filas}
                    pagesspan={4}
                />
            </table>*/
          
          /*<GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <h2 style={mystyle2}>{this.renderPokemon()}</h2>
            </GridListTile>
          ))}
        </GridList>*/
    
        );
      }
}

const mystyle1 = {
    color : "Yellow",
    backgroundColor : "DoderBlue",
    padding: "10x",
    fontFamily:"cambria",
    fontSize : '100x',

}

const mystyle2 = {
    color : "white",
    backgroundColor : "DoderBlue",
    padding: "30x",
    fontSize : '10x',
    fontFamily:"Cambria",
    textAlign: 'left',
    alignItems:'space-evenly'
}

const mystyle3 = {
    color : "white",
    backgroundColor : "DoderBlue",
    padding: "100x",
    fontFamily:"Cambria",
    fontSize : '60x',
    border : '1px solid black',
    margin : '60px',
    textAlign: 'space-evenly',





}
export default Display