import { basePath } from '../utils';
import React from 'react';
import TrzydziesciJeden from './TrzydziesciJeden.jsx';


export default class A31 extends TrzydziesciJeden {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = "31";
    }
}
