import { basePath } from '../utils';
import React from 'react';


export default class IdzNaRyby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Idź na ryby!',
            desc: 'gra dla 3 - 6 [2] osób',
            url: basePath() + '/idznaryby',
            players: [2, 3, 4, 5, 6],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <p>
                        Celem gry jest zbieranie kompletów składających się z czterech kart o tych samych figurach.
                    </p>
                    <p>
                        Najlepiej grać w 3 - 6 osób, ale jest możliwość gry we dwójkę.<br />
                        Używana jest talia 52 kart.<br />
                        Rozdający rozdaje po 5 kart graczom (7 przy grze we 2 osoby). Resztę kart odwracamy figurami na dół i odkładamy na stosie. Gracz na lewo od rozdającego jest rozgrywającym pierwszą kolejkę.
                    </p>
                    <p>
                        Kolejka rozpoczyna się pytaniem któregoś z graczy o daną figurę. Np. jeśli jest to moja kolejka mogę powiedzieć: "Stefan, daj mi twojego Waleta". Pytający musi posiadać co najmniej jedną kartę z figurą o którą pyta. Pytany gracz musi oddać wszystkie karty jakie posiada z daną figurą (tzn., że Stefan musiałby oddać wszystkie Walety jakie miałby na ręku) graczowi, który o nią pytał. Rozgrywający bierze wówczas karty i w następnej kolejce nadal jest rozgrywającym, pytając któregoś z graczy o figurę.
                    </p>
                    <p>
                        Jeżeli osoba pytana nie ma danej figury, to mówi: "Idź na ryby!". Rozgrywający ciągnie wtedy kartę ("łowi rybę") z góry stosu i jeśli wyciągnięta karta jest figurą o która pytał pokazuje ją wszystkim i w dalszym ciągu zostaje rozgrywającym. Jeśli wyciągnięta karta nie jest figurą o którą pytał, zatrzymuje ją a kolejka przechodzi na gracza, który powiedział: "Idź na ryby!".
                    </p>
                    <p>
                        Gdy gracz uzbiera komplet czterech figur, powinien je pokazać innym i odłożyć zakryte na bok.
                    </p>
                    <p>
                        Gra jest kontynuowana do momentu, aż któryś z graczy pozostanie bez kart na ręku lub skończy się stos.<br />
                        Zwycięzcą jest gracz, który uzbierał najwięcej kompletów z czterech figur.
                    </p>

                    <h2 className="content-subhead">Odmiany Idź na ryby</h2>
                    <p>
                        Można grać tak, iż zamiast pytania o figurę zadaje się pytania o konkretną kartę. Pytający musi już posiadać co najmniej jedną kartę z figurą o którą pyta. Pozostałe zasady są identyczne.
                    </p>
                    <p>
                        Jeśli grasz w tą odmianę, musisz uzgodnić z pozostałymi graczami, czy dopuszczalne jest pytanie o kartę, którą się już ma na ręku. Oczywiście "masz rybę" i twoja kolejka pewnie się kończy, ale robisz to, żeby zmylić innych graczy aby myśleli, że nie masz tej karty.
                    </p>
                    <p>
                        Można grać tak, że gdy stos się skończył, trzyma się grę aż wszystkie karty, które mają zostaną ułożone w komplet. Oczywiści, gdy stos się skończy nie ma już "Idź na ryby!". Gdy osoba pytana nie ma danej karty, kolejka się kończy od razu.
                    </p>
                    <p>
                        Są również odmiany punktacji. Np. możesz zagrać serią z ręki, zdobywając jeden punkt za każdy komplet. Gra jest kontynuowana do momentu aż koś zwycięży przez osiągnięcie uzgodnionej liczby punktów, np. 10pkt.
                    </p>
                </div>
            </div>
        );
    }
}
