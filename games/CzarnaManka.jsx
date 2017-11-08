import React from 'react';
import Kierki from './Kierki.jsx';


export default class CzarnaManka extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Czarna Mańka';
        this.state.variantOf = 'Kierek';
        this.state.url += '#czarnamanka';
    }
}
