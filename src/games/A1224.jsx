import { basePath } from '../utils';
import React from 'react';
import Machana from './Machana.jsx';


export default class A1224 extends Machana {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = "1224";
    }
}
