import React from 'react';


export default class Konstrukcja extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Konstrukcja',
            desc: 'gra dla 2 osób',
            url: '/konstrukcja',
            players: [2],
            cards: 'Trzy standardowe talie kart (3 x 52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra karciano-planszowa, opracowana przez amerykańskiego znawcę i twórcę nowych gier, Roberta Abbotta, w 1963 roku.
                    </div>

                    <h2 className="content-subhead">Rekwizyty</h2>
                    <p>
                        Trzy pełne talie kart (po 52 karty), dwa dżokery, dwa piony (biały i czarny) oraz dwanaście po innych, mniejszych pionków białych i czarnych.
                    </p>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>
                        Zbudowanie za pomocą kart, którymi dysponują gracze, tzw. trasy planszowej i przejście własnym pionem tej trasy od karty wyjściowej do końca i z powrotem na kartę wyjściową.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Przed rozpoczęciem gry wykłada się pionowo dwa dżokery w odległości jednej poziomo ułożonej karty pomiędzy nimi i na dżokerach stawia się piony obydwu graczy, biały i czarny.<br />
                        Dżokery są kartami wyjściowymi obydwu graczy.
                    </p>
                    <p>
                        Przez losowanie ustala się, który z graczy będzie grał kartami czarnymi (pikami i treflami), a który czerwonymi (kierami i karami).
                    </p>
                    <p>
                        Trzy talie kart tasuje się i odsłania wierzchnią kartę zakrytego talonu. W zależności od jej koloru (czarna lub czerwona) będzie to karta do dyspozycji pierwszego lub drugiego gracza. W kolejnych turach gra ten z graczy, który dysponuje odkrytą kartą talonu, może więc zdarzyć się, iż jeden z graczy będzie grającym kilka razy pod rząd.
                    </p>
                    <p>
                        Każdą z kart do dyspozycji gracz ma obowiązek wykorzystać na jeden z czterech sposobów:
                    </p>
                    <ul>
                        <li>użyć jej do konstrukcji planszy;</li>
                        <li>użyć jej do ruchu po planszy własnym pionem;</li>
                        <li>użyć jej do ruchu po planszy którymś z własnych małych pionków;</li>
                        <li>zrzucić kartę na stos odkryty.</li>
                    </ul>

                    <p>
                        Konstrukcja planszy odbywa się przez wykładanie kart na stół w następujący sposób:
                    </p>
                    <ul>
                        <li>karta wykładana na stół może leżeć tylko poziomo lub pionowo;</li>
                        <li>
                            jeśli kartę kładzie się poziomo, musi ona krótszym bokiem przytykać do dłuższego boku którejś z już leżących pionowo kart;
                        </li>
                        <li>
                            jeśli kartę kładzie się pionowo, musi ona dłuższym bokiem przytykać do krótszego boku którejś z już leżących poziomo kart lub krótszym bokiem przytykać do krótszego boku którejś z już leżących pionowo kart.
                        </li>
                    </ul>

                    <p>
                        Innymi słowy, powstająca w trakcie gry plansza konstrukcji składa się z pionowych kolumn kart ułożonych pionowo jedna nad drugą i połączonych między sobą jedną lub wieloma kartami leżącymi poziomo. Wszystkie możliwe w konstrukcji układy kart na planszy przedstawia poniższy rysunek.
                    </p>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src="../images/konstrukcja1.gif"></img>
                        </div>
                    </div>

                    <p>
                        Aby wygrać grę, gracz ma obowiązek swoim pionem ze startowego dżokera odbyć podróż na trasie dziesięciu kart pionowo w górę i powrócić na startowego dżokera. Trasa podróży może być zbudowana przez gracza, przez jego przeciwnika lub przez obydwu. Może to być trasa zawierająca nie tylko karty pionowe, lecz także poziome (trasa z objazdami). Do długości odbytej podróży liczą się jednak tylko karty pionowe i nie wlicza się startowego dżokera.
                    </p>
                    <p>
                        Kolejną kartę do swojej dyspozycji gracz ma prawo ułożyć w dowolnym miejscu planszy zgodnie z zasadami dokładania (także do trasy budowanej przez przeciwnika).
                    </p>
                    <p>
                        Przesuwanie własnego piona po tej części planszy, która istnieje aktualnie w grze, odbywa się następująco:<br />
                        po odsłonięciu karty z talonu, jeśli okaże się ona w dyspozycji danego gracza, ma on prawo zadeklarować przesunięcie swoim pionem i przesunąć go na dowolną sąsiednią kartę z tej, na której pion aktualnie stoi (poziomo lub pionowo, w górę lub w dół) - jednak wtedy i tylko wtedy, jeśli karta odsłonięta z talonu jest ilością oczek równa lub wyższa niż karta, na której stanie przesunięty pion. Wysokość kart liczy się według liczby oczek (dama i walet mają po 10pkt; króle pełnią role specyficzną).
                    </p>
                    <p>
                        Nie wolno własnym pionem wchodzić na to pole planszy (na tę kartę), na której stoi pion przeciwnika lub któryś z małych pionów przeciwnika. Kolor karty, na której stanie przesunięty pion, nie ma znaczenia.
                    </p>
                    <p>
                        Kartę z talonu, użytą do przesunięcia własnego piona na planszy, zrzuca się na stos otwarty.
                    </p>
                    <p>
                        Jeśli kartą dyspozycyją gracza ujawnioną z talonu jest król, na planszy należy ustawić mały pion w kolorze danego gracza. Mały pion zostaje ustawiony na dżokerze startowym gracza i od razu ma prawo (choć nie ma obowiązku) przesunąć się o trzy pola na planszy (o trzy karty) w dowolną stronę.
                    </p>
                    <p>
                        Istnienie małych pionów w grze ma na celu blokowanie drogi przeciwnikowi, nigdy bowiem żadne dwa wrogie piony, ani duże, ani małe, nie mogą stać na tym samym polu (karcie) planszy. Dwa piony tego samego koloru mogą stać na tym samym polu planszy i mijać się wzajemnie.
                    </p>
                    <p>
                        Małe piony przesuwa się po planszy podobnie jak piony duże, z jedną ważną różnicą:<br />
                        pion duży zawsze przechodzi tylko na pole sąsiednie, pion mały natomiast może w jednym ruchu przesunąć się o jedno, dwa lub trzy pola, zależnie od dysponującego nim gracza, pod warunkiem jednak, że żadna z kart mijanych oraz końcowa karta ruchu nie będą wyższe wartością niż dyspozycyjna karta z talonu, przy której gracz porusza mały pion.
                    </p>
                    <p>
                        Jeśli kolejna karta zamkniętego talonu, dyspozycyjna dla jednego z graczy, nie nadaje się wdług jego uznania ani do konstrukcji planszy, ani do żadnego ruchu, gracz może zrzucić ją na otwarty stos. Odsłania się wówczas następną kartę talonu.
                    </p>
                    <p>
                        W grze bierze udział (może zostać wystawione na planszy) najwyżej dwanaście małych pionów każdego z graczy. Jeżeli są one już wystawione, gracz zaś odsłoni z talonu kolejnego swego dyspozycyjnego króla, traktowany jest on jak dama lub walet, lecz nie może zostać użyty do budowy konstrukcji planszy, ale tylko do ruchu.
                    </p>
                    <p>
                        Jeśli wyczerpały się karty w zakrytym talonie, gra zaś nie dobiegła jeszcze końca, odwraca się karty odkrytego stosu, tasuje i tworzy z nich nowy zakryty talon.
                    </p>
                    <p>
                        Nie wolno soimi małymi pionami blokować dużego piona przeciwnika ze wszystkich stron - w każdym momencie gry musi on mieć możliwość wykonania co najmniej jednego posunięcia, choćby niekorzystnego.
                    </p>
                    <p>
                        Jeśli w toku gry (co może się zdarzyć, chociaż niezmiernie rzadko) w ogóle zabraknie kart w talonie lub pozostaną tam same króle, gracze zdejmują po dziesięć dowolnie wybranych swoich kart dyspozycyjnych z planszy i włączają je do kart talonu.
                    </p>
                    <p>
                        W ostatnim dolnym rzędzie pól planszy (wyjściowym - tym, w którym leżą dżokery) na jednym polu planszy może stać dowolna liczba małych i dużych pionów obydwu kolorów i żadne z nich nie blokują się wzajemnie.
                    </p>
                    <p>
                        Wolno (choć zdarza się to rzadko) rozbudować planszę poza dziesięć kart w pionie nie licząc dżokerów.
                    </p>
                    <p>
                        Grę wygrywa ten z graczy, który pierwszy odbędzie obowiązkową podróż przez dziesięć kart tam i z powrotem i znajdzie się swym pionem startowym na własnym dżokerze.
                    </p>

                    <div className="example">
                        <div className="content">
                            W sytuacji przedstawionej na poniższym rysunku jesteśmy w pełnym toku gry:<br />
                            plansza zawiera już dwie możliwe trasy obowiązkowe po dziesięć kart każda, liczne połączenia między kolumnami kart i objazdy. Na planszy stoi pięć małych pionków białych i sześć małych pionków czarnych oraz oczywiście duży pion biały i duży pion czarny.<br />
                            Sytuacja jest dość wyrównana, skuteczna blokada grozi obydwu graczom.
                        </div>
                    </div>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src="../images/konstrukcja2.gif"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
