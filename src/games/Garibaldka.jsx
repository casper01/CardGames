import { basePath } from '../utils';
import React from 'react';
import garibaldkaImg from '../images/garibaldka.png';


export default class Garibaldka extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Garibaldka',
            desc: 'gra dla 2 osób',
            url: basePath() + '/garibaldka',
            players: [2],
            cards: 'Dwie standardowe talie kart (2 x 52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Tradycyjna gra karciana powszechnie znana i uprawiana w całej Europie. Na obszarze języka angielskiego nazywana jest "russian bank" ("bank rosyjski"), na obszarze języka francuskiego "crapette", na obszarze języka niemieckiego "Schikanieren" ("szykanowanie").
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla dwóch osób. Dwie pełne talie kart (104 karty).<br />
                        Starszeństwo kart od króla do asa.<br />
                        Nie ma koloru atutowego.<br />
                        Każdy z grających gra własną talią kart.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Każdy z grających wykłada przed sobą ze swojej talii zakryty stos trzynastu kart, nazywany w toku dalszej gry magazynem. Wierzchnią kartę magazynu odsłania się. Ten z grających, na którego magazynie leży starsza karta, rozpoczyna grę.
                    </p>
                    <p>
                        Przed rozpoczęciem gry każdy z grających wykłada jeszcze ze swego talonu cztery karty, odkryte, pionowo w kolumnie. Są to kolumny kart pomocniczych. Leżą one tak, iż między nimi pozostaje wolne miejsce na zjawiające się w toku gry karty bazowe - wszystkie asy.
                    </p>
                    <p>
                        Rozpoczynający grę odsłania pierwszą kartę swego zakrytego talonu i teraz:
                    </p>
                    <ul>
                        <li>
                            ma prawo do środka układu położyć wszystkie asy spośród pomocniczych kart i na nie ewentualnie pasujące dalsze karty w tym samym kolorze o oczko wyższe (na asach stopniowo gromadzą się karty rosnąco do króli);
                        </li>
                        <li>
                            ma prawo na każdą kartę pomocniczą kłaść inną kartę pomocniczą, lecz tylko o jedno oczko niższą na wyższą w kolorach alternatywnych (czarna na czerwoną i odwrotnie); w ten sposób na kartach pomocniczych powstają odkryte stosy pomocnicze (wszystkie karty są widoczne), których wierzchnie, ostatnie karty są wolne do manipulacji;
                        </li>
                        <li>
                            wolna do manipulacji jest odkryta karta własnego magazynu - można ją położyć na kartę bazową lub na któryś ze stosów pomocniczych; gdy zgra się kartę z magazynu, odsłania się z niego następną kartę, która z kolei staje się wolna do manipulacji; gdy wyczerpią się karty magazynu, wolnego miejsca nie zapełnia się niczym;
                        </li>
                        <li>
                            wolna do manipulacji jest pierwsza, odsłonięta karta własnego talonu (wolno ją podejrzeć) - i tę można położyć na kartę bazową lub na któryś ze stosów pomocniczych; po zgraniu karty z zamkniętego talonu gracz ma prawo podejrzeć i zgrywać z niego następną kartę;
                        </li>
                        <li>
                            wszystkie karty wolne do manipulacji (ze stosów pomocniczych, własnego magazynu i talonu) można kłaść na wierzchnią kartę magazynu przeciwnika (utrudniając mu w ten sposób grę), lecz tylko kartę o jedno oczko wyższą lub o jedno oczko niższą i w tym samym kolorze (na asa wolno kłaść tylko dwójkę, nie króla);
                        </li>
                        <li>
                            gdy wyczerpie się któryś ze stosów pomocniczych, na miejsce wolne można położyć dowolną spośród kart wolnych do manipulacji i na niej nabudować nowy stos pomocniczy;
                        </li>
                        <li>
                            karty z jednego stosu pomocniczego na drugi wolno przenosić tylko po jednej.
                        </li>
                    </ul>

                    <p>
                        Gracz, który rozpoczął grę, gra tak długo, dopóki ma do wykonania jakiekolwiek kombinacje w układzie i dopóki zgrywa kolejne karty swego zamkniętego talonu. Gdy wyczerpał wszystkie kombinacje i odkrytej wierzchniej karty swego zamkniętego talonu nigdzie zgrać nie może, kładzie ją odkrytą przed sobą i kończy się jego tura gry. Odkryta karta talonu stanowi początek (dolną kartę) odkrytego talonu gracza - na niej będą w toku gry gromadziły się kolejne dalsze karty odkryte, których gracz nie będzie mógł włączyć do układu.
                    </p>
                    <p>
                        Do swojej tury gry przystępuje teraz drugi gracz, odkrywając wierzchnią kartę swego zakrytego talonu i wykonując wszystkie możliwe i korzystne dla niego przestawienia i kombinacje. Żaden z graczy w żadnym momencie gry nie ma obowiązku wykonywać żadnych przestawień i kombinacji, jeśli sobie tego nie życzy.
                    </p>
                    <p>
                        Kart raz zgranych na karty bazowe (do środka układu) nie wolno wycofywać do gry.
                    </p>
                    <p>
                        Gracz grający jako drugi ma jedną możliwość więcej, której nie miał rozpoczynający grę: może każdą kartę spośród wolnych do manipulacji dołożyć przeciwnikowi na wierzchnią kartę jego stosu otwartego, lecz tylko o jedno oczko niższą lub wyższą w tym samym kolorze. Gdy z kolei gracz drugi nie może już kontynuować kombinacji ani zgrać wierzchniej karty swego talonu, kładzie ją przed sobą na stos otwarty i kolej gry przechodzi znów na gracza pierwszego.
                    </p>
                    <p>
                        Gra toczy się do chwili, gdy jeden z graczy pozbędzie się wszystkich kart własnego magazynu i talonu zarówno odkrytego, jak i zamkniętego. Oznacza to wygranie gry.
                    </p>
                    <p>
                        Jeśli w toku gry wyczerpią się któremuś z graczy karty zamkniętego talonu, odwraca karty talonu otwartego i nowo powstały talon zamknięty zgrywa od początku.
                    </p>
                    <div className="example">
                        <div className="example content">
                            <p>
                                W sytuacji przedstawionej na poniższym rysunku jesteśmy na początku gry. Ujawniły się dotychczas tylko dwa asy bazowe, na jednym z nich leży już jedna karta (dwójka). Z ośmiu stosów pomocniczych aż sześć jest jeszcze jednokartowych, tylko w dwóch stosach leżą po dwie karty. U gracza dolnego wierzchnią, odkrytą kartą magazynu jest D <span className="diamond"></span>, wierzchnią kartą odkrytego talonu 5 <span className="club"></span>, której nie można już nigdzie zgrać do układu.
                            </p>

                            <div className="center-outer-container">
                                <div className="center-inner-container">
                                    <img className="pure-img" src={garibaldkaImg}></img>
                                </div>
                            </div>

                            <p>
                                U gracza górnego wierzchnią, odkrytą kartą magazynu jest 2 <span className="spade"></span>; odkrytego talonu jeszcze nie ma, gracz nie rozpoczął gry.
                            </p>
                            <p>
                                Gracz dolny mógłby wprawdzie 3 <span className="spade"></span>z układu umieścić na 2 <span className="spade"></span>(magazynowej) u przeciwnika, lecz nic to nie daje, gdyż gracz górny natychmiast przeprowadzi tę manipulację z powrotem. Nastąpił więc koniec tury gracza dolnego, do gry przystępuje teraz gracz górny.
                            </p>
                            <p>
                                Jeśli wierzchnią kartą jego talonu okaże się A <span className="spade"></span> wejdzie on do środka jako bazowy i na niego 2 <span className="spade"></span> z magazynu, odsłaniając jego kolejną kartę. Jednocześnie gracz będzie mógł zgrywać następną kartę talonu; być może okażą się jakieś nowe możliwości.
                            </p>
                            <p>
                                Jeśli wierzchnią kartą talonu będzie na przykłąd dowolna czerwona siódemka, pójdzie na 8 <span className="club"></span> na stos pomocniczy i na nią 6 <span className="spade"></span> z drugiego stosu pomocniczego. Zwolni się miejsce pomocnicze, powstanie możliwość rozładowania jeszcze jednej karty z magazynu (co jest najpilniejszym zadaniem w grze).
                            </p>
                        </div>
                    </div>

                    <h2 className="content-subhead">Wariant garibaldki</h2>
                    <p>
                        Można umówić się, iż istnieje dla każdego z graczy obowiązek natychmiastowego dokładania na karty bazowe tych wszystkich kart z układu, które można dołożyć.
                    </p>
                    <p>
                        Jeśli gracz nie zauważy takiej możliwości i przeprowadza jakąś inną kombinację przełożeń, jego przeciwnik stuka w stół - odbiera mu kolejkę gry, sam dokłada kartę do bazowych i przystępuje do swojej tury gry.
                    </p>

                </div>
            </div >
        );
    }
}
