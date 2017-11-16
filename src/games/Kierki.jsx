import { basePath } from '../utils';
import React from 'react';


export default class Kierki extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kierki',
            desc: 'gra dla 4 [3] osób',
            url: basePath() + '/kierki',
            players: [3, 4],
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
                        <p>
                            Grupa gier, przede wszystkim dla czterech osób, w porównaniu z wieloma innymi grami karcianymi, niejako "odwrotnych" (wygrywa nie ten z grających, który zdobywa maksimum punktów lub lew pozytywnych, lecz ten, któremu uda się do minimum uniknąć zapisania na swoje konto punktów i lew negatywnych). Gry tej grupy są na obszarze języka francuskiego ogólnie nazywane grami "misére", na obszarze języka angielskiego - grami "nullo".<br />
                            Kierki, uprawiane dzisiaj w różnych formach i wariantach w wielu krajach, zwane także grą w króla lub (z angielskiego) w kinga, wywodzą się z dawnej, szesnastowiecznej francuskiej gry "reversis" i angielskiej "reverse", a także z gier hiszpańskich "quinola", "espagnolette" i "cirulo", których warianty znane były w niewiele lat później i uprawiane w Polsce jako "chrapanka" i "drużbart".<br />
                            Zapalonym graczem w te gry był Jan III Sobieski.
                        </p>
                        <p>
                            Oprócz podstawowych zasad Kierek, które są opisane jako pierwsze, istnieje kilka wariantów tej gry:
                        </p>
                        <ul>
                            <li><a href={this.state.url + '#dzokerowe'} className="pure-menu-link underline">Kierki dżokerowe</a></li>
                            <li><a href={this.state.url + '#dominowe'} className="pure-menu-link underline">Kierki dominowe</a></li>
                            <li><a href={this.state.url + '#licytowane'} className="pure-menu-link underline">Kierki licytowane</a></li>
                            <li><a href={this.state.url + '#omnibus'} className="pure-menu-link underline">Omnibus</a></li>
                            <li><a href={this.state.url + '#slobberhannes'} className="pure-menu-link underline">Slobberhannes</a></li>
                            <li><a href={this.state.url + '#polignac'} className="pure-menu-link underline">Polignac</a></li>
                            <li><a href={this.state.url + '#czarnamanka'} className="pure-menu-link underline">Czarna Mańka</a></li>
                            <li><a href={this.state.url + '#metamorfoza'} className="pure-menu-link underline">Metamorfoza</a></li>
                        </ul>
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 4 [3] osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty). Starszeństwo kart od asa do dwójki. Wartość punktowa kart różna w różnych rozgrywkach.<br />
                        Nie ma koloru atutowego.<br />
                        Istnieje obowiązek dorzucania do koloru, lecz nie ma obowiązku przebijania starszą kartą w kolorze wyjścia.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Każdy z grających otrzymuje po 13 kart. Pierwszy wychodzi zawsze gracz po lewej od rozdającego. Rozgrywane są kolejne lewy. Gracz, który wziął lewę wychodzi do następnej.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pełna partia kierek składa się z sześciu kolejnych rozdań. W każdym z nich inne karty są minusowe, ujemne. Gracz, który w danym rozdaniu weźmie jedną lub więcej kart minusowych, zapisuje sobie odpowiednią ilość punktów minusowych. I tak:
                    </p>
                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>pierwsze rozdanie</td>
                                <td>bez lew</td>
                                <td>za każdą wziętą lewę 20 punktów</td>
                            </tr>
                            <tr>
                                <td>drugie rozdanie</td>
                                <td>bez kierów</td>
                                <td>za każdą wziętą kartę kierową 20 punktów</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td>trzecie rozdanie</td>
                                <td>bez dam</td>
                                <td>za każdą wziętą damę 60 punktów</td>
                            </tr>
                            <tr>
                                <td>czwarte rozdanie</td>
                                <td>bez panów</td>
                                <td>za każdego wziętego króla lub waleta 30 punktów</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td>piąte rozdanie</td>
                                <td>bez króla kier</td>
                                <td>za jego wzięcie 150 punktów</td>
                            </tr>
                            <tr>
                                <td>szóste rozdanie</td>
                                <td>bez ostatniej lewy</td>
                                <td>za jej wzięcie 150 punktów</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        W drugim rozdaniu nie wolno, jeśli ma się inne karty na ręku, wychodzić w kiery.<br />
                        W piątym rozdaniu nie wolno, gdy ma się inne karty na ręku, wychodzić w kiery; posiadacz króla kierowego - zależnie od umowy - nie ma lub ma obowiązek zrzucić go przy pierwszej okazji. Szóste rozdanie bywa, zależnie od umowy, rozgrywane także w dwu innych wariantach:
                    </p>
                    <ul>
                        <li>bez dwóch ostatnich lew; po 75 punktów za każdą z nich</li>
                        <li>bez siódmej i ostatniej lewy; też po 75 punktów za każdą z nich.</li>
                        <li>bez trzeciej i siódmej; też po 75 punktów za każdą z nich.</li>
                        <li>bez trzeciej i ósmej; też po 75 punktów za każdą z nich.</li>
                    </ul>
                    <p>
                        Niekiedy, zależnie od umowy, rozgrywane bywa także siódme rozdanie, zwane grą z "rozbójnikiem", "wariatem" lub "lokomotywą". W tym rozdaniu wszystkie karty minusowe z poszczególnych rozdań są minusowe naraz (w jednej lewie mogą znaleźć się punkty minusowe za wzięcie lewy, czterech kierów, damy, króla i waleta, króla kier i ostatniej lewy).<br />
                        Nie wolno w tym rozdaniu wychodzić w kiery.
                    </p>
                    <p>
                        Przy grze w kierki w trzy osoby usuwa się z talii dwójkę trefl i każdy z grających otrzymuje po siedemnaście kart. Zasady rozgrywki nie ulegają zmianie, nieznacznie zmienia się zapis punktowy:
                    </p>
                    <ul>
                        <li>za lewę - 15pkt</li>
                        <li>za kiery - 20pkt</li>
                        <li>za damę - 60pkt</li>
                        <li>za panów - 30pkt</li>
                        <li>za króla kierowego - 140pkt</li>
                        <li>za ostatnią lewę - 140pkt (lub za dwie ostatnie po 70pkt)</li>
                    </ul>
                    <p>
                        Istnieją dwa zasadnicze warianty zdobywania punktów plusowych: rozgrywka atutowa oraz tzw. loteryjka (loteryjka jest też samodzielną grą karcianą - jej zasady opisane są pod nazwą: fantan).
                    </p>
                    <p>
                        Wygrywający loteryjkę gracz otrzymuje 800 punktów plusowych; gracz, który pozbywa się swoich kart z ręki jako drugi, otrzymuje 500 punktów plusowych. Można rozgrywać loteryjkę nie raz, lecz czterokrotnie - wówczas w każdej rozgrywce pierwsza nagroda wynosi 200pkt plusowych, druga zaś 125pkt.<br />
                        Przy grze w trzy osoby i jednorazowym rozgrywaniu loteryjki nagrody wynoszą: pierwsza 790pkt, druga 485pkt. Przy grze w trzy osoby i trzykrotnym rozgrywaniu loteryjki nagrody wynoszą: pierwsza 250pkt, druga 175pkt w każdej z loteryjek.
                    </p>
                    <p>
                        Drugi zasadniczy wariant zdobywania punktów plusowych to rozgrywka atutowa, rozgrywana czterokrotnie (przy czterech grających) lub trzykrotnie (przy trzech).<br />
                        W rozgrywce atutowej po rozdaniu kart gracz na lewo od rozdającego (rozgrywający) pierwszy wychodzi z karty, lecz przed tym deklaruje swój kolor atutowy, który będzie obowiązywał w danej rozgrywce.<br />
                        Istnieje obowiązek dorzucania do koloru.<br />
                        Nie ma obowiązku przebijania atutem w przypadku nieposiadania koloru.<br />
                        Za każdą wziętą lewę ten z graczy, który ją wziął, otrzymuje 25 punktów plusowych. Po zakończeniu rozgrywki w następnym rozdaniu kolor atutowy wybiera następny gracz. Cykl rozgrywek kończy się, gdy każdy z graczy wybierał atu i był pierwszym wychodzącym.
                    </p>

                    <h2 className="content-subhead">Wariant rozgrywki atutowej</h2>
                    <p>
                        Każdy z grających otrzymuje po 12 kart, pozostałe cztery leżą odkryte na stole (przy trzech grających każdy otrzymuje po 16 kart, pozostałe trzy leżą odkryte na stole). Karty na stole są własnością rozgrywającego; może on włączyć je do swoich kart w ręku, każdemu z pozostałych graczy oddając jedną swoją dowolnie wybraną kartę zakrytą i deklarując kolor atutowy. Gracz rozgrywający może także odstąpić karty na stole i prawo nominowania koloru atutowego w danym rozdaniu któremuś z przeciwników w zamian za zadeklarowaną przez niego ilość punktów plusowych.
                    </p>
                    <p>
                        Deklaracje te odbywają się w trybie licytacji - każdy z graczy, poza rozgrywający, ma prawo zgłosić tę ilość punktów, którą ofiarowuje za karty na stole i prawo nominowania koloru atutowego. Licytację wygrywa ten z graczy, który zgłosił najwyższą ilość punktów. Wówczas włącza on karty ze stołu do swoich kart w ręku, każdemu przeciwnikowi oddając jedną swoją dowolnie wybraną kartę i deklarując kolor atutowy.
                    </p>
                    <p>
                        Rozliczenie z rozgrywającym następuje natychmiast po ukończeniu rozdania.<br />
                        Jeśli nominujący kolor atutowy zdobył ilość lew punktowo większą niż ilość punktów, które ofiarował za prawo nominowania koloru atutowego (na przykład karty zostały odstąpione za 125pkt, a gracz wygrywający licytację zdobył sześć lew, tj. 150pkt), w zapisie otrzymuje odpowiednio zmniejszoną ilość punktów i odpowiednią ilość punktów otrzymuje gracz, który oddał karty ze stołu do licytacji (w naszym przykładzie: dla gracza wygrywającego licytację - 25pkt; dla oddającego karty do licytacji - 125pkt za odstąpienie kart oraz dodatkowo ta ilość punktów za lewy, które sam zdobył w rozgrywce). Jeśli ilość punktów za lewy zdobyte nie wystarcza do pokrycia zobowiązania, zostają one odpisane z ogólnego zapisu gracza (i dopisane graczowi, który oddał karty ze stołu do licytacji).
                    </p>
                    <p>
                        Można wyobrazić sobie, iż w kolejnych czterech rozgrywkach atutowych licytowanych nominować kolor będzie ten sam gracz.<br />
                        Gracz rozgrywający ma prawo nie otwierać licytacji. Gdy ją jednak otworzył, ma obowiązek odstąpić karty na stole i prawo nominowania koloru atutowego dającemu najwięcej.
                    </p>
                    <p>
                        Gracz rozgrywający może otworzyć licytację warunkowo, deklarując minimalną liczbę punktów, jaką chce otrzymać za odstąpienie kart ze stołu i nominowanie koloru atutowego (np. 150 punktów). Gdy nie ma chętnych, może obniżyć wymaganą przez siebie liczbę punktów lub samemu nominować kolor atutowy.
                    </p>
                    <p>
                        Gdy gra się w kierki z "rozbójnikiem", konieczne są dwie tury rozgrywek plusowych. Wówczas tradycyjnie jedną z nich jest loteryjka, drugą zaś rozgrywka atutowa.
                    </p>
                </div>

                <div className="content">
                    <a name="dzokerowe"></a>
                    <h1 className="content-subhead main-header">Kierki dżokerowe</h1>
                    <div className="info">Amerykański wariant gry.</div>
                    <p>
                        Z talii usuwa się dwójkę trefl, umieszczając zamiast niej dżokera (przy grze w trzy osoby usuwa się dwójkę i trójkę trefl).
                    </p>
                    <p>
                        Kartami minusowymi są tylko kiery oraz dżoker. Za wzięcie asa kierowego - 14pkt, króla - 13pkt, damy - 12pkt, waleta - 11pkt, dziesiątki - 10pkt i dalej ilości punktów równe ilości oczek na karcie. Za wzięcie dżokera - 20 punktów minusowych.
                    </p>
                    <p>
                        Dżoker jest w rozgrywce kartą o specjalnych właściwościach: uważany jest za kartę kierową młodszą od waleta, lecz starszą od dziesiątki (bije więc każdą lewę, w której nie ma figury). W lewie niekierowej natomiast dżoker, niezależnie od koloru wyjścia, jest zawsze kartą najstarszą i bije tę lewę (nie można więc zrzucić dżokera na żaden inny kolor prócz kierów).
                    </p>
                    <p>
                        Każde rozdanie jest samodzielną rozgrywką. Pełna partia kierek dżokerowych obejmuje zazwyczaj tyle rozdań, ilu jest graczy.
                    </p>
                </div>

                <div className="content">
                    <a name="dominowe"></a>
                    <h1 className="content-subhead main-header">Kierki dominowe</h1>
                    <div className="info">Amerykański wariant gry.</div>
                    <p>
                        Kartami minusowymi są tylko kiery (każda karta kierowa - jeden punkt minusowy). Gra toczy się w kolejnych rozdaniach, dopóki w zapisie któryś z graczy nie osiągnie 31 punktów minusowych. Wówczas całą grę wygrywa ten z graczy, który ma najmniej punktów minusowych.
                    </p>
                    <p>
                        Każdy z grających otrzymuje po sześć kart, reszta kart pozostaje zakryta w talonie. W toku rozgrywki wolno wychodzić w kiery.
                    </p>
                    <p>
                        Istnieje obowiązek dorzucania do koloru, dopóki są karty w talonie. Jeśli gracz nie może dorzucić do koloru kolejnej lewy, ciągnie jedną lub więcej kart z talonu aż do chwili, gdy będzie mógł dorzucić do koloru.
                    </p>
                    <p>
                        Gdy wyczerpią się karty w talonie, wolno w przypadku braku koloru wyjścia zrzucić dowolną kartę.
                    </p>
                    <p>
                        Jeśli w toku rozgrywki któryś z graczy pozbędzie się wszystkich swoich kart z ręki, wypada z rozgrywki, która toczy się dalej z udziałem pozostałych graczy do chwili, gdy zostaną zgrane wszystkie karty lub gdy z kartami w ręku pozostanie tylko jeden z graczy (w tym ostatnim przypadku karty pozostałe w ręku dołącza on do swoich lew).
                    </p>
                    <p>
                        Jeśli w toku rozgrywki któryś z graczy pozbywa się swojej ostatniej karty z ręki, biorąc na nią lewę, gracz ten wypada z dalszej rozgrywki, obowiązek zaś wyjścia do następnej lewy przechodzi na gracza następnego (od jego lewej strony).
                    </p>
                </div>

                <div className="content">
                    <a name="licytowane"></a>
                    <h1 className="content-subhead main-header">Kierki licytowane</h1>
                    <div className="info">Amerykański wariant gry.</div>
                    <p>
                        Każdy z grających otrzymuje po trzynaście (przy trzech grających po siedemnaście) kart. Kartami minusowymi są tylko karty jednego, wybranego w licytacji koloru (za jedną taką kartę wziętą w lewie - jeden punkt minusowy).
                    </p>
                    <p>
                        Po rozdaniu kart gracz od lewej strony rozdającego rozpoczyna licytację, pasując lub deklarując pewną ilość punktów minusowych, którą zapisze sobie za prawo nominowania koloru minusowego w rozgrywce. Gracz, który w licytacji zadeklaruje najwyższą ilość punktów, wygrywa licytację - zapisuje sobie zadeklarowaną ilość punktów minusowych i wyznacza kolor minusowy danej rozgrywki; nie brać kier, nie brać pik, nie brać kar lub nie brać trefli.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach, dopóki w zapisie któryś z graczy nie osiągnie 77 punktów minusowych. Wówczas całą grę wygrywa ten z graczy, który ma najmniej punktów minusowych.
                    </p>
                </div>

                <div className="content">
                    <a name="omnibus"></a>
                    <h1 className="content-subhead main-header">Omnibus</h1>
                    <div className="info">Amerykański wariant gry.</div>
                    <p>
                        Kartami minusowymi są wszystkie kiery (za wzięcie karty kierowej - jeden punkt minusowy) oraz dama pikowa (za jej wzięcie - trzynaście punktów minusowych). Kartą plusową jest dziesiątka karo - za jej wzięcie liczy się graczowi 10 punktów plusowych.
                    </p>
                    <p>
                        W rozgrywce wolno wychodzić zarówno w kiery, jak w piki.
                    </p>
                    <p>
                        Jeśli któryś z graczy weźmie wszystkie kiery, damę pik i dziesiątkę karo (wszystkie karty punktowane), otrzymuje 26 punktów plusowych.
                    </p>
                    <p>
                        Przed rozpoczęciem rozgrywki każdy z graczy wybiera trzy dowolne karty ze swojej ręki i zakryte przekazuje je graczowi po lewej stronie, otrzymując w zamian trzy karty od gracza po prawej stronie.
                    </p>
                    <p>
                        Do pierwszej lewy wychodzi zawsze gracz po lewej stronie rozdającego.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach, dopóki w zapisie któryś z graczy nie osiągnie 100 punktów minusowych. Wówczas całą grę wygrywa ten z graczy, który ma najmniej punktów minusowych lub najwięcej plusowych.
                    </p>
                    <p>
                        Przy trzech grających - każdy otrzymuje po 17 kart; usuwa się z talii 2 <span className="club"></span>.
                    </p>
                    <p>
                        Przy czterech grających - każdy otrzymuje po 13 kart.
                    </p>
                </div>

                <div className="content">
                    <a name="slobberhannes"></a>
                    <h1 className="content-subhead main-header">Slobberhannes</h1>
                    <div className="info">Holenderski wariant gry dla trzech osób.</div>
                    <p>
                        Do gry używa się talii pikietowej (32 karty).<br />
                        Starszeństwo kart od asa do siódemki.<br />
                        Nie ma koloru atutowego.<br />
                        Istnieje obowiązek dorzucania do koloru.<br />
                    </p>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie.<br />
                        Wychodzi do pierwszej lewy zawsze gracz po lewej stronie rozdającego.<br />
                        Każdy z grających otrzymuje po osiem kart.
                    </p>
                    <p>
                        Za wzięcie pierwszej lewy - jeden punkt minusowy.<br />
                        Za wzięcie ostatniej lewy - jeden punkt minusowy.<br />
                        Za wzięcie damy treflowej - dwa punkty minusowe.
                    </p>
                    <p>
                        W rozgrywce można wychodzić w trefle.
                    </p>
                    <p>
                        Gra toczy się w kolejnych rozdaniach, dopóki w zapisie któryś z graczy nie osiągnie dziesięciu punktów minusowych. Wówczas całą grę wygrywa ten z graczy, który ma najmniej punktów minusowych.
                    </p>
                </div>

                <div className="content">
                    <a name="polignac"></a>
                    <h1 className="content-subhead main-header">Polignac</h1>
                    <div className="info">
                        Francuski wariant gry, pochodzący z XIX wieku.<br />
                        Nazwa pochodzi od nazwiska ministra w rządzie Karola X.<br />
                        Dzisiaj wariant ten uprawiany jest głównie w krajach anglosaskich.
                    </div>
                    <p>
                        Każdy z trzech grających otrzymuje po siedemnaście kart. Ostatnia karta zostaje odsłonięta i leży na stole. Wyznacza ona kolor atutowy w danej rozgrywce; sama udziału w rozgrywce nie bierze.
                    </p>
                    <p>
                        Do pierwszej lewy wychodzi zawsze gracz po lewej stronie rozdającego.<br />
                        Za wzięcie każdej lewy gracz otrzymuje jeden punkt plusowy.<br />
                        Wolno wychodzić we wszystkie kolory. W wypadku nieposiadania koloru wyjścia nie ma obowiązku przebijania atutem.
                    </p>
                    <p>
                        Za wzięcie waleta kierowego - 4 punkty minusowe;<br />
                        za wzięcie waleta karowego - 3 punkty minusowe;<br />
                        za wzięcie waleta treflowego - 2 punkty minusowe;<br />
                        za wzięcie waleta pikowego - 1 punkt minusowy.
                    </p>
                    <p>
                        Gra toczy się do chwili, gdy któryś z graczy osiągnie w zapisie 20 punktów plusowych, wygrywając grę.
                    </p>
                </div>

                <div className="content">
                    <a name="czarnamanka"></a>
                    <h1 className="content-subhead main-header">Czarna Mańka</h1>
                    <div className="info">Tradycyjny angielski wariant gry.</div>
                    <p>
                        Pełna talia kart, z której usunięto dwójkę trefl - a więc 51 kart.<br />
                        Starszeństwo kart od asa do dwójki.<br />
                        Nie ma koloru atutowego.
                    </p>
                    <p>
                        Każdy z grających otrzymuje po siedemnaście kart. Po uporządkowaniu kart każdy z graczy przygotowuje sobie trzy karty, których chce się pozbyć i przekazuje je swojemu partnerowi po prawej ręce, jednocześnie samemu otrzymując trzy inne karty od partnera po lewej ręce. Po dokonaniu wymiany każdy z graczy ma znów 17 kart. Następuje pierwsze wyjście i rozgrywka.
                    </p>
                    <p>
                        Wychodzi zawsze gracz po lewej ręce rozdającego.<br />
                        Obowiązuje dorzucanie do koloru.<br />
                        Nie ma obowiązku przebijania starszą kartą.<br />
                        Wolno wychodzić w każdy kolor.<br />
                    </p>
                    <p>
                        Kartami karnymi są:
                    </p>
                    <ul>
                        <li>wszystkie kiery - 1 punkt karny za każdy wzięty kier; wolno wychodzić w kiery;</li>
                        <li>dama pikowa - 13 punktów karnych (stąd nazwa gry); wolno wychodzić w piki;</li>
                        <li>król pikowy - 10 punktów karnych;</li>
                        <li>as pikowy - siedem punktów karnych;</li>
                    </ul>
                    <p>
                        Gra toczy się w szeregu rozdań do umówionej z góry ilości punktów karnych (zazwyczaj 100 lub 250, rzadziej 500). Ten z graczy, który ma najmniej punktów karnych, w chwili gdy jeden z grających osiągnął umówioną granicę punktów, wygrywa grę.
                    </p>

                    <h2 className="content-subhead">Partia przykładowa</h2>
                    <p>
                        Rozdawał gracz C.<br />
                        Układ kart u graczy jest następujący:
                    </p>
                    <p>
                        Gracz A<br />
                        W <span className="spade"></span>, 6 <span className="spade"></span>, 3 <span className="spade"></span>;<br />
                        A <span className="heart"></span>, K <span className="heart"></span>, 10 <span className="heart"></span>, 7 <span className="heart"></span>, 5 <span className="heart"></span>;<br />
                        D <span className="diamond"></span>, 9 <span className="diamond"></span>, 8 <span className="diamond"></span>, 2 <span className="diamond"></span>;<br />
                        K <span className="club"></span>, 10 <span className="club"></span>, 6 <span className="club"></span>, 5 <span className="club"></span>, 3 <span className="club"></span>;
                    </p>
                    <p>
                        Gracz B<br />
                        A <span className="spade"></span>, 9 <span className="spade"></span>, 7 <span className="spade"></span>, 5 <span className="spade"></span>, 2 <span className="spade"></span>;<br />
                        W <span className="heart"></span>, 6 <span className="heart"></span>, 3 <span className="heart"></span>, 2 <span className="heart"></span>;<br />
                        A <span className="diamond"></span>, K <span className="diamond"></span>, 7 <span className="diamond"></span>, 4 <span className="diamond"></span>, 3 <span className="diamond"></span>;<br />
                        D <span className="club"></span>, 8 <span className="club"></span>, 4 <span className="club"></span>;
                    </p>
                    <p>
                        Gracz C<br />
                        K <span className="spade"></span>, D <span className="spade"></span>, 10 <span className="spade"></span>, 8 <span className="spade"></span>, 4 <span className="spade"></span>;<br />
                        D <span className="heart"></span>, 9 <span className="heart"></span>, 8 <span className="heart"></span>, 4 <span className="heart"></span>;<br />
                        W <span className="diamond"></span>, 10 <span className="diamond"></span>, 6 <span className="diamond"></span>, 5 <span className="diamond"></span>;<br />
                        A <span className="club"></span>, W <span className="club"></span>, 9 <span className="club"></span>, 7 <span className="club"></span>;
                    </p>
                    <p>
                        Gracz A ma kartę raczej dobrą, postanawia w wymianie jeszcze ją sobie, o ile można, polepszyć, pozbywając się dość groźnych wysokich kart kierowych. Przygotowuje więc do wymiany dla gracza C: A <span className="heart"></span>, K <span className="heart"></span>, 10 <span className="heart"></span>.<br />
                        Karty gracza B też nie wyglądają źle - A <span className="spade"></span>jest dobrze chroniony wieloma małymi kartami w tym kolorze. Bardziej opłacalne więc, niż pozbywanie się A <span className="spade"></span>, jest pozbyć się całkowicie trefli, stworzyć renons w tym kolorze; to okazać się może bardzo przydatne w rozgrywce. Gracz B szykuje więc do wymiany dla gracza A: D <span className="club"></span>, 8 <span className="club"></span>, 4 <span className="club"></span>.<br />
                        Gracz C ma ,choć o tym oczywiście nie wie, najgorsze perspektywy. W wymianie pozbędzie się dwóch karnych kart pikowych, ale co z tego? Po refleksji przygotowuje do wymiany dla gracza B: K <span className="spade"></span>, D <span className="spade"></span>, D <span className="heart"></span>.
                    </p>
                    <p>
                        Następuje teraz wymiana kart (jednoczesna, między trzema graczami).<br />
                        Ostateczny układ kart przed rozgrywką jest następujący:
                    </p>
                    <p>
                        Gracz A<br />
                        W <span className="spade"></span>, 6 <span className="spade"></span>, 3 <span className="spade"></span>;<br />
                        7 <span className="heart"></span>, 5 <span className="heart"></span>;<br />
                        D <span className="diamond"></span>, 9 <span className="diamond"></span>, 8 <span className="diamond"></span>, 2 <span className="diamond"></span>;<br />
                        K <span className="club"></span>, D <span className="club"></span>, 10 <span className="club"></span>, 8 <span className="club"></span>, 6 <span className="club"></span>, 5 <span className="club"></span>, 4 <span className="club"></span>, 3 <span className="club"></span>;
                    </p>
                    <p>
                        Gracz B<br />
                        A <span className="spade"></span>, K <span className="spade"></span>, D <span className="spade"></span>, 9 <span className="spade"></span>, 7 <span className="spade"></span>, 5 <span className="spade"></span>, 2 <span className="spade"></span>;<br />
                        D <span className="heart"></span>, W <span className="heart"></span>, 6 <span className="heart"></span>, 3 <span className="heart"></span>, 2 <span className="heart"></span>;<br />
                        A <span className="diamond"></span>, K <span className="diamond"></span>, 7 <span className="diamond"></span>, 4 <span className="diamond"></span>, 3 <span className="diamond"></span>;<br />
                        <span className="club"></span> ---------
                    </p>
                    <p>
                        Gracz C<br />
                        10 <span className="spade"></span>, 8 <span className="spade"></span>, 4 <span className="spade"></span>;<br />
                        A <span className="heart"></span>, K <span className="heart"></span>, 10 <span className="heart"></span>, 9 <span className="heart"></span>, 8 <span className="heart"></span>, 4 <span className="heart"></span>;<br />
                        W <span className="diamond"></span>, 10 <span className="diamond"></span>, 6 <span className="diamond"></span>, 5 <span className="diamond"></span>;<br />
                        A <span className="club"></span>, W <span className="club"></span>, 9 <span className="club"></span>, 7 <span className="club"></span>;
                    </p>
                    <p>
                        Wychodzi A w W <span className="spade"></span>, bo to najbezpieczniej; spadają 7 <span className="spade"></span> i 10 <span className="spade"></span>. Znów wychodzi A w 6 <span className="spade"></span>, spadają 5 <span className="spade"></span> i 4 <span className="spade"></span> (ani B, ani C nie chcą być wychodzącymi). A po raz trzeci wychodzi w piki - tym razem w 3 <span className="spade"></span>. Spada 2 <span className="spade"></span> i C bierze lewę na 8 <span className="spade"></span>. B jest w szczególnie złej sytuacji, zostały mu same wysokie, wyrobione już piki.<br />
                        C wychodzi w W <span className="diamond"></span>, spadają D <span className="diamond"></span> i K <span className="diamond"></span>. B wychodzi w A <span className="diamond"></span>, spadają 10 <span className="diamond"></span> i 9 <span className="diamond"></span>. B raz jeszcze wychodzi w karo, pozbywając się niebezpiecznego dla niego koloru - na jego 7 <span className="diamond"></span> spada 6 <span className="diamond"></span> i A bierze lewę na 8 <span className="diamond"></span>. Sytuacja A jest też niezbyt dobra, ma za dużo wysokich kart treflowych. A wychodzi (uwaga! bardzo sprytnie) w 5 <span className="heart"></span>. B bije D <span className="heart"></span>, C kładzie 10 <span className="heart"></span> - B ma więc już za tę lewę trzy punkty karne. B wychodzi oczywiście w 4 <span className="diamond"></span>, C bije 5 <span className="diamond"></span>, A kładzie 2 <span className="diamond"></span>. C próbuje się ratować wychodząc w 4 <span className="heart"></span>, A bije 7 <span className="heart"></span>, B kładzie 6 <span className="heart"></span> - i trzy punkty karne dla A. Teraz ujawnia się celowość uprzedniego wyjścia A w kiery - spokojnie wychodzi on w 3 <span className="club"></span> i jest już zupełnie bezpieczny, do końca rozgrywki nie weźmie ani jednej lewy. Na 3 <span className="club"></span> B zrzuca W <span className="heart"></span> i także jest już całkiem bezpieczny; nieszczęsny C musi przebić 3 <span className="club"></span> i jakkolwiek by grał, weźmie wszystkie pozostałe lewy w rozgrywce, w nich siedem pozostałych kierów i wszystkie karne, wysoko punktowane karty pikowe - razem trzydzieści jeden punktów kanych.
                    </p>
                    <p>
                        Rozgrywka wydaje się prosta. Sprawdźmy jednak, co by się działo, gdyby w siódmej lewie A nie wyszedł sprytnie w 5 <span className="heart"></span>, lecz inaczej, na przykład od razu w 3 <span className="club"></span>.<br />
                        Wówczas C bierze lewę na A <span className="club"></span>, B zaś dorzuca D <span className="heart"></span>. C wychodzi w 5 <span className="diamond"></span>, na którą spadają 4 <span className="diamond"></span> i 2 <span className="diamond"></span>. C wychodzi więc w W <span className="club"></span>, spada 10 <span className="club"></span> i W <span className="heart"></span> od B. Teraz dalej w trefle: C wychodzi w 9 <span className="club"></span>, spada 8 <span className="club"></span> i D <span className="spade"></span> (trzynaście punktów kanych, klęska!) od B. C wychodzi w 8 <span className="heart"></span>, spadają na nią 7 <span className="heart"></span> i 3 <span className="heart"></span>, wreszcie C wychodzi w 4 <span className="heart"></span> i A bierze tę lewę (musi!) na 5 <span className="heart"></span>, od B zaś spada 2 <span className="heart"></span>. Teraz ostatnie cztery lewy bierze A na swoje już wyrobione trefle.
                    </p>
                    <p>
                        W tym wariancie B kończy rozgrywkę bez punktów karnych, C ma ich dziewiętnaście, A zaś dwadzieścia cztery punkty karne. Jak widać zupełnie inny wynik.
                    </p>

                    <h2 className="content-subhead">Warianty Czarnej Mańki</h2>
                    <p>
                        Można w nią grać też w 4, 5 lub 6 graczy.
                    </p>
                    <p>
                        Przy czterech graczach gra się pełną talią, każdy zaś otrzymuje po 13 kart i grać można albo każdy na własny rachunek, albo systemem bridżowym - dwu przeciwko dwom.
                    </p>
                    <p>
                        Przy pięciu graczach usuwa się dwie dwójki - treflową i karową.<br />
                        Każdy z graczy otrzymuje po 10 kart.
                    </p>
                    <p>
                        Przy sześciu graczach usuwa się wszystkie dwójki i każdy z graczy otrzymuje po 8 kart.
                    </p>
                    <p>
                        We wszystkich wariantach gry zawsze wymienia się trzy karty, co zwiększa w grze, gdy jest więcej graczy, element szczęścia i przypadku.
                    </p>
                </div>

                <div className="content">
                    <a name="metamorfoza"></a>
                    <h1 className="content-subhead main-header">Metamorfoza</h1>
                    <div className="info">
                        Wariant gry opracowany w 1962r. przez Roberta Abbotta z Nowego Jorku.
                    </div>
                    <p>
                        Do gry używa się pełnej talii kart (52 karty) oraz dla każdego z graczy dodatkowo as, dwójka, trójka i czwórka z innej talii. Te osiem (lub - przy trzech grających - dwanaście) kart pełni specjalną rolę, nie bierze udziału w grze.
                    </p>
                    <p>
                        Pełna partia metamorfozy składa się z czterech kolejnych rozgrywek o różnych zasadach rozgrywania i o różnych zasadach zapisu. I tak:
                    </p>
                    <ul>
                        <li>pierwsza rozgrywka: bez atu; za każdą wziętą kartę treflową - 4pkt minusowe;</li>
                        <li>druga rozgrywka: atu karo; za każdą wziętą kartę kierową - 3pkt minusowe;</li>
                        <li>trzecia rozgrywka: bez atu; za każdą wziętą kartę - 1pkt minusowy (a więc za lewę 2 lub 3 punkty minusowe, zależnie od liczby grających);</li>
                        <li>czwarta rozgrywka: bez atu; za każdą wziętą kartę pikową - 4pkt plusowe.</li>
                    </ul>
                    <p>
                        Każdy z grających otrzymuje po 12 kart; reszta pozostaje zakryta w talonie.
                    </p>
                    <p>
                        Po pierwszym rozdaniu każdy z graczy decyduje, w którym z kolejnych rozdań partii jego zdaniem wygrywa. Po podjęciu decyzji kładzie przed sobą jedną z czterech kart (asa, dwójkę, trójkę lub czwórkę) zakrytą dla zaznaczenia, iż deklaruje wygranie przez siebie pierwszej, drugiej, trzeciej lub czwartej rozgrywki.
                    </p>
                    <p>
                        Gdy gracze podjęli decyzję, odsłania się ich karty wskaźnikowe. Pozostają one odsłonięte do końca gry.
                    </p>
                    <p>
                        Gracz, który rzeczywiście wygrywa rozgrywkę zadeklarowaną wstępnie (osiąga w niej największą ilość punktów plusowych lub najmniejszą ilość punktów minusowych), otrzymuje w postaci premii dodatkowo 10 punktów plusowych. Jeśli w zadeklarowanej rozgrywce gracz zremisuje lub ją przegra, nie pociąga to za sobą żadnych skutków.
                    </p>
                    <p>
                        W pierwszej rozgrywce wychodzi do pierwszej lewy gracz po lewej stronie rozdającego.
                    </p>
                    <p>
                        Po zakończeniu rozgrywki karty nie są tasowane, lecz każdy z graczy używa kart zawartych w lewach, które wziął, do gry w drugiej rozgrywce.
                    </p>
                    <p>
                        Jeśli po zakończeniu pierwszej rozgrywki, a przed rozpoczęciem drugiej któryś z graczy ma w lewach (w ręku do drugiej rozgrywki) mniej niż dwanaście kart, brakującą mu ilość kart uzupełnia z zakrytego talonu.<br />
                        Jeśli gracz ma więcej niż dwanaście kart, nadwyżkę z rzuca według własnego wyboru.
                    </p>
                    <p>
                        W drugiej rozgrywce do pierwszej lewy wychodzi gracz, który wychodził w pierwszej rozgrywce.
                    </p>
                    <p>
                        I tym razem po zakończeniu rozgrywki karty nie są tasowane, lecz każdy z graczy używa kart zawartych w lewach, które wziął, do gry w następnej rozgrywce. Tym razem karty uzupełnia się (i zrzuca) inaczej: gracz, który ma kart za mało, ciągnie brakującą mu ilość kart z ręki gracza po lewej stronie; w ten sposób wszyscy gracze uzupełniają ilość posiadanych w ręku kart do dwunastu.
                    </p>
                    <p>
                        W trzeciej rozgrywce do pierwszej lewy wychodzi gracz po lewej stronie tego, który zaczynał rozgrywkę uprzednio.
                    </p>
                    <p>
                        I tym razem po zakończeniu rozgrywki karty nie są tasowane, lecz jak poprzednio każdy z graczy używa kart zawartych w lewach, które wziął, do czwartej, ostatniej rozgrywki.
                    </p>
                    <p>
                        Braki i nadwyżki kart w ręku usuwa się tym razem podobnie jak po pierwszej rozgrywce (ciągnąc brakującą ilość kart z talonu lub zrzucając nadwyżkę zakrytą na stół). W czwartej rozgrywce do pierwszej lewy wychodzi ten z graczy, który wychodził w rozgrywce trzeciej.
                    </p>
                    <p>
                        Po zakończeniu rundy rozgrywek sumuje się uzyskane wyniki (punkty plusowe i minusowe każdego z graczy).
                    </p>
                    <p>
                        Następnie do kolejnej rundy rozdaje karty gracz, który był pierwszym wychodzącym w pierwszej rozgrywce poprzedniej rundy.
                    </p>
                    <p>
                        Pełna tura gry składa się z czterech rund (szesnastu rozgrywek) przy dwóch grających lub z trzech rund (dwunastu rozgrywek) przy trzech grających.
                    </p>
                    <p>
                        Całą turę wygrywa ten z graczy, który zdobył największą ilość punktów plusowych lub (jeśli wszyscy gracze mają punkty minusowe) najmniejszą ilość punktów minusowych.
                    </p>
                </div>
            </div>
        );
    }
}
