import { basePath } from '../utils';
import React from 'react';


export default class Poker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Poker',
            desc: 'gra dla 5 (od 2 do 8) osób ',
            url: basePath() + '/poker',
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
                    <div className="info">Gra hazardowa.</div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Chociaż nie ma określonego limitu liczby uczestników, w pokerze powinno brać udział od 2 do 8 graczy, a optymalna ich liczba to 5.
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty). Jeżeli graczy jest mniej niż pięciu zaleca się stosowanie talii o mniejszej ilości kart (od 48 do 24 ze skokiem co 4 karty tzn. odejmując wszystkie 4 karty o danej wartości).<br />
                        Starszeństwo kart od asa do dwójki (w niektórych odmianach przyjmuje się, że as jest kartą najmłodszą o wartości 1).<br />
                        Nie ma starszeństwa kolorów.
                    </p>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>
                        Celem gry jest uzyskanie jak najwyższej kombinacji pięciu kart, które można kombinować według: kart tej samej wartości, tego samego koloru lub według sekwensu (kolejno wzrastających wartości kart).
                    </p>

                    <h2 className="content-subhead">Znaczenia układów</h2>
                    <p>
                        Poniżej podane jest 9 możliwych układów, od najmniej do najbardziej wartościowego.<br />
                        Hierarchia ta wynika ze względnej częstości występowania poszczególnych układów.
                    </p>
                    <a name="starszenstwo"></a>
                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Lp.</td>
                                <td>ang</td>
                                <td>pl</td>
                                <td>opis</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>No pair</td>
                                <td>bez pary</td>
                                <td>Najmniej ceniony układ kart. O wartości w stosunku do innych układów przesądza wartość najstarszej posiadanej karty. Jeżeli wszyscy gracze mają "bez pary" o wygranej decyduje najstarsza karta; jeżeli jest kilku graczy, którzy mają takie same najwyższe karty, to decyduje o wygranej między nimi karta druga lub nawet trzecia; jeżeli wszystkie pięć kart jest jednakowych, następuje podział puli</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>One pair</td>
                                <td>para</td>
                                <td>sytuacja, gdy pośród pięciu kart znajdują się dwie karty o tej samej wartości, np.: Walet, dwa Króle, siódemka i czwórka; jeżeli dwóch graczy ma parę, to zwycięża posiadacz pary składającej się z kart o wyższej wartości; jeżeli pary są takie same decyduje najstarsza z pozostałych kart</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Two pair</td>
                                <td>dwie pary</td>
                                <td>jeżeli dwóch graczy posiada dwie pary, to o zwycięstwie decyduje wartość najstarszej pary; jeżeli ich wartość jest taka sama , o zwycięstwie decyduje wartość drugiej pary lub ewentualnie piąta karta w przypadku takich samych obu par</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Three of a kind</td>
                                <td>trójka</td>
                                <td>trzy karty tej samej wartości; w przypadku, gdy więcej graczy ma trójki, o wygranej decyduje wartość kart składających się na tą trójkę (nie ma możliwości wystąpienia dwóch trójek tej samej wartości)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Straight</td>
                                <td>strit/sekwens</td>
                                <td>sytuacja pięciu kolejno następujących po sobie kart, niezależnie od ich koloru. Najwyżej cenionym stritem jest tzw. strit asowy, zawierający: asa, króla, damę waleta i dziesiątkę; strit o najmniejszej wartości to strit piątkowy: 5, 4, 3, 2 i as (liczony jako 1). W przypadku dwóch stritów, o zwycięstwie decyduje najstarsza karta</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Flush</td>
                                <td>kolor</td>
                                <td>pięć kart należących do tego samego koloru, np. pięciu trefli; nie odgrywa roli kolejność kart; w przypadku dwóch posiadanych kolorów wygrywa ten, który ma w swoim kolorze najstarszą kartę, ewentualnie o zwycięstwie decyduje karta druga, trzecia, czwarta, lub piąta</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Full haus</td>
                                <td>ful</td>
                                <td>jednoczesna kombinacja trójki i pary; o zwycięstwie między fulami decydują wartości trójek wchodzących w ich skład</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Four of a kind</td>
                                <td>kareta</td>
                                <td>cztery karty tej samej wartości; najstarsza kareta to cztery asy</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Straight flush</td>
                                <td>poker</td>
                                <td>jednoczesna kombinacja strita i koloru, czyli pięć kolejnych kart tego samego koloru; najsłabszy poker to: 5, 4, 3, 2 i As w tym samym kolorze; najstarszy poker to: As, Król, Dama, Walet i Dziesiątka w tym samym kolorze, tzw. królewski poker (royal flush); przy kilku pokerach wygrywa ten z najwyższą kartą</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Powyższa hierarchia dotyczy pokera rozgrywanego pełną talią 52 kart. Przy grze skróconą talią kart hierarchia ta ulega zmianie zgodnie z poniższą tabelą:
                    </p>

                    <table className="pure-table">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Liczba kart</td>
                                <td>52</td>
                                <td>48</td>
                                <td>44</td>
                                <td>40</td>
                                <td>36</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>Hierarchia</td>
                                <td>poker<br />kareta<br />ful<br />kolor<br />strit</td>
                                <td>poker<br />kareta<br />kolor<br />ful<br />strit</td>
                                <td>poker<br />kareta<br />kolor<br />ful<br />strit</td>
                                <td>poker<br />kareta<br />kolor<br />ful<br />strit</td>
                                <td>poker<br />kareta<br />kolor<br />ful<br />strit</td>
                                <td>poker<br />kolor<br />kareta<br />ful<br />strit</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wybiera się losowo. Tasuje on karty i daje do przełożenia. Przed rozdaniem kart rozdający daje hasło do uiszczenia podstawowej stawki (równej stawce minimalnej uzgodnionej przed rozpoczęciem gry). Następnie każdemu z uczestników rozdaje pojedyncze karty zgodnie z ruchem wskazówek zegara, do momentu aż każdy z nich otrzyma po pięć kart. Resztę kart odkłada zakryte na stole.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Gracze po otrzymaniu kart decydują się na dalszą grę lub pasują.<br />
                        Grę otwiera gracz siedzący na lewo od rozdającego. Może on pasować (tzn. wycofać się z gry) lub otworzyć grę.<br />
                        Pasujący traci stawkę wejściową, a kolejka przechodzi na następnego gracza zgodnie z ruchem wskazówek zegara.<br />
                        Otwierając grę, gracz deklaruje swoje wejście do puli stawką większą od minimalnej i nie większą od maksymalnej (również wcześniej uzgodnionej).
                    </p>
                    <p>
                        Po otwarciu puli każdy z graczy ma trzy możliwości: pasować, utrzymać stawkę poprzednika lub przebić stawkę.<br />
                        Pasowanie oznacza dla gracza koniec gry i utratę stawki wejściowej.<br />
                        Utrzymanie stawki poprzednika oznacza wpłatę do puli w wysokości stawki poprzednika i prawo do dalszej gry i licytacji.<br />
                        Przebicie stawki oznacza wpłatę wyższej stawki. Podwyższona stawka jest obowiązująca dla następnych graczy chcących brać udział w dalszej grze. Kto nie chce lub nie może się podporządkować, musi pasować, tracąc dotychczasowy wkład.
                    </p>
                    <p>
                        Kolejkę zakładów może zakończyć tylko pasowanie lub utrzymanie stawki przez wszystkich graczy, lub też sytuacja, gdy po podwyższeniu stawki wszyscy gracze pasują lub tylko utrzymują zwiększoną stawkę.
                    </p>
                    <p>
                        Po pierwszej licytacji, wszyscy gracze aktywni (ci, którzy nie pasowali) mają prawo do wymiany części lub wszystkich swoich kart. Pierwszy wymienia najbliższy aktywny gracz po lewej stronie rozdającego. Po oddaniu określonej liczby kart, rozdający musi mu dać taką samą liczbę kart z talonu zakrytego.<br />
                        Nie ma obowiązku wymiany kart.
                    </p>
                    <p>
                        Może zaistnieć sytuacja, że zabraknie kart na wymianę, wtedy wykorzystujemy, po przetasowaniu, karty odrzucone przez innych graczy.
                    </p>
                    <p>
                        Po wymianie kart następuje druga kolejka zakładów. Prawo do otwarcia ma znowu najbliższy gracz aktywny siedzący po lewej stronie rozdającego.<br />
                        Przebieg drugiej licytacji jest identyczny jak pierwszej, z tym że udział w niej biorą tylko ci gracze, którzy wcześniej nie spasowali.
                    </p>
                    <p>
                        Po drugiej licytacji należy ustalić zwycięzcę rozgrywki.<br />
                        Sprawdzenie może nastąpić z wyłożeniem kart lub bez.<br />
                        Jako pierwszy wykłada karty ostatni podwyższający stawkę lub otwierający drugą licytację. Kolejni gracze wykładają swoje karty, jeżeli uważają, że mają wyższe lub jeśli było tak uzgodnione.
                    </p>
                    <p>
                        Każdy z graczy może objaśnić, co ma lub może tego nie robić.<br />
                        Posiadacz najwyższej kombinacji bierze całą pulę. Jeśli jest dwóch takich graczy, to dzielą oni pulę między sobą.<br />
                        W przypadku, gdy pozostanie niepodzielna reszta, przechodzi ona do następnej puli.
                    </p>
                    <p>
                        Jeżeli w czasie drugiej licytacji wszyscy gracze z wyjątkiem jednego pasują, bierze on całą pulę i nie ma obowiązku ujawnić swoich kart.
                    </p>
                    <p>
                        Po określeniu zwycięzcy kolejny gracz siedzący po lewej stronie rozdającego jest nowym rozdającym i gra rozpoczyna się od nowa.
                    </p>
                </div>

                <div className="content">
                    <a name="rownolegly"></a>
                    <h1 className="content-subhead main-header">Poker równoległy</h1>
                    <div className="info">
                        Gra opracowana przez angielskiego autora i znawcę w dziedzinie gier, Huberta Phillipsa, w 1953 roku. Gra jest znana na obszarze języka angielskiego jako "quintet", na obszarze języka francuskiego zaś jako "pochette".
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla dwóch osób.<br />
                        Dwie preferansowe talie kart - po 32 karty.<br />
                        Starszeństwo kart: od Asa do Siódemki.<br />
                        Starszeństwo kolorów nie istnieje.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Każdy z grających otrzymuje pełną talię kart. Rozdającego wyznacza się przez losowanie. Rozdający tasuje swoją talię i wykłada z niej pierwsze siedem kart odkryte na stole. Karty te nie wezmą udziału w grze w danym cyklu rozgrywek - przeciwnik rozdającego także usuwa ze swojej talii takie same karty.<br />
                        W ten sposób każdy z graczy dysponuje do gry 25 takimi samymi co kontrpartner kartami.
                    </p>
                    <p>
                        Gracze, każdy dla siebie, dzielą swoje 25 kart na pięć pakietów po pięć kart w każdym, w sposób dowolny, układając kolejne pakiety zakryte przed sobą.
                    </p>
                    <p>
                        W rozgrywce następuje kolejno porównywanie wartości pakietów kart, zestawionych przez obydwu graczy, jako tzw. "rąk pokerowych", tj. według <a className="pure-menu-link underline" href={this.state.url + '#starszenstwo'}>starszeństwa układów kart</a> przyjętego w tradycyjnej grze w pokera
                    </p>
                    <p>
                        Po zestawieniu przez graczy pięciu pakietów (figur pokerowych) następuje rozgrywka - ich porównanie.<br />
                        Pakiety należy porównywać kolejno: ustalonej przez graczy przed rozpoczęciem pokazów-rozliczeń kolejności nie wolno zmieniać.
                    </p>
                    <p>
                        Za wygraną w pierwszym pokazie - 3pkt, w drugim - 4pkt i dalej po jednym punkcie więcej, aż do wygranej za piąty pokaz - 7pkt.
                    </p>
                    <p>
                        Całą grę wygrywa ten z graczy, który w pięciu pokazach zdobył więcej punktów.
                    </p>

                    <div className="example">
                        <div className="title">
                            Przykładowa partia pokera równoległego:
                        </div>
                        <div className="content">
                            <p>
                                Rozdający gracz A wyłożył na stół odkryte karty: 8 <span className="heart"></span>, 7 <span className="heart"></span>, 9 <span className="diamond"></span>, 10 <span className="spade"></span>, 7 <span className="spade"></span>, D <span className="club"></span> i W <span className="club"></span>.<br />
                                Te karty odpadają więc z gry, zostają usunięte z talii obydwu graczy. Z pozostałych kart gracze ustalają zestawy pięciu pokazów i porównują je między sobą.
                            </p>
                            <p>
                                W pierwszym pokazie gracz A demonstruje 9 <span className="spade"></span>, 9 <span className="club"></span>, 8 <span className="spade"></span>, 8 <span className="club"></span> i 7 <span className="club"></span> (dwie pary dziewiątkowe), gracz B zaś demonstruje A <span className="spade"></span>, A <span className="heart"></span>, A <span className="club"></span>, 8 <span className="diamond"></span> i 8 <span className="club"></span> (fula asowego).<br />
                                Gracz B wygrał 3 punkty.
                            </p>
                            <p>
                                W drugim pokazie gracz A demonstruje K <span className="spade"></span>, K <span className="diamond"></span>, K <span className="club"></span>, W <span className="spade"></span> i 10 <span className="club"></span> (trójkę króli), gracz B zaś demonstruje K <span className="spade"></span>, D <span className="spade"></span>, W <span className="spade"></span>, 9 <span className="spade"></span> i 8 <span className="spade"></span> (kolor pikowy).<br />
                                Znów wygrał gracz B, zdobywając 4 punkty - ma łącznie 7pkt.
                            </p>
                            <p>
                                W trzecim pokazie gracz A demonstruje D <span className="diamond"></span>, W <span className="diamond"></span>, 10 <span className="diamond"></span>, 8 <span className="diamond"></span> i 7 <span className="diamond"></span> (kolor karowy), gracz B zaś demonstruje K <span className="heart"></span>, D <span className="heart"></span>, W <span className="heart"></span>, 10 <span className="heart"></span> i 9 <span className="heart"></span> (poker od króla).<br />
                                Znów wygrał gracz B, zdobywając 5 punkty - ma już łącznie 12pkt.
                            </p>
                            <p>
                                W czwartym pokazie gracz A ma A <span className="spade"></span>, A <span className="heart"></span>, A <span className="diamond"></span>, A <span className="club"></span> i D <span className="spade"></span> (kareta Asów), gracz B zaś ma A <span className="diamond"></span>, K <span className="diamond"></span>, D <span className="diamond"></span>, W <span className="diamond"></span> i 10 <span className="diamond"></span> (poker od Asa).<br />
                                I tym razem wygrał B, zdobywając 6 punkty - ma ich już 18pkt.
                            </p>
                            <p>
                                W piątym pokazie gracz A demonstruje K <span className="heart"></span>, D <span className="heart"></span>, W <span className="heart"></span>, 10 <span className="heart"></span> i 9 <span className="heart"></span> (poker od króla), gracz B zaś ma 7 <span className="diamond"></span>, 7 <span className="club"></span>, K <span className="club"></span>, 10 <span className="club"></span> i 9 <span className="club"></span> (para siódemek).<br />
                                Ten pokaz wygrał A, zdobywając 7 punktów.
                            </p>
                            <p>
                                Łącznie gracz B zdobył 18 punktów, gracz A - 7 punktów, a więc całą grę wygrał gracz B.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
