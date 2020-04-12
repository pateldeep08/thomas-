import React from 'react'
import {Image, Card, Button} from 'react-bootstrap'

class Carte extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.pokemon.id,
            name : this.props.pokemon.name,
            type : this.props.pokemon.type,
            number : this.props.pokemon.num,
            img : this.props.pokemon.img
        }            
    }
}

export default Carte