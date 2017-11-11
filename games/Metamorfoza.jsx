import React from 'react';
import Kierki from './Kierki.jsx';


export default class Metamorfoza extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Metamorfoza';
        this.state.variantOf = 'Kierek';
        this.state.url += '#metamorfoza';
        this.state.desc = 'gra dla 2 [3] osób';
        this.state.players = [2, 3];
    }
}
