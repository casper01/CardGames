import { basePath } from '../utils';
import React from 'react';


export default class Wyscig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Wyścig',
            url: basePath() + '/wyscig',
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
                        Pełna talia kart (52 karty). Przy większej liczbie graczy można użyć dwóch talii.<br />
                        Starszeństwo kart od Asa do Króla.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszy rozdający wybierany jest losowo. Po przetasowaniu rozdaje wszystkie karty między graczy (może się zdarzyć, że niektórzy gracze będą mieli o jedną kartę więcej).
                    </p>
                    <p>
                        Jako pierwszy wychodzi gracz, który ma A <span className="spade"></span>, wykładając go na stół. As ten jest pierwszą kartą bazową, na którą wykładane będą kolejne karty w tym samym kolorze według ich starszeństwa.<br />
                        Reszta kart bazowych będzie wyłożona w trakcie gry.<br />
                        Po wyłożeniu A <span className="spade"></span> kolejka przechodzi na następnych graczy według ruchu wskazówek zegara. Gracze mają teraz do wyboru:
                    </p>
                    <ul>
                        <li>
                            wyłożyć kolejną kartę bazową (następnego Asa) jeśli taką posiadają;
                        </li>
                        <li>
                            dołożyć na jedną z wierzchnich kart kartę tego samego koloru o jedno oczko wyższą;
                        </li>
                        <li>
                            powiedzieć PASS i przekazać tym samym kolejkę na następnego gracza.
                        </li>
                    </ul>

                    <p>
                        Karty układane są na sobie w ten sposób, aby te na spodzie były lekko odkryte.
                    </p>

                    <h2 className="content-subhead">Zakończenie</h2>
                    <p>
                        Grę można zakończyć na dwa warianty (ustalając wcześniej jeden z nich):
                    </p>
                    <ul>
                        <li>
                            Wygrywa ten z graczy, który pierwszy pozbędzie się kart;
                        </li>
                        <li>
                            Przegrywa ten z graczy, który pozostanie choćby z jedną kartą (nawet jeśli może ją gdzieś jeszcze dołożyć), gdy wszyscy inni gracze się ich pozbędą.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
