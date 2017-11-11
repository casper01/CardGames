import React from 'react';
import Kierki from './Kierki.jsx';


export default class KierkiDominowe extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Kierki dominowe';
        this.state.variantOf = 'Kierek';
        this.state.url += '#dominowe';
        this.state.desc = '';
    }
}
