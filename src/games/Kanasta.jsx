import { basePath } from '../utils';
import React from 'react';


export default class Kanasta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kanasta',
            name2: 'Canasta',
            desc: 'gra dla 4 [2 i 3] osób',
            url: basePath() + '/kanasta',
            players: [2, 3, 4],
            cards: 'Dwie standardowe talie kart (2 x 52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra współczesna. Przodkiem kanasty, najdawniejszą jej formą była gra pod nazwą "kometa", znana już w XVIII wieku w Hiszpanii jako "ronda", a także jedna z gier nowszych - "manila". Współczesna kanasta ("canasta" to w języku hiszpańskim "koszyczek na zakupy - aluzja do gromadzenia w grze odpowiednich układów kart) zrodziła się w Urugwaju, szybko rozwinęła w Argentynie i w 1949 roku z sukcesem dotarła do USA. Stąd w latach 1950-1952 stała się znana i popularna w całym świecie.<br />
                        Istnieje wiele wariantów gry pod różnymi nazwami i według nieco odmiennych zasad (kanasta brazylijska, boliwijska, meksykańska, arlington, quinella, tampa i inne).
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Kanasta jest grą dla dwóch, trzech lub czterech osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>Do gry używa się dwóch pełnych talii (2 x 54 karty).</p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Kolejne rozdania idą zgodnie z ruchem wskazówek zegara. Każdy z graczy otrzymuje po 11 kart i dodatkowo jedna kartę się odkrywa - staje się ona pierwszą kartą odkrytego stosu. (Ja zawsze grałem tak, że rozdający dawał wszystkim graczom po 13 kart, a sobie 14 i to on tworzył stos odkryty wyrzucając dowolną kartę).
                    </p>

                    <h2 className="content-subhead">Zasady gry</h2>
                    <p>
                        Przy grze w cztery osoby gracze siedzący na przeciwko siebie tworzą parę.<br />
                        Gra toczy się w następujący sposób: gracz, którego jest kolej bierze kartę z samej góry stosu zakrytego (tzn. z kart, które nie zostały rozdane) a następnie wyrzuca dowolną kartę z ręki (może być ta przed chwilą wyciągnięta) na stos odkryty. Celem rozgrywki jest zdobycie maksymalnej liczby punktów. Punkty z każdej rozgrywki podlicza się i sumuje z poprzednimi. Punkty liczy się za wyłożone karty na stole w odpowiednich układach oraz za zakończenie rozgrywki, tzn. pozbycie się wszystkich kart z ręki. Aby wyłożyć karty na stole należy mieć co najmniej trzy karty jednakowej rangi, np. trzy Króle, trzy Piątki, trzy Czwórki, itp. W układach dżokery mogą zastępować kartę brakującą. Dżokerami są także wszystkie dwójki. Nazywane są one małymi (lub fałszywymi) dżokami. Tak więc komplety trzech figur można uzupełniać dżokerami, lecz w żadnym układzie nie może być więcej dżoków niż figur. Układy obydwu partnerów łączy się i układa przed jednym z nich. Podczas, gdy jeszcze żaden z graczy nie wyłożył kart na stół, gra jest "zamknięta". Pierwsze wyłożenie jakiegoś układu na stół "otwiera" grę dla danej pary. Aby jednak wyłożyć karty na stół, karty wykładane muszą zawierać określoną liczbę punktów. Ilość tych punktów potrzebnych do wyłożenia zależy od całkowitej ilości punktów w grze danej pary.<br />
                        Warunki te określa poniższa tabela:
                    </p>

                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Ogólna ilość punktów</td>
                                <td>Ilość punktów potrzebna do wyłożenia</td>
                            </tr>
                            <tr>
                                <td>&lt; 0</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>od 0 do 1495</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>od 1500 do 2995</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>&gt; 3000</td>
                                <td>120</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Aby otworzyć grę właściwą ilością punktów można wyłożyć na stół więcej niż jeden układów i wartość ich sumuje się. Kiedy już się raz otworzy grę, dana para nie ma w wykładaniu prawie żadnych ograniczeń. Partnerzy mogą dokładać nawet pojedyncze karty do już istniejących układów bądź tworzyć nowe. Nie mogą jedynie dokładać swoich kart do układów przeciwników, a wykładać się może tylko dany gracz, którego jest aktualnie kolejka.
                    </p>
                    <p>
                        Wyłożony układ siedmiu kart nazywa się kanastą i jest układem koniecznym do zakończenia rozgrywki. Kanasta składająca się tylko z kart właściwych nazywana jest kanastą czystą (prawdziwą lub czerwoną), natomiast kanasta z jednym, dwoma lub trzema dżokerami nazywa się brudną (fałszywą lub czarną) Do kanasty można, lecz nie ma obowiązku dokładać dalsze karty tej samej wartości.
                    </p>
                    <p>
                        Rozgrywkę rozpoczyna gracz na lewo od rozdającego. Może on zabrać kartę otwierającą stos i wyrzucić inną z ręki, tworząc nowy stos odkryty, może również nie brać tej karty lecz tą ze stosu zakrytego i wyrzucić jedną kartę na stos odkryty. Dalsza część rozgrywki przebiega wg normalnych zasad.
                    </p>
                    <p>
                        Pierwszy stos przy grze zamkniętej (gdy nikt jeszcze niczego nie wyłożył) jest zamknięty. Aby wziąć kartę ze stosu zamkniętego, należy mieć dwie inne karty tej samej wartości. Powstały układ (przynajmniej) trzech kart należy wyłożyć na stole Oczywiście obowiązuje ilość punktów potrzebna do wyłożenia, a liczymy je łącznie z wierzchnią kartą zdjętą ze stosu odkrytego. Kiedy już gracz wyłoży odpowiednią ilość punktów, dopiero wtedy może (a nawet ma obowiązek) zabrać resztę stosu odkrytego. Resztę kart ze stosu gracz może wyłożyć w nowy układ lub dołożyć do już istniejącego, lub trzymać je w ręce. Gdy dla partnerów gra jest otwarta (mają wyłożone już karty na stole) stos może zostać wzięty nie tylko przy posiadaniu na ręku i okazaniu dwóch kart tej samej rangi, co wierzchnia karta stosu, lecz również tylko jednej takiej karty i jednego dżokera (małego lub dużego). Stos otwarty można wziąć również wtedy, jeśli jego wierzchnią kartę można dołożyć do jednego z już wyłożonych układów.
                    </p>
                    <p>
                        Po zrzuceniu karty z ręki przez gracza, kolejność gry przechodzi na następnego gracza zgodnie z ruchem wskazówek zegara.<br />
                        KART STOSU NIE MOŻNA PODGLĄDAĆ W TRAKCIE GRY<br />
                        Gra toczy się do momentu, aż jeden z graczy pozbędzie się wszystkich kart z ręki, ostatnią z nich wyrzucając na stos lub dokładając do jednego ze swoich już wyłożonych układów.<br />
                        Grę wolno ukończyć (ale nie ma takiego obowiązku) w momencie, gdy strona kończąca ma już wyłożoną co najmniej jedną kanastę. Gracz, który w swojej kolejności może ukończyć grę, ma prawo (nie ma obowiązku) spytać partnera: czy kończyć? Odpowiedź może brzmieć tylko: TAK lub NIE. Pytający jest zobowiązany postąpić zgodnie z odpowiedzią partnera.<br />
                        Grę można ukończyć, biorąc jedną i tylko jedną wierzchnią kartę ze stosu, nie wolno jednak wtedy zrzucać żadnej karty z ręki. Stosu złożonego z jednej karty traktuje się nie jako wzięcie jednej karty, lecz jako wzięcie stosu. W każdym momencie gry przed jej ukończeniem każdy z graczy zobowiązany jest mieć w ręku co najmniej jedną kartę (nie wolno pozbyć się wszystkich kart nie kończąc gry). Gracz, który ma na ręku tylko jedną kartę, nie może kupić stosu składającego się tylko z jednej karty (pasujących do jednego z układów już przez gracza wyłożonych).
                    </p>

                    <h2 className="content-subhead">Trójki czarne</h2>
                    <p>
                        Specyficzną rolę w rozgrywce pełnią wszystkie czarne trójki (treflowe i pikowe) - blokują one stos. Gdy wierzchnią kartą stosu jest czarna trójka, stosu nie można kupić nawet za okazaniem dwu innych czarnych trójek.<br />
                        W toku gry nie wolno wykładać na stół układu trzech trójek. Wolno wyłożyć na stół tylko układ trzech lub czterech czarnych trójek w momencie ukończenia gry, wówczas jednak nie wolno kończyć gry zrzuceniem ostatniej karty do stosu, trzeba móc ją wyłożyć na stół w jakimś układzie lub dołożyć do układu już istniejącego.
                    </p>
                    <p>
                        Jeśli jest kolej na gracza z danej pary, która ma wyłożoną kanastę z danej figury, np. z Waletów, a na stosie odkrytym leży właśnie Walet, to nie może go wziąć, nawet jeśli ma na ręku inne dwa Walety.
                    </p>
                    <p>
                        Kartami zamykającymi stos dla wszystkich graczy są małe i duże dżokery.<br />
                        Jeśli któryś z graczy wyrzucił na stos dżokera staje się on zamknięty jak na początku gry. Kupić zamknięty stos można tylko, mając dwie karty tej samej wysokości na ręku. Stosu zamkniętego dżokerem nie można kupić na dwa dżokery. Jeśli kartą odkrytą po rozdaniu kart (otwierającą pierwszy stos) okazuje się dżoker, trójka czarna lub czerwona, odkrywa się następną kartę; jeśli i to jest dżoker lub trójka - następną i tak do momentu pojawienia się zwykłej karty.
                    </p>

                    <h2 className="content-subhead">Trójki czerwone</h2>
                    <p>
                        Inną funkcję pełnią trójki czerwone. Są to karty premiowe, które nigdy nie wchodzą w skład żadnych układów. Po rozdaniu wszyscy gracze, którzy posiadają trójki czerwone mają obowiązek wyłożyć je przed sobą na stole, a w ich miejsce wziąć karty ze stosu zakrytego. Tak samo podczas gry, kiedy okaże się, że kartą dokupioną przez gracza jest czerwona trójka, ma on obowiązek odłożyć ją na bok, lecz nie dokupuje za nią dodatkowej karty.
                    </p>

                    <h2 className="content-subhead">Zakończenie</h2>
                    <p>
                        W momencie kończenia gry partner kończącego może wszystkie swoje karty z ręki wyłożyć w nowych układach lub dołożyć do istniejących. Jest to wówczas tzw. podwójne zakończenie gry, oddzielnie premiowane. Jeśli partner kończącego nie może w ten sposób pozbyć się wszystkich kart z ręki, lecz tylko ich części, nie wolno mu dokładać ani wykładać żadnych kart.<br />
                        Jeśli gracz kończy grę w momencie jej otwarcia (otwierając grę wykłada jednocześnie wszystkie karty z ręki, z obowiązującą kanastą włącznie), jest to tzw. skończenie gry z ręki. Suma wartości kart wyłożonych musi wówczas wynosić wymagane minimum otwarcia, jeśli gracz jednocześnie kupuje stos lub wierzchnią kartę stosu. Jeśli jednak gracz kończy grę z ręki, kupując kartę z talonu, nie obowiązuje go minimum otwarcia.<br />
                        Jeśli gra jest otwarta przez jednego z partnerów, drugi może skończyć grę z ręki pod warunkiem, że wyłoży wszystkie swe karty naraz z kanastą włącznie (choćby jedną kanastę już uprzednio wyłożył partner), oraz pod warunkiem, że w dotychczasowej rozgrywce nie dołożył żadnej ze swych kart do układów na stole.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Po zakończeniu gry oblicza się ilość punktów uzyskanych w rozgrywce przez każdą ze stron. Na tę ilość punktów składają się punkty plusowe za karty wyłożone w różnych układach na stole, punkty premiowe (plusowe, czasem minusowe) oraz punkty minusowe za karty pozostałe w ręku.<br />
                        Punkty plusowe za karty wyłożone na stole oblicza się wg punktowej wartości kart. Za jedną czarną trójkę wyłożoną w układzie czarnych trójek liczy się 5pkt.
                    </p>

                    <h2 className="content-subhead">Punkty plusowe</h2>
                    <ul>
                        <li>za kanastę czystą 500pkt</li>
                        <li>za kanastę brudną 300pkt</li>
                        <li>za czerwoną trójkę (jeśli ma się wyłożoną kanastę) 100pkt</li>
                        <li>za czerwoną trójkę (jeśli nie ma się wyłożonej kanasty) -100pkt</li>
                        <li>za komplet (cztery) czerwonych trójek z kanastą 800pkt</li>
                        <li>za komplet (cztery) czerwonych trójek bez kanasty -800pkt</li>
                        <li>za zakończenie rozdania 100pkt</li>
                        <li>za podwójne zakończenie rozdania dodatkowe 100pkt</li>
                        <li>za zakończenie rozdania z ręki dodatkowo 100pkt</li>
                    </ul>
                    <p>
                        Punkty minusowe za karty w ręku oraz punkty plusowe za karty wyłożone na stole oblicza się wg punktowej wartości kart.
                    </p>
                    <ul>
                        <li>Asy i Dwójki: 20pkt</li>
                        <li>wszystkie figury, Dziesiątki, Dziewiątki, Ósemki: 10pkt</li>
                        <li>od Siódemek do Czwórek włącznie: 5pkt</li>
                    </ul>

                    <ul>
                        <li>za każdą czarną trójkę w ręku liczy się -100pkt.</li>
                        <li>za każdą czerwoną trójkę w ręku -500pkt</li>
                    </ul>
                    <p>
                        Gra toczy się w kolejnych rozgrywkach do chwili, gdy jedna ze stron osiągnie lub przekroczy w zapisie 5000pkt. Ostatnie rozdanie, nawet gdy jest już wiadomo, że jedna ze stron lub obie strony przekroczyły 5000pkt, rozgrywana jest zawsze do końca. Jeśli w jakimś rozdaniu skończą się karty w stosie zakrytym, żadna zaś ze stron nie skończyła gry, rozgrywka dobiega końca po zrzuceniu karty z ręki gracza, który pobrał ostatnią kartę (ten stos może zostać jeszcze kupiony). Oblicza się wówczas punkty uzyskane w rozgrywce przez obie strony bez premii za skończenie rozgrywki dla żadnej z nich.
                    </p>

                    <h2 className="content-subhead">Warianty</h2>
                    <p>
                        Czasem grywa się z jeszcze jednym układem - kanastą z dżokerów (układem siedmiu dżokerów prawdziwych i fałszywych). Za taką kanastę otrzymuje się 100pkt premii. W toku rozgrywki nie wolno wykładać kanasty z dżokerów, lecz należy od razu wyłożyć siedem dżoków z jednej ręki.
                    </p>
                    <p>
                        Można grać również nie do 5000pkt, lecz do 7500pkt. Wówczas istnieje dodatkowy warunek otwarcia: przy zapisie dla danej strony 5000pkt lub więcej minimum otwarcia jest kanasta (wyłożenie siedmiu kart kanasty naraz), niezależnie od jej punktowej wartości i oczywiście tylko z jednej ręki z ewentualnym użyciem wierzchniej karty kupionego stosu.
                    </p>
                    <p>
                        Można grać też w kanastę pod warunkiem, iż grę wolno skończyć w momencie posiadania nie jednej, lecz co najmniej dwu wyłożonych kanast.
                    </p>
                    <p>
                        Można grać również do 10000pkt wg innej ilości punktów potrzebnych do wyłożenia:
                    </p>

                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Ogólna ilość punktów</td>
                                <td>Ilość punktów potrzebna do wyłożenia</td>
                            </tr>
                            <tr>
                                <td>&lt; 0</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>od 0 do 995</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>od 1000 do 1995</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>od 2000 do 2995</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>od 3000 do 4995</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>od 5000 do 6995</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>&gt; 7000</td>
                                <td>180</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Właśnie według tych zasad zawsze grałem, z tym że specjalnie punktowana, oprócz kanasty z dżokerów, była również kanasta z siódemek (za każdą z nich premia 100pkt). Gdy któryś z graczy otrzymał po rozdaniu lub wyciągając ze stosu zakrytego czerwoną trójkę odkładał ją na bok i pobierał za nią następną kartę. W przypadku zdobycia przez daną stronę chociaż jednej kanasty, czerwona trójka miała wartość 100pkt, w przeciwnym wypadku -100pkt. Za czarną trójkę (jeśli została na ręku po skończeniu rozdania) liczyło się -100pkt za każdą.
                    </p>

                    <h2 className="content-subhead">Kanasta dla trzech osób</h2>
                    <p>
                        Przy grze w trzy osoby każdy z graczy gra sam i na własny rachunek. Każdy z grających otrzymuje po trzynaście kart. Grę wolno skończyć w momencie posiadania nie jednej, lecz co najmniej dwu wyłożonych kanast.<br />
                        Wszystkie pozostałe reguły gry i zapisu - bez zmian.
                    </p>

                    <h2 className="content-subhead">Kanasta dla dwóch osób</h2>
                    <p>
                        Przy grze w dwie osoby gra się tak samo, jak w trzy, z tym że każdy z graczy otrzymuje po piętnaście kart.<br />
                        Reszta reguł bez zmian.
                    </p>
                </div>

                <div className="content">
                    <a name="samba"></a>
                    <h1 className="content-subhead main-header">Samba</h1>
                    <div className="info">Wariant gry.</div>
                    <p>
                        Do gry używa się trzech talii kart z dżokerami (162 karty). Każdy z graczy otrzymuje po 15 kart. Dwie osoby grają przeciwko dwom.<br />
                        Przy pobieraniu kart ze stosu zakrytego każdy z graczy pobiera dwie karty, zrzuca zaś do stosu tylko jedną.<br />
                        Nie wolno kupować stosu na jedną kartę z dżokerem, lecz zawsze na dwie karty lub do wyłożonego już układu. W żadnym układzie (także kanaście) nie może być więcej niż dwa dżokery. Wolno mieć dwie kanasty tej samej wartości. Dla skończenia gry trzeba mieć co najmniej dwie wyłożone kanasty. Komplet sześciu czerwonych trójek jest premiowany: 1000pkt lub -1000pkt (gdy nie posiada się kanasty lub posiada się tylko jedną).
                    </p>
                    <p>
                        W grze można wykładać także sekwensy (trzy lub więcej kart kolejnych w tym samym kolorze; as jest kartą najwyższą i w sekwensie tylko A, D, K). Do sekwensu można dokładać dalsze karty kolejne, aż sekwens stanie się siedmiokartowy. Jest to tzw. "samba" - otrzymuje się za nią 1500pkt premii. Samba może służyć jako kanasta obowiązkowa do ukończenia gry. Do samby nie można dokładać żadnych dalszych kart.
                    </p>
                    <p>
                        Za skończenie gry 200pkt premii. Nie ma premii za podwójne skończenie gry i skończenie z ręki.
                    </p>
                    <p>
                        Punktacja potrzebna do otwarcia gry:
                    </p>
                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Ogólna ilość punktów</td>
                                <td>Ilość punktów potrzebna do wyłożenia</td>
                            </tr>
                            <tr>
                                <td>&lt; 0</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>od 0 do 1495</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>od 1500 do 2995</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>od 3000 do 6995</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>&gt; 7000</td>
                                <td>150</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Gra toczy się do chwili osiągnięcia przez jedną ze stron 10000pkt.
                    </p>

                </div>

                <div className="content">
                    <a name="combo"></a>
                    <h1 className="content-subhead main-header">Combo</h1>
                    <div className="info">Wariant gry.</div>
                    <p>
                        Do gry używa się trzech talii kart z dżokerami. Każdy z graczy otrzymuje po 15 kart. Gra się parami.
                    </p>
                    <p>
                        Przy pobieraniu kart ze stosu zakrytego każdy z graczy bierze po dwie karty, zrzuca zaś do stosu otwartego z ręki tylko jedną. Nie wolno kupować na jedną kartę z dżokerem, lecz zawsze na dwie karty lub do wyłożonego już układu.
                    </p>
                    <p>
                        W żadnym układzie nie może być więcej niż dwa dżokery. Wolno mieć dwie kanasty tej samej wysokości.
                    </p>
                    <p>
                        Gra toczy się do wyczerpania kart ze stosu zakrytego. Gracz, który wziął ostatnią kartę z tego stosu ma obowiązek zrzucić kartę z ręki na stos otwarty, który może jeszcze zostać kupiony przez następnego gracza. Nie ma skończenia gry i premii za nie. Żadnemu graczowi w toku gry nie wolno pozbywać się ostatniej karty z ręki.
                    </p>
                </div>

                <div className="content">
                    <a name="czymozna"></a>
                    <h1 className="content-subhead main-header">Czy można?</h1>
                    <div className="info">
                        Wariant gry dla 3, 4 lub 5 osób, opracowany w 1962 roku w Arkansas.
                    </div>
                    <p>
                        Do gry używa się dwóch talii kart bez dżokerów (104 karty). Wartość punktowa kart: as - 15, figury i dziesiątki - 10, pozostałe karty według ilości oczek.
                    </p>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. W następnych rozdaniach gracze rozdają karty kolejno. Pełna partia "czy można?" składa się z pięciu rozdań.
                    </p>
                    <p>
                        Każdy z graczy otrzymuje po dziesięć kart, reszta kart pozostaje w zakrytym talonie. Grę rozpoczyna zawsze gracz po lewej stronie rozdającego. Bierze do ręki wierzchnią kartę zakrytego talonu i jedną kartę z ręki zrzuca otwartą na stół. Podobnie postępują kolejni gracze - na stole tworzy się otwarty stos kart, którego wszystkie karty kolejne powinny być widoczne.
                    </p>
                    <p>
                        Ogólnym celem gry jest osiągnięcie jak najmniejszej ilości punktów minusowych w zapisie w cyklu kolejnych rozgrywek. Każdy z grających gra na własny rachunek.
                    </p>
                    <p>
                        Celem gry jest wyłożenie wszystkich kart z ręki na stół w odpowiednich układach. Układami do wyłożenia są komplety i sekwensy. Komplet to co najmniej trzy karty tej samej wysokości. Sekwens to co najmniej trzy kolejne karty w tym samym kolorze (as jest kartą najwyższą i najniższą, a więc A, K, D i A, 2, 3 to sekwensy).
                    </p>
                    <p>
                        Dla zakończenia gry w każdej rozgrywce obowiązują inne normy wyłożenia. Należy wyłożyć nie mniej i nie więcej, lecz tylko:
                    </p>
                    <ul>
                        <li>w pierwszej rozgrywce - dwa komplety;</li>
                        <li>w drugiej rozgrywce - jeden komplet i jeden sekwens;</li>
                        <li>w trzeciej rozgrywce - dwa sekwensy;</li>
                        <li>w czwartej rozgrywce - trzy komplety;</li>
                        <li>w piątej rozgrywce - dwa komplety i jeden sekwens.</li>
                    </ul>
                    <p>
                        We wszystkich rozgrywkach, oprócz ostatniej, wolno ostatnią kartę z ręki zrzucić na stos otwarty. W ostatniej rozgrywce kartę tę należy wyłożyć na stół w jednym z układów.
                    </p>
                    <p>
                        We wszystkich rozgrywkach w kolejności gry wolno wykładać karty z ręki (po pobraniu karty z talonu lub stosu, przed zrzuceniem karty z ręki na stos) nie tylko w kompletach lub sekwensach, wolno także dokładać karty z ręki do wyłożonych już na stół kompletów i sekwensów, zarówno własnych, jak i przeciwników. W ten sposób komplet może osiągnąć osiem kart, sekwens - trzynaście.
                    </p>
                    <p>
                        Obowiązujące każdego z graczy w kolejnych rozgrywkach układy do wyłożenia nie mogą się dublować (dwa komplety to dwa różne komplety, na przykład waletów i czwórek, lecz nie dwa komplety po trzy walety w każdym; dwa sekwensy to sekwensy w różnych kolorach).
                    </p>
                    <p>
                        Nie wolno kończyć gry bez wyłożenia obowiązującej w danym rozdaniu ilości i rodzajów układów. Nie wolno wykładać więcej i innych układów niż obowiązujące w danym rozdaniu.
                    </p>
                    <p>
                        W kolejności gry gracz ma prawo zamiast brać kartę z talonu wziąć kartę ze stosu otwartego, zrzuconą przez poprzednika. Nie ma obowiązku natychmiastowego wykładania ani dokładania tej karty.
                    </p>
                    <p>
                        Karta zrzucona na stos otwarty może zostać zakupiona (wzięta do ręki) nie tylko przez gracza, do którego została zrzucona, lecz i przez pozostałych dwóch graczy (poza tym, oczywiście, który daną kartę zrzucił).
                    </p>
                    <p>
                        Aby kupić z odkrytego stosu wierzchnią jego kartę, gracz pyta: czy można?
                    </p>
                    <p>
                        Zezwolenia udzielają wszyscy gracze zainteresowani (ci, którzy mieliby prawo kartę właśnie zrzuconą kupić wcześniej niż pytający o to). Przykładowo: grają A, B, C i D, którzy siedzą w tej właśnie kolejności; kartę na stos zrzucił gracz A, chce ją kupić i pyta o to gracz D; zezwolenia udzielają kolejno B a potem C. Jeśli kartę zrzucił gracz A, chce zaś ją kupić gracz C, zezwolenia udziela tylko gracz B. Jeśli kartę chce kupić gracz B, nie prosi nikogo o zezwolenie - jest to karta przecież do niego rzucona.
                    </p>
                    <p>
                        Jeśli gracze zapytani udzielili pytającemu zezwolenia (odpowiadając "można"), gracz pytający bierze wierzchnią kartę otwartego stosu oraz dodatkowo jedną kartę z talonu i nie zrzuca żadnej karty z ręki. Jednocześnie zmienia się kolejność gry, która wraca do gracza kupującego kartę ze stosu. Teraz gra następny gracz po jego lewej stronie. Może on kupić ujawnioną na stosie odkrytym wierzchnią jego kartę lub wziąć do ręki wierzchnią kartę talonu i zrzucić kartę z ręki.
                    </p>
                    <p>
                        Jeśli którykolwiek z graczy zainteresowanych nie udzielili pytającemu zezwolenia (odpowiadając na jego pytanie "nie można"), ma obowiązek sam kupić wierzchnią kartę ze stosu. Jeśli jest to gracz po lewej stronie tego, do którego sporna karta została rzucona, nie dokupuje już karty z talonu, ale też nie zrzuca żadnej karty z ręki; kolejka gry przechodzi na następnego gracza. Jeśli graczem odmawiającym jest nie ten po lewej, lecz następny po nim, ma on obowiązek nie tylko sam kupić wierzchnią, sporną kartę ze stosu, lecz także dodatkowo bierze z talonu jedną kartę i nie zrzuca żadnej karty z ręki; kolejka gry przechodzi na następnego gracza.
                    </p>
                    <p>
                        Gracz, któremu udzielono zezwolenia na kupno wierzchniej karty stosu, może, nie ujawniając tej swojej chęci uprzednio, kupić więcej kart kolejnych z wierzchu stosu (dwie, trzy, cztery - ile sobie życzy), za każdą jednak kartę kupioną ze stosu ma obowiązek pobrać także jedną kartę z talonu i nie zrzuca żadnej karty z ręki.
                    </p>
                    <p>
                        Gracz, po lewej, do którego karta właśnie została zrzucona, może - nie pytając nikogo o zezwolenie - kupić i ją, i kolejne dalsze karty stosu (ile sobie życzy), wówczas jednak za każdą kartę dodatkową, poza pierwszą kupioną ze stosu, ma obowiązek pobrać także jedną kartę z talonu i nie zrzuca żadnej karty z ręki; kolejka gry przechodzi na następnego gracza.
                    </p>
                    <p>
                        Gdy któryś z graczy wyłożył wszystkie obowiązujące w danym rozdaniu układy kart i pozbył się wszystkich kart z ręki, rozgrywka się kończy. Następuje obliczenie ilości punktów każdego gracza.
                    </p>
                    <p>
                        Kończący grę otrzymuje premię w wysokości 20 punktów plusowych.
                    </p>
                    <p>
                        Karty wyłożone na stół w kompletach i sekwensach nie liczą się. Za karty w ręku każdy z graczy otrzymuje ilość punktów minusowych obliczoną według wartości punktowej wszystkich kart w ręku. Nie wyłożone układy i nie dołożone karty stają się w momencie zakończenia gry minusowe, nie wolno ich już wykładać ani dokładać.
                    </p>
                    <p>
                        Gra toczy się do chwili ukończenie ostatniej (piątej) obowiązującej rozgrywki.
                    </p>
                    <p>
                        Całą partię wygrywa ten z graczy, który ma w zapisie najmniej punktów minusowych.
                    </p>
                    
                    <h2 className="content-subhead">Wariant "czy można"</h2>
                    <p>
                        Można grać nie w pięciu, lecz w sześciu kolejnych rozdaniach. Wówczas we wszystkich rozgrywkach każdy z grających otrzymuje nie po dziesięć lecz po jedenaście kart, w ostatniej zaś, szóstej rozgrywce obowiązuje wyłożenie dwóch sekwensów i jednego kompletu.<br />
                        Pozostałe zasady gry i zapisu - bez zmian.
                    </p>
                </div>

            </div>
        );
    }
}
