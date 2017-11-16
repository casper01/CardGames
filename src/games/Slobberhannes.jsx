import { basePath } from '../utils';
import React from 'react';
import Kierki from './Kierki.jsx';


export default class Slobberhannes extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Slobberhannes';
        this.state.variantOf = 'Kierek';
        this.state.url += '#slobberhannes';
    }
}
