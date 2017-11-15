import React from 'react';
import Poker from './Poker.jsx';


export default class PokerRownolegly extends Poker {
    constructor(props) {
        super(props);
        this.state.name = 'Poker Równoległy';
        this.state.url += '#rownolegly';
        this.state.desc = 'gra dla 2 osób';
        this.state.players = [2];
    }
}
