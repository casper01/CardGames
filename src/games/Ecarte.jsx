import { basePath } from '../utils';
import React from 'react';


export default class Ecarte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ecarte',
            desc: 'gra dla 2 osób',
            url: basePath() + '/ecarte',
            players: [2],
            cards: 'Pikietowa talia kart (32 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra wywodząca się z siedemnastowiecznej Francji, znana pod różnymi nazwami lub w nieco innych formach w wielu krajach Europy jako Napoleon, mistigri, pamfilius, euchre, lanterlu i inne.<br />
                        W Polsce różne formy tej gry znane były już w XVIII wieku i później pod nazwami panfil, pantofel, bałamut, śpiący kot i inne.
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pikietowa talia kart (32 karty).<br />
                        Starszeństwo kart jest specyficzne: król, dama, walet, as, dziesiątka, dziewiątka, ósemka, siódemka.<br />
                        Istnieje zmienny kolor atutowy.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wybiera się przez losowanie. Rozdający daje przeciwnikowi i sobie po pięć kart (tradycyjnie najpierw trzy, potem dwie), jedenastą kartę wyświęca, umieszczając ją odkrytą pod zakrytym stosem (resztą kart). Karta wyświęcona wyznacza kolor atutowy w danym rozdaniu. Jeśli jest to król, rozdający zdobywa punkt.
                    </p>
                    <p>
                        Celem rozgrywki jest wzięcie co najmniej trzech spośród pięciu lew. Wychodzi pierwszy, do pierwszej lewy, zawsze przeciwnik rozdającego; do dalszych lew wychodzi ten z graczy, który wziął lewę poprzednią.
                    </p>
                    <p>
                        Istnieje obowiązek dorzucania do koloru i przebijania starszą kartą w kolorze. W wypadku nieposiadania koloru wyjścia istnieje obowiązek przebijania atutem.
                    </p>
                    <p>
                        Jeśli któryś z graczy posiada króla atutowego, może przed rozpoczęciem rozgrywki ujawnić ten fakt, zdobywa wówczas punkt. Nie ma obowiązku zgłaszania króla, lecz za króla nie zgłoszonego przed rozpoczęciem rozgrywki nie zdobywa się potem punktu.
                    </p>
                    <p>
                        Jeśli przeciwnik rozdającego wygra trzy lub cztery lewy, zdobywa punkt. Jeśli ich nie wygra (trzy lub więcej lew zdobył rozdający), rozdający zdobywa dwa punkty.<br />
                        Jeśli rozdający zadysponował grę bez wymiany kart i zdobył co najmniej trzy lewy, wygrywa punkt. Jeśli ich nie zdobył - przeciwnik rozdającego wygrywa dwa punkty.<br />
                        Jeśli choćby raz wymieniono karty, ten z graczy, który wygrywa trzy lub cztery lewy, zdobywa punkt.<br />
                        Jeśli którykolwiek z graczy zdobędzie wszystkie pięć lew, zdobywa w ten sposób zawsze dwa punkty.
                    </p>
                    <p>
                        W jednym rozdaniu można maksymalnie zdobyć trzy punkty (dwa za grę i jeden za króla atutowego).
                    </p>
                    <p>
                        Przed rozpoczęciem rozgrywki przeciwnik rozdającego ma obowiązek złożyć deklarację: "gram" lub "proponuję".
                    </p>
                    <p>
                        Jeśli złoży deklarację "gram", wychodzi do pierwszej lewy i toczy się rozgrywka. Jeśli przeciwnik rozdającego złoży deklarację "proponuję", oznacza to propozycję wymiany kart. Na tę propozycję rozdający może zgodzić się (odpowiadając: "proszę") lub nie zgodzić się (odpowiadając: "proszę grać").
                    </p>
                    <p>
                        Jeśli rozdający nie wyraża zgody na proponowaną wymianę kart, przeciwnik rozdającego wychodzi do pierwszej lewy i toczy się rozgrywka.<br />
                        Jeśli rozdający wyraża zgodę na proponowaną wymianę kart, jego przeciwnik zrzuca zakryte z ręki na stół karty, które pragnie wymienić (wolno wymienić wszystkie karty), dobierając zakryte karty ze stosu; następnie co najmniej jedną kartę ma obowiązek wymienić również rozdający.
                    </p>
                    <p>
                        Po dokonaniu wymiany kart przeciwnik rozdającego znów składa deklarację "gram" lub "proponuję". W wypadku zgody rozdającego wymiana może nastąpić po raz drugi, trzeci i dalsze. Wymiana kart toczy się aż do chwili, gdy przeciwnik rozdającego zadeklaruje "gram" lub też gdy rozdający zadeklaruje "proszę grać". Jeśli w toku kolejnych wymian zabrakło kart na stosie, karty zrzucone uprzednio tasuje się i tworzy z nich nowy stos.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach do chwili, gdy jeden z graczy zdobędzie pięć punktów. Oznacza to wygraną pełną partię.
                    </p>
                </div>
            </div>
        );
    }
}
