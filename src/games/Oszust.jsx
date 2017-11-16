import { basePath } from '../utils';
import React from 'react';


export default class Oszust extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Oszust',
            desc: 'gra dla 2 - 10 osób',
            url: basePath() + '/oszust',
            players: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 2 do 10 graczy.<br />
                        Talia 52 kart. Przy większej ilości graczy można użyć więcej talii.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Graczom rozdawane są wszystkie karty. W zależności od liczby graczy, niektórzy mogą mieć ich więcej, a niektórzy mniej.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Celem gry jest pozbycie się wszystkich kart.<br />
                        Rozdający wybierany jest losowo.
                    </p>
                    <p>
                        Kolejka rozpoczyna się od wyrzucenia jednej karty zakrytej i wypowiedzenia jej wartości. Można również wyrzucić kilka kart tej samej wartości. Pierwszy gracz musi wyrzucić asa, drugi dwójkę, trzeci trójkę itd. Gdy kolej przyjdzie na wyrzucenie króla, to po nim znów przychodzi kolej na asa, itd.
                    </p>
                    <p>
                        Nie trzeba jednak wyrzucać kart o wysokości jaką się zadeklarowało. Np. jest to twoja kolejka do wyrzucenia siódemek, możesz jednak wyrzucić dowolną kartę lub kilka zmieszanych, szczególnie jeśli nie masz żadnej siódemki jesteś zmuszony do wyrzucenia innej karty.
                    </p>
                    <p>
                        Każdy gracz, który podejrzewa wyrzuconą kartę o niezgodność z wymówioną wartością, może wyzwać gracza wypowiadając: "Oszust!". Wyzywający odsłania wtedy wyrzucone karty i następuje jedna z dwóch możliwości:
                    </p>
                    <ol>
                        <li>
                            jeśli karty są poprawne, a wyzwanie jest fałszywe - wyzywający bierze cały stos;
                        </li>
                        <li>
                            jeśli karty są fałszywe, a wyzwanie jest prawdziwe - osoba, która je wyrzuciła bierze cały stos;
                        </li>
                    </ol>

                    <p>
                        Gra jest kontynuowana od pierwszej osoby na lewo, która wzięła stos i to ona mówi następną wartość.
                    </p>
                    <p>
                        Pierwszy gracz, który pozbędzie się pierwszy swoich kart i zwycięży ostatnie wyzwanie wygrywa grę. Jeśli gracz wyrzuci swoje ostatnie karty i ktoś go wyzwie, a karty nie będą zgodne z wartością przez niego wypowiedzianą, zabiera stos i gra jest kontynuowana.
                    </p>

                    <h2 className="content-subhead">Warianty</h2>
                    <p>
                        Można grać z inną kolejnością kart: nie od asa do króla (A, 2, 3, 4...) lecz od asa do dwójki (A, K, D, W...).
                    </p>
                    <p>
                        Można grać tak, że po zadeklarowaniu wartości karty przez jednego z graczy, następny może zadeklarować kartę o rangę wyższą lub niższą. I tak, gdy któryś z graczy rzucił np. dwie dziesiątki i nikt go nie wyzwał, następny może rzucić walety lub dziewiątki.
                    </p>
                </div>
            </div>
        );
    }
}
