import { basePath } from '../utils';
import Kierki from './Kierki.jsx';
import React from 'react';


export default class Fantan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Fantan',
            name2: 'Loteryjka',
            desc: 'gra dla 4 [3] osób',
            url: basePath() + '/fantan',
            players: [3, 4],
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
                        Tradycyjna gra, nazywana także dominem karcianym, loteryjką i grą w parlament; znana i uprawiana w całej Europie.<br />
                        Fantan był częścią obowiązującej rozgrywki przy grze w <a className="pure-menu-link underline" href={new Kierki().state.url}>kierki</a>
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 4 [3] osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty).<br />
                        Starszeństwo od asa do dwójki.<br />
                        Nie ma koloru atutowego.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. W kolejnych rozgrywkach gracze rozdają karty kolejno. Grę rozpoczyna zawsze gracz na lewo od rozdającego.<br />
                        Każdy z graczy otrzymuje po 13 kart.
                    </p>
                    <p>
                        Rozpoczynający grę ma obowiązek wyłożyć na stół którąś z posiadanych ósemek. Jeśli nie ma ósemki, obowiązek rozpoczęcia gry przechodzi na następnego gracza. Po wyłożeniu pierwszej ósemki gracze kolejno, w kierunku ruchu wskazówek zegara, wykładają po jednej karcie z ręki na stół. Wolno do leżącej na stole ósemki dołożyć siódemkę lub dziewiątkę w tym samym kolorze, a do nich z kolei dziesiątkę lub szóstkę, rozbudowując w ten sposób kolor w obydwie strony.<br />
                        Wolno w każdej chwili, w momencie swojej kolejki gry, wyłożyć posiadaną na ręku inną ósemkę i w dalszej grze dokładać karty do tej ósemki.
                    </p>
                    <p>
                        Gracz, na którego przychodzi kolej gry, sam decyduje, które z istniejących dla niego możliwości wyłożenia kolejnej karty starszej lub młodszej o jedno oczko od karty leżącej na stole wykorzysta. Nie wolno tylko nie dołożyć karty do układu na stole, jeśli dającą się dołożyć kartę ma się na ręku i przychodzi kolejka gry.
                    </p>
                    <p>
                        Jeśli gracz nie może dołożyć żadnej z kart na stół, traci kolejkę, która przechodzi na następnego gracza.
                    </p>
                    <p>
                        Wygrywa ten z graczy, który pierwszy pozbędzie się wszystkich kart z ręki.
                    </p>

                    <h2 className="content-subhead">Warianty</h2>
                    <p>
                        Można grać w fantana umawiając się uprzednio, iż gry nie rozpoczyna się od ósemki, lecz od karty dowolnej - takiej, jaką wyłoży rozpoczynający grę. Wówczas jednak wszystkie kolory należy rozpoczynać od wyłożenia karty tej samej wysokości.
                    </p>
                    <p>
                        Można grać w fantana umawiając się, iż gracz, który w swojej kolejce gry wykłada na stół asa, ma prawo natychmiast (w tej samej kolejce gry) wyłożyć jeszcze jedną kartę (chociaż nie ma obowiązku).
                    </p>
                    <p>
                        Można grać tak, iż przywilej dołożenia natychmiast jeszcze jednej karty do układu przysługuje nie tylko graczowi, który wyłożył asa, lecz także temu, który wyłożył dwójkę (a więc premiowane jest wyłożenie najstarszej i najmłodszej karty w każdym z kolorów).
                    </p>
                    <p>
                        Fantan bywa również częścią obowiązującej rozgrywki przy grze w <a className="pure-menu-link underline" href={new Kierki().state.url}>kierki</a>. Wówczas tradycyjnie gra się nie do pierwszego wygrywającego, lecz do chwili, gdy pozbędą się kart dwaj gracze (pierwszy z nich otrzymuje tzw. pierwszą nagrodę, drugi - drugą).
                    </p>
                </div>
            </div>
        );
    }
}
