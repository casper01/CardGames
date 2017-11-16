import { basePath } from '../utils';
import React from 'react';


export default class Wojna extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Wojna',
            desc: 'gra dla 2 [3 lub 4] osób',
            url: basePath() + '/wojna',
            players: [2, 3, 4],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 [3 lub 4] graczy.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia 52 kart.<br />
                        Starszeństwo kart od asa do dwójki.<br />
                        Kolor nie ma znaczenia.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Rozdawane są wszystkie karty - każdemu z graczy po 26.<br />
                        Gracze nie zaglądają do swoich kart, lecz każdy trzyma je zakryte na swoim stosie.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Celem gry jest zdobycie wszystkich 52 kart.
                    </p>
                    <p>
                        Obaj gracze wykładają górną kartę ze swojego stosu na stół, odkrywając ją (kolejność wyjścia nie ma znaczenia - można się wcześniej umówić, że pierwszy wychodzi przeciwnik rozdającego, a później ten co wziął karty). Gracz, który z obu kart położył wyższą, zabiera je i kładzie zakryte na spód swojego stosu. I znów obaj wykładają karty, a zabiera je ten, który wyłożył największą, itd.
                    </p>
                    <p>
                        Jeśli obie wyłożone przez graczy karty będą tej samej wysokości - jest WOJNA.<br />
                        Wyłożone karty pozostają na stole, a gracze wykładają po jednej zakrytej karcie, a następnie po jeszcze jednej odkrytej (kładąc je na poprzednią swoją kartę). Wszystkie sześć kart zabiera ten z graczy, którego druga wyłożona odkryta karta była wyższa.<br />
                        Jeśli znowu obie karty były tej samej wysokości, sytuacja powtarza się: gracze wykładają po jednej zakrytej i jednej odkrytej karcie; i wykładają tak do momentu, aż ostatnie odkryte karty będą różnej wartości. Wszystkie karty wyłożone podczas wojny zabiera ten z graczy, którego ostatnia wyłożona odkryta karta była wyższa.
                    </p>
                    <p>
                        Gra kontynuowana jest do momentu, aż jeden z graczy zdobędzie wszystkie karty i, co za tym idzie, wygra grę.
                    </p>

                    <h2 className="content-subhead">Wojna dla trzech i czterech osób</h2>
                    <p>
                        Przy grze w trzy osoby rozdawanych jest 17 kart, a przy czterech - 13.
                    </p>
                    <p>
                        Wszyscy gracze kładą na stół po jednej odkrytej kacie z góry swojego zakrytego stosu, a zabiera wszystkie ten z graczy, który wyłożył kartę największej wartości.
                    </p>
                    <p>
                        W przypadku, gdy dwóch lub więcej graczy położy karty o takiej samej wysokości (bez względu na wysokość reszty kart) - jest wojna. Wszyscy gracze kładą drugą kartę zakrytą i trzecią odkrytą. Jeśli pomiędzy dwoma lub więcej ostatnio odkrytymi kartami znów będzie wojna, sytuacja się powtarza: wszyscy kładą jedną zakrytą i jedną odkrytą kartę na stół. Wszystkie karty biorące udział w wojnie zabiera ten z graczy, którego ostatnio położona karta odkryta miała najwyższą wartość.
                    </p>
                    <p>
                        Grę wygrywa ten, kto zdobędzie wszystkie karty.
                    </p>

                    <h2 className="content-subhead">Warianty</h2>
                    <p>
                        Przy grze w więcej niż dwie osoby można grać tak, że:
                    </p>
                    <ul>
                        <li>
                            jeśli jest wojna pomiędzy dwoma graczami, lecz trzeci ma wyższą kartę od tych biorących udział w wojnie - wojny nie ma, a karty zabiera gracz, który wyłożył tę o najwyższej wartości;
                        </li>
                        <li>
                            jeśli jest wojna pomiędzy dwoma graczami, a trzeci ma niższą kartę od tych biorących udział w wojnie - wojna toczy się tylko pomiędzy tymi dwoma graczami, i tylko któryś z nich może wziąć wszystkie karty;
                        </li>
                        <li>
                            jeśli wojna jest pomiędzy większą (niż 2) ilością graczy, wszyscy biorący w niej udział wykładają najpierw jedną zakrytą, a potem jedną odkrytą kartę; jeśli w dalszym ciągu któreś karty są równej wartości, dalsza wojna toczy się tylko pomiędzy tymi graczami, do których one należą;
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
