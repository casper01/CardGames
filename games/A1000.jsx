import React from 'react';
import Tysiac from './Tysiac.jsx';


class A1000 extends Tysiac {
    constructor(props) {
        super(props);
        this.state.name2 = this.state.name;
        this.state.name = "1000";
    }
}

export default A1000;
