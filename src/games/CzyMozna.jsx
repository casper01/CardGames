import { basePath } from '../utils';
import React from 'react';
import Kanasta from './Kanasta.jsx';


export default class CzyMozna extends Kanasta {
    constructor(props) {
        super(props);
        this.state.name = 'Czy można?';
        this.state.name2 = '';
        this.state.variantOf = 'Kanasty';
        this.state.url += '#czymozna';
        this.state.desc = 'gra dla 3 - 5 osób';
        this.state.players = [3, 4, 5];
    }
}
