import { basePath } from '../utils';
import React from 'react';
import Brydz from './Brydz.jsx';


export default class Booby extends Brydz {
    constructor(props) {
        super(props);
        this.state.name = 'Booby';
        this.state.variantOf = 'Brydża';
        this.state.url += '#booby';
        this.state.desc = 'gra dla 3 osób';
        this.state.players = [3];
    }
}
