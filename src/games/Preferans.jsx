import { basePath } from '../utils';
import React from 'react';
import Wist from './Wist.jsx';
import preferansImg from '../images/preferans.gif';


export default class Preferans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Preferans',
            desc: 'gra dla 3 [4] osób',
            url: basePath() + '/preferans',
            players: [3, 4],
            cards: 'Preferansowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Dawny francuski wariant <a href={new Wist().state.url} className="pure-menu-link underline">wista</a>, szczególnie popularny w Polsce w XIX i pierwszych latach XX wieku.
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 3 [4] osób.<br />
                        Talia tzw. preferansowa (32 karty).<br />
                        Starszeństwo kart od asa do siódemki.<br />
                        Starszeństwo kolorów: bez atu, kiery, kara, trefle, piki.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. W kolejnych rozdaniach gracze rozdają karty kolejno.
                    </p>
                    <p>
                        Każdy z trzech graczy otrzymuje po 10 kart, dwie karty pozostają na stole w zakrytym talonie.
                    </p>
                    <p>
                        Pierwszym etapem każdego rozdania jest licytacja, którą rozpoczyna gracz po lewej stronie rozdającego, deklarując ilość lew, którą zobowiązuje się wziąć w rozgrywce, oraz kolor atutowy rozgrywki. Wyższa zapowiedź licytacyjna może być wyższa w kolorze lub w ilości zadeklarowanych lew. Najmniejsza możliwa zapowiedź w licytacji to zobowiązanie wzięcia sześciu lew z kolorem pikowym jako atutowym; najwyższa zapowiedź to zobowiązanie wzięcia dziesięciu lew (tzw. totus) w rozgrywce bezatutowej.
                    </p>
                    <p>
                        Wygrywający licytację (ten z graczy, który zgłosił najwyższą zapowiedź) podejmuje talon ze stołu, okazuje karty w talonie współgrającym i włącza je do swojej ręki. Następnie dwie dowolnie wybrane karty z ręki odkłada znów na stół w zakrytym talonie i składa ostateczną deklarację rozgrywki. Może one być w innym kolorze lub obejmować inną ilość lew niż deklaracja wygrywająca licytację, musi jednak być od niej wyższa w kolorze lub w ilości lew. Gracz ma prawo w rozgrywce pozostać przy swojej ostatecznej zapowiedzi licytacyjnej.
                    </p>
                    <p>
                        Po złożeniu ostatecznej deklaracji przez rozgrywającego, współgrający deklarują swój udział w rozgrywce. Może on polegać na wistowaniu lub na pasowaniu.
                    </p>
                    <p>
                        Zapowiedź "wistuję" oznacza zobowiązanie się przez przeciwnika rozgrywającego do wzięcia w rozgrywce dwu lew (jeśli rozgrywający zobowiązał się wziąć sześć lew) lub jednej lewy (jeśli rozgrywający zobowiązał się wziąć siedem, osiem lub dziewięć lew). Jeśli rozgrywający zobowiązał się wziąć totusa, rozgrywka zawsze odbywa się w pełnym składzie graczy - obydwaj kontrpartnerzy mają obowiązek wistować, lecz żaden z nich nie ma obowiązku wzięcia ani jednej lewy.
                    </p>
                    <p>
                        Przeciwnik rozgrywającego może spasować, zgłaszając tym samym, że nie chce brać udziału w rozgrywce.
                    </p>
                    <p>
                        Wówczas drugi przeciwnik rozgrywającego ma dwie możliwości: rozgrywać sam (wówczas w rozgrywce bierze udział tylko 20 kart, tj. w rękach rozgrywającego i jego przeciwnika) lub też przywołać pasującego gracza do gry, mówiąc "przywołuję". Gracz przywołany do gry może zostać przywołany "na ciemno" (bierze udział w rozgrywce z kartami zakrytymi) lub "na widno" (po pierwszym wyjściu odsłania wówczas swoje karty i kładzie je na stole). Gracz przywołany na ciemno sam decyduje, jak rozgrywa; kartami gracza przywołanego dysponuje ten, kto go do gry przywołał.
                    </p>
                    <p>
                        Gracz przywołujący partnera do gry zobowiązuje się tym samym do wzięcia w rozgrywce czterech lew (jeśli rozgrywający zobowiązał się wziąć sześć lew), dwu lew (jeśli rozgrywający zobowiązał się wziąć siedem lew) lub jednej lewy (jeśli rozgrywający zobowiązał się wziąć osiem lub dziewięć lew).
                    </p>
                    <p>
                        Jeśli obydwaj przeciwnicy rozgrywającego spasują, rozgrywka nie odbywa się - zapisuje się ją jako wygraną przez rozgrywającego.
                    </p>
                    <p>
                        W rozgrywce pierwszy wychodzi gracz rozgrywający. Istnieje obowiązek dorzucania do koloru i przebijania atutem w wypadku nieposiadania koloru wyjścia. Nie ma obowiązku przebijania starszą kartą. Do kolejnej lewy wychodzi tan gracz, który wziął lewę poprzednią.
                    </p>
                    <p>
                        Z wygraną rozgrywkę rozgrywający zapisuje sobie odpowiednią ilość punktów do własnej puli, i tak:
                    </p>
                    <ul>
                        <li>
                            za zadeklarowanie i wzięcie sześciu lew w każdym z kolorów - 10pkt puli;
                        </li>
                        <li>
                            za wzięcie siedmiu lew - 20pkt;
                        </li>
                        <li>
                            za wzięcie ośmiu lew - 30pkt;
                        </li>
                        <li>
                            za wzięcie dziewięciu lew - 40pkt;
                        </li>
                        <li>
                            za wzięcie totusa (dziesięciu lew) - 50pkt.
                        </li>
                    </ul>

                    <p>
                        Jeśli rozgrywający w rozgrywce weźmie więcej lew, niż zadeklarował ich w licytacji, zapisuje sobie punkty tylko za lewy zadeklarowane.
                    </p>
                    <p>
                        Jeśli rozgrywający nie wykona zobowiązania licytacyjnego (weźmie w rozgrywce mniej lew, niż zapowiedział), zapisuje sobie punkty ujemne (tzw. "kury") według następujących zasad:
                    </p>
                    <ul>
                        <li>
                            przy deklaracji sześciu lew za każdą lewę brakującą - 10 kurów;
                        </li>
                        <li>
                            przy deklaracji siedmiu lew - 20 kurów;
                        </li>
                        <li>
                            ośmiu lew - 30 kurów;
                        </li>
                        <li>
                            dziewięciu lew - 40 kurów;
                        </li>
                        <li>
                            totusa (dziesięciu lew) - 50 kurów.
                        </li>
                    </ul>

                    <p>
                        Np. bez trzech przy zobowiązaniu wzięcia ośmiu lew, gdy rozgrywający wziął ich pięć - to 90 kurów (3x30); wpadka bez trzech przy zobowiązaniu wzięcia sześciu lew - to 30 kurów (3x10).
                    </p>
                    <p>
                        Po ukończonej rozgrywce zapisuje się także punkty (tzw. punkty wistowe) przeciwnikom rozgrywającego. I tak:
                    </p>
                    <ul>
                        <li>
                            za każdą lewę wziętą przy zapowiedzi rozgrywającego na wysokości sześciu lew - 10pkt;
                        </li>
                        <li>
                            siedmiu lew - 20pkt;
                        </li>
                        <li>
                            ośmiu lew - 30pkt;
                        </li>
                        <li>
                            dziewięciu lew - 40pkt;
                        </li>
                        <li>
                            totusa - 50pkt.
                        </li>
                    </ul>

                    <p>
                        Jeśli rozgrywający nie wykonał w rozgrywce zobowiązania licytacyjnego (wpadł), wówczas wistującemu lub wistującym dolicza się do ilości lew faktycznie zdobytych w rozgrywce także ilość wpadek rozgrywającego.<br />
                        Np. rozgrywający zapowiedział siedem lew, wziął pięć, wpadł więc bez dwu. Pierwszy wistujący wziął trzy lewy, uzyskując za nie [3+2(wpadki)]x20, czyli 100pkt wistowych; drugi wistujący wziął dwie lewy, uzyskując za nie [2+2(wpadki)]x20, czyli 80pkt wistowych.
                    </p>
                    <p>
                        Oczywiście uzyskanie tylko 50 punktów wistowych za lewę przy zadeklarowanym totusie jest teoretycznie niemożliwe. Aby je zdobyć, trzeba wziąć co najmniej jedną lewę, a ta jest już wpadką dla rozgrywającego. A więc totus bez jednej: [1+1(wpadka)]x50, czyli 100pkt wistowych.
                    </p>
                    <p>
                        Przy grze z przywołaniem gracz, który przywołał partnera, zawsze dolicza sobie przy zapisywaniu punktów wistowych dodatkową jedną lewę za przywołanie. Np. rozgrywający zapowiedział osiem lew i wziął je, jeden z graczy w rozgrywce spasował, drugi przywołał go "na widno", w sumie wzięli dwie lewy - dla wistującego [2+1(przywołanie)]x30, czyli 90pkt wistowych; rozgrywający zapowiedział dziewięć lew, wziął siedem, jeden z graczy w rozgrywce spasował drugi przywołał go "na ciemno", w sumie wzięli trzy lewy - dla wistującego [3+2(wpadki)+1(przywołanie)]x40, czyli 240pkt wistowych. Wszystkie punkty zapisuje sobie gracz przywołujący. Gracz przywołany nie zdobywa punktów.
                    </p>
                    <p>
                        jeśli gracz wistujący nie wykona w rozgrywce swego zobowiązania (nie weźmie dwu lew przeciwko zapowiedzi sześciu lew lub jednej lewy przeciwko innym zapowiedziom), zapisuje sobie wpadkę lub wpadki tak samo jak rozgrywający (odpowiednią ilość kurów). Np. wistujący przeciwko zapowiedzi sześciu lew nie wziął żadnej lewy, choć obowiązywały go dwie; jest to wpadka bez dwu - a więc 20 kurów (po 10 za wpadkę, jak przy grze na poziomie sześciu).
                    </p>
                    <p>
                        Nie ma wpadki dla wistującego, choćby nawet nie wziął lew lub lewy, które zobowiązał się wziąć w danej rozgrywce, jeśli wziął je drugi wistujący. Np. przy zapowiedzi sześciu jeden z wistujących wziął tylko jedną lewę, za to drugi trzy; przy zapowiedzi siedmiu jeden z wistujących nie wziął żadnej lewy, za to drugi - dwie; nie ma wpadek.
                    </p>
                    <p>
                        Zapis preferansowy prowadzi się w specjalnej tabeli, która jest przedstawiona na poniższym rysunku:
                    </p>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src={preferansImg}></img>
                        </div>
                    </div>

                    <ul>
                        <li>I - własna pula gracza A;</li>
                        <li>II - własna pula gracza B;</li>
                        <li>III - własna pula gracza C;</li>
                        <li>IV, V, VI - kury graczy (odpowiednio) A, B, C;</li>
                        <li>VII - punkty wistowe gracza A zdobyte w rozgrywkach przeciwko graczowi B; </li>
                        <li>VIII - punkty wistowe gracza A zdobyte w rozgrywkach przeciwko graczowi C; </li>
                        <li>IX, X - punkty wistowe gracza B zdobyte w rozgrywkach przeciwko graczom A i C; </li>
                        <li>XI, XII - punkty wistowe gracza C zdobyte w rozgrywkach przeciwko graczom B i A; </li>
                        <li>XIII - koguty; jeden z nich (dwustronnie zaznaczony) zgrany.</li>
                    </ul>
                    <p>
                        Jeśli w licytacji wszyscy trzej gracze spasują, nie ma rozgrywki, notuje się natomiast tzw. koguta. Przy grze z kogutem wszystkie zapisy za grę (pula, wist, kury) zostają podwojone. Jeśli przy grze z kogutem rozgrywka zakończy się wpadką rozgrywającego, kogut nie zostaje zgrany, lecz trwa dalej, aż jedna z rozgrywek powiedzie się i kogut zostanie zgrany, co zaznacza się w zapisie. Jeśli w zapisie istnieje więcej niż jeden kogut niezgrany, w jednej rozgrywce zgrywa się tylko jednego koguta.
                    </p>
                    <p>
                        Gracz, który zdobył już w zapisie 100pkt własnej puli (zgrał własną pulę), bierze dalej udział w licytacji i w rozgrywkach; jeśli jest rozgrywającym i wygra, ilość punktów, którą wygrał, wpisuje się do puli tego z pozostałych graczy, któremu brak mniej punktów do ukończenia puli (nazywa się to zgrywaniem puli przeciwnika), otrzymując w zamian odpowiednią ilość punktów wistowych na danym graczu w relacji 1:10 (za zgranie np. 30pkt puli - 300pkt wistowych).
                    </p>
                    <p>
                        Gdy wszyscy gracze zdobyli już w zapisie wszystkie punkty puli, następuje zgrywanie kurów. Każdy z graczy zgrywa najpierw własne kury, następnie kury przeciwników (w relacji 1pkt kurowy = 1pkt puli = 10pkt wistowych).
                    </p>
                    <p>
                        Gra kończy się, gdy wszyscy gracze mają już zgrane swoje pule i kury. Oblicza się wówczas różnice w punktach wistowych oddzielnie dla gracza A i B, dla gracza B i C oraz dla gracza C i A.
                    </p>

                    <h2 className="content-subhead">Preferans dla czterech osób</h2>
                    <p>
                        W tym wariancie gry rozdający karty nie bierze udziału w danej licytacji i rozgrywce (pauzuje). Grają za każdym razem trzej gracze, a więc kolejno BCD, ACD, ABD i ABC.
                    </p>
                    <p>
                        Jeśli w talonie znajduje się as w kolorze atutowym danej rozgrywki (lub jakikolwiek as w rozgrywce bez atutowej), rozdający otrzymuje w zapisie za tę rozgrywkę punkty wistowe na rozgrywającym jak za jedną lewę przy wistowaniu.
                    </p>
                    <p>
                        Wszystkie inne zasady licytacji, rozgrywki i zapisu - bez zmian.
                    </p>

                    <h2 className="content-subhead">Wariant preferansa</h2>
                    <p>
                        Można wprowadzić wariant licytacji "na ciemno". W tym wariancie gracz bierze udział w licytacji, jeśli sam tego chce, nie oglądając własnych kart, licytując na ciemno. Gracz ma prawo w każdym momencie licytacji obejrzeć własne karty - wówczas licytacja staje się zwykłą licytacją na widno.
                    </p>
                    <p>
                        Jeśli gracz wygrał licytację na ciemno, nie okazuje kart talonu współgrającym, zapis zaś za rozgrywkę (pula, wist, kury), zarówno w wypadku wygranej, jak i przegranej, zostaje podwojony dla wszystkich graczy.
                    </p>
                    <p>
                        Rozgrywka po wygranej licytacji na ciemno przy kogucie ma wszystkie zapisy poczwórne (dwukrotnie podwojone).
                    </p>
                </div>
            </div>
        );
    }
}
