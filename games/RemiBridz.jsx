import React from 'react';
import RemikGin from './RemikGin.jsx';


export default class RemiBridz extends RemikGin {
    constructor(props) {
        super(props);
        this.state.name = 'Remi Bridż';
        this.state.variantOf = 'Remika';
        this.state.url += '#bridge';
        this.state.desc = '';
    }
}
