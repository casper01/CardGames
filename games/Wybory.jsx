import React from 'react';


export default class Wybory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Wybory',
            name2: 'Variety',
            desc: 'gra dla 4 osób',
            url: '/wybory',
            players: [4],
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
                        Gra opracowana w 1963 roku przez amerykańskiego znawcę i twórcę nowych gier, Roberta Abbotta, który nazwał ją "variety" ("rozmaitości").
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 4 osób.<br />
                        W każdej rozgrywce dwie osoby grają przeciwko pozostałym dwom, ale partnerzy zmieniają się w kolejnych rozgrywkach. Mogą siedzieć naprzeciw lub też obok siebie (nie zmieniają miejsc).
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty). Starszeństwo kart od asa do dwójki.<br />
                        Istnieje zmienny kolor atutowy.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Do kolejnych rozgrywek gracze rozdają karty kolejno. Grę rozpoczyna gracz na lewo od rozdającego.
                    </p>

                    <h2 className="content-subhead">Licytacja</h2>
                    <p>
                        Pierwszym etapem gry jest licytacja.
                    </p>
                    <p>
                        W licytacji ustala się, który z możliwych ośmiu rodzajów rozgrywek będzie rozgrywany oraz jacy dwaj gracze będą partnerami w danej rozgrywce.
                    </p>
                    <p>
                        Przy grze w Wybory istnieją następujące możliwości rozgrywek o różnych kolorach atutowych i różnych kartach premiowych:
                    </p>
                    <ul type="I">
                        <li>
                            - bez atu - za wzięcie większej ilości lew niż przeciwnicy: 12 punktów plusowych;
                        </li>
                        <li>
                            - atu trefl - za każdą wziętą lewę 2 punkty plusowe;
                        </li>
                        <li>
                            - atu kier - za każdą wziętą kartę pikową 2 punkty plusowe;
                        </li>
                        <li>
                            - atu karo - za każdą wziętą kartę czerwoną 1 punkt plusowy, za każdą wziętą kartę czarną 1 punkt minusowy;
                        </li>
                        <li>
                            - atu pik - za każdą wziętą czarną dziesiątkę i waleta 5 punktów plusowych, za każdą wziętą czerwoną dziesiątkę i waleta 5 punktów minusowych;
                        </li>
                        <li>
                            - atu trefl - za każdą wziętą kartę czerwoną 1 punkt plusowy (lewę bierze najniższa karta w lewie);
                        </li>
                        <li>
                            - atu pik - za każdą wziętą kartę treflową 2 punkty minusowe;
                        </li>
                        <li>
                            - bez atu - za każdą wziętą lewę 2 punkty minusowe.
                        </li>
                    </ul>

                    <p>
                        W licytacji gracz po lewej stronie rozdającego pierwszy deklaruje, którą rozgrywkę spośród wszystkich możliwych wybiera do gry. Następnie kolejno deklaracje taką składają pozostali gracze.
                    </p>
                    <p>
                        Gdy w licytacji któraś z rozgrywek zostanie przez któregoś gracza powtórzona (zadeklarowana po raz drugi), licytacja kończy się - rozgrywana będzie ta właśnie rozgrywka, partnerami zaś w niej będą ten gracze, którzy zadeklarowali tę samą rozgrywkę.
                    </p>
                    <p>
                        Żadnemu z graczy nie wolno w licytacji dwukrotnie zgłaszać tej samej rozgrywki.
                    </p>
                    <p>
                        Przykładowo: rozpoczynający licytację gracz A deklaruje rozgrywkę II, gracz B - rozgrywkę VIII, gracz C - rozgrywkę VI, gracz D - rozgrywkę II. Rozgrywka II została więc wybrana do gry i partnerami w niej będą gracze A i D przeciwko graczom B i C.<br />
                        Inny przykład: gracz A deklaruje rozgrywkę V, gracz B - rozgrywkę I, gracz C - rozgrywkę VIII, gracz D - rozgrywkę IV. Ponieważ nic nie wybrano, licytacja toczy się dalej - gracz A nie może już ponownie zadeklarować rozgrywki V, musi zmienić odzywkę, deklaruje więc rozgrywkę VII. Gracz B - rozgrywkę III, gracz C - rozgrywkę IV. A więc rozgrywka IV pojawiła się po raz drugi w licytacji i one będzie rozgrywana; partnerami będą gracze D (który ją pierwszy zgłosił) i C (który ją powtórzył), przeciwko graczom A i B.
                    </p>
                    <p>
                        W VI rozgrywce obowiązują zmienione zasady bicia lew: lewę bierze nie karta w niej najstarsza, lecz najmłodsza. Jeśli lewa została przebita atutem, bierze ją ten gracz, który przebił; jeśli dwoma atutami - atut młodszy.
                    </p>
                    <p>
                        W toku licytacji wszystkim graczom wolno, zgodnie lub niezgodnie z prawdą, wedle ich uznania, informować o własnych kartach w ręku i reklamować ich wartość, propagując swoją odzywkę licytacyjną, np. tak:<br />
                        "licytuję VIII, nie mam ani jednej figury, na pewno wygram"; "licytuję I, mam cztery asy, sporo figur dodatkowo..."
                    </p>
                    <p>
                        Po zakończeniu licytacji nie wolno już nikomu udzielać żadnych dodatkowych informacji.
                    </p>
                    <p>
                        W kolejnej licytacji mogą być deklarowane i grane rodzaje rozgrywek zadeklarowane i zagrane uprzednio; każda rozgrywka jest całością sama dla siebie i w ich cyklu mogą powtórzyć się dwie lub więcej identycznych rozgrywek, jeśli wyniknie to z licytacji.
                    </p>

                    <h2 className="content-subhead">Rozgrywka</h2>
                    <p>
                        Po zakończeniu licytacji do pierwszej lewy wychodzi gracz po lewej stronie tego gracza, który daną rozgrywkę pierwszy zgłosił w licytacji. Wygrywający licytację są atakującymi, ich przeciwnicy - broniącymi się.
                    </p>
                    <p>
                        W rozgrywce obowiązuje dorzucanie do koloru wyjścia, nie ma obowiązku przebijania starszą kartą i nie ma obowiązku przebijania atutem w przypadku nieposiadania koloru wyjścia (jeśli rozgrywka jest, oczywiście, atutowa). Do następnej lewy wychodzi ten z graczy, który wziął lewę poprzednią.
                    </p>

                    <h2 className="content-subhead">Zapis punktacji</h2>
                    <p>
                        Po zakończeniu rozgrywki oblicza się punkty w niej uzyskane.
                    </p>
                    <p>
                        Jeśli w danej rozgrywce atakujący uzyskali w swoich lewach więcej punktów plusowych lub mniej punktów minusowych niż broniący się, wygrali rozgrywkę; każdej ze stron zapisuje się ilość punktów plusowych lub minusowych faktycznie uzyskanych. Ilość punktów dla danej strony zapisuje się dwukrotnie - dla każdego z partnerów w danym rozdaniu. Ponieważ w kolejnych rozgrywkach zmienia się partnerów, zapis prowadzony jest w czterech kolumnach, dla każdego z graczy oddzielnie.
                    </p>
                    <p>
                        Jeśli w danej rozgrywce atakujący uzyskali w swoich lewach mniej punktów plusowych lub więcej punktów minusowych niż broniący się, przegrali rozgrywkę; każdej ze stron zapisuje się ilość punktów faktycznie uzyskanych, broniący się zaś po 10 punktów plusowych premii dodatkowej (dla każdego z graczy).
                    </p>
                    <p>
                        Pełna tura gry w Wybory składa się z ośmiu rozdań i rozgrywek (każdy z grających dwukrotnie rozpoczyna licytację). Skrócona tura gry: tylko cztery rozdania i rozgrywki.<br />
                        Turę gry wygrywa ten z graczy, który w zapisie uzyskał najwięcej punktów plusowych.
                    </p>
                </div>
            </div>
        );
    }
}
