import React from 'react';
import Brydz from './Brydz.jsx';


export default class BrydzDwuosobowy extends Brydz {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Brydż dwuosobowy';
        this.state.url += '#dwuosobowy';
        this.state.desc = 'gra dla 2 osób';
    }
}
