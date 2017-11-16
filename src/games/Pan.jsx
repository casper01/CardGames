import { basePath } from '../utils';
import React from 'react';


export default class Pan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Pan',
            desc: 'gra dla 2 - 4 osób',
            url: basePath() + '/pan',
            players: [2, 3, 4],
            cards: 'Mała talia kart (24 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 2 - 4 osób.
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Do gry używa się 24 kart (od asa do 9).<br />
                        Kolory nie mają znaczenia.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszy rozdający jest wybierany losowo, później są kolejni, zgodnie z ruchem wskazówek zegara.
                    </p>
                    <p>
                        Wszystkie karty zostają rozdane graczom. Pierwszy wychodzi gracz posiadający na ręku 9 <span className="heart"></span> i otwiera w ten sposób stos. Kolejni gracze mogą wyrzucić kartę równą lub wyższą od ostatnio rzuconej (jeśli gracz pierwszy rzucił 9 <span className="heart"></span> , następny inną 9, a trzeci gracz 10, to gracz kolejny może wyrzucić 10 lub kartę wyższą, lecz nie 9). Jeśli gracz, którego jest kolej nie może (lub nie chce) wyrzucić żadnej karty pobiera trzy karty ze stosu. Jeśli na stosie znajduje się mniej niż trzy karty do pobrania (nie licząc 9 <span className="heart"></span> ) pobiera je wszystkie, pozostawiając tylko 9 <span className="heart"></span> .
                    </p>
                    <p>
                        Jeśli gracz rozpoczynający posiada wszystkie cztery 9 może je od razu zrzucić (jeśli jakiejś mu brakuje może zrzucić tylko 9 <span className="heart"></span> ).
                    </p>
                    <p>
                        Jeśli któryś z graczy ma wszystkie cztery karty danej wartości, może je wszystkie zrzucić od razu, gdy przyjdzie jego kolej (oczywiście, pod warunkiem, że zrzucane karty są wyższej wartości od karty ostatnio położonej na stos).
                    </p>
                    <p>
                        Celem gry jest pozbycie się wszystkich kart z ręki. Gracz, który jako jedyny pozostanie z kartami na ręku przegrywa rozdanie i "otrzymuje" literkę P. Jeśli przegra któreś z następnych rozdań - otrzymuje literkę A, a potem N. Gra toczy się do momentu, aż któryś z graczy przegra 3 rozdania, otrzymując przydomek PAN (lub inny trzyliterowy, najczęściej obraźliwy).
                    </p>
                    <p>
                        Jeśli przedostatni gracz zrzuci swoją ostatnią kartę (lub karty) i gracz ostatni w jednym pozbywa się wszystkich swoich kart - gra jest nierozstrzygnięta.
                    </p>
                </div>
            </div>
        );
    }
}
