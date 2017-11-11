import React from 'react';
import MauMau from './MauMau.jsx';


export default class Pony extends MauMau {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Pony';
    }
}
