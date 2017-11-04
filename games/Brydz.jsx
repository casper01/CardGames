import React from 'react';


export default class Brydz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Brydż',
            desc: 'gra dla 4 osób',
            url: '/brydz',
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
                        Jako pierwsze opisane są przepisy brydża oparte na przepisach zatwierdzonych przez Światową Federację Brydża (WBF - World Bridge Federation) w 1948 roku. Pod nimi natomiast znajduje się kilka wariantów tej gry:<br />
                        <a href="#booby" className="pure-menu-link underline">Booby</a> <a href="#nullo" className="pure-menu-link underline">Nullo</a> <a href="#szlem" className="pure-menu-link underline">Szlem</a> <a href="#chinski" className="pure-menu-link underline">Chiński brydż</a> <a href="#dwuosobowy" className="pure-menu-link underline">Brydż dwuosobowy</a><br />

                        Brydż jest grą współczesną, wywodzącą się pośrednio z różnych gier dawniejszych, takich jak wist, lombr, boston, plafond, wint, cayenne. Niektórzy historycy dopatrują się w dzisiejszym brydżu także znacznych wpływów dawnych gier rosyjskich ("bridge" ma być angielskim odpowiednikiem rosyjskiego "biricz") oraz gier indyjskich i bliskowschodnich (gry pod nazwą "kedyw", znanej w Konstantynopolu w drugiej połowie XIX wieku).<br />

                        W swoich dziejach brydż miał wiele różnych wariantów samej gry (także specjalnymi taliami kart, pięcio- i sześciokolorowymi; brydż pięciokolorowy nazywał się "royal" lub "quintract") i zapisu. W zbliżonej do dzisiejszej postaci zrodził się na przełomie XIX iXX wieku.<br />

                        Po roku 1945 przyjął się w całym świecie jednolity brydż międzynarodowy ("contract bridge"), którego pierwsze zasady sformułowano w 1915 roku. Zapis międzynarodowy skodyfikował Harold S. Vanderbildt w 1926 roku. W latach trzydziestych do rozpropagowania brydża przyczynił się szczególnie Ely Culbertson, teoretyk i mistrz gry, później Charles Goren i wielu innych.<br />

                        Zasadom, strategii i taktyce brydża poświęcono wiele broszur i książek w różnych krajach. Wychodziły i wychodzą specjalne czasopisma brydżowe w wielu językach, także w języku polskim.<br />

                        W różnych krajach, również i u nas, brydż jest uprawiany jako dziedzina sportu umysłowego - odbywają się oficjalne turnieje i mistrzostwa brydżowe.<br />

                        Polski Związek Brydża Sportowego jest związkiem sportowym, podporządkowanym Głównemu Komitetowi Kultury Fizycznej.
                    </div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty). Do gry używa się zazwyczaj dwóch talii, tasowanych i rozdawanych na zmianę.<br />
                        Starszeństwo kart od asa do dwójki. Asy, króle, damy, walety i dziesiątki to honory; pozostałe karty to blotki.<br />
                        Starszeństwo kolorów w licytacji: bez atu, piki, kiery, kara, trefle.<br />
                        Istnieje zmienny kolor atutowy.
                    </p>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>
                        Osiągnięcie maksymalnej ilości punktów w zapisie za wygraną partię i robra (drugą partię).
                    </p>

                    <h2 className="content-subhead">Gracze i rozdanie</h2>
                    <p>
                        Gra dla czterech osób - dwóch par. Gracze siedzący na przeciw siebie grają wspólnie przeciwko drugiej parze, siedzącej także na przeciwko siebie.<br />
                        Pary dobierają się przez losowanie: z zakrytej talii każdy z graczy wyciąga po jednej kacie. Gracz z najstarszą kartą wybiera miejsce; gracz z kartą następną co do starszeństwa jest jego partnerem, siada naprzeciw. Dwaj pozostali są ich przeciwnikami - zajmują dwa pozostałe miejsca.
                    </p>
                    <p>
                        Wylosowane pary grają wspólnie w ciągu całego robra. Rober jest zamkniętym fragmentem gry, składającym się z dwu dogranych partii (patrz: zapis). Po skończonym robrze odbywa się kolejne losowanie. Gracze, którzy tworzyli parę, nie mogą już w tej samej turze grać ze sobą po raz drugi. W trzecim robrze grają ze sobą ci, którzy jeszcze nie tworzyli pary. Trzy robry stanowią pełny cykl gry, nazywany turą.
                    </p>
                    <p>
                        Gracz, który wylosował najstarszą kartę, pierwszy rozdaje karty, po przełożeniu ich przez przeciwnika siedzącego po prawej ręce. Karty rozdaje się po jednej począwszy od przeciwnika z lewej, aż do rozdania całej talii (każdy z grających otrzymuje po 13 kart). W czasie rozdawania partner rozdającego tasuje drugą talię i kładzie ją po swojej prawej ręce; następnie karty będzie rozdawał przeciwnik siedzący z lewej strony obecnie rozdającego.
                    </p>

                    <h2 className="content-subhead">Licytacja</h2>
                    <p>
                        Gra w brydża składa się z dwu części: licytacji i rozgrywki.
                    </p>
                    <p>
                        W czasie licytacji ustala się kontrakt, to jest zobowiązanie do wzięcia określonej ilości lew z określonym kolorem jako atutowym lub w "bez atu" przez tę parę partnerów, która zadeklarowała najwyższy kontrakt.
                    </p>
                    <p>
                        Lewa składa się z czterech kart dokładanych kolejno przez wszystkich czterech graczy. Zaczyna lewę (wychodzi) ten gracz, który wziął lewę poprzednią, kładąc dowolną ze swoich kart na stół. Pozostali gracze dokładają kolejno (w kierunku ruchu wskazówek zegara) po jednej karcie. Obowiązuje dokładanie kart w kolorze wyjścia. Jeśli gracz nie ma koloru wyjściowego, dokłada dowolną kartę; nie ma obowiązku przebijania atutem.
                    </p>
                    <p>
                        Lewę zabiera ten z graczy, który dołożył najstarszą kartę w zagranym kolorze. Jeśli któryś z graczy nie miał koloru wyjścia i dołożył atu (przebił), lewa należy do niego. Jeśli więcej graczy dołożyło atu, lewa należy do tego, który położył najstarszą atutową kartę.
                    </p>
                    <p>
                        Lewy są własnością obydwu partnerów bez względu na to, który z nich ją bierze.
                    </p>
                    <p>
                        Licytację rozpoczyna rozdający, po nim licytują kolejno (w kierunku ruchu wskazówek zegara) następni gracze. Gracz, na którego przypada kolej licytowania, może powiedzieć "pas" lub dać odzywkę. "Pas" znaczy: "nie licytuję". Odzywka jest deklaracją kontraktu. Kontrakt obowiązuje do wzięcia tzw. książeczki, tj. sześciu lew i ponadto takiej ilości lew, jaka została zadeklarowana w odzywce (jeden pik to zobowiązanie wzięcia siedmiu lew, trzy karo - dziewięciu, dwa bez atu - ośmiu lew). Otworzyć licytację można w dowolnym kolorze i na dowolnej wysokości.
                    </p>
                    <p>
                        Zadeklarowany kontrakt może być przelicytowany przez każdego z graczy wyższą od poprzedniej stawką, to znaczy odzywką na dowolnej większej wysokości lub na tej samej wysokości, lecz w starszym kolorze. Przelicytować można zarówno odzywkę przeciwnika, jak i partnera.
                    </p>
                    <p>
                        Licytacja kończy się, gdy po jakiejś odzywce następują trzy kolejne pasy.
                    </p>
                    <p>
                        Każdy z graczy może w licytacji zabierać głos kilkakrotnie bez względu na to, czy uprzednio pasował, czy dawał odzywkę; po każdej odzywce pozostali gracze mają prawo głosu. Każda odzywka może być ostatecznym kontraktem - staje się nim, gdy pozostali partnerzy pasują.
                    </p>
                    <p>
                        Dwaj partnerzy mogą przelicytować się wzajemnie nawet wtedy, gdy przeciwnicy stale pasują.
                    </p>
                    <p>
                        Jeśli rozgrywający wpadnie, tzn. weźmie mniej lew, niż zadeklarował w kontrakcie, nie tylko nic nie zapisuje za wzięte lewy na plus, ale przeciwnicy zapisują na swoje konto punkty za wpadki, tj. za każdą lewę brakującą do zrealizowania kontraktu.
                    </p>
                    <p>
                        Po każdej odzywce przeciwnik może zalicytować: "kontra". Deklaruje tym, że nie dopuści do wygrania zalicytowanego kontraktu.
                    </p>
                    <p>
                        Kontra i rekontra zwiększają zapis. Kontra i rekontra uprawomocniają się, gdy nastąpią po nich trzy pasy. Każda następna inna odzywka znosi (anuluje) kontrę lub rekontrę. Kolejna nowa odzywka może być kontrowana i rekontrowana.
                    </p>

                    <h2 className="content-subhead">Rozgrywka</h2>
                    <p>
                        Po zakończeniu licytacji przystępuje się do rozgrywki.
                    </p>
                    <p>
                        Rozgrywającym jest zawsze ten z partnerów strony rozgrywającej, który w czasie licytacji pierwszy zgłosił kolor, w którym gra się odbywa (choćby ostateczny kontrakt w tym kolorze zapowiedział jego partner).
                    </p>
                    <p>
                        Pierwsze zagranie (wyjście do pierwszej lewy) wykonuje zawsze przeciwnik siedzący po lewej ręce rozgrywającego. Po pierwszym wyjściu partner rozgrywającego wykłada swoje karty odkryte na stół. Wyłożone karty nazywają się "dziadkiem" lub "stołem". Kartami dziadka dysponuje rozgrywający.
                    </p>
                    <p>
                        Po zgraniu wszystkich trzynastu lew zapisuje się wynik rozdania.
                    </p>

                    <h2 className="content-subhead">Zapis i punktacja</h2>
                    <p>
                        Zapis prowadzi się w dwóch kolumnach przedzielonych poziomą kreską. Pod kreską zapisuje się punkty za lewy zapowiedziane kontraktem oraz premię za wygranego robra. Wszystkie inne punkty zapisuje się nad kreską.
                    </p>
                    <ul>
                        <li>
                            za każdą lewę zadeklarowaną (i wziętą) w kolorze młodszym (trefle lub kara) - 20 punktów;
                        </li>
                        <li>
                            za każdą lewę zadeklarowaną (i wziętą) w kolorze starszym (kiery lub piki) - 30 punktów;
                        </li>
                        <li>
                            za pierwszą lewę zadeklarowaną (i wziętą) w bez atu - 40 punktów;
                        </li>
                        <li>
                            za każdą następną lewę zadeklarowaną (i wziętą) w bez atu - 30 punktów.
                        </li>
                    </ul>
                    <p>
                        Robra wygrywa ta strona, która uzyska dwie dograne. Aby osiągnąć dograną, trzeba pod kreską zapisać co najmniej 100 punktów (obojętnie, czy punkty te zostaną zapisane za jeden kontrakt, czy w sumie za kilka kolejnych wygranych kontraktów). Zrobienie dogranej zaznacza się przez podkreślenie zapisów pod kreską. Przy tym podkreśla się również zapisy przeciwników, ewentualną część punktów za do dogranej; grę o dograną obie strony muszą zaczynać znów od zera. Strona, która uzyskała jedną dograną, jest "po partii". Strona, która nie uzyskała jeszcze dogranej jest "przed partią".
                    </p>
                    <p>
                        Premie za nadróbki, wpadki, kontry, rekontry, szlemiki i szlemy (zalicytowanie i wzięcie 12 lub 13 lew) oraz korony i koronki piszemy pod kreską.
                    </p>
                    <p>
                        Po zakończeniu robra (osiągnięciu drugiej dogranej przez jedną ze stron) następuje rozliczenie. Polega ono na zsumowaniu wszystkich zapisów każdej strony (zarówno nad, jak i pod kreską). Różnica tych sum podzielona przez sto (z zaokrągleniem do całości) jest ilością punktów wygranych lub przegranych w danym robrze. Każdy z partnerów wygrywa daną ilość punktów od jednego z kontrpartnerów.
                    </p>
                    <p>
                        <strong>Zapis brydżowy</strong>
                        <table className="pure-table pure-table-horizontal">
                            <tr className="pure-table-odd">
                                <td>
                                    Zapis pod kreską, tylko za lewy zapowiedziane wygranym kontraktem.
                                </td>
                                <td>Bez kontry</td>
                                <td>Z kontrą</td>
                            </tr>
                            <tr>
                                <td>za lewę w treflach</td>
                                <td>20</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>za lewę w karach</td>
                                <td>20</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>za lewę w kierach</td>
                                <td>30</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>za lewę w pikach</td>
                                <td>30</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>za pierwszą lewę bez atu</td>
                                <td>40</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>za drugą i dalsze lewy bez atu</td>
                                <td>30</td>
                                <td>60</td>
                            </tr>
                        </table>
                    </p>
                    <p>
                        Na zrobienie pierwszej wygranej (partii) trzeba 100 punktów.<br />
                        Na zrobienie drugiej dogranej (robra) trzeba 100 punktów.
                    </p>
                    <p>
                        <table className="pure-table pure-table-horizontal">
                            <tr className="pure-table-odd">
                                <td>Zapis nad kreską</td>
                                <td>Bez kontry</td>
                                <td>Z kontrą</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td colSpan="3">nadróbki (każda lewa ponad zadeklarowany kontrakt)</td>
                            </tr>
                            <tr>
                                <td>przed partią</td>
                                <td>tyle co za lewy</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>po partii</td>
                                <td>tyle co za lewy</td>
                                <td>200</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td colSpan="3">wpadki (lewy brakujące do kontraktu)</td>
                            </tr>
                            <tr>
                                <td>przed partią - pierwsza wpadka</td>
                                <td>50</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>przed partią - każda następna wpadka</td>
                                <td>50</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>po partii - pierwsza wpadka</td>
                                <td>100</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>po partii - każda następna wpadka</td>
                                <td>100</td>
                                <td>300</td>
                            </tr>
                        </table>
                    </p>
                    <p>
                        Przy powyższej punktacji w zapisie pod i nad kreską rekontra podwaja zapis z kontrą.
                    </p>
                    <p>
                        <table className="pure-table pure-table-horizontal">
                            <tr className="pure-table-odd">
                                <td>Zapis nad kreską (nie podwajany przez kontrę ani rekontrę)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>kara za nieudaną kontrę przed partią i po partii</td>
                                <td>50</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td colSpan="2">premia za drugą dograną (robra)</td>
                            </tr>
                            <tr>
                                <td>gdy przeciwnicy mają pierwszą dograną</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>gdy przeciwnicy nie mają pierwszej dogranej</td>
                                <td>700</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td colSpan="2">premia za wzięcie licytowanego szlemika (12 lew)</td>
                            </tr>
                            <tr>
                                <td>przed partią</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>po partii</td>
                                <td>750</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td colSpan="2">premia za wzięcie licytowanego szlema (13 lew)</td>
                            </tr>
                            <tr>
                                <td>przed partią</td>
                                <td>750</td>
                            </tr>
                            <tr>
                                <td>po partii</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>premia dla posiadacz czterech honorów atutowych (koronki)</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>premia dla posiadacza pięciu honorów atutowych (korony) lub czterech asów przy grze bezatutowej</td>
                                <td>150</td>
                            </tr>
                        </table>
                    </p>
                </div>

                <div className="content">
                    <a name="booby"></a>
                    <h1 className="content-subhead main-header">Booby</h1>
                    <div className="info">
                        Wariant brydża dla trzech osób, opracowany w 1942 roku przez Huberta Phillipsa.
                    </div>

                    <p>
                        Do gry używana jest talia brydżowa (52 karty). Każdy z trzech grających otrzymuje po 17 kart, ostatnia karta zostaje zakryta; odłożona na stół, stanowi pierwszą kartę dziadka.
                    </p>
                    <p>
                        Przed rozpoczęciem licytacji każdy z grających ze swoich kart w ręku odłącza cztery dowolnie wybrane karty i odkłada je na stół. W ten sposób na stole znajduje się w sumie zakryte trzynaście kart, stanowiących pełną rękę dziadka.
                    </p>
                    <p>
                        Każdy z graczy gra na własny rachunek.
                    </p>
                    <p>
                        Licytację rozpoczyna gracz siedzący po lewej stronie rozdającego i przebiega według normalnych zasad, z jednym uzupełnieniem: istnieje zapowiedź nullo.
                    </p>
                    <p>
                        Zalicytowanie nullo oznacza zobowiązanie niewzięcia więcej niż sześciu lew przez rozgrywającego w rozgrywce bez atu.<br />
                        Dwa nullo to zobowiązanie niewzięcia więcej niż pięciu lew, odpowiednio trzy nullo - czterech lew, cztery nullo - trzech lew, pięć nullo - dwóch lew, sześć nullo - jednej lewy (szlemik w nullo) oraz siedem nullo - zobowiązanie niewzięcia ani jednej lewy (szlem w nullo).
                    </p>
                    <p>
                        Zapowiedź nullo jest w licytacji starsza niż zapowiedź kierowa, młodsza niż zapowiedź pikowa. Za wygranie jednego nullo otrzymuje się w zapisie 30 punktów.
                    </p>
                    <p>
                        Gracz, który wygrał licytację (zapowiedział najwyższą grę), prowadzi rozgrywkę wraz z dziadkiem, którego karty zostają ułożone na przeciw rozgrywającego.
                    </p>
                    <p>
                        Pierwszy wychodzi gracz po lewej ręce rozgrywającego. Po pierwszym wyjściu karty dziadka zostają odkryte.
                    </p>
                    <p>
                        Rozgrywka przebiega identycznie jak w brydżu czteroosobowym.
                    </p>

                    <div className="example">
                        <div className="title"> Partia przykładowa:</div>
                        <div className="content">
                            Grają A, B i C. Rozdawał C. W wyniku rozdania pierwszą kartą dziadka, zakrytą, jest A <span className="heart"></span>, trzej gracze zaś mają w ręku następujące karty:

                            <table className="pure-table">
                                <tr className="pure-table-odd">
                                    <td>Gracz A</td>
                                    <td>Gracz B</td>
                                    <td>Gracz C</td>
                                </tr>
                                <tr>
                                    <td>Piki: A, 7, 5, 3</td>
                                    <td>Piki: K, D, W, 10, 8, 6, 2</td>
                                    <td>Piki: 9, 4</td>
                                </tr>
                                <tr>
                                    <td>Kiery: 10, 5, 4, 2</td>
                                    <td>Kiery: D, W, 3</td>
                                    <td>Kiery: K, 9, 8, 7, 6</td>
                                </tr>
                                <tr>
                                    <td>Kara: W, 9, 8, 4, 3, 2</td>
                                    <td>Kara: K, D, 10</td>
                                    <td>Kara: A, 7, 6, 5</td>
                                </tr>
                                <tr>
                                    <td>Trefle: W, 4, 2</td>
                                    <td>Trefle: 10, 8, 6, 3</td>
                                    <td>Trefle: A, K, D, 9, 7, 5</td>
                                </tr>
                            </table>

                            <p>
                                Gracz A decyduje się licytować nullo i wobec tego zrzuca do dziadka swoje cztery kiery.<br />
                                Gracz B, zamierzając licytować piki, zrzuca do dziadka swoje cztery trefle.<br />
                                Gracz C uznaje swoją kartę za zbyt słabą, by brać udział w licytacji; do dziadka zrzuca swoje dwa piki oraz 6 i 5 karo.
                            </p>
                            <p>
                                Po przeprowadzeniu tej manipulacji układ kart przedstawiają się następująco:
                            </p>

                            <table className="pure-table">
                                <tr className="pure-table-odd">
                                    <td>Gracz A</td>
                                    <td>Gracz B</td>
                                    <td>Gracz C</td>
                                    <td>dziadek</td>
                                </tr>
                                <tr>
                                    <td>Piki: A, 7, 5, 3</td>
                                    <td>Piki: K, D, W, 10, 8, 6, 2</td>
                                    <td>Piki: 9, 4</td>
                                    <td>Piki: 9, 4</td>
                                </tr>
                                <tr>
                                    <td>Kiery: - </td>
                                    <td>Kiery: D, W, 3</td>
                                    <td>Kiery: K, 9, 8, 7, 6</td>
                                    <td>Kiery: A, 10, 5, 4, 2</td>
                                </tr>
                                <tr>
                                    <td>Kara: W, 9, 8, 4, 3, 2</td>
                                    <td>Kara: K, D, 10</td>
                                    <td>Kara: A, 7</td>
                                    <td>Kara: 6, 5</td>
                                </tr>
                                <tr>
                                    <td>Trefle: W, 4, 2</td>
                                    <td>Trefle: - </td>
                                    <td>Trefle: A, K, D, 9, 7, 5</td>
                                    <td>Trefle: 10, 8, 6, 3</td>
                                </tr>
                            </table>

                            <p>
                                Licytację rozpoczyna gracz A od wysokiej zapowiedzi "cztery nullo" (której wykonanie oznacza zrobienie partii). Gracz B, po rozważeniu możliwości zalicytowania czterech pików, decyduje się spasować. Gracz C, grający cały czas bardzo ostrożnie, także pasuje.
                            </p>
                            <p>
                                Rozgrywane więc będzie cztery nullo; wychodzi gracz B; gracze w rozgrywce siedzą, poczynając od lewej, w następującej kolejności: B, dziadek, C, A (rozgrywający).
                            </p>
                            <p>
                                B wychodzi w K <span className="spade"></span>, z dziadka spada 9 <span className="spade"></span>, C zrzuca A <span className="diamond"></span>, A bierze lewę na A <span className="spade"></span>.<br />
                                A wychodzi w 2 <span className="diamond"></span>, B kładzie K <span className="diamond"></span>, z dziadka spada 6 <span className="diamond"></span>, C dorzuca 7 <span className="diamond"></span>.
                            </p>
                            <p>
                                B po chwili namysłu wychodzi w D <span className="diamond"></span>, pragnąc przeciąć łączność między rozgrywającym a dziadkiem. Rozgrywający będzie przecież musiał wziąć jeszcze jedną lewę w pikach - jeśli gracz C potrafi zmusić rozgrywającego do wzięcia jednej lewy kierowej i jednej treflowej, będzie to oznaczało wpadkę.
                            </p>
                            <p>
                                Na D <span className="diamond"></span> spada 5 <span className="diamond"></span> z dziadka, A <span className="club"></span> od gracza C i W <span className="diamond"></span> od rozgrywającego.
                            </p>
                            <p>
                                B nie może wyjść w swoje trzecie karo, gdyż umożliwiłby dziadkowi zrzucenie a <span className="heart"></span>, B wychodzi więc w D <span className="heart"></span>.<br />
                                Z dziadka spada 10 <span className="heart"></span>, gracz C zrzuca 9 <span className="heart"></span>, rozgrywający zaś W <span className="club"></span>.
                            </p>
                            <p>
                                Teraz B wychodzi w W <span className="heart"></span>, dziadek bierze lewę na A <span className="heart"></span>, rozgrywający zrzuca z ręki 7 <span className="spade"></span> i w następnym wyjściu wychodzi z dziadka 4 <span className="spade"></span>, którą zabija 5 <span className="spade"></span>. Gracz B zrzucił 2 <span className="spade"></span> - rozgrywający ma więc już trzy lewy. Nic to jednak nie szkodzi - po wyjściu w małe karo nie weźmie już ani jednej lewy; wygrywa swoją zapowiedź: cztery nullo.
                            </p>
                            <p>
                                Po analizie rozkładu można stwierdzić, iż gracz B wygrałby cztery pik, gracz C zaś nawet pięć trefl - nie wystarczyło im jednak odwagi w licytacji.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <a name="nullo"></a>
                    <h1 className="content-subhead main-header">Nullo</h1>
                    <div className="info">
                        Wariant gry dla dwóch osób.
                    </div>
                    <p>
                        Gracze rozdają karty w kolejnych rozgrywkach na zmianę. Każdy z graczy otrzymuje po 13 kart, reszta (26 kart) pozostaje zakryta w talonie.
                    </p>
                    <p>
                        Po rozdaniu kart przeciwnik rozdającego ma prawo wymienić dowolną ilość kart z ręki, zrzucając je zakryte na stół i tą samą ilość kart biorąc z zakrytego talonu. Gracz ten nie ma obowiązku wymiany nawet jednej karty; może, jeśli chce, wymienić nawet wszystkie trzynaście kart. Po wymianie kart przez przeciwnika wymienia karty rozdający.
                    </p>
                    <p>
                        Po zakończeniu wymiany kart rozdający rozpoczyna licytację. Jeśli w licytacji obydwaj gracze spasują, rozdanie jest nieważne - karty tasuje się i rozdaje jeszcze raz.
                    </p>
                    <p>
                        W licytacji poza tradycyjnymi zapowiedziami brydżowymi istnieje zapowiedź "nullo", tj. zobowiązanie się do wzięcia nie więcej niż sześciu lew (jedno nullo), pięciu (dwa nullo), i tak dalej aż do szlemika i szlema w nullo (wzięcia tylko jednej i niewzięcia żadnej lewy).
                    </p>
                    <p>
                        Za jedno nullo w zapisie liczy się trzydzieści punktów pod kreską. Zapowiedź w nullo jest starsza od zapowiedzi karowej, lecz młodsza (choć ma tę samą wartość) od zapowiedzi kierowej.
                    </p>
                    <p>
                        Po zakończeniu licytacji wychodzi przeciwnik rozgrywającego (tego z graczy, który wygrał licytację).
                    </p>
                    <p>
                        Wszystkie lewy są dwukartowe (karta wyjścia i karta dorzucona).
                    </p>
                    <p>
                        Wszystkie pozostałe zasady rozgrywki i zapisu - jak w brydżu tradycyjnym.
                    </p>
                </div>

                <div className="content">
                    <a name="szlem"></a>
                    <h1 className="content-subhead main-header">Szlem</h1>
                    <div className="info">
                        Gra dla dwóch osób, opracowana w 1951 roku przez Sidneya Sacksona z Nowego Jorku.
                    </div>
                    <p>
                        Talia skatowa (32 karty).<br />
                        Starszeństwo kart od asa do siódemki.<br />
                        Starszeństwo kolorów (tylko w licytacji): piki, kiry, kara, trefle.<br />
                        Istnieje zmienny kolor atutowy.
                    </p>
                    <p>
                        Każde rozdanie składa się z dwóch części: rozdawania kart wraz z licytacją oraz rozgrywki.
                    </p>
                    <p>
                        Gracze rozdają karty na zmianę; licytację rozpoczyna zawsze przeciwnik rozdającego.
                    </p>
                    <p>
                        Licytację prowadzi się, zapowiadając ilość punktów, które gracz licytujący zobowiązuje się osiągnąć w rozgrywce. Obowiązkiem rozgrywającego jest wziąć pięć lew; wszystkie lewy powyżej obowiązkowej ilości są już punktowane w zależności od zadeklarowanego przez gracza koloru atutowego rozgrywki (bez atu - 10pkt; piki i kiery - 8pkt; kara i trefle - 6pkt). Istnieje w licytacji i w rozgrywce tzw. gra "nullo": zobowiązanie przy rozgrywce bezatutowej, iż gracz licytujący i rozgrywający nullo weźmie tylko 4 lewy (1 nullo), 3 lewy (2 nullo), 2 lewy (3 nullo), 1 lewę (4 czyli szlemik w nullo) lub też nie weźmie ani jednej lewy (5 czyli szlem w nullo).
                    </p>
                    <p>
                        Licytacja odbywa się w trzech turach - w pierwszych dwóch z nich każdy z graczy ma prawo tylko do jednej odzywki (zapowiedzi); w trzeciej turze licytacja toczy się aż do jej zakończenia (spasowania przez jednego z graczy).
                    </p>
                    <p>
                        Początkowo każdy z graczy otrzymuje po dziesięć kart (rozdawane po dwie karty). Odbywa się pierwsza tura licytacji. Następnie każdy z graczy otrzymuje po dwie karty i odbywa się druga tura licytacji. Następnie każdy z graczy otrzymuje jeszcze po dwie karty i odbywa się trzecia i ostatnia tura licytacji
                    </p>
                    <p>
                        Następnie każdy z graczy otrzymuje po dwie ostatnie karty. Przed ich otrzymaniem gracz, który wygrał licytację, zobowiązany jest ujawnić, jaki kolor będzie rozgrywał. Jego przeciwnik ma prawo skontrować; może teraz nastąpić przejście na inny kolor lub rekontra.
                    </p>
                    <p>
                        Każdy z graczy ma więc po zakończeniu licytacji i rozdawania kart po 16 kart w ręku. Przed rozpoczęciem rozgrywki zostają one przez każdego z graczy według jego uznania rozbite na dwie części: 13 kart w ręku oraz 3 karty odłożone i zakryte na stole, stanowiące tzw. rezerwę gracza.
                    </p>
                    <p>
                        W rozgrywce pierwszych sześć rozgrywanych lew to lewy czterokartowe - do każdej z nich każdy z graczy na zmianę dorzuca dwie karty z ręki; lewę bierze ten z graczy, który dorzucił najstarszą kartę (przykładowo: wychodzi gracz A, dorzuca gracz B, dorzuca gracz A, dorzuca gracz B - najstarszą kartę dorzucił, pierwszą ze swoich dwu kart, gracz B, i to on bierze lewę).
                    </p>
                    <p>
                        Istnieje obowiązek dorzucania do koloru (lecz tylko posiadanych w ręku - karty z rezerwy nie biorą udziału w rozgrywce, w jej pierwszym etapie!). Nie ma obowiązku dorzucania starszej karty w kolorze ani też obowiązku przebijania atutem w wypadku nieposiadania koloru.
                    </p>
                    <p>
                        Siódma lewa w rozgrywce - ostatnia lewa rozgrywana kartami z ręki - jest już lewą dwukartową (bierze ją gracz, który do tej lewy dorzucił starszą kartę).
                    </p>
                    <p>
                        Po rozegraniu kart z ręki gracze rozgrywają karty z rezerwy, stanowiące trzy kolejne lewy dwukartowe. Obowiązek dorzucania do koloru istnieje i w tych lewach.
                    </p>
                    <p>
                        Po zakończeniu licytacji gracz posiadający na ręku odpowiednie karty otrzymuje premie za korony i koronki (honory) zapisywane, podobnie jak w brydżu, nad linią. Pod linią, podobnie jak w brydżu, zapisuje się tylko punkty osiągnięte w licytacji i rozgrywce. Premie za korony, za licytowane i wygrane szlemiki i szlemy, za wygrane gry z kontrą i rekontrą oraz za partię i robra zapisuje się nad linią. Gdy jeden z przeciwników zrobi drugą z kolei partię (robra), sumuje się wszystkie zdobyte punkty obydwu graczy - różnica ich stanowi przegraną.
                    </p>
                    <p>
                        W licytacji w czasie pierwszych dwóch jej tur każdy z graczy ma prawo przelicytować swego przeciwnika co najwyżej o pięć punktów. Jeśli jeden z przeciwników wcześniej spasuje, drugi gracz ma prawo w kolejnych turach licytacji przelicytować swoje własne zapowiedzi z poprzedniej tury także co najwyżej o pięć punktów. Każdy z graczy ma prawo jednak zalicytować szlemika lub szlema w dowolnym kolorze, niezależnie od ilości punktów, które poprzednio zalicytował przeciwnik.
                    </p>
                    <p>
                        W wypadku gry przegranej gracz przegrywający traci pewną ilość punktów, zależną od różnicy między ilością punktów zalicytowanych a zdobytych w rozgrywce (np. gracz zalicytował 20pkt, rozgrywał kiery i zdobył siedem lew, a więc tylko dwie ponad obowiązkowe pięć, czyli (2x8, wartość kierów) 16 punktów. Przegrał więc 4 punkty - od tej ilości oblicza mu się punkty karne w zależności od stanu partii.
                    </p>
                    <p>
                        Za szlemiki i szlemy nie zalicytowane oraz za nadróbki nie otrzymuje się żadnych premii.
                    </p>

                    <h2 className="content-subhead">Zapis</h2>
                    <p>
                        Partia składa się z 20 punktów; rober - z dwóch partii.<br />
                        Wartość każdej lewy ponad pięć: w bez atu i w nullo - 10pkt; w pikach i w kierach - 8pkt; w karach i w treflach - 6pkt.<br />
                        Premia za robra po dwóch partiach - 150pkt; premia za robra po trzech partiach - 100pkt.<br />
                        Premia za szlemika przed partią - 100pkt; za szlemika po partii - 150pkt; za szlema przed partią - 200pkt; za szlema po partii - 300pkt.<br />
                        Za grę wygraną z kontrą przed partią - 25pkt; po partii - 40pkt. Z rekontrą - podwójnie.<br />
                        Za grę przegraną:
                    </p>
                    <ul>
                        <li>przed partią - 3 razy ilość punktów niedogranych; z kontrą - 10 razy ilość punktów niedogranych; z rekontrą - 20 razy ilość punktów niedogranych;</li>
                        <li>po partii - 5 razy ilość punktów niedogranych; z kontrą - 15 razy ilość punktów niedogranych; z rekontrą - 30 razy ilość punktów niedogranych.</li>
                    </ul>
                    <p>Premie za korony i koronki (honory):</p>
                    <ul>
                        <li>przy bez atu: za 4 asy - 40pkt; za 3 asy - 30pkt;</li>
                        <li>przy nullo: za 4 siódemki - 40pkt; za 3 siódemki - 30pkt;</li>
                        <li>przy grze kolorowej za sekwencję w kolorze atutowym: czterokartową - 15pkt; pięciokartową - 30pkt; sześciokartową - 45pkt; siedmiokartową - 60pkt; ośmiokartową (pełny kolor) - 75pkt.</li>
                    </ul>

                    <h2 className="content-subhead">Partia przykładowa</h2>
                    <p>
                        Po rozdaniu pierwszych dwudziestu kart (po dziesięć dla każdego z grających) gracze mają następujący układ kart:
                    </p>
                    <p>
                        <table className="pure-table">
                            <tr className="pure-table-odd">
                                <td>Gracz A</td>
                                <td>Gracz B</td>
                            </tr>
                            <tr>
                                <td>Piki: W, 10, 7</td>
                                <td>Piki: D, 9</td>
                            </tr>
                            <tr>
                                <td>Kiery: D, W, 9 </td>
                                <td>Kiery: K, 10</td>
                            </tr>
                            <tr>
                                <td>Kara: K</td>
                                <td>Kara: D, 10, 9, 7</td>
                            </tr>
                            <tr>
                                <td>Trefle: D, 10, 9</td>
                                <td>Trefle: A, 7 </td>
                            </tr>
                        </table>
                    </p>
                    <p>
                        Ponieważ rozdawał gracz B, licytację rozpoczyna A - od minimalnej zapowiedzi 6 punktów. B utrzymuje się w licytacji niską zapowiedzią 8 punktów - i na tym kończy się pierwsza tura licytacji; gracze otrzymują po dwie następne karty. Gracz A otrzymuje A <span className="spade"></span> i 8 <span className="club"></span>, gracz B - A <span className="diamond"></span> i 8 <span className="heart"></span>.
                    </p>
                    <p>
                        W drugiej turze licytacji gracz A utrzymuje się nadal na najniższym możliwym poziomie zapowiedzią 9 punktów (zaledwie o jeden punkt więcej od poprzedniej zapowiedzi), gracz B natomiast czuje szansę zrobienia partii (w oparciu o mocny już posiadany kolor karowy), licytuje więc maksymalnie - 14 punktów (o pięć więcej od poprzedniej zapowiedzi). Na tym kończy się druga tura licytacji; gracze otrzymują po dwie następne karty. Gracz A otrzymuje W <span className="diamond"></span> i K <span className="club"></span>, gracz B - A <span className="heart"></span> i W <span className="club"></span>.
                    </p>
                    <p>
                        W trzeciej i ostatniej już turze licytacji gracz A ma wyraźnie słabszą kartę - pasuje; gracz B natomiast widzi możliwość zrobienia partii, może jednak licytować maksymalnie o 5 punktów więcej niż poprzednio, a więc tylko 19 punktów, co nie wystarczy do zrobienia partii. B decyduje się spróbować , licytuje szlemika w karach (24 punkty); ponieważ gracz A już spasował, jest to koniec licytacji. Dopiero teraz gracz B ujawnia, w jakim kolorze będzie rozgrywał (w karach).
                    </p>
                    <p>
                        Gracz A kontruje. Gracz B chętnie zmieniłby teraz kolor rozgrywki, ponieważ jednak 24 punkty w kierach nie stanowią szlema (lecz tylko trzy kiery), nie może zmienić koloru i pasuje. Następuje rozdanie pozostałych dwóch kart, z których gracz A otrzymuje K i 8 <span className="spade"></span>, gracz B zaś 8 <span className="diamond"></span> i 7 <span className="heart"></span>.
                    </p>
                    <p>
                        Gracz B deklaruje czterokartowy sekwens w kolorze atutowym (od 10 do 7 w karach) i otrzymuje za niego 15 punktów premii.
                    </p>
                    <p>
                        Teraz gracze rozbijają swoje karty na dwie grupy: karty w ręku (po 13) i karty w rezerwie (po 3). Gracz A umieszcza w rezerwie A <span className="spade"></span>, K <span className="diamond"></span> i W <span className="diamond"></span>; gracz B umieszcza w rezerwie D <span className="spade"></span>, A <span className="diamond"></span>i D <span className="diamond"></span>. Wychodzi gracz A - w 8 <span className="spade"></span>, B dorzuca 9 <span className="spade"></span>, A - K <span className="spade"></span> i B przebija 10 <span className="diamond"></span>, biorąc w ten sposób pierwszą lewę. teraz wychodzi gracz B - w 8 <span className="diamond"></span>. Gracz A zrzuca 7 <span className="spade"></span>, gracz B - 7 <span className="diamond"></span>, gracz A - 10 <span className="spade"></span>. Lewę bierze B i wychodzi w 10 <span className="heart"></span>; gracz A bije ją W <span className="heart"></span>, gracz B - A <span className="heart"></span>, gracz A dorzuca 9 <span className="heart"></span> - i lewę znowu wziął B. Teraz B wychodzi w 8 <span className="heart"></span>, gracz A dorzuca D <span className="heart"></span>, B bije ją K <span className="heart"></span>i gracz A nie mając atutów ukrytych w rezerwie, musi coś zrzucić - dorzuca więc 8 <span className="club"></span>.
                    </p>
                    <p>
                        Gracz B wziął już czwartą lewę, wychodzi teraz w wyrobioną 7 <span className="heart"></span>, gracz A dorzuca 9 trefl, gracz B ma możliwość wyrzucenia swojej przegrywającej karty, 7 <span className="club"></span>, gracz A dorzuca W <span className="spade"></span>. Szóstą i ostatnią czterokartową lewę (także dla gracza B) stanowią jego A i W trefl oraz 10 i D trefl z ręki gracza B.
                    </p>
                    <p>
                        Siódma lewa, już tylko dwukartowa, należy także do gracza B (9 <span className="diamond"></span>i K <span className="club"></span>).
                    </p>
                    <p>
                        Teraz obydwaj gracze biorą do ręki swoje karty rezerwowe i rozgrywają ostatnie trzy lewy, wszystkie dwukartowe. Wychodzi gracz B, który wziął ostatnią lewę. Wyjściem w D <span className="spade"></span> wpuszcza on gracza A do ręki na A <span className="spade"></span> i za to inkasuje dwie ostatnie lewy na A i D <span className="diamond"></span>niezależnie od wyjścia przeciwnika.
                    </p>
                    <p>
                        Gracz B wziął więc w rozgrywce 9 lew - 4 lewy ponad obowiązujące 5, co stanowi w treflach (4x6) 24 punkty - tyle, ile zalicytował. Wygrał więc grę.
                    </p>
                    <p>
                        W zapisie gracz A nie otrzyma punktów, gracz B zaś otrzyma 48 punktów pod linią (szlemik w trefle z kontrą wygrany) oraz niezależnie od posiadanych już 15 punktów za koronkę (sekwens) atutową jeszcze 25 punktów za grę wygraną z kontrą i 100 punktów za zalicytowanego i zrobionego szlemika.
                    </p>
                    <p>
                        W sumie w jednej rozgrywce gracz B uzyskał 188 punktów i przewagę nad przeciwnikiem (zrobił partię).
                    </p>
                </div >

                <div className="content">
                    <a name="chinski"></a>
                    <h1 className="content-subhead main-header">Chiński brydż</h1>
                    <div className="info">
                        Wariant gry
                    </div>
                    <p>
                        Gracze rozdają karty w kolejnych rozgrywkach na zmianę.
                    </p>
                    <p>
                        Rozdający daje najpierw przeciwnikowi i sobie po cztery karty zakryte, następnie rozdaje pozostałe 44 karty (po 22) również zakryte.
                    </p>
                    <p>
                        Po rozdaniu kart każdy z graczy wybiera ze swoich 22 kart zakrytych 11, które odkrywa widoczne dla przeciwnika), umieszczając na każdej karcie zakrytej jedną kartę odkrytą. Cztery karty otrzymane uprzednio są kartami w ręku.
                    </p>
                    <p>
                        Rozdający deklaruje rodzaj i wysokość gry; jego przeciwnik może tę zapowiedź tylko skontrować lub spasować. Po kontrze rozdający może zrekontrować lub zmienić zapowiedź na inną, wyższą.
                    </p>
                    <p>
                        Do pierwszej lewy wychodzi zawsze przeciwnik rozdającego. Wszystkie lewy są czterokartowe (po dwie zrzutki na zmianę u każdego z graczy); lewę bierze ten z graczy, który dorzucił do danej lewy najstarszą kartę.
                    </p>
                    <p>
                        W rozgrywce biorą udział odkryte karty na stole oraz karty w ręku każdego z graczy. Istnieje obowiązek dorzucania do koloru, nie ma obowiązku przebijania ani starszą kartą, ani atutem w przypadku braku koloru wyjścia.
                    </p>
                    <p>
                        Po zgraniu odkrytej karty ze stołu należy natychmiast odkryć znajdującą się pod nią kartę, dotąd zakrytą, która bierze udział w dalszej rozgrywce (od następnej kolejnej lewy).
                    </p>
                    <p>
                        Zasady zapisu - jak w brydżu tradycyjnym.
                    </p>
                </div >

                <div className="content">
                    <a name="dwuosobowy"></a>
                    <h1 className="content-subhead main-header">Brydż dwuosobowy</h1>
                    <div className="info">
                        Wariant gry opracowany w 1954 roku przez Kennetha Konstama.
                    </div>
                    <p>
                        Gracze rozdają karty w kolejnych rozgrywkach na zmianę. Rozdający rozdaje cztery razy po 13 kart - sobie, przeciwnikowi oraz na stół. Jeden z pakietów kart na stole jest tzw. dziadkiem zakrytym (karty pozostają zakryte), drugi - dziadkiem odkrytym (karty zostają odkryte po zakończeniu rozdawania).
                    </p>
                    <p>
                        Licytację rozpoczyna zawsze rozdający, któremu w pierwszej odzywce nie wolno pasować. Wraz z pierwszą zapowiedzią licytacyjną rozdający deklaruje, z którym dziadkiem będzie toczyła się rozgrywka: odkrytym czy zakrytym. Decyzja ta jest obowiązująca niezależnie do tego, kto wygra licytację.
                    </p>
                    <p>
                        Licytacja toczy się w kolejnych zapowiedziach do chwili, gdy jeden z licytujących spasuje.
                    </p>
                    <p>
                        Do pierwszej lewy wychodzi zawsze przeciwnik wygrywającego licytację. Przed wyjściem do pierwszej lewy karty na stole zostają umieszczone we właściwy sposób (karty grającego dziadka na przeciw rozgrywającego); po pierwszym wyjściu zostają odkryte również karty zakrytego dziadka. Rozgrywka toczy się z 26 kartami odkrytymi na stole.
                    </p>
                    <p>
                        Zasady zapisu - jak w brydżu tradycyjnym.
                    </p>
                </div >
            </div >
        );
    }
}
