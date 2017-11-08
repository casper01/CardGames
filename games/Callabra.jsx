import React from 'react';


export default class Callabra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Callabra',
            name2: 'Cassino',
            url: '/callabra',
            players: [],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">Ludowa gra turecka, znana w wielu krajach pod nazwą "cassino".</div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia (52 karty).<br />
                        Wartość punktowa kart: król - 13, dama - 12, walet - 11, pozostałe karty według ilości oczek (as - 1pkt).<br />
                        Nie ma koloru atutowego.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Gracze rozdają karty kolejno w kolejnych rozgrywkach. Każdy z grających otrzymuje po trzy karty, pięć kart wykłada się odkryte na stole, reszta kart pozostaje zakryta w talonie.
                    </p>
                    <p>
                        Gdy karty z ręki zostaną zgrane, wszyscy gracze otrzymują po raz drugi po trzy karty z talonu, a po ich zgraniu dalsze karty aż do wyczerpania się kart w talonie.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Grę rozpoczyna gracz po lewej ręce rozdającego.<br />
                        Może on kartą z ręki wygrać (zdobyć) jedną lub więcej kart ze stołu. Kartę ze stołu wygrywa się, wykładając z ręki kartę tej samej wysokości. Więcej niż jedną kartę ze stołu zdobywa się, wykładając z ręki kartę o wysokości sumy oczek kart zdobywanych (wykładając damę - 12pkt - zdobywamy dwie trójki, piątkę i asa - także 12pkt).
                    </p>
                    <p>
                        Jeśli w swojej kolejce gry gracz nie może lub nie chce zdobyć ani jednej karty ze stołu, ma obowiązek wyłożyć na stół jedną kartę z ręki.<br />
                        Gdy któryś z graczy zdobędzie wszystkie lub ostatnią kartę ze stołu, następny gracz ma obowiązek jedną ze swych kart wyłożyć na stół.
                    </p>
                    <p>
                        Karty pozostałe na stole w chwili zgrania ostatniej karty z ostatniej ręki stają się własnością rozdającego.
                    </p>
                    <p>
                        Po zakończeniu rozgrywki oblicza się punkty za zdobyte karty według następujących zasad:
                    </p>
                    <ul>
                        <li>za największą ilość kart zdobytych - jeden punkt (jeśli dwaj gracze zdobyli taką samą liczbę kart, żaden z nich nie otrzymuje punktów);</li>
                        <li>za zdobycie dwójki pikowej - dwa punkty;</li>
                        <li>za zdobycie dziesiątki karowej - jeden punkt;</li>
                    </ul>
                    <p>
                        Gra toczy się w kolejnych rozdaniach do chwili, gdy jeden z graczy osiągnie w zapisie umówioną z góry liczbę punktów (zazwyczaj 11).
                    </p>
                </div>
            </div>
        );
    }
}
