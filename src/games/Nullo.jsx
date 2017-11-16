import { basePath } from '../utils';
import React from 'react';
import Brydz from './Brydz.jsx';


export default class Booby extends Brydz {
    constructor(props) {
        super(props);
        this.state.name = 'Nullo';
        this.state.variantOf = 'Brydża';
        this.state.url += '#nullo';
        this.state.desc = 'gra dla 2 osób';
        this.state.players = [2];
    }
}
