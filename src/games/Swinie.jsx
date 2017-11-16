import { basePath } from '../utils';
import React from 'react';


export default class Swinie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Świnie',
            desc: 'gra dla 2 lub więcej osób',
            url: basePath() + '/swinie',
            players: [2, 3, 4, 5, 6, 7, 8],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 lub więcej osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty).<br />
                        Przy większej liczbie graczy można użyć kilku talii.<br />
                        Starszeństwo kart nie ma znaczenia.
                    </p>

                    <h2 className="content-subhead">Zasady gry</h2>
                    <p>
                        Pierwszego tasującego karty wybiera się przez losowanie.<br />
                        Po przetasowaniu całą talię kart rozrzuca się na stole w nieładzie (takie stado świń :), nie odkrywając ich. Gracz, który tasował karty, wykłada jedną z nich odkrytą pośród "świń". Rozpoczyna ona odkryty stos. Kolejka zaczyna się od gracza po lewej stronie tego, który tasował, i posuwa się zgodnie z ruchem wskazówek zegara.
                    </p>
                    <p>
                        Gracz, na którego przyszła kolej, ciągnie dowolną ze "świń" i jeśli kolor lub wartość tej karty jest zgodna z wierzchnią kartą stosu, może ją na ten stos położyć i przekazać tym samym kolejkę do następnego gracza. Jeśli gracz nie może lub nie chce tej karty położyć na stos, ciągnie następną ze "świń", i tak dalej, aż do momentu kiedy położy kartę na stosie. Wtedy dopiero kolejka przechodzi na następnego gracza.
                    </p>
                    <p>
                        Podczas gry poszczególni gracze mogą gromadzić karty na ręku i kiedy nadejdzie ich kolejka, nie muszą ciągnąć "świni", lecz mogą wyrzucić kartę z ręki i przekazać kolejkę do następnego gracza.
                    </p>
                    <p>
                        Jeśli gracz ma na ręku kilka kart tej samej wartości, może je wyrzucić jednocześnie pod warunkiem, że wartość ich zgadza się z wartością karty leżącej na wierzchu stosu.
                    </p>
                    <p>
                        W momencie, gdy skończą się karty porozrzucane na stole ("świnie"), każdy z graczy operuje tylko kartami na ręku. W takim wypadku, jeśli gracz nie może zrzucić żadnej karty, traci jedną kolejkę, która przechodzi do następnego gracza.
                    </p>
                    <p>
                        Gra toczy się do momentu, aż z kartami na ręku zostanie jeden gracz. Jeśli zdarzy się sytuacja, że kilku graczy zostanie z kartami na ręku i żaden z nich nie będzie mógł żadnej z nich zrzucić na stos, gra również się kończy.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Każdy z graczy otrzymuje tyle punktów, ile zostało mu, po zakończeniu gry, kart na ręku. Jeśli gracz pozbył się wszystkich kart - otrzymuje 0 punktów.<br />
                        Punkty z kolejnych gier sumują się.
                    </p>
                    <p>
                        Gra toczy się do momentu, aż jeden z graczy zdobędzie lub przekroczy wcześniej umówioną liczbę punktów, lub toczy się określoną wcześniej ilość razy (np. tyle razy, ilu jest graczy).
                    </p>
                    <p>
                        Grę wygrywa ten z graczy, który w końcowym rozliczeniu zdobył najmniej punktów.
                    </p>
                </div>
            </div>
        );
    }
}
