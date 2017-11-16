import { basePath } from '../utils';
import React from 'react';
import Tysiac from './Tysiac.jsx';


export default class TysiacLicytowany extends Tysiac {
    constructor(props) {
        super(props);
        this.state.name2 = '';
        this.state.name = 'Tysiąc Licytowany';
        this.state.variantOf = 'Tysiąca';
        this.state.desc = '';
        this.state.url += '#licytowany';
    }
}
