import { basePath } from '../utils';
import React from 'react';
import Kanasta from './Kanasta.jsx';


export default class Canasta extends Kanasta {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = 'Canasta';
    }
}
