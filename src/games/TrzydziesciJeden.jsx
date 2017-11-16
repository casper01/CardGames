import { basePath } from '../utils';
import React from 'react';


export default class TrzydziesciJeden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Trzydzieści Jeden',
            name2: '31',
            desc: 'gra dla 2 osób',
            url: basePath() + '/trzydziescijeden',
            players: [2],
            cards: 'Standardowa talia kart (52 karty)'
        }
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">Ludowa gra amerykańska.</div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla dwóch graczy</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>Do gry używane są 24 karty (A,2,3,4,5 i 6). Wartość punktowa kart liczona jest według ilości oczek (As = 1pkt).</p>

                    <h2 className="content-subhead">Zasady gry</h2>
                    <p>Gracze rozpoczynają grę na zmianę.<br />
                        Karty kładzie się odkryte na stole i gracze na zmianę biorą po jednej z nich. Biorąc kolejne karty, każdy sumuje ich liczbę oczek. Ten, który pierwszy uzbiera 31 punktów, wygrywa. Jeśli gracz, na którego przypada kolej, nie może wziąć żadnej z pozostałych na stole kart bez przekroczenia 31 punktów, przegrywa grę.</p>
                </div>
            </div>
        );
    }
}
