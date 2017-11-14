import React from 'react';


export default class Pikieta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Pikieta',
            desc: 'gra dla 2 osób',
            url: '/pikieta',
            players: [2],
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
                        Jedna z najstarszych gier karcianych pochodząca z Francji i według niektórych źródeł znana tam już pod koniec XIV wieku jako ronflé i cent. Ideę gry stworzył rzekomo Etienne de Vignolles (kawaler la Hire), towarzysz walk Joanny d'Arc. Pikieta rozpowszechniła się we Francji w XV wieku; szczyt popularności osiągnęła w XVIII wieku, gdy stała się znana w całej Europie. Obowiązujące do dzisiaj zasady gry i jej zapisu ustalił Charles Picquet z Troyes. Nazwa gry pochodzi od jego nazwiska.<br />
                        W Polsce pikieta w XIX wieku uważana już była za grę dawną. Znano różne warianty gry: rummelpikietę, pikietę z rubikonem, rozbójnicką, normańską, cesarską, pisaną, "a la poule". W ZSRR pikieta znana była jako gra w "kogucika".
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 2 osób.
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia tzw. pikietowa (32 karty, od asów do siódemek).<br />
                        Wartość punktowa kart: as - 11, figura i dziesiątka - 10, blotki - wg ilości oczek.<br />
                        Nie ma koloru atutowego.

                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Rozdaje się po dwie karty. Każdy z graczy otrzymuje 12 kart. Pozostałe osiem kart rozdający rozdziela na dwa zakryte talony: pięciokartowy (tzw. talon przeciwnika) i trzykartowy (tzw. talon rozdającego).
                    </p>
                    <p>
                        Jeżeli któryś z graczy po rozdaniu kart ma od razu na ręku tzw. "carte blanche" (zestaw kart bez figur, tzn. bez króla, bez damy i bez waleta), otrzymuje od razu 10 punktów premii.

                    </p>

                    <h2 className="content-subhead">Wymiana</h2>
                    <p>
                        Wymianę kart rozpoczyna przeciwnik rozdającego. Ma on obowiązek wymienić co najmniej jedną kartę z ręki na jedną kart z talonu. Może wymienić do pięciu kart (cały talon). Jeśli wymienia mniej niż pięć kart, pozostające na stole po wymianie karty swego talonu ma prawo podejrzeć.
                    </p>
                    <p>
                        Rozdający nie ma obowiązku wymiany. Może wymienić tyle kart ile pozostało na stole (trzy ze swego talonu oraz te, które w swoim talonie pozostawił przeciwnik). Karty nie wymienione ma prawo po wymianie podejrzeć (poza tymi, które zrzucił przeciwnik).
                    </p>

                    <h2 className="content-subhead">Licytacja</h2>
                    <p>
                        Licytację rozpoczyna przeciwnik rozdającego.<br />
                        Licytacja polega na kolejnym zgłaszaniu posiadanych w ręku długich kolorów, sekwensów i kompletów.<br />
                        Ten z graczy, który ma najdłuższy kolor, otrzymuje za niego punkty - tyle punktów, ile kart w kolorze. Jeśli obydwaj gracze mają kolory tej samej długości, wygrywa w licytacji i zdobywa punkty za kolor ten z graczy, którego kolor ma wyższą wartość punktową (większą sumę oczek wszystkich kart w kolorze).
                    </p>
                    <p>
                        Następnie licytuje się sekwensy. Mają one swoje specjalne nazwy, wywodzące się z łaciny:
                    </p>
                    <ul>
                        <li>oktawa - sekwens ośmiokartowy (pełny kolor)</li>
                        <li>septa - sekwens siedmiokartowy</li>
                        <li>seksta - sekwens sześciokartowy</li>
                        <li>kwinta - sekwens pięciokartowy</li>
                        <li>kwarta - sekwens czterokartowy</li>
                        <li>terc - sekwens trzykartowy</li>
                    </ul>

                    <p>
                        Ten z graczy, który ma najdłuższy sekwens, otrzymuje za niego punkty.<br />
                        Za oktawę - 18, septę - 17, sekstę - 16, kwintę - 15, kwartę - 14, a za terc - 13 punktów.<br />
                        Jeśli obydwaj gracze mają sekwensy tej samej długości, wygrywa w licytacji ten z nich, którego sekwens rozpoczyna się od wyższej karty. Najstarszy sekwens, od asa, nosi dodatkową nazwę "major" (np. terc major, septa major). Ten z graczy, który wygrał licytację sekwensów, zdobywa punkty nie tylko za sekwens wygrywający, lecz i za wszystkie inne, słabsze sekwensy w ręku.
                    </p>
                    <p>
                        Następnie licytuje się komplety: trzy lub cztery jednakowej wysokości karty w ręku.<br />
                        Ten z graczy, który ma najstarszy komplet, otrzymuje punkty.<br />
                        Za komplet czterokartowy 14 punktów a za komplet trzykartowy 3 punkty.<br />
                        Każdy komplet czterokartowy jest starszy od każdego kompletu trzykartowego.<br />
                        Jeśli komplety są tej samej długości, w licytacji wygrywa komplet złożony z wyższych kart.<br />
                        Ten z graczy, który wygrał licytację kompletów, zdobywa punkty nie tylko za komplet wygrywający, lecz i za wszystkie inne, słabsze komplety w ręku.
                    </p>
                    <p>
                        W licytacji kolorów, sekwensów i kompletów biorą udział wszystkie karty w ręku. Każda karta może być jednocześnie częścią kolory, sekwensu i kompletu.
                    </p>
                    <p>
                        Jeśli w licytacji wzięły udział wszystkie karty gracza (każda z nich była częścią koloru, sekwensu lub kompletu), gracz otrzymuje 20 punktów premii za tzw. "carte rouge".<br />
                        Jeśli w licytacji któryś z graczy zdobędzie w sumie 30 punktów lub więcej, przeciwnik natomiast nie zdobędzie ani jednego punktu, wygrywający licytację zdobywa dodatkowo 60 punktów premii.
                    </p>

                    <h2 className="content-subhead">Rozgrywka</h2>
                    <p>
                        Pierwszy wychodzi przeciwnik rozdającego.<br />
                        Nie ma koloru atutowego.<br />
                        O wzięciu lewy decyduje starszeństwo kart.<br />
                        Jest obowiązek dorzucania do koloru.<br />
                        Nie ma obowiązku przebijania starszą kartą.
                    </p>
                    <p>
                        Za każde wyjście, ten z graczy, który wychodzi, otrzymuje jeden punkt (1pkt za wyjście, nie za wzięcie lewy). Za ostatnie wyjście zdobywa się dwa punkty.
                    </p>
                    <p>
                        Rozgrywkę wygrywa ten z graczy, który weźmie więcej niż połowę lew. Za wygraną rozgrywkę (za siódmą lewę) otrzymuje się 10 punktów.
                    </p>
                    <p>
                        Jeśli w toku rozgrywki któryś z graczy zdobędzie 30 lub więcej punktów (łącznie z poprzednio otrzymanymi punktami za licytację), przeciwnik natomiast nie ma ani jednego punktu, wygrywający otrzymuje dodatkowo 30 punktów premii. Premia ta oczywiście nie obowiązuje, gdy gracz otrzymał już uprzednio premię w licytacji za przekroczenie 30 zdobytych punktów.
                    </p>
                    <p>
                        Obliczenie otrzymywanych punktów prowadzi się zarówno w licytacji, jak i w rozgrywce na bieżąco.
                    </p>
                    <p>
                        Wygrywa ten, kto w sumie, w licytacji i w rozgrywce, zdobył więcej punktów. Wygrywającemu dolicza się 100 punktów premii.
                    </p>
                    <p>
                        Pełna partia pikiety składa się z czterech rozdań; każdy z graczy rozdaje karty dwukrotnie.
                    </p>

                    <div className="example">
                        <div className="title">Partia przykładowa</div>
                        <div className="content">
                            <p>Rozdawał gracz A.</p>
                            <p>B ma na ręku:</p>
                            <ul>
                                <li>w pikach - A;</li>
                                <li>w kierach - A, K, D, 10, 8, 7;</li>
                                <li>w karach - A, 10, 9;</li>
                                <li>w treflach - 9, 8;</li>
                            </ul>

                            <p>A ma na ręku:</p>
                            <ul>
                                <li>w pikach - D, W, 10, 9, 8;</li>
                                <li>w kierach - W, 9;</li>
                                <li>w karach - K, D;</li>
                                <li>w treflach - A, W, 10</li>
                            </ul>

                            <p>
                                B wymienia cztery karty, zrzucając 9 <span className="club"></span> i 8 <span className="club"></span> oraz 10 <span className="diamond"></span> i 9 <span className="diamond"></span>.<br />
                                Uzyskuje z talonu K <span className="club"></span> i 7 <span className="club"></span>, 7 <span className="spade"></span> i 7 <span className="diamond"></span>. Podgląda kartę pozostałą w talonie - jest to W <span className="diamond"></span>.
                            </p>
                            <p>
                                A wymienia dwie karty, zrzucając W <span className="heart"></span> i 9 <span className="heart"></span>. Uzyskuje z talonu K <span className="spade"></span> i 8 <span className="diamond"></span>. Podgląda kartę pozostałą w talonie przeciwnika (W <span className="diamond"></span>) i kartę pozostałą we własnym talonie - jest to D <span className="club"></span>.
                            </p>
                            <p>
                                Licytację kolorów wygrywa A - jego sześciokartowy kolor pikowy jest wart 57 oczek; sześciokartowy kolor kierowy u B jest wart 56 oczek. A otrzymuje 6 punktów za kolor.
                            </p>
                            <p>
                                Licytację sekwensów wygrywa także A - jego seksta pikowa przynosi mu 16 punktów. A zdobył już 22 punkty.
                            </p>
                            <p>
                                Licytację kompletów wygrywa B - jego cztery siódemki przynoszą mu 14 punktów, dodatkowo za trzy asy otrzymuje 3 punkty.
                            </p>
                            <p>
                                W momencie przystąpienia do rozgrywki A ma 22 punkty, B - 17 punktów.
                            </p>
                            <p>
                                Oto kolejne lewy rozgrywki i w nawiasach ilości punktów zdobytych przez graczy:
                            </p>
                            <p>
                                A <span className="heart"></span>, 10 <span className="club"></span> (18 - B; 22 - A);<br />
                                K <span className="heart"></span>, W <span className="club"></span> (19 - B; 22 - A);<br />
                                D <span className="heart"></span>, 8 <span className="diamond"></span> (20 - B; 22 - A);<br />
                                10 <span className="heart"></span>, 8 <span className="spade"></span> (21 - B; 22 - A);<br />
                                7 <span className="heart"></span>, 10 <span className="spade"></span> (23 - B; 22 - A);<br />
                                A <span className="diamond"></span>, D <span className="diamond"></span> (34 - B, bo to już 7 lewa; 22 - A);<br />
                                7 <span className="diamond"></span>, K <span className="diamond"></span> (35 - B; 22 - A);<br />
                                K <span className="spade"></span>, 7 <span className="spade"></span> (35 - B; 23 - A);<br />
                                D <span className="spade"></span>, A <span className="spade"></span> (35 - B; 24 - A);<br />
                                7 <span className="club"></span>, A <span className="club"></span> (36 - B; 24 - A);<br />
                                W <span className="spade"></span>, K <span className="club"></span> (36 - B; 26 - A).
                            </p>
                            <p>
                                Premia za wygraną (100 punktów) dla B.<br />
                                B uzyskał łącznie 136 punktów, A - 26 punktów.<br />
                                A przegrał więc 110 punktów
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
