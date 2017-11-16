import { basePath } from '../utils';
import React from 'react';


export default class Planowanie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Planowanie',
            url: basePath() + '/planowanie',
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

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia 52 kart.<br />
                        Starszeństwo kart od asa do dwójki.<br />
                        Istnieje zmienny kolor atutowy.<br />
                        Istnieje obowiązek dorzucanie do koloru.<br />
                        Nie ma obowiązku przebijania starszą kartą ani przebijania atutem w przypadku nieposiadania koloru wyjścia.

                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wybiera się przez losowanie. Następnie w kolejnych rozgrywkach gracze rozdają karty kolejno. Grę rozpoczyna zawsze gracz po lewej stronie rozdającego.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Gra składa się z dwóch etapów: zapowiedzi i rozgrywki.
                    </p>
                    <p>
                        W zapowiedzi gracze deklarują kolejno ilość lew, którą zobowiązują się wziąć w danym rozdaniu. Zobowiązanie nie wzięcia żadnej lewy (zero) jest również zapowiedzią.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozgrywkach. W pierwszej rozgrywce każdy z graczy otrzymuje tylko jedną kartę, kolejna karta zostaje odkryta ("wyświęcona") i wyznacza kolor atutowy w danej rozgrywce. W pierwszej rozgrywce mogą więc istnieć tylko dwie zapowiedzi: zero lew lub jedna lewa.
                    </p>
                    <p>
                        W drugiej rozgrywce każdy z graczy otrzymuje po dwie karty i kolejna karta z talonu jest odkrywana na stół i wyznacza kolor atutowy.
                    </p>
                    <p>
                        W trzeciej rozgrywce po trzy karty, itd. w każdej następnej rozgrywce gracze otrzymują po jednej karcie więcej. Cykl rozgrywek dobiega końca, gdy nie wystarcza już kart dla podziału pomiędzy graczy. Pozostałe w talonie karty nigdy nie biorą udziału w rozgrywce.
                    </p>
                    <p>
                        Ostatnia rozgrywka cyklu rozgrywana jest zawsze jako bezatutowa (nie odkrywa się karty z talonu).
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Po zakończeniu każdej rozgrywki oblicza się punkty zdobyte przez graczy.
                    </p>
                    <p>
                        Gracz, który nie wykonał swojej zapowiedzi (wziął mniej lub więcej lew, niż deklarował), nie otrzymuje punktów.<br />
                        Gracz, który wykonał zapowiedź, otrzymuje ilość punktów równą ilości zadeklarowanych lew oraz 10 punktów premii. Np. zadeklarowane i wzięte 7 lew - 17 punktów, zadeklarowane i wzięte 0 lew - 10 punktów.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozgrywkach do zakończenia całego cyklu (ilość rozgrywek oczywiście zależy od ilości uczestników gry).
                    </p>
                    <p>
                        Całą grę wygrywa ten z graczy, który zdobył najwięcej punktów w zapisie.
                    </p>

                    <h2 className="content-subhead">Wariant gry</h2>
                    <div className="note">
                        <p>
                            Autorem poniższego opisu jest Bogusław Wiącek z Mielca, który z kumplami ze studiów w Krakowie grywał w Planowanie systemem (przy 4 graczach):
                        </p>
                        <ul>
                            <li>wszystkie możliwe ustawienia osób przy stoliku (6 możliwości);</li>
                            <li>w każdym ustawieniu każdy zaczynał (4 rozpoczęcia) - po to, aby w ostatnim rozdaniu bezatutowym, każdy mógł rozpocząć;</li>
                            <li>4 rozdania z jedną kartą.</li>
                        </ul>

                        <p>
                            Razem 24 mecze po 16 rozdań. Jak sam to określił, były to "nieoficjalne mistrzostwa świata" :)))
                        </p>
                    </div>
                    <ul>
                        <li>
                            Suma zapowiedzianych lew nie może się równać liczbie rozdanych kart dla jednego gracza. Pozwala to wyeliminować sytuację, gdy wszyscy gracze zrealizują swoją zapowiedź, co znacznie podnosi emocje podczas gry (zawsze będzie przynajmniej jeden "przegrany"). Np., jeżeli trzem graczom rozdano po 5 kart i zgłoszono już 2+2 lewy, to ostatni gracz nie może zgłosić 1 lewy (może zgłosić jedynie 0, 2, 3, 4 lub 5 lew);
                        </li>
                        <li>
                            rozdanie z jedną kartą można grać tyle razy ilu jest graczy. W ten sposób, każdy będzie w tej niekorzystnej ostatniej pozycji, gdy nie będzie miał wyboru w zapowiedzi; dwaj pierwsi gracze nie są niczym ograniczeni (obaj mogą zadeklarować 0 lub 1), ostatni zaś musi zadeklarować 0, gdy dwóch pierwszych zadeklaruje 0+0; musi zadeklarować 1, gdy dwaj pozostali zadeklarowali 0+1 (1+0); ma natomiast możliwość wyboru tylko w przypadku deklaracji 1+1;
                        </li>
                        <li>
                            za zrealizowanie zapowiedzi gracz otrzymuje 1pkt duży i tyle punktów małych ile zrealizowanych lew. Grę wygrywa ten z graczy, który ma najwięcej punktów dużych. Przy ich równej liczbie decyduje liczba punktów małych. Przy takiej punktacji gracz, który dwa razy zadeklarował i zrealizował 0 lew otrzymuje 2pkt duże i 0pkt małych, i tym samym wygrywa z graczem, który raz zadeklarował i zrealizował 11 lew (w punktacji tradycyjnej sytuacja jest odwrotna: wygrywa ten drugi gracz zdobywając 21pkt, ponieważ pierwszy otrzyma ich tylko 20);
                        </li>
                        <li>
                            W przypadku gry z trzema osobami ostatnia rozgrywka (bezatutowa) odbywa się przy usuniętej z gry 2 <span className="club"></span>.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
