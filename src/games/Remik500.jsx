import { basePath } from '../utils';
import React from 'react';
import RemikGin from './RemikGin.jsx';


export default class Remik500 extends RemikGin {
    constructor(props) {
        super(props);
        this.state.name = 'Remik 500';
        this.state.variantOf = 'Remika';
        this.state.url += '#500';
        this.state.desc = '';
    }
}
