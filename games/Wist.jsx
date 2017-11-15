import React from 'react';


export default class Wist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Wist',
            desc: 'gra dla 4 osób',
            url: '/wist',
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
                        Jest to jedna z najstarszych gier w karty, wywodząca się z dawnej gry pod nazwą "triumf", znanej już na początkach XVI wieku (wzmiankował o niej Rabelais, później Szekspir).<br />
                        Z gry ogólnoeuropejskiej wist stał się grą przede wszystkim angielską, po czym znów wszedł w modę w wielu krajach Europy w XVIII i XIX wieku jako najbardziej znana karciana gra strategiczno-losowa. W tej roli wista współcześnie zastąpił wywodzący się od niego pośrednio Brydż.<br />
                        W wista grywano w wielu różnych wariantach (boston, wint, la mort, humbug, Fontainebleau i inne). Wist-solo jest jednym z tych wariantów, który zdobył sobie niegdyś szczególną popularność i jest do dzisiaj znany i uprawiany w Wielkiej Brytanii.
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 4 osób.<br />
                        Pełna talia kart.<br />
                        Starszeństwo kart od asa do dwójki.<br />
                        Istnieje zmienny kolor atutowy.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Gracze otrzymują po trzynaście kart. Ostatnia karta, należąca do rozdającego, zostaję odkryta - jej kolor wyznacza kolor atutowy w danej rozgrywce. Każde rozdanie składa się z dwóch etapów: licytacji i rozgrywki.
                    </p>
                    <p>
                        W licytacji gracze kolejno, poczynając od siedzącego po lewej stronie rozdającego i w kierunku ruchu wskazówek zegara, deklarują swój udział w rozgrywce. Gracz, któremu jakość i układ kart nie pozwalają brać udziału w licytacji, pasuje; kto raz spasował, nie bierze udziału w dalszej licytacji. Wygrywa licytację ten z graczy, który zapowie najwyższą rozgrywkę. Starszeństwo w licytacji (kolejność rozgrywek) jest następujące: propozycja i przyjęcie, solo, misére, abondance, abondance atutowe, misére ouverte, abondance declarée.
                    </p>
                    <p>
                        Gracz, który licytuje propozycję ("proponuje"), zobowiązuje się wziąć w rozgrywce z odsłoniętym kolorem jako atutowym co najmniej osiem z trzynastu lew wraz z partnerem. Partnerem rozgrywającego zostaje ten z graczy, który w dalszej licytacji pierwszy przyjmie propozycję (zalicytuje "akceptuję" lub "przyjmuję"). Gracze, którzy stali się partnerami w rozgrywce propozycji i akceptacji, nie zmieniają miejsc przy stole, mogą siedzieć obok lub naprzeciw siebie. Jeśli pierwszy licytujący pasował, któryś zaś z kolejnych graczy zgłosił propozycję, pierwszy licytujący ma w swojej kolejności prawo powtórnie włączyć się do licytacji i przyjąć propozycję. Jest to jedyny wypadek, gdy wolno graczowi raz jeszcze włączyć się do licytacji po uprzednim spasowaniu. Jeśli zalicytowanej propozycji nikt z pozostałych graczy nie akceptuje, licytujący propozycję ma prawo przelicytować sam siebie (zalicytować wyżej); jeśli tego nie uczyni, nie ma rozgrywki, karty tasuje się i rozdaje do następnej licytacji.
                    </p>
                    <p>
                        Gracz, który licytuje solo, zobowiązuje się w rozgrywce z odsłoniętym kolorem jako atutowym wziąć samemu co najmniej pięć z trzynastu lew.
                    </p>
                    <p>
                        Gracz, który licytuje misére, zobowiązuje się w rozgrywce bezatutowej nie wziąć samemu ani jednej lewy.
                    </p>
                    <p>
                        Gracz, który licytuje abondance, zobowiązuje się w rozgrywce z kolorem atutowym, który sam sobie wybierze, wziąć samemu co najmniej dziewięć z trzynastu lew. Licytując abondance gracz nie zapowiada od razu koloru atutowego, lecz czeka, aż pozostali trzej gracze spasują, dopiero wówczas ujawnia swój wybrany kolor atutowy. Gdy abondance zostaje przelicytowana, zamierzony kolor atutowy pozostaje nieujawniony
                    </p>
                    <p>
                        Gracz, który licytuje abondance atutową, zobowiązuje się w rozgrywce z odsłoniętym kolorem jako atutowym wziąć samemu co najmniej dziewięć z trzynastu lew. Licytując abondance atutową gracz nie zapowiada od razu, iż jest ona atutowa, lecz ujawnia to dopiero wówczas, gdy pozostali trzej gracze spasują - chyba, że abondance atutowa jest przelicytowaniem zwykłej abondance, musi wówczas zostać od razu zapowiedziana jako atutowa.
                    </p>
                    <p>
                        Gracz, który licytuje misére ouverte, zobowiązuje się w rozgrywce bezatutowej nie wziąć samemu ani jednej lewy i dodatkowo po pierwszym wyjściu odkryć swoje karty.
                    </p>
                    <p>
                        Gracz, który licytuje abondance declarée (jest to najwyższa zapowiedź w wiscie-solo), zobowiązuje się w rozgrywce bezatutowej wziąć samemu wszystkie trzynaście lew. Przy rozgrywaniu abondance declarée pierwszy wychodzi ten z graczy, który tę zapowiedź zalicytował. Przy rozgrywaniu wszystkich innych zapowiedzi zawsze pierwszy wychodzi ten z graczy, który rozpoczynał licytację (siedzący po lewej ręce rozdającego).
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Za poszczególne zapowiedzi otrzymuje się następujące ilości punktów:
                    </p>
                    <ul>
                        <li>
                            za propozycję i akceptację - 4pkt dla każdego z dwóch partnerów i po 1pkt za każdą wziętą lewę powyżej obowiązujących ośmiu dla każdego z dwóch partnerów; kontrpartnerom zapisuje się tę samą ilość punktów minusowych;
                        </li>
                        <li>
                            za solo - 12pkt dla rozgrywającego i po 3pkt za każdą wziętą lewę powyżej obowiązujących pięciu; kontrpartnerom zapisuje się po 4pkt minusowe i po 1pkt minusowym za każdą lewę powyżej obowiązujących pięciu zdobytą przez rozgrywającego;
                        </li>
                        <li>
                            za misére - 24pkt dla rozgrywającego, a po 8pkt minusowych dla kontrpartnerów; oczywiście nie ma nadróbek;
                        </li>
                        <li>
                            za abondance i abondance atutową - 36pkt dla rozgrywającego i po 6 punktów za każdą lewę powyżej obowiązujących dziewięciu; kontrpartnerom zapisuje się po 12 punktów minusowych i po 2 punkty minusowe za każdą lewę powyżej obowiązujących dziewięciu zdobytą przez rozgrywającego;
                        </li>
                        <li>
                            za misére ouverte - 48pkt dla rozgrywającego; oczywiście nie ma nadróbek;
                        </li>
                        <li>
                            za abondance declarée - 72pkt dla rozgrywającego; oczywiście nie ma nadróbek.
                        </li>
                    </ul>

                    <p>
                        Jeśli gracz rozgrywający nie wykona swojej zapowiedzi licytacyjnej, otrzymuje zamiast punktów plusowych minusowe, odpowiednią zaś ilość punktów plusowych (z punktami za wpadkę lub wpadki) dzielą się kontrpartnerzy. W każdym zapisie ilość zdobytych punktów plusowych równoważy się z ilością punktów minusowych.<br />
                        Zasady punktowania przedstawia poniższa tabela:
                    </p>

                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td></td>
                                <td>dla rozgrywającego</td>
                                <td>dla kontrpartnerów</td>
                                <td>za nadróbkę lub wpadkę dla rozgrywającego</td>
                                <td>za nadróbkę lub wpadkę dla kontrpartnerów</td>
                            </tr>
                            <tr>
                                <th>propozycja i przyjęcie</th>
                                <td>4<br /> 4 (partner)</td>
                                <td>4</td>
                                <td>1<br /> 1 (partner)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>solo</th>
                                <td>12</td>
                                <td>4</td>
                                <td>3</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>misére</th>
                                <td>24</td>
                                <td>8</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>abondance</th>
                                <td>36</td>
                                <td>12</td>
                                <td>6</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>abondance atutowe</th>
                                <td>36</td>
                                <td>12</td>
                                <td>6</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>misére ouverte</th>
                                <td>48</td>
                                <td>16</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>abondance declarée</th>
                                <td>72</td>
                                <td>24</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Na przykład za propozycję i akceptację, gdy rozgrywający wzięli dziesięć lew, otrzymują po 6 punktów każdy (4 punktów za rozgrywkę i 2 za nadróbki), kontrpartnerom zaś zapisuje się po 6 punktów minusowych każdemu.
                    </p>
                    <p>
                        Za abondance atutową, gdy rozgrywający wziął tylko siedem lew, a więc nie zrealizował swojej zapowiedzi, zapisuje mu się 48 punktów minusowych (36 za przegraną rozgrywkę i 12 za dwie wpadki), kontrpartnerom zaś zapisuje się po 16 punktów plusowych każdemu (12 za przegraną rozgrywkę i 4 za dwie wpadki).
                    </p>
                    <p>
                        Każde rozdanie (rozgrywka) w wiście jest samodzielną partią; grę można przerwać w dowolnym momencie, gdy kolejna rozgrywka dobiegnie końca.
                    </p>

                    <div className="example">
                        <div className="title">Partia przykładowa</div>
                        <div className="content">
                            <p>
                                Rozdawał gracz D; kartą odsłoniętą jest 6 trefl. Układ kart u poszczególnych graczy jest następujący:
                            </p>

                            <table className="pure-table">
                                <tbody>
                                    <tr className="pure-table-odd">
                                        <td>Gracz A</td>
                                        <td>Gracz B</td>
                                        <td>Gracz C</td>
                                        <td>Gracz D</td>
                                    </tr>
                                    <tr>
                                        <td>Piki: A, K, 10</td>
                                        <td>Piki: 8, 3</td>
                                        <td>Piki: W, 6, 5, 4, 2</td>
                                        <td>Piki: D, 9, 7</td>
                                    </tr>
                                    <tr>
                                        <td>Kiery: K, 9</td>
                                        <td>Kiery: W, 8, 6, 5, 3</td>
                                        <td>Kiery: D, 7, 4, 2</td>
                                        <td>Kiery: A, 10</td>
                                    </tr>
                                    <tr>
                                        <td>Kara: 9, 7, 6, 4</td>
                                        <td>Kara: - </td>
                                        <td>Kara: 3, 2</td>
                                        <td>Kara: A, K, D, W, 10, 8, 5</td>
                                    </tr>
                                    <tr>
                                        <td>Trefle: A, K, 7, 4</td>
                                        <td>Trefle: D, W, 10, 8, 3, 2</td>
                                        <td>Trefle: 9, 5</td>
                                        <td>Trefle: 6</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>
                                W licytacji zabierali głos kolejno: A - propozycja, B - pas, C - misére, D - abondance, A - pas, B - pasował już uprzednio, C - pas; D ujawnia, iż jest to abondance w karach.<br />
                                Licytację wygrał więc D - zobowiązał się wziąć samemu co najmniej dziewięć lew z karami jako atuty.
                            </p>
                            <p>
                                ROZGRYWKA:<br />
                                A wychodzi w K <span className="club"></span>, bierze na niego lewę i wychodzi w A <span className="club"></span>. D przebija go blotką karową i ściąga atuty z góry w czterech kolejnych lewach, grając A, K, D i W karo, na które A zrzuca wszystkie swoje kara, B - D <span className="club"></span> i 8 <span className="club"></span> oraz dwa małe kiery, C - dwa kara i dwa małe piki.
                            </p>
                            <p>
                                Następnie D, w nadziei, że spadną jeszcze jakieś piki i w ten sposób wyrobi sobie decydującą lewę na D <span className="spade"></span>, wychodzi dalej dwukrotnie w kara (10 i 8). A zrzuca dwa trefle, B - dwa piki, C - dwa małe kiery. W tym momencie rozgrywający orientuje się, iż jedyna jego szansa to wpuścić A do ręki na kiery i oczekiwać na wyrobienie się damy <span className="spade"></span>. Niestety, tego samego domyślił się także A - i po wyjściu D w A <span className="heart"></span> zrzucił na niego... swego K <span className="heart"></span>. Ostatnie cztery lewy biorą teraz, niezależnie od tego, w co wyjdzie D, jego przeciwnicy; w skutek dobrej gry obronnej kontrpartnerów D nie wypełnia swojej zapowiedzi licytacyjnej, wziął tylko osiem lew zamiast dziewięciu.
                            </p>
                            <p>
                                D zapisuje się więc 42pky minusowe (36 za przegraną rozgrywkę i 6 za jedną wpadkę), przeciwnicy uzyskują po 14pkt plusowych każdy.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="content">
                        <a name="solo"></a>
                        <h1 className="content-subhead main-header">
                            Wist-solo dla trzech osób
                        </h1>

                        <h2 className="content-subhead">
                            Wariant I: Wist-solo trzema kolorami
                        </h2>
                        <p>
                            Z talii usuwa się jeden kolor, gra toczy się 39 kartami, każdy z graczy otrzymuje po 13 kart.
                        </p>

                        <h2 className="content-subhead">
                            Wariant II: Wist-solo 40 kartami
                        </h2>
                        <p>
                            Z talii usuwa się 4, 3 i 2 wszystkich kolorów, gra toczy się 40 kartami, każdy z graczy otrzymuje po 13 kart; czterdziesta karta, odsłonięta, wyznacza kolor atutowy i nie bierze udziału w rozgrywce.
                        </p>
                        <p>
                            W obu tych wariantach obowiązuje inne niż przy tradycyjnym wiście-solo dla czterech osób starszeństwo zapowiedzi, a mianowicie: solo, abondance, abondance atutowa, misére, abondance declarée, misére ouverte.
                        </p>
                        <p>
                            Nie ma więcej propozycji i akceptacji, misére zaś jest starsza od abondance (przeciw dwom tylko, nie trzem kontrpartnerom znacznie trudniej jest je wygrać).
                        </p>
                        <p>
                            Inaczej wygląda także zapis - punkty minusowe dzieli się przy wygranej rozgrywce nie na trzech, lecz na dwóch kontrpartnerów, punkty plusowe zaś, wobec zmian w starszeństwie zapowiedzi w licytacji, zdobywa się odpowiednio inaczej:
                        </p>
                        <ul>
                            <li>za solo - 12pkt</li>
                            <li>za abondance i abondance atutową - 24pkt</li>
                            <li>za misére - 36pkt</li>
                            <li>za abondance declarée - 48pkt</li>
                            <li>za misére ouverte - 72pkt.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
