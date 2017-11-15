import React from 'react';
import SzescdziesiatSzesc from './SzescdziesiatSzesc.jsx';


export default class Szwabacha extends SzescdziesiatSzesc {
    constructor(props) {
        super(props);
        this.state.name = 'Szwabacha';
        this.state.name2 = '';
        this.state.variantOf = 'gry 66';
        this.state.url += '#szwabacha';
        this.state.desc = '';
    }
}
