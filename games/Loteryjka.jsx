import React from 'react';
import Fantan from './Fantan.jsx';


export default class Loteryjka extends Fantan {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Loteryjka';
    }
}
