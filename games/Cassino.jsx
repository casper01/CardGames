import React from 'react';
import Callabra from './Callabra.jsx';


export default class Cassino extends Callabra {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Cassino';
    }
}
