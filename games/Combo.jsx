import React from 'react';
import Kanasta from './Kanasta.jsx';


export default class Combo extends Kanasta {
    constructor(props) {
        super(props);
        this.state.name = 'Combo';
        this.state.name2 = '';
        this.state.variantOf = 'Kanasty';
        this.state.url += '#combo';
        this.state.desc = '';
    }
}
