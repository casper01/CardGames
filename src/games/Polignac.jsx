import { basePath } from '../utils';
import React from 'react';
import Kierki from './Kierki.jsx';


export default class Polignac extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Polignac';
        this.state.variantOf = 'Kierek';
        this.state.url += '#polignac';
    }
}
