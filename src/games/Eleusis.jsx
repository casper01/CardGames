import { basePath } from '../utils';
import React from 'react';
import delfyImg from '../images/delfy.png';


export default class Eleusis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Eleusis',
            desc: 'gra dla 2 lub więcej osób',
            url: basePath() + '/eleusis',
            players: [2, 3, 4, 5, 6, 7, 8],
            cards: 'Standardowa talia kart (52 karty) lub dwie talie'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info"> Gra logiczna opracowana w 1959r. przez Roberta Abbotta z Nowego Jorku.</div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Ilość kart zależna od liczby uczestników:
                    </p>
                    <ul>
                        <li>dla 4 uczestników pełna talia, 52 karty; z nich jedna dla rozdającego i po 17 dla każdego z trzech grających</li>
                        <li>dla 5 uczestników 51 kart (z usunięciem 2 trefl); z nich jedna dla rozdającego i po 10 dla każdego z czterech grających</li>
                        <li>dla 6 uczestników 49 kart (z usunięciem dwójek treflowej, karowej i kierowej); z nich jedna dla rozdającego i po 8 dla każdego z pięciu grających</li>
                        <li>dla 7 uczestników 99 kart (dwie talie, z usunięciem dwójek treflowych, karowych i jednej dwójki kierowej);</li>
                        <li>dla 8 uczestników 97 kart (dwie talie, z usunięciem wszystkich dwójek oprócz jednej dwójki pikowej);</li>
                    </ul>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>
                        Cel gry jest inny dla rozdającego i inny dla reszty graczy:<br />
                        dla uczestników - pozbyć się wszystkich kart z ręki i ze stołu;<br />
                        dla rozdającego - opracować taką regułę gry, która pozwoli jednemu z graczy wygrać ze znaczną przewagą nad innymi.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Po przetasowaniu rozdający rozdaje karty wszystkim uczestnikom gry, sobie zatrzymując tylko jedną kartę, tzw. kartę startową. Następnie rozdający notuje na papierze, dla późniejszej weryfikacji, nie znaną grającym regułę gry, czyli regułę zrzucania kart w danym rozdaniu, i wykłada swoją kartę startową.
                    </p>

                    <h2 className="content-subhead">Reguła zrzucania kart</h2>
                    <p>
                        Reguła zrzucania kart może być przez rozdającego ustalona dowolnie, z pewnymi, nieznacznymi ograniczeniami. Oto przykładowe reguły zrzucania kart, od najłatwiejszej do najtrudniejszych:
                    </p>
                    <ul>
                        <li>kładź na kartę czerwoną kartę czarną i odwrotnie;</li>
                        <li>kładź na trefla zawsze karo, na karo - kiera, na kiera - pika, na pika - trefla;</li>
                        <li>kładź na kartę parzystą nieparzystą i odwrotnie;</li>
                        <li>na karty od asa do siódemki kładź karty od ósemki do króla i odwrotnie;</li>
                        <li>na kartę parzystą kładź kartę czerwoną, na kartę nieparzystą - czarną;</li>
                        <li>kładź kartę o jedną, dwa lub trzy miejsca starszą, zakładając zamknięty krąg kart, a więc starszeństwo W, D, K, A, 2, 3, 4;</li>
                        <li>jeśli poprzedzający cię gracz zagrał dobrze - kładź kartę czerwoną, jeśli zagrał źle - kładź kartę czarną;</li>
                        <li>podziel wartość ostatniej karty przez cztery; jeśli nie ma reszty - kładź kartę treflową; jeśli reszta wynosi jeden - kładź kartę karową; jeśli reszta wynosi dwa - kierową; jeśli reszta wynosi trzy - pikową;</li>
                    </ul>

                    <p>
                        Reguła zrzucania kart - co jest jedynym jej ograniczeniem - nie może być zbyt wąska, musi dawać grającym co najmniej dziesięć różnych możliwości prawidłowych zrzutek z pełnej talii.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Po wyłożeniu na stół karty startowej pierwszy z grających po lewej ręce rozdającego zrzuca dowolnie wybraną ze swoich kart na kartę startową. Rozdający wówczas ogłasza, czy jest to zrzutka dobra, czy zła, a więc zgodna czy nie z tajną, nie znaną graczom regułą gry w danym rozdaniu. Jeśli zrzutka była dobra, pozostaje na stosie na stole (stos jest otwarty, wszystkie w nim kolejne karty są widoczne dla grających); jeśli jest zła, zrzucający kartę wycofuje ją i otwartą kładzie przed sobą. Jest to tzw. "karta omyłkowa". Następnie zrzuca swoją kartę drugi gracz i kolejno zrzucają dalsi.
                    </p>
                    <p>
                        Dopóki gracz ma karty w ręku, nie wolno mu zrzucać kart omyłkowych. Należy pozbywać się ich po pozbyciu się wszystkich kart z ręki.
                    </p>
                    <p>
                        Gdy wszyscy gracze pozbyli się kart z ręki (choć wielu lub każdy z nich ma przed sobą jeszcze własne karty omyłkowe), zapisuje się punkty uzyskane w danym rozdaniu przez rozdającego według następujących zasad:
                    </p>
                    <div className="example">
                        <div className="content example">
                            najmniejszą ilość kart omyłkowych przed jednym z graczy mnoży się przez liczbę graczy mniejszą o jeden od ilości wszystkich uczestników gry (bez rozdającego) i otrzymaną liczbę odejmuje się od sumy wszystkich kart omyłkowych na stole, bez kart tego z graczy, który ma kart omyłkowych najmniej.
                        </div>
                    </div>
                    <p>
                        Np. gra siedmiu uczestników; w momencie, gdy wszyscy pozbyli się kart z ręki, mają przed sobą następujące ilości kart omyłkowych: gracz A - 7, gracz B - 4, C - 3, D - 8, E - 2, F - 10. Gracz G (siódmy) był rozdającym. Najrzadziej mylił się gracz E; liczymy 2 (ilość jego kart omyłkowych) razy pięć (ilość graczy bez rozdającego minus jeden) równa się 10. Suma ilości pozostałych kart omyłkowych: 7+4+3+8+10=32. Po odjęciu rozdający otrzymuje więc 22 punkty.
                    </p>
                    <p>
                        Gra toczy się dalej - teraz gracze próbują pozbyć się kart omyłkowych, zrzucając kolejno po jednej wybranej z nich. Gra dobiega końca, gdy jeden z graczy pozbędzie się wszystkich swoich kart lub gdy rozdający stwierdzi, iż zgodnie z regułą nie można już zrzucić żadnej z kart pozostałych na stole.
                    </p>
                    <p>
                        Jeśli któryś z graczy pozbędzie się wszystkich kart, otrzymuje 6 punktów premii za skończenie gry plus tyle punktów, ile wynosi suma kart omyłkowych, pozostałych jeszcze do zrzucenia reszcie graczy. Jeśli gra skończy się, gdyż nie można pozbyć się kart zgodnie z regułą, punkty otrzymuje ten z graczy, któremu pozostało najmniej kart omyłkowych (ilość punktów równa się sumie kart przeciwników minus ilość kart własnych), lecz bez sześciu punktów premii.
                    </p>
                    <p>
                        Pełna tura Eleusis kończy się, gdy wszyscy uczestnicy gry byli raz rozdającymi.<br />
                        Wygrywa ten, kto zdobył najwięcej punktów.
                    </p>
                </div>

                <div>
                    <div className="content">
                        <a name="delfy"></a>
                        <h1 className="content-subhead main-header">Delfy</h1>
                        <div className="info">
                            Wariant eleusis opracowany w 1965 roku przez Martina D. Kruskala z Nowego Jorku.
                        </div>

                        <p>
                            Pełna talia (52 karty), niezależnie od liczby graczy.
                        </p>
                        <p>
                            Pierwszego rozdającego, zwanego "wyrocznią", ustala się przez losowanie.
                        </p>
                        <p>
                            Rozdający ustala i notuje tajną, nie znaną pozostałym graczom, regułę zrzucania kart; następnie tasuje talię kart i odsłania pierwszą kartę, startową.
                        </p>
                        <p>
                            Każdy z graczy dysponuje specjalnym żetonem (może to być dwustronnie zapisana kartka papieru) z napisami: "Prawda", "Nieprawda" lub "Główna linia", "Boczna linia".
                        </p>
                        <p>
                            Rozdający odsłania kolejną, drugą kartę z talii. Po jej odsłonięciu każdy z grających ustawia swój żeton w sposób zgodny z własnym przekonaniem co do odsłoniętej karty ("Prawda", "Nieprawda" lub "Główna linia", "Boczna linia").
                        </p>
                        <p>
                            Rozdający układa kartę na stole - jeśli jest ona zgodna z regułą zrzucania kart w danej rozgrywce, układa ją w głównej linii, w rzędzie poziomym; jeśli nie jest zgodna z regułą gry, w bocznej linii, pionowo.<br />
                            Np. na poniższym rysunku karta startowa S oraz karty 3, 4, 6, 7, 8, 12, 14, 15, 16, 18, 19 i 20 zostały wyłożone zgodnie z regułą; karty 1, 2, 5, 9, 10, 11, 13, 17 i 20 niezgodnie z regułą gry.
                        </p>
                        <div className="center-outer-container">
                            <div className="center-inner-container">
                                <img className="pure-img" src={delfyImg}></img>
                            </div>
                        </div>
                        <p className="center">
                            Jeśli gracz przed wyłożeniem danej karty odgadł jej walor (słuszność lub niesłuszność z regułą gry), otrzymuje od rozdającego jeden żeton; jeśli gracz pomylił się, nie odgadł jakości karty, traci wszystkie żetony jakie posiada.
                        </p>
                        <p>
                            Gra toczy się do chwili wyłożenia ostatniej karty. W końcowym obliczeniu poszczególni gracze wygrywają lub przegrywają do siebie ilość punktów zgodną z ilością posiadanych żetonów. Np. w momencie zakończenia gry gracz A posiada 18 żetonów, gracz B - 15, gracz C - 2 żetony, gracz D był rozdającym (wyrocznią).<br />
                            Gracz A wygrywa od gracza B 3 punkty oraz od gracza C 16 punktów. Gracz B wygrywa od gracza C 13 punktów. Gracz D (wyrocznia) zapisuje sobie na plus wszystkie punkty wygrane, tj. wygrywa łącznie 3 + 16 + 13, a więc 32 punkty. W końcowych obliczeniach gracz A ma na koncie 19pkt, gracz B - 7pkt, gracz C - 58pkt ujemnych, zaś gracz D - 32 punkty.
                        </p>
                        <p>
                            Pełna tura w delfy dobiega końca, gdy każdy z graczy kolejno był rozdającym (wyrocznią).
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
