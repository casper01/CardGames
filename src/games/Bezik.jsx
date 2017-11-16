import { basePath } from '../utils';
import React from 'react';


export default class Bezik extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Bezik',
            desc: 'gra dla 2 osób',
            url: basePath() + '/bezik',
            players: [2],
            cards: 'Dwie lub więcej talii kart'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra wywodząca się z Francji XVII wieku, znana w wielu wariantach w wielu krajach - na obszarze języka niemieckiego jako "binokel" (w Polsce na Śląsku jako "pinuś"); na obszarze języka angielskiego jako "pinochle" (obydwie te nazwy wywodzą się z włoskiego "bini oculi" - "dwoje oczu"); używanie dwu lub więcej identycznych talii kart jest cechą charakterystyczną gry.<br />
                        Wariant gry sześcioma taliami dla dwóch osób, który opisany jest poniżej, uważany jest przez wiele autorytetów w dziedzinie gir za najciekawszy wariant bezika i jednocześnie za jedną z najlepszych gier karcianych dla dwóch osób.
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>Do gry używa się dwie lub więcej talii kart.<br />
                        Poniżej opisany jest wariant z sześcioma taliami (6 x 32 karty od asów do siódemek = 192 karty).<br />
                        Starszeństwo kart: as, dziesiątka, król, dama, walet, dziewiątka, ósemka, siódemka.<br />
                        Istnieje zmienny kolor atutowy.</p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Po przetasowaniu wszystkich sześciu połączonych talii kart każdy z graczy otrzymuje po dwanaście kart. Reszta kart pozostaje w zakrytym talonie.
                    </p>
                    <p>
                        Jeśli któryś z graczy nie ma po rozdaniu kart ani jednej figury (króla, damy lub waleta) w ręku, deklaruje to i zapisuje sobie od razu punkty premiowe za tak zwaną "carte blanche". Gdy po zgraniu jednej karty dany gracz wciąż nie ma w ręku ani jednej figury, zapisuje sobie po raz wtóry premię za "carte blanche" i tak dalej aż do chwili, gdy z talonu uzyska figurę.<br />
                        Za dwanaście kart w ręku bez figury w dalszym toku rozgrywki nie zapisuje się już premii za "carte blanche".
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <div className="info">
                        Cały rachunek punktowy przy grze w bezika powinien być prowadzony na bieżąco i dostępny dla obydwu graczy.
                    </div>
                    <p>
                        Po rozdaniu kart i ewentualnym zapisaniu punktów za "carte blanche" rozpoczyna się rozgrywka, polegająca na zgrywaniu kolejno kart (z ręki lub - z zadeklarowanych i wyłożonych układów - ze stołu).
                    </p>
                    <p>
                        Pierwszy wychodzi przeciwnik rozdającego.<br />
                        Nie ma obowiązku ani dorzucania do koloru, ani przebijania starszą kartą.
                    </p>
                    <p>
                        Z dwu kart w tym samym kolorze wygrywa lewę starsza karta. Jeśli karty są w różnych kolorach, lewę wygrywa wychodzący. Jeśli jedna z kart jest atutem, ona wygrywa lewę. Jeśli obydwie karty są identyczne, wygrywa lewę wychodzący.
                    </p>
                    <p>
                        Po zdobyciu lewy przed wyjściem do następnej gracze dobierają po jednej karcie ze stosu zakrytego do ręki (by znowu mieć w ręku 12 kart). Pierwszy dobiera kartę ten z graczy, który wziął lewę, i on wychodzi do następnej. Karty tworzące lewy pozostawia się na stole w stosie, którego w trakcie gry nie wolno żadnemu z graczy przeglądać.
                    </p>
                    <p>
                        Przed uzupełnieniem ręki i wyjściem gracz, który wygrał lewę, ma prawo zadeklarować posiadany przez siebie układ premiowany (jeśli ma ich w ręku więcej niż jeden, wybiera który) i zapisuje sobie za niego premię punktową, wykładając karty w zadeklarowanym układzie przed sobą na stole.
                    </p>
                    <p>
                        Karty wyłożone na stole są własnością gracza (częścią ręki), który je wyłożył, i mogą być według jego uznania zgrywane lub zagrywane do kolejnych lew.
                    </p>
                    <p>
                        W pierwszym wyjściu rozgrywka jest bezatutowa. Kolor atutowy zostaje wyznaczony przez pierwszy zadeklarowany i wyłożony mariaż (za który premię zapisuje się, oczywiście, jak za mariaż atutowy).
                    </p>
                    <p>
                        Gracz nie ma obowiązku deklarowania posiadanych w ręku układów kart ani nawet (co jest uprawnieniem teoretycznym) nie ma obowiązku zapisywania sobie punktów premiowych za zadeklarowane i wyłożone układy.
                    </p>
                    <p>
                        Karty raz wyłożone w układzie mogą zostać użyte do kolejnego innego układu (np. po wyłożeniu sekwensu gracz wykłada jeszcze jednego króla koloru sekwensu, deklarując drugi sekwens i zdobywając za niego punkty). Wolno w ten sposób "rozłamywać" i uzyskiwać na nowo układy równoważne lub cenniejsze, nie wolno uzyskiwać i zapisywać sobie punktów za układy słabsze (gracz, który zadeklarował i wyłożył sekwens, nie ma już prawa do deklaracji i zapisania sobie punktów za mariaż zawarty w tym sekwensie).
                    </p>
                    <p>
                        Dodatkowe ograniczenia zapisu punktowego:
                    </p>
                    <ul>
                        <li>
                            nie wolno wykładać jednocześnie na stół dwu sekwensów w tym samym kolorze;
                        </li>
                        <li>
                            nie wolno zapisywać sobie punktów za kwartet atutowy lub zwykły, dopóki jakaś karta w wysokości tego kwartetu w innym układzie znajduje się wyłożona na stole; np. gracz ma wyłożone trzy walety kierowe (atutowe) i wykłada podwójny bezik - nie może zapisać sobie punktów za kwartet waletowy, dopóki nie zgra do jakiejś lewy jednego z waletów ze stołu, ani też nie może dołożyć waleta kier (by zapisać sobie 400pkt za waletowy kwartet atutowy) , dopóki nie zgra obydwu waletów karowych ze stołu.
                        </li>
                    </ul>

                    <h2 className="content-subhead">Premie punktowe</h2>
                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr>
                                <td>za mariaż królewski (K i D atutową)</td>
                                <td>- 40</td>
                            </tr>
                            <tr>
                                <td>za mariaż zwykły (K i D nieatutową)</td>
                                <td>- 20</td>
                            </tr>
                            <tr>
                                <td>za sekwens atutowy (A,10,K,D,W atutowe)</td>
                                <td>- 250</td>
                            </tr>
                            <tr>
                                <td>za sekwens zwykły (A,10,K,D,W nie atutowe)</td>
                                <td>- 150</td>
                            </tr>
                            <tr>
                                <td>za kwartet asowy (cztery A)</td>
                                <td>- 100</td>
                            </tr>
                            <tr>
                                <td>za kwartet królewski (cztery K)</td>
                                <td>- 80</td>
                            </tr>
                            <tr>
                                <td>za kwartet damowy (cztery D)</td>
                                <td>- 60</td>
                            </tr>
                            <tr>
                                <td>za kwartet waletowy (cztery W)</td>
                                <td>- 40</td>
                            </tr>
                            <tr>
                                <td>za kwartet asowy atutowy (cztery A atutowe)</td>
                                <td>- 1000</td>
                            </tr>
                            <tr>
                                <td>za kwartet dziesiątkowy atutowy (cztery 10 atutowe)</td>
                                <td>- 900</td>
                            </tr>
                            <tr>
                                <td>za kwartet królewski atutowy (cztery K atutowe)</td>
                                <td>- 800</td>
                            </tr>
                            <tr>
                                <td>za kwartet damowy atutowy (cztery D atutowe)</td>
                                <td>- 600</td>
                            </tr>
                            <tr>
                                <td>za kwartet waletowy atutowy (cztery W atutowe)</td>
                                <td>- 400</td>
                            </tr>
                            <tr>
                                <td>za bezik (D <span className="spade"></span> i W <span className="diamond"></span> )</td>
                                <td>- 40</td>
                            </tr>
                            <tr>
                                <td>za bezik podwójny (dwie D <span className="spade"></span> i dwa W <span className="diamond"></span> )</td>
                                <td>- 500</td>
                            </tr>
                            <tr>
                                <td>za bezik potrójny (trzy D <span className="spade"></span> i trzy W <span className="diamond"></span> )</td>
                                <td>- 1500</td>
                            </tr>
                            <tr>
                                <td>za bezik poczwórny (cztery D <span className="spade"></span> i cztery W <span className="diamond"></span> )</td>
                                <td>- 4500</td>
                            </tr>
                            <tr>
                                <td>za ostatnią lewę w rozgrywce</td>
                                <td>- 250</td>
                            </tr>
                            <tr>
                                <td>za carte blanche</td><td>- 250</td>
                            </tr>
                            <tr>
                                <td>za wygraną grę</td><td>- 1000</td>
                            </tr>
                            <tr>
                                <td>rubikon wynosi</td><td>- 3000</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Gdy gracze wyczerpali stos (uzupełnili kary w ręku ostatnimi dwiema kartami ze stosu), zmieniają się zasady zgłaszania układów i rozgrywki w następujący sposób:
                    </p>
                    <ul>
                        <li>nie wolno już zgłaszać ani zapisywać sobie żadnych premiowanych układów;</li>
                        <li>należy dorzucać do koloru wyjścia;</li>
                        <li>należy przebijać starszą kartą w kolorze;</li>
                        <li>należy, w przypadku nieposiadania koloru, przebijać atutem.</li>
                    </ul>
                    <p>
                        Ten z graczy, który wygrywa ostatnią lewę, zdobywa 250 punktów premiowych (nie musi ich sobie zapisywać, jeśli tego nie chce).
                    </p>
                    <p>
                        Po zakończeniu rozgrywki następuje ostateczne rozliczenie według następujących zasad:
                    </p>
                    <ul>
                        <li>
                            jeśli gracz zdobył ponad 3000pkt w rozgrywce, przekroczył tzw. "rubikon" i jego punkty zostają odjęte od ilości punktów zdobytych przez gracza wygrywającego (np. jeden z graczy zdobył w rozgrywce 7960pkt, drugi - 3780pkt; wygrana wynosi 4180pkt + 1000pkt za wygraną, a więc 5180pkt; w skrócie i uproszczeniu liczy się w setkach - 52 duże punkty dla gracza pierwszego);
                        </li>
                        <li>
                            jeśli gracz nie uzyskał 3000pkt w rozgrywce (jest przed rubikonem, został "zrubikowany"), punkty uzyskane przez niego zostają dodane do punktów uzyskanych przez wygrywającego przeciwnika; np. gracz pierwszy uzyskał w rozgrywce 7960pkt, gracz drugi - 2780pkt - wówczas gracz pierwszy wygrywa 7960 + 2780 + 1000 (za wygraną, razem 11740pkt, czyli 117 dużych punktów.
                        </li>
                    </ul>
                    <p>
                        Jeśli obaj gracze nie uzyskali 3000pkt w rozgrywce (nie przekroczyli rubikonu), wynik oblicza się tak, jak gdyby obydwaj przekroczyli tę umowną granicę (odejmuje się uzyskane w rozgrywce ilości punktów).
                    </p>
                    <p>
                        Jeśli różnica punktów między graczami wynosi mniej niż 100pkt, zawsze liczy się 1 duży punkt (a więc minimalna wygrana gra to 11 dużych punktów).
                    </p>
                </div>
            </div>
        );
    }
}
