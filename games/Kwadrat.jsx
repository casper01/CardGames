import React from 'react';


export default class Kwadrat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kwadrat',
            desc: 'gra dla 4 [2] osób',
            url: '/kwadrat',
            players: [2, 4],
            cards: 'Mała talia kart (24 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Współczesna gra karciana opracowana przez Lecha Pijanowskiego.
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 4 [2] osób<br />
                        w grze biorą udział wybrane z talii Asy, 2, 3, 4, 5 i 6 we wszystkich kolorach (24 karty). Wartość punktowa według ilości oczek<br />
                        Nie ma koloru atutowego.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. W nastęnych rozdaniach gracze rozdają karty kolejno. Każdy z grających otrzymuje po sześć kart.
                    </p>
                    <p>
                        Grę rozpoczyna zawsze naręczny rozdającego. Gracze kolejno, w kierunku ruchu wskazówek zegara, wykładają na stół po jednej karcie z ręki.
                    </p>
                    <p>
                        Rozpoczynający grę może wyłożyć dowolną kartę. Każdy następny gracz ma obowiązek wyłożyć jedną kartę z ręki w ten sposób:
                    </p>
                    <ul>
                        <li>
                            aby dotykała ona swoim bokiem dłuższym lub krótszym (lecz nie rogiem) do odpowiedniego boku jednej z kart już wyłożonych na stole (a więc była z tą kartą w jednym rzędzie lub w jednej kolumnie kart);
                        </li>
                        <li>
                            aby w żadnym rzędzie ani kolumnie kart ilość kart wyłożonych nie przekroczyła sześciu;
                        </li>
                        <li>
                            aby w żadnym rzędzie ani kolumnie nie znalazły się dwie karty tej samej wartości (np. dwie piątki, dwie dwójki itp.);
                        </li>
                        <li>
                            aby w żadnym rzędzie ani kolumnie nie znalazły się dwie karty tego samego koloru (np. dwa kiery, dwa trefle itp.).
                        </li>
                    </ul>

                    <p>
                        Rozgrywka kończy się w chwili, gdy jeden z graczy pozbędzie się wszystkich kart z ręki, lub (częściej) w chwili, gdy gracz, na którego przypada kolej gry, nie może żadnej ze swoich kart z ręki dołożyć do układu na stole.<br />
                        Wówczas oblicza się punkty za rozdanie.
                    </p>
                    <p>
                        Gracz, który pozbył się wszystkich kart z ręki, zdobywa 12 punktów plusowych.<br />
                        Gracz, który doprowadził do przegranej (ten, który dołożył ostatnią kartę do układu), zdobywa 6 punktów plusowych i nie liczą mu się punkty minusowe za karty pozostałe w ręku.<br />
                        Pozostali gracze otrzymują ilość punktów minusowych równą sumie oczek kart pozostałych w ręku.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozgrywkach do chwili, gdy jeden z graczy przekroczy w zapisie umówioną z góry ilość punktów minusowych (zazwyczaj 36).
                    </p>

                    <div className="example">
                        <div className="title">Partia przykładowa</div>
                        <div className="content">
                            <p>
                                Grają a, B, C i D; rozdawał D, a więc zaczyna grę A. Karty w ręku:<br />
                                u A - 4 <span className="spade"></span>, 6 <span className="heart"></span>, 4 <span className="heart"></span>, 3 <span className="heart"></span>, 4 <span className="diamond"></span> i 3 <span className="diamond"></span>;<br />
                                u B - 6 <span className="spade"></span>, A <span className="spade"></span>, 2 <span className="heart"></span>, A <span className="heart"></span>, 6 <span className="club"></span> i 4 <span className="club"></span>;<br />
                                u C - 5 <span className="spade"></span>, 5 <span className="heart"></span>, 6 <span className="diamond"></span>, 5 <span className="diamond"></span>, 2 <span className="club"></span> i A <span className="club"></span>;<br />
                                u D - 3 <span className="spade"></span>, 2 <span className="spade"></span>, 2 <span className="diamond"></span>, A <span className="diamond"></span>, 5 <span className="club"></span> i 3 <span className="club"></span>;
                            </p>
                            <p>
                                A rozpoczyna grę od wyłożenia 4 <span className="heart"></span>, B dokłada w rzędzie po lewej 6 <span className="club"></span>. C poziomo w dół od czwórki - 6 <span className="diamond"></span>. Po prawej stronie 6 <span className="diamond"></span> D kładzie 5 <span className="club"></span>. Teraz zowu A - pod 5 <span className="club"></span> umieszcza 6 <span className="heart"></span> - powstają charakterystyczne w grze "schodki". Wszyscy gracze starają się pozbyć najwyższych kart.
                            </p>
                            <p>
                                Po prawej stronie 6 <span className="heart"></span> B gra 4 <span className="club"></span>. Pod nią C gra 5 <span className="heart"></span>. D gra 3 <span className="spade"></span> obok 4 <span className="heart"></span> - wyobrażony kwadrat zaczyna się wypełniać. A gra 4 <span className="diamond"></span> po prawej stronie 5 <span className="heart"></span> - w tej kolumnie są już wszystkie cztery kolory, nie może dojść więcej.
                            </p>
                            <p>
                                B gra 6 <span className="spade"></span> obok 5 <span className="heart"></span>, C gra 5 <span className="spade"></span> pod 6 <span className="diamond"></span>, D gra 3 <span className="club"></span> pod 5 <span className="spade"></span> - w drugiej kolumnie już są cztery kolory.<br />
                                A gra 4 <span className="spade"></span> pod 6 <span className="club"></span>, B gra 2 <span className="heart"></span> nad 6 <span className="club"></span>, C gra 5 <span className="diamond"></span> pod 6 <span className="spade"></span>. Leży już sześć rzędów kart, kwadrat pionowo nie będzie rósł, może tylko rozszerzeać się poziomo.<br />
                                D gra 2 <span className="spade"></span> pod 5 <span className="heart"></span>, A gra 3 <span className="diamond"></span> pod 4 <span className="spade"></span>, B gra A <span className="spade"></span> po lewej stronie 2 <span className="heart"></span>. Już leży i sześć kolumn kart, położenie wyobrażonego kwadratu jest wyznaczone i ustalone ostatecznie, można go jeszcze tylko w niektórych miejscach  wypełniać.
                            </p>
                            <p>
                                C, na którego przypada kolej gry, ma jeszcze w ręku 2 <span className="club"></span> i A <span className="club"></span>, nie może jednak żadnej z tych kart dołożyć do układu, powtórzył by się bowiem albo kolor, albo wartość karty w rzędzie lub w kolumnie. Sytuację końcową (karty na stole przedstawia poniższy rysunek.
                            </p>

                            <div className="center-outer-container">
                                <div className="center-inner-container">
                                    <img className="pure-img" src="../images/kwadrat1.gif"></img>
                                </div>
                            </div>

                            <p>
                                Premię 6pkt otrzymuje gracz B (ostatni, który dołożył kartę do układu na stole) i nie liczą się punkty minusowe za A <span className="heart"></span> pozostałego w ręku. C, D i A przegrywają każdy po 3pkt, choć pozostały im różne ilości kart w ręku.
                            </p>
                            <p>
                                W toku gry w kwadrat powstać mogą najróżniejsze, zgodne z regułami gry, układfy różnych ilości kart. Niektóre z możliwych układów przedstawia rysunek poniżej:
                            </p>

                            <div className="center-outer-container">
                                <div className="center-inner-container">
                                    <img className="pure-img" src="../images/kwadrat2.gif"></img>
                                </div>
                            </div>

                        </div>
                    </div>

                    <h2 className="content-subhead">Kwadrat dla dwóch osób</h2>
                    <p>
                        Wariant gry mniej losowy, bardziej strategiczny.<br />
                        W grze bierze udział 16 kart (Asy, 2, 3 i 4); każdy z graczy otrzymuje po osiem kart.<br />
                        Wolno dokładać karty nie do sześciu, lecz do tylko do czterech rzędów i kolumn.<br />
                        Za pozbycie się kart z ręki - 8pkt; za dołożenie ostatniej karty - 4pkt.<br />
                        Gra toczy się do chwili zdobycia przez któregoś z graczy 16pkt w zapisie, plusowych lub minusowych.
                    </p>

                    <div className="example">
                        <div className="title">Partia przykładowa</div>
                        <div className="content">
                            <p>
                                Karty gracza A, który rozpoczyna grę: 2 <span className="spade"></span>, 4 <span className="spade"></span>, 3 <span className="heart"></span>, A <span className="diamond"></span>, A <span className="club"></span>, 2 <span className="club"></span>, 3 <span className="club"></span> i 4 <span className="club"></span>.<br />
                                Karty gracza B: A <span className="spade"></span>, 3 <span className="spade"></span>, A <span className="heart"></span>, 2 <span className="heart"></span>, 4 <span className="heart"></span>, 2 <span className="diamond"></span>, 3 <span className="diamond"></span> i 4 <span className="diamond"></span>.
                            </p>
                            <p>
                                Kolejno wykładane karty obydwu graczy (na zmianę):<br />
                                4 <span className="club"></span>, 2 <span className="heart"></span>, 3 <span className="club"></span>, 4 <span className="diamond"></span>, 2 <span className="club"></span>, 3 <span className="spade"></span>, A <span className="diamond"></span>, 2 <span className="diamond"></span>, 4 <span className="spade"></span>, A <span className="spade"></span>, 3 <span className="heart"></span> - przegrywa gracz B (8pkt minusowych). Gracz A otrzymuje 4 punkty plusowe. Sytuację końcową przedstawia rysunek:
                            </p>

                            <div className="center-outer-container">
                                <div className="center-inner-container">
                                    <img className="pure-img" src="../images/kwadrat3.gif"></img>
                                </div>
                            </div>

                            <p>
                                Z tymi samymi kartami u obydwu graczy przy innej taktyce gry rozgrywka mogłaby wyglądać tak:<br />
                                3 <span className="club"></span>, 4 <span className="heart"></span>, 2 <span className="spade"></span>, 2 <span className="diamond"></span>, 3 <span className="heart"></span>, A <span className="spade"></span>, 4 <span className="club"></span>, 3 <span className="spade"></span>, 2 <span className="club"></span>, A <span className="heart"></span>, A <span className="diamond"></span>, 4 <span className="diamond"></span> - i przegrywa A, 5 punktów minusowych, 4 punkty plusowe dla B.<br />
                                Sytuację końcową przedstawia rysunek:
                            </p>

                            <div className="center-outer-container">
                                <div className="center-inner-container">
                                    <img className="pure-img" src="../images/kwadrat4.gif"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
