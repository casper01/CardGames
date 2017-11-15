import React from 'react';
import Brydz from './Brydz.jsx';


export default class Szlem extends Brydz {
    constructor(props) {
        super(props);
        this.state.name = 'Szlem';
        this.state.variantOf = 'Brydża';
        this.state.url += '#szlem';
        this.state.desc = 'gra dla 2 osób';
        this.state.players = [2];
    }
}
