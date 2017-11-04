import React from 'react';


export default class Atutowiec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Atutowiec',
            desc: 'gra dla 2 osób',
            url: '/atutowiec',
            players: [2],
            cards: 'Skatowa talia kart (32 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info"> Tradycyjna gra rosyjska (zwana "swoi kozyri" - "swoje atuty"), która zdobyła sobie sporą popularność także w Wielkiej Brytanii (pod nazwą "challenge" - "wyzwanie".<br />
                        Atutowiec wywodzi się ze znanej i u nas, dawnej gry po różnymi nazwami: dureń, kasztelan, gap, wózek.
                    </div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Skatowa talia kart (32 karty).<br />
                        Starszeństwo kart od asa do siódemki.<br />
                        Istnieje zmienny kolor atutowy.<br />
                    </p>
                    <p>
                        Można grać także mniejszymi taliami kart (28 lub 24 karty); gra większymi taliami (36 i więcej kart) jest możliwa, lecz zbyt komplikuje grę.
                    </p>

                    <h2 className="content-subhead">Atut</h2>
                    <p>
                        Przed rozdaniem kart rozdający wybiera sobie dowolne dwa kolory i je ogłasza (na przykład: piki i trefle), jeden z nich ogłaszając jako swój kolor atutowy (na przykład piki). Z pozostałych dwu kolorów (w tym przykładzie kierów i kar) przeciwnik rozdającego ogłasza jeden jako swój kolor atutowy (na przykład kiery).
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Gdy wybór kolorów został już dokonany, rozdający daje sobie, odsłaniając je, szesnaście kart. Usuwa w nich wszystkie karty w tych kolorach, których nie ogłaszał, pozostawia karty w kolorach przez siebie nominowanych, które będą jego kartami do gry.
                    </p>
                    <p>
                        Przeciwnik rozdającego dobiera sobie teraz karty w dwu przez siebie ogłoszonych kolorach, identyczne co do wartości, jak karty rozdającego (należy brać pod uwagę kolor atutowy).<br />
                        Po zakończeniu podziału kart, karty w ręku obydwu graczy są niejako lustrzanym odbiciem, mają zawsze identyczną wartość i znaczenie.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Rozgrywkę pierwszym wyjściem rozpoczyna przeciwnik rozdającego.<br />
                        Każdy z grających ma swój kolor atutowy. Jeden z graczy wychodzi, drugi kartę wyjścia powinien przebić starszą kartą w tym samym kolorze lub atutem i "nadłożyć", wyjść do przeciwnika. Gdy kolejny gracz nie może lub nie chce przebić karty, którą wyszedł do niego przeciwnik, musi wziąć do ręki nie tylko kartę ostatniego wyjścia, lecz wszystkie karty leżące na stole; wychodzi wówczas przeciwnik.<br />
                        Wygrywa ten, który pierwszy pozbędzie się wszystkich kart z ręki.
                    </p>
                    <div className="example">
                        <div className="title">Przykładowa partia</div>
                        <div className="content">
                            Rozegrana 28 kartami (od asów do ósemek). Rozdawał gracz B.<br />
                            Gracz B jako swoje kolory nominuje kiery i kara, a jako kolor atutowy kiery.<br />
                            Gracz A nominuje więc piki i trefle, a jako kolor atutowy piki.<br />
                            W szesnastu pierwszych kartach odkrytych dla gracza B znajdują się A <span className="heart"></span>, D <span className="heart"></span>, W <span className="heart"></span> i 9 <span className="heart"></span> oraz A <span className="diamond"></span> i W <span className="diamond"></span><br />
                            Po dokonaniu podziału kart gracze mają na ręku:<br />
                            <table className="pure-table pure-table-horizontal">
                                <tbody>
                                    <tr>
                                        <td>Gracz B:</td>
                                        <td>
                                            K <span className="spade"></span>, 10 <span className="spade"></span> i 8 <span className="spade"></span><br />
                                            A <span className="heart"></span>, D <span className="heart"></span>, W <span className="heart"></span> i 9 <span className="heart"></span><br />
                                            A <span className="diamond"></span> i W <span className="diamond"></span><br />
                                            K <span className="club"></span>, D <span className="club"></span>, 10 <span className="club"></span>, 9 <span className="club"></span> i 8 <span className="club"></span><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gracz A:</td>
                                        <td>
                                            A <span className="spade"></span>, D <span className="spade"></span>, W <span className="spade"></span> i 9 <span className="spade"></span><br />
                                            K <span className="heart"></span>, 10 <span className="heart"></span>, 8 <span className="heart"></span><br />
                                            K <span className="diamond"></span>, D <span className="diamond"></span>, 10 <span className="diamond"></span>, 9 <span className="diamond"></span> i 8 <span className="diamond"></span><br />
                                            A <span className="club"></span> i W <span className="club"></span><br />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Gracz A wychodzi w 8 <span className="diamond"></span>, B bije W <span className="diamond"></span>, wychodzi w 8 <span className="club"></span>, A bije W <span className="club"></span>, wychodzi w 10 <span className="heart"></span> - B decyduje się wziąć karty ze stołu. A wychodzi w 9 <span className="diamond"></span>, B bije W <span className="diamond"></span> i wychodzi w 8 <span className="club"></span>. A bije A <span className="club"></span> i wychodzi w 10 <span className="diamond"></span>. B bije A <span className="diamond"></span> i wychodzi w 8 <span className="spade"></span>. A bije 9 <span className="spade"></span> i wychodzi w D <span className="diamond"></span>. B bije 9 <span className="heart"></span> i wychodzi w 10 <span className="spade"></span> - tym razem A decyduje się zabrać wszystkie karty.
                            </p>
                            <p>
                                B wychodzi w 9 <span className="club"></span>, A bije A <span className="club"></span> i wychodzi w 9 <span className="diamond"></span>. B bije 10 <span className="heart"></span> i wychodzi w 10 <span className="club"></span>. A bije 8 <span className="spade"></span> i wychodzi w 10 <span className="diamond"></span>. B bije W <span className="heart"></span> i wychodzi w W <span className="club"></span>. A bije 9 <span className="spade"></span> i wychodzi w 8 <span className="club"></span>. B bije D <span className="club"></span> i wychodzi w K <span className="club"></span>. A bije 10 <span className="spade"></span> i wychodzi w 8 <span className="heart"></span>. B bije D <span className="heart"></span> i wychodzi w 8 <span className="diamond"></span>. A bije W <span className="diamond"></span> i wychodzi w 9 <span className="heart"></span>. B bije A <span className="heart"></span> i wychodząc w K <span className="spade"></span> pozbywa się ostatniej karty z ręki, a więc wygrywa grę.
                            </p>
                            <p>
                                A pozostało na ręku: A <span className="spade"></span>, D <span className="spade"></span>, W <span className="spade"></span>, A <span className="diamond"></span>, K <span className="diamond"></span>, D <span className="diamond"></span> oraz K <span className="heart"></span>.<br />
                                Gracz A zbyt późno zaczął ofensywę w drugiej turze gry, źle obliczył zasoby ręki B - i musiał przegrać.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
