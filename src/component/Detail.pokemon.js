import React, { Component } from 'react';
import {Router,Route} from "react-router"
import pokemon from './pokemons';


class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonName : this.props.match.params.name,
            pokemonImage : this.props.src,
            pokemonNum : this.props.num,
            pokemonType : this.props.type,
            pokemonId : undefined
        }
    }

    trouverid(){

     //   var a = 1 
     
      //  const dbSize = pokemon.length
       // const name = this.props.match.params.name,

        var dbSize = pokemon.length
        var name = this.state.pokemonName
        var id = 0 
      

        for (let pas = 0; pas < dbSize; pas++) {
            
            if(name == pokemon[pas].name){

                id = pas 



            }

            //console.log('Faire ' + pas + ' pas vers l\'est');
        }

        console.log(id);

        return id


    }






  render(){

    this.trouverid()


    return(
        <div style={mystyle3} className="App">
                <h1 style={fontTitre}>{this.state.pokemonName}</h1>
                <table style={mystyle5}>
                    <tr>
                        <th scope="col"><img style={styleIm1}
                            src={pokemon[this.trouverid()].img} /></th>
                        <th style={mystyle2} scope="col">Num : {pokemon[this.trouverid()].num}<br></br>
                         Height : {pokemon[this.trouverid()].height} <br></br>
                         Weight : {pokemon[this.trouverid()].weight}<br></br>
                         Candy : {pokemon[this.trouverid()].candy}<br></br>
                         Candy Count : {pokemon[this.trouverid()].candy_count}<br></br>
                         Egg : {pokemon[this.trouverid()].egg}<br></br></th>
                         <th style={mystyle4} scope="col">Spawn chance : {pokemon[this.trouverid()].spawn_chance}<br></br>
                         Average Spawn : {pokemon[this.trouverid()].avg_spawn}<br></br>
                         Spawn time : {pokemon[this.trouverid()].spawn_time}</th>
                    </tr>
                </table>
            </div>


    )
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
    color : "black",
    backgroundColor : "DoderBlue",
    padding: "00x",
    fontSize : '20x',
    fontFamily:"Cambria",
    textAlign: 'center',
    alignItems:'space-evenly'
}
const mystyle4 = {
    color : "black",
    backgroundColor : "DoderBlue",
    marginRight: "15px",
    fontSize : '20px',
    fontFamily:"Cambria",
    textAlign: 'center',
    alignItems:'space-evenly'
}
const mystyle5 = {
    marginRight: "200x",
    fontSize : '20px',
    fontFamily:"Cambria",
    textAlign: 'right',
}

const mystyle3 = {

    backgroundColor : "white",
    padding: "0px",
    fontFamily:"Cambria",
    border : '1px solid black',
    marginLeft : '00px',
    //textAlign: 'space-evenly',
    height : "350px",
    width : "800px",
    borderRadius : "25px"

}

const fontTitre = {
    fontSize : "30px",
    backgroundColor : "orange",
    border : '1px solid black',
    borderRadius : "25px"

}

const styleIm1 = {
    //verticalAlign : "center",
    //display : "flex",
    //alignItems : "left"
    marginRight : 20,
    width : 200,
    height : 200
}
const styleIm2 = {
    //verticalAlign : "center",
    //display : "flex",
    //alignItems : "left"
    marginLeft : 20,
    width : 200,
    height : 200
}

export default Detail;