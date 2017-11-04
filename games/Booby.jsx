import React from 'react';
import Brydz from './Brydz.jsx';


export default class Booby extends Brydz {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Booby';
        this.state.url += '#booby';
        this.state.desc = 'gra dla 3 osób';
    }
}
