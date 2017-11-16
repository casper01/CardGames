import { basePath } from '../utils';
import React from 'react';


export default class Huragan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Huragan',
            desc: 'gra dla 2 [4] osób',
            url: basePath() + '/huragan',
            players: [2, 4],
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
                        Współczesna gra karciana, wywodząca się z dawnej gry rosyjskiej. Gra jest szczególnie popularna na obszarze języka angielskiego i nazywana tam "hurricane" lub "tablanette".
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla dwóch osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart, z której usunięto ósemki, dziewiątki, dziesiątki (a więc 40 kart).<br />
                        Wartość punktowa kart od asa do siódemki -według ilości oczek, walet 8, dama - 9, król - 10pkt.<br />
                        Kolor uprzywilejowany (lecz nie atutowy): kiery.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Gracze rozdają karty w kolejnych rozgrywkach na zmianę. Każdy z grających otrzymuje po 6 kart. cztery karty odkryte wykłada się na stół, reszta kart pozostaje zakryta w talonie.
                    </p>
                    <p>
                        Gdy karty z ręki zostaną zgrane, obydwaj gracze otrzymują po sześć kart z talonu po raz drugi, a po ich zgraniu po raz trzeci.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Grę rozpoczyna przeciwnik rozdającego.<br />
                        Może on kartą z ręki wygrać (zdobyć) jedną lub więcej kart ze stołu. Jedną kartę ze stołu zdobywa się, wykładając z ręki kartę tej samej wysokości. Więcej niż jedną kartę ze stołu zdobywa się, wykładając z ręki kartę o wysokości sumy oczek kart zdobywanych (wykładając króla - 10pkt - zdobywamy piątkę, trójkę i dwójkę - także 10pkt).
                    </p>
                    <p>
                        Jeśli na stole leży jakaś karta o stosunkowo wysokiej wartości, nie wolno większej ilości innych kart ze stołu o niższej wartości zdobywać drugą kartą o tej samej wartości.
                    </p>
                    <p>
                        Jeśli w swojej kolejce gracz nie może lub nie chce zdobyć ani jednej karty ze stołu, jedną ze swoich kart z ręki ma obowiązek wyłożyć na stół - musi to jednak być taka karta, za pomocą której nie można w danym momencie gry zdobyć żadnej karty ze stołu.
                    </p>
                    <p>
                        Gracz, który swoją kartą z ręki zdobywa wszystkie karty leżące na stole, wykonał tzw. huragan. Za huragan otrzymuje się jeden punkt w późniejszym obliczeniu - i kartę na stół wykłada przeciwnik tego, który wykonał huragan.
                    </p>
                    <p>
                        Kto wykłada z ręki ostatnią kartę w grze, zdobywa nią wszystkie karty leżące na stole, lecz bez premiowego punktu za huragan.
                    </p>
                    <p>
                        Po zakończeniu rozgrywki oblicza się punkty za zdobyte karty w następujący sposób:
                    </p>
                    <ul>
                        <li>za większość zdobytych kart - 1pkt;</li>
                        <li>za większość zdobytych kart kierowych - 1pkt;</li>
                        <li>za zdobytą siódemkę kierową - 1pkt;</li>
                        <li>za najwyższą tzw. premierę - 1pkt;</li>
                    </ul>
                    <p>
                        Premia jest to zestaw trzech lub czterech kart tej samej wysokości, znajdujących się w kartach zdobytych. Wysokość premiery oblicza się mnożąc ilość kart w zestawie (trzy lub cztery) przez specjalną wartość premierową każdej karty. Są to wartości następujące:<br />
                        siódemka - 21, szóstka - 18, as - 16, piątka - 15, czwórka - 14, trójka - 13, dwójka - 12, król - 10, dama - 9, walet - 8 punktów.<br />
                        Trzy piątki mają więc wartość premierową 45 i są starsze od wartości premierowych czterech dam (36); jeden punkt zapisuje sobie w tym przypadku zdobywca trzech piątek.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach do chwili, gdy jeden z graczy osiągnie w zapisie umówioną z góry liczbę punktów (zazwyczaj 16).
                    </p>

                    <h2 className="content-subhead">Huragan dla czterech osób</h2>
                    <p>
                        Dwie osoby siedzące na przeciw siebie grają przeciwko pozostałym dwom. Każdy z grających otrzymuje po dziewięć kart, pozostałe cztery karty wykłada się odkryte na stole.
                    </p>
                    <p>
                        Wszystkie inne zasady rozgrywki i zapisu - bez zmian.
                    </p>
                </div>
            </div>
        );
    }
}
