import { basePath } from '../utils';
import React from 'react';


export default class Kuku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kuku',
            desc: 'gra dla 3 lub więcej osób',
            url: basePath() + '/kuku',
            players: [3, 4, 5, 6, 7, 8],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 3 lub więcej osób.<br />
                        Przy grze od 3 do 7 osób używa się 24 kart, przy większej liczbie graczy można grać talią 52 kart.<br />
                        Kolory i starszeństwo figur nie mają znaczenia.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Każdy z graczy otrzymuje po 3 karty, a rozdający 4. Reszta kart odkładana jest na stosie zakrytym. Rozdający rozpoczyna grę. Oddaje jedną ze swoich kart następnemu graczowi po swojej lewej stronie. Tamten ją bierze, a następnie oddaje jedną ze swoich kart graczowi następnemu (może oddać tę kartę co sam dostał) i tak kolejka posuwa się zgodnie z ruchem wskazówek zegara.
                    </p>
                    <p>
                        W momencie, kiedy gracz oddaje czwartą kartę z ręki następnemu graczowi, a na ręku pozostają mu trzy karty tej samej wartości, może (chociaż nie musi - może grać dalej) powiedzieć: "Kuku!", i pokazując wszystkim karty skończyć swój udział w rozdaniu.
                    </p>
                    <p>
                        W sytuacji, gdy jakaś karta okrąży kolejkę, gracz który otrzymał ją ponownie może ją wymienić, odkładając ją obok stosu i pobierając jego wierzchnią kartę. Jeśli karty na stosie się skończą, jego miejsce zastępuje drugi stos, na który odkładane były wymieniane karty. Stos ten nie jest tasowany, i kolejność kart jest nie naruszana (ostatnia karta na nim położona będzie pierwszą kartą z niego pobraną).
                    </p>
                    <p>
                        Gra jest kontynuowana do momentu, aż z kartami "bez kuku" zostanie tylko jeden gracz i to on przegrywa rozdanie. Jeśli na koniec wystąpi taka sytuacja, że pozostało dwóch ostatnich graczy i jeden z nich oddając kartę ma kuku, to drugi, biorąc ją, może również powiedzieć kuku i odłożyć czwartą kartę na stół.<br />
                        Gra jest wtedy nierozstrzygnięta.
                    </p>
                </div>
            </div>
        );
    }
}
