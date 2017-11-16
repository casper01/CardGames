import { basePath } from '../utils';
import React from 'react';


export default class TrzyTrzynascie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Trzy Trzynaście',
            name2: '3-13',
            desc: 'gra dla 2 lub więcej osób',
            url: basePath() + '/trzytrzynascie',
            players: [2, 3, 4],
            cards: 'Standardowa talia kart (52 karty)'
        }
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">Jeden z wielu wariantów remika.</div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla dwóch lub więcej osób</p>

                    <h2 className="content-subhead"></h2>
                    <p></p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>Dla dwóch graczy jedna talia (52 karty), dwie talie dla trzech lub czterech graczy.</p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>Gra ma 11 rund. Pierwszy rozdający jest wybierany losowo. Każdy następny rozdający jest z lewej strony poprzedniego. W pierwszej rundzie każdemu z graczy rozdawane są trzy karty, w rundzie drugiej każdemu są rozdawane cztery karty i z każdą następną rundą rozdawane są o jedną kartę więcej, tak że w ostatniej (jedenastej) rundzie każdy z graczy otrzymuje 13 kart. Resztę kart odkładamy figurami na dół na stosie (zakryty stos). Górną kartę z tego stosu odkrywamy i kładziemy obok. Jest to karta rozpoczynająca grę i tworząca drugi stos (odkryty stos).</p>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>
                        Celem gry jest utworzenie ze wszystkich kart na ręce kompletów . Są dwa typy kompletów:
                    </p>
                    <ol>
                        <li>
                            Grupa trzech lub więcej kart tych samych figur, np. 5 <span className="diamond"></span> - 5 <span className="spade"></span> - 5 <span className="club"></span></li>
                        <li>Sekwencja trzech lub więcej kart tego samego koloru, np. 4 <span className="heart"></span> - 5 <span className="heart"></span> - 6 <span className="heart"></span></li>
                    </ol>
                    <p>
                        Komplet może zawierać więcej niż trzy karty - dla przykładu cztery siódemki lub 8-9-10-J-Q jednego koloru, ale nie można używać tych samych kart dla więcej niż jednego kompletu.
                    </p>

                    <h2 className="content-subhead"></h2>
                    <p></p>

                    <h2 className="content-subhead">"Dzikie karty"</h2>
                    <p>
                        W każdej rundzie jest "dzika karta". Jest to karta o wartości równej liczbie rozdanych kart. "Dzika karta" może być używana w miejsce innej karty przy tworzeniu grupy lub sekwencji. Możesz także tworzyć komplet składający się tylko z "dzikich kart". Poniżej znajduje się lista "dzikich kart" każdej rundy:
                    </p>

                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr>
                                <td>Runda 1:</td>
                                <td>Trójki</td>
                            </tr>
                            <tr>
                                <td>Runda 2:</td>
                                <td>Czwórki</td>
                            </tr>
                            <tr>
                                <td>Runda 3:</td>
                                <td>Piątki</td>
                            </tr>
                            <tr>
                                <td>Runda 4:</td>
                                <td>Szóstki</td>
                            </tr>
                            <tr>
                                <td>Runda 5:</td>
                                <td>Siódemki</td>
                            </tr>
                            <tr>
                                <td>Runda 6:</td>
                                <td>Ósemki</td>
                            </tr>
                            <tr>
                                <td>Runda 7:</td>
                                <td>Dziewiątki</td>
                            </tr>
                            <tr>
                                <td>Runda 8:</td>
                                <td>Dziesiątki</td>
                            </tr>
                            <tr>
                                <td>Runda 9:</td>
                                <td>Walety</td>
                            </tr>
                            <tr>
                                <td>Runda 10:</td>
                                <td>Damy</td>
                            </tr>
                            <tr>
                                <td>Runda 11:</td>
                                <td>Króle</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="content-subhead">Gra</h2>
                    <p>Rozpoczyna gracz na lewo od rozdającego, a kolejka idzie zgodnie z ruchem wskazówek zegara. Kolejka składa się z wyciągnięcia jednej karty - albo pierwszej z góry ze stosu zakrytego, albo ze stosu odkrytego ostatnio wyrzuconej karty przez gracza poprzedniego - i wyrzucenia jednej karty na stos odkryty. Zauważ, że tylko ostatnio wyrzucona karta może być brana z tego stosu, tzn. jeśli jakiś gracz wyrzuci kartę, a następny weźmie kartę ze stosu zakrytego, karta ta już nie może być przez nikogo zabrana.</p>

                    <h2 className="content-subhead">Sytuacja końcowa</h2>
                    <p>Żeby zakończyć musisz ułożyć wszystkie karty z ręki do oddzielnych kompletów. W tym przypadku ogłoś zakończenie, lecz reszcie graczy wolno jeszcze będzie wykonać ostatnią kolejkę. Kiedy kolejka wróci do ciebie runda jest zakończona i można podliczyć punkty.</p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>Na koniec rundy reszta graczy dokłada wszystkie możliwe karty do kompletów. Karty, które zostaną danemu graczowi na ręce są liczone jako punkty karne wg poniższej zasady:</p>
                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr>
                                <td>As</td>
                                <td>1pkt</td>
                            </tr>
                            <tr>
                                <td>Dwójka</td>
                                <td>2pkt</td>
                            </tr>
                            <tr>
                                <td>Trójka</td>
                                <td>3pkt</td>
                            </tr>
                            <tr>
                                <td>Czwórka</td>
                                <td>4pkt</td>
                            </tr>
                            <tr>
                                <td>Piątka</td>
                                <td>5pkt</td>
                            </tr>
                            <tr>
                                <td>Szóstka</td>
                                <td>6pkt</td>
                            </tr>
                            <tr>
                                <td>Siódemka</td>
                                <td>7pkt</td>
                            </tr>
                            <tr>
                                <td>Ósemka</td>
                                <td>8pkt</td>
                            </tr>
                            <tr>
                                <td>Dziewiątka</td>
                                <td>9pkt</td>
                            </tr>
                            <tr>
                                <td>Dziesiątka</td>
                                <td>10pkt</td>
                            </tr>
                            <tr>
                                <td>Walet</td>
                                <td>10pkt</td>
                            </tr>
                            <tr>
                                <td>Dama</td>
                                <td>10pkt</td>
                            </tr>
                            <tr>
                                <td>Król</td>
                                <td>10pkt</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Punkty są sumowane ze wszystkich rund. Wygrywa ten, kto w ostatniej rundzie będzie miał najmniejszą liczbę punktów.</p>
                </div>
            </div >
        );
    }
}
