import React from 'react';
import Kierki from './Kierki.jsx';


export default class KierkiDzokerowe extends Kierki {
    constructor(props) {
        super(props);
        this.state.name = 'Kierki dżokerowe';
        this.state.variantOf = 'Kierek';
        this.state.url += '#dzokerowe';
        this.state.desc = '';
    }
}
