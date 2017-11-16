import { basePath } from '../utils';
import React from 'react';
import Kierki from './Kierki.jsx';


export default class Omnibus extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Omnibus';
        this.state.variantOf = 'Kierek';
        this.state.url += '#omnibus';
    }
}
