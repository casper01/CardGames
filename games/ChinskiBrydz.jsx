import React from 'react';
import Brydz from './Brydz.jsx';


export default class ChinskiBrydz extends Brydz {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Chiński brydż';
        this.state.url += '#chinski';
        this.state.desc = 'gra dla 2 osób';
    }
}
