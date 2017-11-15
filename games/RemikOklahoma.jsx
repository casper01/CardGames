import React from 'react';
import RemikGin from './RemikGin.jsx';


export default class RemikOklahoma extends RemikGin {
    constructor(props) {
        super(props);
        this.state.name = 'Remik Oklahoma';
        this.state.variantOf = 'Remika';
        this.state.url += '#oklahoma';
        this.state.desc = '';
    }
}
