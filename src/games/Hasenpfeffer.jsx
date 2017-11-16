import { basePath } from '../utils';
import React from 'react';


export default class Hasenpfeffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hasenpfeffer',
            desc: 'gra dla 4 osób',
            url: basePath() + '/hasenpfeffer',
            players: [4],
            cards: 'Mała talia kart (24 karty) + dżoker'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra pochodzenia niemieckiego, rozpowszechniona w całej Europie.
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 4 osób. Dwaj gracze grają przeciwko dwom. Pary tworzone są z graczy siedzących na przeciw siebie.
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Mała talia kart (24 karty) oraz dżoker - razem 25 kart.<br />
                        Starszeństwo kart od asa do dziewiątki - we wszystkich kolorach nieatutowych<br />
                        W zmiennym kolorze atutowym starszeństwo jest inne: dżoker, walet, as, król, dama, dziesiątka, dziewiątka.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie.<br />
                        Każdy z graczy otrzymuje po sześć kart, dwudziesta piąta karta pozostaje zakryta na stole.
                    </p>

                    <h2 className="content-subhead">Licytacja</h2>
                    <p>
                        Pierwszym etapem gry jest licytacja, którą rozpoczyna pierwszy gracz siedzący na lewo od rozdającego. Podczas licytacji deklaruje się ilość lew, jaką dany gracz zobowiązuje się wziąć razem ze swoim partnerem w rozgrywce. Licytację można rozpocząć już od zadeklarowania jednej lewy. Gracze licytują kolejno, dopóki trzech z nich nie spasuje, czwarty zaś - tym samym - nie wygra licytacji najwyższą zapowiedzią.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Po zakończeniu licytacji gracz, który ją wygrał, ujawnia wybrany przez siebie kolor atutowy w danej rozgrywce. On także wychodzi do pierwszej lewy.<br />
                        Po pierwszym wyjściu odsłania się do wiadomości wszystkich graczy dwudziestą piątą kartę, dotąd zakrytą, która nie bierze udziału w rozgrywce.
                    </p>
                    <p>
                        Obowiązuje dorzucanie do koloru. Nie ma obowiązku przebijania przy braku kart w kolorze wyjścia.<br />
                        Nie ma obowiązku bicia starszą kartą.
                    </p>
                    <p>
                        Gra toczy się do chwili, gdy jedna ze stron osiągnie w zapisie umówioną z góry ilość punktów plusowych (zazwyczaj 10 lub 20).
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Za wzięcie w rozgrywce zadeklarowanej lub większej ilości lew partnerzy otrzymują tyle punktów, ile lew wzięli.<br />
                        Za wzięcie mniejszej ilości lew od zadeklarowanej partnerzy otrzymują tyle punktów minusowych, ile lew zabrakło im do wypełnienia kontraktu.
                    </p>
                </div>
            </div>
        );
    }
}

