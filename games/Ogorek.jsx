import React from 'react';


export default class Ogorek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ogórek',
            desc: 'gra dla 2 - 7 osób',
            url: '/ogorek',
            players: [2, 3, 4, 5, 6, 7],
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
                    <p>Gra dla 2 - 7 osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia 52 kart.<br />
                        Kolor nie ma znaczenia.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Rozdającego wybiera się przez losowanie, który po przetasowaniu kart rozdaje każdemu z graczy po 7 kart na raz, rozpoczynając od gracza po jego lewej stronie. Karty nie rozdane są odkładane na zakrytym stosie.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        W rozdaniu granych jest 7 lew. Karty zrzucane na stół nie są zbierane ani odwracane po każdej lewie. Każdy z graczy ma prawo sprawdzić karty wcześniej wyrzucone.<br />
                        Rozpoczyna gracz po lewej stronie rozdającego. Gracz, który wygrał kolejkę, wychodzi do następnej lewy. Pierwsza wyrzucona karta w lewie jest prowadząca, reszta graczy rzuca za nią do lewy zgodnie z ruchem wskazówek zegara. Prowadzący wybiera dowolną kartę, reszta graczy natomiast ma do wyboru w kolejce:
                    </p>
                    <ul>
                        <li>zagrać kartę, której wartość jest równa lub wyższa od prowadzącej;</li>
                        <li>zagrać swoją najniższą kartę.</li>
                    </ul>

                    <p>
                        Najwyższa karta bierze lewę. Jeśli w lewie jest kilka takich samych, bierze ją ostatnio położona.<br />
                        Jeśli kolejny gracz, który powinien rozdawać zostanie wyeliminowany z gry, rozdającym jest następny w kolejności.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Gracz, który wziął ostatnią lewę traci rozdanie i jest karany. Punktacja graczy jest sumowana z kar jakie zgromadzili. Przegrany w rozdaniu gracz otrzymuje punkty karne w zależności od wartości karty zrzuconej w ostatniej lewie (A=14, K=13, D=12, W=11, reszta kart zgodnie z ich wartością). Kiedy punktacja osiągnie lub przekroczy 21 punktów, dany gracz przegrywa. Może on powrócić do gry, lecz na jego konto zapisuje się najwyższą liczbę punktów zdobytą przez któregoś z reszty graczy. Jeśli osiągnie on 21 punktów po raz drugi, wypada z gry na stałe.<br />
                        Ewentualnie, przy grze w dwie osoby, gra toczy się do momentu aż któryś z graczy zdobędzie lub przekroczy 21 punktów.
                    </p>
                    <p>
                        Jeśli w ostatniej lewie któryś z graczy rzuci kartę tej samej wysokości co gracz, który ją weźmie (przegrywający daną lewę), dostaje on premię o takiej samej wysokości co wartość tej karty (jednocześnie takiej samej co kara dla gracza, który tą lewę wziął). Premia ta jest odejmowana od punktacji danego gracza.
                    </p>
                    <p>
                        Np.: w ostatniej lewie brało udział sześciu graczy, a karty przez nich zagrane to kolejno: 5, 9, 3, 9, 9 i 7. Piąty gracz bierze lewę ostatnią rzuconą dziewiątką i otrzymuje 9 punktów karnych; drugi i czwarty gracz dostają premię 9pkt, którą odejmuje się od zgromadzonych do tej pory przez nich punktów.
                    </p>
                    <p>
                        Odejmując premię nie obniża się ogólnej punktacji poniżej zera.<br />
                        Dla graczy, którzy weszli po raz drugi do gry, premia nie jest obniżana poniżej wartości z jaką ponownie weszli do gry.<br />
                        I tak, przy grze w dwie osoby, gdy obaj mają po 18 pkt i obaj w ostatniej lewie zrzucają dziesiątki, gracz który zrzucił ją drugi otrzymuje 10pkt karnych (przekracza wartość 21pkt) i przystępuje ponownie do gry z 18 punktami (ilość punktów zdobytych przez przeciwnika), przeciwnik natomiast otrzymuje 10pkt premii (za zrzuconą kartę o tej samej wysokości co zabierający lewę) zmniejszając swój wynik do 8 punktów.
                    </p>
                    <p>
                        Zwycięzca zostaje pierwszym rozdającym w następnej grze.
                    </p>
                </div>
            </div>
        );
    }
}
