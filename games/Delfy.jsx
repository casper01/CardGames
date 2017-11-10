import React from 'react';
import Eleusis from './Eleusis.jsx';


export default class Delfy extends Eleusis {
    constructor(props) {
        super(props);
        this.state.name = 'Delfy';
        this.state.variantOf = 'Eleusis';
        this.state.url += '#delfy';
        this.state.desc = '';
    }
}
