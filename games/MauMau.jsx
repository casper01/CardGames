import React from 'react';


export default class MauMau extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mau-mau',
            name2: 'Pony',
            url: '/maumau',
            players: [],
            cards: 'Pikietowa talia kart (32 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra współczesna, zwana także jako "pony".
                    </div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pikietowa talia kart (32 karty).<br />
                        Nie ma koloru atutowego.<br />
                        Starszeństwo kart nie ma w grze znaczenia.<br />
                        Wartość punktowa kart: as - 11, król - 4, dama - 3, walet - 2, pozostałe karty według ilości oczek.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Do następnych rozdań gracze rozdają karty kolejno. Grę rozpoczyna zawsze gracz na lewo od rozdającego.<br />
                        Każdy z grających otrzymuje po pięć kart. Następną kartę kładzie się odsłoniętą na stole ("wyświęca się") - jest to pierwsza karta odkrytego stosu. Reszta kart pozostaje w zakrytym stosie.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Gracze kolejno, w kierunku ruchu wskazówek zegara, wykładają po jednej karcie z ręki na stół, na odkryty stos.<br />
                        Wolno w swojej kolejce gry dołożyć kartę tego samego koloru co wierzchnia karta stosu lub tej samej wysokości.
                    </p>
                    <p>
                        Celem gry jest pozbycie się wszystkich kart z ręki dla uzyskania w zapisie w kolejnych rozgrywkach jak najmniejszej ilości punktów minusowych.
                    </p>
                    <p>
                        Wszystkie walety pełnią rolę specjalną: każdego waleta można zawsze wyłożyć na stół, zapowiadając jednocześnie początek nowego koloru, który obowiązuje następnego gracza (nie musi to być kolor wykładanego waleta; może być dowolnie wybrany przez gracza, który waleta wykłada).
                    </p>
                    <p>
                        Gdy gracz w swojej kolejce gry nie może wyłożyć żadnej karty z ręki, pobiera jedną kartę ze stosu zakrytego. Gdy nadal nie może wyłożyć żadnej karty, kolej gry przechodzi na następnego gracza.
                    </p>
                    <p>
                        Rozgrywka kończy się z chwilą, gdy któryś z graczy pozbywa się ostatniej karty z ręki. Wygrywający nie otrzymuje żadnych punktów - pozostali gracze otrzymują ilość punktów minusowych równą ilości oczek wszystkich kart pozostałych w ręku.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach do chwili, gdy jeden z graczy w zapisie przekroczy umówioną z góry ilość punktów (zazwyczaj 100pkt).
                    </p>

                    <h2 className="content-subhead">Warianty</h2>
                    <p>
                        W mau-mau, szczególnie przy większej ilości uczestników gry, można grać pełną talią (52 karty).<br />
                        Można umówić się, że obowiązuje jedna lub kilka spośród następujących, dodatkowych reguł rozgrywki i zapisu:
                    </p>
                    <ol>
                        <li>
                            jeśli karta kończąca grę (ostatnia z ręki) jest waletem, zapis punktowy wszystkich graczy przegrywających rozgrywkę podwaja się;
                        </li>
                        <li>
                            po zrzuceniu siódemki do stosu następny gracz ma obowiązek pobrać jedną kartę ze stosu zakrytego i nie zrzuca żadnej karty;
                        </li>
                        <li>
                            po zrzuceniu ósemki do stosu odkrytego następny gracz traci kolejkę (zostaje ominięty) w grze;
                        </li>
                        <li>
                            na damę wolno położyć tylko króla tego samego koloru lub dowolnego waleta;
                        </li>
                        <li>
                            każdy z grających otrzymuje nie po 5, lecz po 7 kart;
                        </li>
                    </ol>
                    <p>
                        Pozostałe reguły gry i zapisu - bez zmian.
                    </p>
                </div>
            </div>
        );
    }
}
