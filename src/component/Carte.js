
import pokemon from './pokemons';
import React, { Component } from 'react';
import './Display.pokemon.css';
import Detail from './Detail.pokemon'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Carte extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonName : this.props.name,
            pokemonImage : this.props.src,
            pokemonNum : this.props.num,
            pokemonType : this.props.type
        }
    } 
    affichageType(){
        let sizeType = pokemon[0].type.length
        let i
        for(i=0;i<sizeType;i++){
            
        }
    }

    render() {
        return (
            <div style={mystyle3} className="App">
                <h1 style={fontTitre}>{this.state.pokemonName}</h1>
                <table>
                    <tr>
                        <th scope="col"><img style={styleImage}
                            src={this.state.pokemonImage} /></th>
                        <th style={styleDescription} scope="col">Num : {this.state.pokemonNum}
                        </th>
                        <th style={styleDescription} scope="col"></th>
                    </tr>

                </table>

                <button><Link to={`/pokemon/${this.state.pokemonName}`}>Detail</Link></button>
            </div>
        );
    }
}

const mystyle1 = {
    color : "white",
    backgroundColor : "DoderBlue",
    padding: "10x",
    fontFamily:"Calibri",
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
    color : "blue",
    backgroundColor : "white",
    padding: "10px",
    fontFamily:"Cambria",
    border : '1px solid black',
    margin : '20px',
    //textAlign: 'space-evenly',
    //height : "250px",
    width : "300px",
    borderRadius : "25px"

}

const fontTitre = {
    fontSize : "30px",
    backgroundColor : "orange",
    border : '1px solid black',
    borderRadius : "25px"

}

const styleImage = {
    //verticalAlign : "center",
    //display : "flex",
    //alignItems : "left"
    //marginRight : 250
}

const styleDescription = {
    backgroundColor : "white",
    alignItems : "up"
}
export default Carte