import React from 'react';


export default class Cribbage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Cribbage',
            readAs: 'Kribidż',
            desc: 'gra dla 2 osób',
            url: '/cribbage',
            players: [2],
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
                        Cribbage (wymawiaj: kribidż) jest starą grą angielską, do dziś dobrze znaną i chętnie uprawianą w Wielkiej Brytanii i innych krajach anglosaskich. Znane są liczne warianty tej gry dla różnej liczby grających lub według nieco innych zasad.<br />
                        Niektórzy sądzą, iż zasady cribbage'a skodyfikował i samą grę nazwał angielski poeta sir John Suckling (1609-1642) na podstawie jeszcze dawniejszej gry pod nazwą "noddy", o której niewiele wiadomo. Cribbage dotarł do USA wraz z pierwszymi osadnikami i jest tam do dziś grą bardzo popularną. Z zachowanej korespondencji wiadomo, iż zapalonym graczem w cribbage był Beniamin Franklin. Do dziś w krajach anglosaskich odbywają się turnieje tej gry.
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla dwóch osób.</p>

                    <h2 className="content-subhead">Rekwizyty</h2>
                    <p>
                        Pełna talia kart. Wartość punktowa kart: as -1, figury i dziesiątki - 10, blotki według ilości oczek. Starszeństwo kart od króla do asa. Nie ma koloru atutowego.<br />
                        Specyficznym rekwizytem do gry jest tabliczka obliczeniowa, zazwyczaj w postaci płaskiej deszczułki z otworkami (po każdej stronie dwa rzędy po 30 otworków oraz sześćdziesiąty pierwszy otworek wyjściowy). Gracze w toku gry notują zdobyte punkty przemieszczając swój pionek z jednego otworka do drugiego. Posiadanie i używanie takiej tabliczki obliczeniowej ułatwia grę, lecz nie jest konieczne. Zdobyte punkty można zapisywać na papierze, odkładać zapałki lub żetony itp.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Każdy z grających otrzymuje po 5 kart.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Celem gry jest osiągnięcie umówionej z góry ilości punktów w kolejnych partiach i ich kolejnych etapach: rozgrywce i rozliczeniu (nazywanym także pokazem).<br />
                        W tradycyjnym cribbage'u partię wygrywa ten z graczy, który w kolejnym rozdaniu pierwszy zdobędzie 61 punktów.
                    </p>
                    <p>
                        Każdy z graczy wybiera dwie dowolnie wybrane ze swoich karty i zrzuca je zakryte na stół, pozostając do rozgrywki z trzema kartami w ręku. Cztery leżące na stole karty tworzą tzw. krib, ważny w drugim etapie gry, rozliczeniu (pokazie). Następnie przeciwnik rozdającego przekłada pozostałe w talonie karty i odsłania wierzchnią kartę; jest to tzw. karta startowa, która również będzie brała udział w drugim etapie gry, rozliczeniu (pokazie).
                    </p>
                    <p>
                        Rozgrywkę rozpoczyna przeciwnik rozdającego. W rozgrywce gracze wykładają przed sobą na stole kolejno na zmianę po jednej wybranej karcie z ręki, starając się zdobyć punkty za kombinacje uzyskane za pomocą kart swoich i kart przeciwnika.
                    </p>
                    <p>
                        Rozgrywka toczy się dopóki suma oczek kart wyłożonych na stole nie osiągnie 31. Wówczas, niezależnie od tego, ile kart wyłożono, ile zaś pozostało jeszcze na ręku u obydwu grających, rozgrywka kończy się.
                    </p>

                    <h2 className="content-subhead">Punktacja w rozgrywce</h2>
                    <p>
                        W rozgrywce punkty zdobywa się:
                    </p>
                    <ul>
                        <li>
                            <p>
                                za parę - za wyłożenie karty tej samej wysokości jak wyłożona poprzednio - 2 punkty (dama na damę, trójka na trójkę, siódemka na siódemkę itp.);
                            </p>
                        </li>
                        <li>
                            <p>
                                za parę królewską - za wyłożenie trzeciej karty tej samej wysokości jak para kart wyłożonych poprzednio - 6 punktów (dama na parę dam, trójka na parę trójek, siódemka na parę siódemek);
                            </p>
                        </li>
                        <li>
                            <p>
                                za podwójną parę królewską - za wyłożenie czwartej karty tej samej wysokości jak para królewska kart wyłożonych uprzednio - 12 punktów (trójka na trzy trójki, siódemka na trzy siódemki; wyłożenie damy na trzy damy nie jest w rozgrywce możliwe, gdyż suma oczek czterech dam przekracza dozwolone 31 punktów);
                            </p>
                        </li>
                        <li>
                            <p>
                                za sekwens - za wyłożenie kilku kart, które łącznie stanowią układ kolejny - tyle punktów ile jest kart w sekwensie (a więc co najmniej 3, także 4, 5 lub 6 punktów);
                            </p>
                            <p>
                                Uwaga: za sekwens liczy się zestaw kart wyłożonych kolejno, lecz same karty nie muszą być (w odróżnieniu od punktów za pary, pary królewskie i podwójne pary królewskie) wykładane kolejno tuż po sobie. Sekwensem z trzech kart (za trzy punkty dla tego gracza, który wyłożył trzecią kartę) jest więc zarówno kolejny układ kart np. 4,5,6 jak też układ 5,4,6 lub 6,4,5 lub 6,5,4 itd.
                            </p>
                            <p>
                                Jeśli następny gracz dołożył do sekwensu z trzech kart odpowiednią czwartą kartę, zdobywa cztery punkty za sekwens czterokartowy - mogą to być w podanym powyżej przykładzie sekwensy 4,5,6,3; 5,4,6,3; 6,4,5,3; 6,5,4,3 i tak dalej, a także wszystkie powyższe z siódemką zamiast trójki.
                            </p>
                            <p>
                                Sekwensy czterokartowe i dłuższe nie muszą wynikać z sekwensów trzykartowych, mogą tworzyć się same. Tak na przykład układ trzech kart 3,2,5 nie jest sekwensem - sekwens czterokartowy powstaje po wyłożeniu czwórki (3,2,5,4). Podobnie mogą być tworzone sekwensy pięciokartowe (3,2,5,A,4) i sześciokartowe (2,A,6,5,3,4).
                            </p>
                            <p>
                                As w sekwensach jest kartą najmniejszą; układ As, Król, Dama nie jest sekwensem.
                            </p>
                        </li>
                        <li>
                            <p>
                                za piętnastkę - za ostatnią kartę, która przy sumowaniu oczek wszystkich kart dotąd wyłożonych daje piętnaście oczek - otrzymuje się 2 punkty;
                            </p>
                            <p>
                                Oto przykład zestawu kart dających graczowi, który wykłada ostatnią z tych kart, 2 punkty za piętnastkę: K,5; W,5; 5,10; 9,6; 6,8,A; 3,8,4 (w tym przypadku zapisuje się punkty zdobyte zarówno za sekwens, jak i za piętnastkę); 3,6,6 (w tym przypadku zapisuje się punkty zdobyte zarówno za parę, jak i za piętnastkę); 4,8,2,A; 6,4,A,4 itd.
                            </p>
                        </li>
                        <li>
                            <p>
                                za trzydzieści jeden - za ostatnią kartę, która przy sumowaniu oczek wszystkich kart dotąd wyłożonych daje 31 oczek - otrzymuje się 2 punkty;
                            </p>
                            <p>
                                Zestawy kart dających graczowi, który wykłada ostatnią z tych kart, 2 punkty za trzydzieści jeden, są bardzo liczne - powstają podobnie jak zestawy za piętnastkę.
                            </p>
                        </li>
                        <li>
                            <p>
                                za ostatnią kartę otrzymuje się jeden punkt.
                            </p>
                            <p>
                                Gdy gracz, na którego przychodzi kolej wyłożenia karty na stół, nie może tego uczynić, gdyż przekroczyłby 31 oczek (np. ma w ręku 9, na stole zaś wyłożono już 24 oczka) - deklaruje: "dalej!". Gdy jego kontrpartner może jeszcze dołożyć jakąś kartę (w tym przypadku, do 24 oczek, A, 2, 3, 4, 5 lub 6), otrzymuje jeden punkt za ostatnią kartę. Jeśli ostatnia wyłożona w ten sposób karta daje w sumie 31 oczek (w tym przypadku 7), gracz otrzymuje 2pkt za trzydzieści jeden, lecz już bez punktu za ostatnią kartę.
                            </p>
                            <p>
                                Można w toku gry kilka razy zdobyć po jednym punkcie za ostatnią kartę, gdy jeden z graczy zadeklaruje "dalej!", drugi ma zaś do dyspozycji kilka niskich, dających się jeszcze kolejno wyłożyć kart.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Rozgrywka kończy się w momencie osiągnięcia 31 oczek lub w chwili, gdy obaj gracze zadeklarują "dalej!", co znaczy, że żaden z nich nie może już wyłożyć żadnej karty.
                    </p>

                    <h2 className="content-subhead">Rozliczenie</h2>
                    <p>
                        Do drugiego etapu gry, rozliczenia-pokazu, pierwszy przystępuje przeciwnik rozdającego. W jego rozliczeniu-pokazie biorą udział karty wyłożone przez niego na stół, karty ewentualnie pozostałe w ręku oraz karta startowa (a więc 4 karty).
                    </p>
                    <p>
                        Gracz zdobywa punkty za następujące kombinacje, które można ułożyć z tych czterech kart:
                    </p>
                    <ul>
                        <li>
                            za piętnastkę - jak w rozgrywce, 2 punkty za każdy układ dwu lub więcej kart dających w sumie 15 oczek;
                        </li>
                        <li>
                            za pary, pary królewski, podwójne pary królewskie i sekwensy - jak w rozgrywce, za każdy z możliwych różnych układów;
                        </li>
                    </ul>
                    <p>
                        Punkty zdobywa się także, czego nie ma w rozgrywce, za kolor: za trzy karty w tym samym kolorze - 3pkt, za cztery karty - 4pkt. Punkty za kolor liczą się tylko za kolor w ręku; za kolor w kribie otrzymuje się punkty tylko wówczas, gdy wszystkie pięć kart (cztery w kribie i startowa) są w tym samym kolorze - 5 punktów.
                    </p>
                    <p>
                        Każda karta może brać udział we wszystkich kombinacjach.
                    </p>
                    <p>
                        Oto przykładowe rozliczenie-pokaz następujących czterech kart: <br />
                        4 <span className="heart"></span> , 5 <span className="heart"></span> , 6 <span className="spade"></span> , D <span className="heart"></span> : 4pkt za dwa razy po piętnaście (4,5,6 oraz D,5); par nie ma; trzy punkty za sekwens z trzech kart (4,5,6); trzy punkty za kolor (<span className="heart"></span>); łącznie 10pkt.
                    </p>
                    <p>
                        Po rozliczeniu-pokazie przeciwnika rozdającego następuje rozliczenie-pokaz rozdającego, składające się z dwóch części: pokazu ręki i pokazu kriba.
                    </p>
                    <p>
                        Rozliczenie-pokaz ręki (kart wyłożonych na stół, ewentualnie pozostałych w ręku oraz karty startowej, a więc czterech kart) - jak uprzednio.
                    </p>
                    <p>
                        Rozliczenie-pokaz kriba (kart dotychczas zakrytych, wyłożonych na stół oraz karty startowej, a więc pięciu kart) może znacznie zwiększyć ilość kombinacji punktowych. Rozdający zapisuje sobie punkty zdobyte za obydwa te pokazy-rozliczenia.
                    </p>

                    <h2 className="content-subhead">Punkty premiowe</h2>
                    <p>
                        Istnieją dodatkowe punkty premiowe, które otrzymuje się w trakcie rozgrywki i pokazu. I tak:
                    </p>
                    <ul>
                        <li>
                            w momencie rozpoczęcia rozdawania kart przeciwnik rozdającego otrzymuje 3pkt (dla wyrównania przewagi rozdającego, któremu będą liczyły się punkty za krib);
                        </li>
                        <li>
                            jeśli karta startowa jest waletem, rozdający natychmiast otrzymuje 2pkt premii;
                        </li>
                        <li>
                            jeśli w ręku lub w kribie znajduje się walet koloru karty startowej, właściciel tej ręki lub kriba otrzymuje dodatkowo 1pkt w pokazie-rozliczeniu;
                        </li>
                    </ul>
                    <p>
                        Gra kończy się, gdy któryś z graczy osiąga 61pkt, choćby było to w toku rozgrywki lub rozliczenia-pokazu. Zapis zdobytych punktów trzeba więc prowadzić na bieżąco.
                    </p>

                    <h2 className="content-subhead">Partia przykładowa</h2>
                    <p>
                        Rozdawał gracz B.<br />Gracz A otrzymał następujące karty: W <span className="heart"></span> , 9 <span className="spade"></span> , 7 <span className="diamond"></span> , 5 <span className="spade"></span>, 5 <span className="club"></span> .<br />
                        Gracz B otrzymał: K <span className="spade"></span> , K <span className="club"></span> , W <span className="diamond"></span> , 8 <span className="heart"></span>, 6 <span className="heart"></span> .<br />
                        Gracz A zrzuca do kriba 9 <span className="spade"></span> i 7 <span className="diamond"></span> .<br />
                        Gracz B zrzuca do kriba 8 <span className="heart"></span> i 6 <span className="heart"></span> .<br />
                        Kartą startową okazuje się 5 <span className="heart"></span> .<br />
                        Gracz A notuje sobie 3 pkty przed rozpoczęciem gry i wykłada W  <span className="heart"></span> - 10 oczek.<br />
                        Gracz B wykłada W <span className="diamond"></span> - dwadzieścia oczek - i notuje sobie dwa punkty za parę waletów.<br />
                        Gracz A wykłada 5 <span className="spade"></span> - 25 oczek.<br />
                        Gracz B deklaruje "dalej".<br />
                        Gracz A deklaruje "dalej"<br />
                        Rozgrywka kończy się - gracz A ma 3pkt, gracz B ma 2pkt.
                    </p>

                    <h3>Pokaz-rozliczenie gracza A wygląda następująco:</h3>
                    <ul>
                        <li>4 x piętnaście - 8pkt (walet z każdą z trzech piątek oraz same trzy piątki);</li>
                        <li>para królewska - 6pkt (trzy piątki);</li>
                        <li>za waleta koloru karty stołowej - 1pkt;</li>
                    </ul>
                    <p>
                        Łącznie z punktami za rozgrywkę gracz A zdobył 18pkt.
                    </p>

                    <h3>Pokaz-rozliczenie gracza B wygląda następująco:</h3>
                    <ul>
                        <li>3 x piętnaście - 6 punktów (każda z figur w ręku z piątką startową);</li>
                        <li>para - 2 punkty (za króle);</li>
                    </ul>
                    <p>
                        w kribie znajdują się 9, 8, 7, 6 oraz 5 startowa, a więc za krib:
                    </p>
                    <ul>
                        <li>2 x piętnaście - 4 punkty (9,6 oraz 8,7);</li>
                        <li>sekwens 5-ciokartowy - 5 punktów;</li>
                    </ul>
                    <p>
                        Łącznie z punktami za rozgrywkę gracz B zdobył więc 19 punktów.
                    </p>
                </div>

                <div className="content">
                    <h1 className="content-subhead main-header">
                        Cribbage sześcio- i siedmiokartowy
                    </h1>
                    <p>
                        Trudniejszy niż tradycyjny wariant gry.<br />
                        Różnice w zasadach gry są następujące:
                    </p>
                    <ul>
                        <li>
                            przy cribbage'u 6-ciokartowym (każdy otrzymuje do ręki 6 kart) gra toczy się do 121 punktów;
                        </li>
                        <li>
                            przy cribbage'u 7-miokartowym (każdy otrzymuje do ręki 7 kart) gra toczy się do 181 punktów;
                        </li>
                        <li>przeciwnik rozdającego nie otrzymuje 3 punktów wyrównania;</li>
                        <li>
                            rozgrywka toczy się do chwili wyłożenia wszystkich kart;<br />
                            gdy obaj gracze zadeklarowali już "dalej", ten, na którego przypada kolejność wyłożenia karty, rozpoczyna następny cykl - znów do 31 punktów (przy cribbage'u 7-miokartowym możliwe są więc trzy cykle w rozgrywce).
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <h1 className="content-subhead main-header">Cribbage licytowany</h1>
                    <p>
                        Wariant cribbage'a sześciokartowego (do 121 punktów).<br />
                        Zasadnicza różnica w grze polega na tym, że krib nie należy automatycznie do rozdającego, lecz staje się własnością tego gracza, który przelicytuje kontrpartnera. Licytację rozpoczyna przeciwnik rozdającego od jednego punktu za krib; wygrywa ten kto zaoferuje więcej punktów. Punkty zadeklarowane za krib odpisuje się graczowi, który wygrał licytację, z zapisu.
                    </p>
                    <p>
                        Wygrywający licytację pierwszy wykłada kartę w rozgrywce oraz pierwszy przeprowadza rozliczenie-pokaz ręki i kriba.
                    </p>
                </div>

                <div className="content">
                    <h1 className="content-subhead main-header">Cribbage dla czterech osób</h1>
                    <p>
                        Wariant gry pięcio- lub sześciokartowego, w którym dwie osoby grają przeciwko dwom, rozdając karty kolejno. Krib należy zawsze do rozdającego.
                    </p>
                    <p>
                        Każdy z graczy zrzuca do kriba tylko jedną kartę. W rozgrywce gracze wykładają karty kolejno, według ruchu wskazówek zegara, poczynając od gracza po lewej ręce rozdającego. Podobnie w rozliczeniu-pokazie.
                    </p>
                    <p>
                        Gracze-partnerzy siedzą naprzeciw siebie. W toku rozgrywki nie wolno im porozumiewać się ze sobą. Punkty zdobyte w rozgrywce i za rozliczenia-pokazy zapisuje się na dwa konta par grających przeciwko sobie.
                    </p>
                </div>
            </div>
        );
    }
}
