import React from 'react';
import Kierki from './Kierki.jsx';


export default class KierkiLicytowane extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Kierki licytowane';
        this.state.variantOf = 'Kierek';
        this.state.url += '#licytowane';
        this.state.desc = '';
    }
}
