import { basePath } from '../utils';
import React from 'react';


export default class Tuzatu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tuzatu',
            desc: 'gra dla 4 osób',
            url: basePath() + '/tuzatu',
            players: [4],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra wywodząca się z Francji ("tous atouts")
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 4 osób (dwie przeciwko dwom).</p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Do gry używa się talii 52 kart.<br />
                        Każdy z grających otrzymuje po 13 kart. Do pierwszej lewy wychodzi zawsze gracz po lewej stronie rozdającego. Po pierwszym wyjściu partner rozdającego wykłada swoje karty odkryte na stole (jest dziadkiem - jego kartami w rozgrywce dysponuje rozdający)
                    </p>
                    <p>
                        W momencie pierwszego wyjścia kolorem atutowym są kiery do chwili, gdy zostanie zgrany ostatni kier. Wówczas, od następnej lewy, kolorem atutowym stają się kara do chwili, gdy zostanie zgrane ostatnie karo. Wówczas od następnej lewy kolorem atutowym są trefle.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Po zakończeniu rozgrywki zapisuje się wyniki. Dla partnerów, którzy zdobyli więcej niż sześć lew - po jednym punkcie za każdą lewę powyżej sześciu (tzn. za siedem lew - jeden punkt, za osiem lew - dwa punkty itd.). Dla partnerów, którzy w swoich lewach zdobyli asa karowego, treflowego lub pikowego - po jednym punkcie za każdego z nich.<br />
                        Gra toczy się do chwili, gdy jedna ze stron zdobędzie 10 punktów w zapisie - ta strona wygrywa całą grę.
                    </p>
                </div>
            </div>
        );
    }
}
