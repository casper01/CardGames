import React from 'react';
import Wybory from './Wybory.jsx';


export default class Variety extends Wybory {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Variety';
    }
}
