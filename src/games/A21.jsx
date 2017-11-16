import { basePath } from '../utils';
import React from 'react';
import BlackJack from './BlackJack.jsx';


export default class A21 extends BlackJack {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = "21";
    }
}
