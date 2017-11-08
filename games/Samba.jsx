import React from 'react';
import Kanasta from './Kanasta.jsx';


export default class Samba extends Kanasta {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Samba';
        this.state.url += '#samba';
        this.state.desc = '';
    }
}
