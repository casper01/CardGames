import React from 'react';
import SzescdziesiatSzesc from './SzescdziesiatSzesc.jsx';


export default class A66Obierany extends SzescdziesiatSzesc {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = "66 Obierany";
        this.state.url += "#obierany";
    }
}
