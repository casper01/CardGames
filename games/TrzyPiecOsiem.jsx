import React from 'react';
import A358 from './A358.jsx';


export default class TrzyPiecOsiem extends A358 {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Trzy Pięć Osiem';
    }
}
