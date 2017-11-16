import { basePath } from '../utils';
import React from 'react';


export default class SzescdziesiatSzesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sześćdziesiąt sześć',
            name2: '66',
            desc: 'gra dla 2 [3 i 4] osób',
            url: basePath() + '/szescdziesiatszesc',
            players: [2, 3, 4],
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
                        Jedna ze starszych gier karcianych, pochodząca z Niemiec. Jak twierdż niektórzy, grę tę wymyślili w westfalskim mieście Paderborn w 1652 roku stali bywalce szynku przy ulicy Eckkamp 66 - stąd ta liczba w przepisach i nazwie gry.<br />
                        Do Polski gra ta dotarła pod koniec XVII wieku, we francuskiej formi i pod nazwą mariasza; jej warianty znane były również jako gaigel i sznaps.
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla dwóch lub trzech graczy</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Do gry używa się małej talii kart (24 karty).<br />
                        Starszeństwo kart: as, dziesiątka, król, dama, walet, dziewiątka.<br />
                        Wartość punktowa: as - 11, dziesiątka - 10, król - 4, dama - 3, walet - 2, dziewiątka - 0.<br />
                        Istnieje zmienny kolor atutowy. Meldunek (król i dama w jednym kolorze) - 20pkt. Meldunek w kolorze atutowym - 40pkt.
                    </p>

                    <h2 className="content-subhead">Zasady gry</h2>
                    <p>
                        Każdy z grających otrzymuje po sześć kart, trzynastą kartę odkrywa się. Wyznacza ona kolor atutowy w danej rozgrywce. Kartę odkrytą umieszcza się na wpół widoczną pod zakrytym stosem.
                    </p>
                    <p>
                        W grze rozgrywane są kolejne lewy; pierwszy wychodzi przeciwnik rozdającego. Ten z graczy, który wziął lewę uzupełnia karty w ręku do sześciu, ciągnąc wierzchnią kartę ze stosu zakrytego, po czym to samo robi jego przeciwnik. Gracz, który wziął ostatnią lewę, wychodzi do następnej.
                    </p>
                    <p>
                        Posiadacz dziewiątki atutowej może, lecz nie musi, po wzięciu lewy i przed następnym wyjściem wymienić ją na kartę leżącą pod stosem zakrytym.
                    </p>
                    <p>
                        Dopóki leżą karty na stosie zakrytym nie ma obowiązku dorzucania do koloru i można przebijać kartę wyjściową atutem, nawet mając kartę w kolorze wyjściowym. Nie ma natomiast obowiązku przebijania przy braku koloru karty wyjścia; można zrzucić dowolną kartę.
                    </p>
                    <p>
                        Posiadacz meldunku zgłasza go ("melduje") wychodząc, co jest obowiązkowe, w jedną z kart meldunku (w króla lub w damę).
                    </p>
                    <p>
                        Gdy skończą się karty na stosie zakrytym, zmieniają się zasady rozgrywki: teraz istnieje obowiązek dorzucania do koloru i obowiązek przebijania atutem, gdy nie ma się karty w kolorze wyjścia.
                    </p>
                    <p>
                        Gracz, na którego przypada kolejność wyjścia po wzięciu lewy, może w każdym momencie rozgrywki "zamknąć grę" (wyjąć kartę atutową spod stosu zakrytego i położyć ją na nim). Wówczas gracze nie dobierają już kart ze stosu i gra toczy się do rozegrania ostatniej lewy tak, jakby skończyły się karty na stosie zakrytym.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Gracz, który pierwszy za karty wzięte w lewach i zgłoszone meldunki zdobył łącznie 66 punktów, wygrywa rozgrywkę, choćby nie dobiegła ona jeszcze końca. Liczenie zdobytych punktów powinien więc każdy z graczy na swój własny użytek prowadzić w pamięci na bieżąco.<br />
                        NIE WOLNO ZGLĄDAĆ DO KART WCHODĄCYCH W SKŁAD ZDOBYTYCH LEW.
                    </p>
                    <p>
                        Jeśli przeciwnik wygrywającego zdobył w swoich lewach i meldunkach ponad 33 punkty (tzw. woda), wygrywającemu za wygraną rozgrywkę liczy się jeden punkt.<br />
                        Jeśli przeciwnik wygrywającego w swoich lewach i meldunkach zdobył mniej niż 33 punkty, wygrywającemu za wygraną rozgrywkę liczy się dwa punkty.<br />
                        Jeśli przeciwnik wygrywającego nie zdobył ani jednej lewy, wygrywającemu za wygraną rozgrywkę liczy się trzy punkty.<br />
                        Przy grze zamkniętej wygrywający, niezależnie od ilości punktów zdobytych przez przeciwnika, zawsze zdobywa trzy punkty.<br />
                        Jeśli gracz, który zamknął grę nie zdobędzie do końca rozgrywki 66 punktów, jego przeciwnik zdobywa trzy punkty.
                    </p>
                    <p>
                        Gra toczy się do chwili zdobycia przez jednego z graczy ośmiu (lub - w zależności od umowy - siedmiu) punktów.
                    </p>

                    <h2 className="content-subhead">66 dla trzech osób</h2>
                    <p>
                        Każdy z grających otrzymuje po osiem kart; ostatnia karta, należąca do rozdającego, wyznacza kolor atutowy.<br />
                        Gra toczy się bez stosu zakrytego, a więc z obowiązkiem dorzucania do koloru i przebijania.<br />
                        Każdy z graczy gra na własny rachunek.<br />
                        Gdy żaden z graczy nie zdobędzie 66 punktów, następuje kolejna rozgrywka.<br />
                        Wszystkie inne zasady pozostają bez zmian.
                    </p>
                </div>

                <div className="content">
                    <a name="szwabacha"></a>
                    <h1 className="content-subhead main-header">Szwabacha</h1>
                    <div className="info">
                        Wariant gry (regionalny niemiecki).
                    </div>

                    <p>
                        Do gry używa się dwu identycznych, zmieszanych razem małych talii kart (48 kart). Każdy z grających otrzymuje osiem kart, reszta pozostaje na stosie zakrytym.
                    </p>
                    <p>
                        Jeśli w lewie spotkają się dwie identyczne karty, starsza jest ta, która była zagrana pierwsza.
                    </p>
                    <p>
                        Gra toczy się do chwili zdobycia przez jednego z graczy 101 punktów.<br />
                        Każdy z graczy gra na własny rachunek<br />
                        Pozostałe zasady gry nie ulegają zmianie.
                    </p>
                </div>

                <div className="content">
                    <a name="obierany"></a>
                    <h1 className="content-subhead main-header">Obierany</h1>
                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 3 osób.<br />
                        Talia 24 kart. Starszeństwo kart: A, 10, K, D, W, 9.<br />
                        Wartości kart: 9 - 0pkt, W - 2pkt, D - 3pkt, K - 4pkt, 10 - 10pkt, A - 11pkt.<br />
                        Meldunki: zykły - 20pkt, atutowy - 40pkt.
                    </p>

                    <h2 className="content-subhead">Licytacja</h2>
                    <p>
                        Wybrany losowo rozdający rozdaje każdemu graczowi po 4 karty naraz. Po rozdaniu wszyscy zaglądają w karty i zaczyna isę obieranie (licytacja). Rozpoczyna pierwszy gracz po lewej od rozdającego, tzw. Forant. Ma on trzy możliwości:
                    </p>
                    <ul>
                        <li>może wybrać kolor, który będzie kolorem atutowym - grany jest wtedy <a href="#wlasciwy" className="pure-menu-link underline">OBIERANY</a> (właściwy);</li>
                        <li>może powiedzieć: "KONTRA WARSZAWIE", czym sygnalizuje chęć grania w <a href="#warszawa" className="pure-menu-link underline">WARSZAWĘ</a>;</li>
                        <li>może powiedzieć: "DALEJ" (lub po prostu "PASS").</li>
                    </ul>
                    <p>
                        Jeżeli wybrał pierwszą możliwość, to "obieranie" zostało zakończone i rozdający może rozdać pozostałe karty (znowu po 4 naraz).<br />
                        Gdy wybierze drugą lub trzecią możliwość, prawo głosu ma następny gracz (a potem gracz trzeci), który również ma do wyboru powyższe trzy możliwości, z tym że w przypadku, gdy któryś z graczy dał KONTRĘ, następny może dać RE-KONTRĘ, a następny SUP.<br />
                        Jeżeli wszyscy trzej gracze powiedzą DALEJ, to rozgrywana jest <a href="#warszawa" className="pure-menu-link underline">WARSZAWA</a> bez KONTRY.<br />
                        Jeżeli obrana zostanie KONTRA lub RE-KONTRA, a następny gracz obierze jakiś kolor atutowy, to WARSZAWA zostaje anulowana i grany jest <a href="#wlasciwy" className="pure-menu-link underline">OBIERANY</a>.<br />
                        Po zakończeniu licytacji rozdający rozdaje pozostałe karty.
                    </p>

                    <a name="warszawa"></a>
                    <h2 className="content-subhead">Rozgrywka w WARSZAWĘ</h2>
                    <p>
                        Grę rozpoczyna ten, kto najwyżej przelicytował WARSZAWĘ (jeśli wszyscy gracze powiedzieli DALEJ, grę rozpoczyna Forant). Każdy gra na własny rachunek tak, aby jak najmniej ugrać.<br />
                        Jest obowiązek dawania do koloru oraz przebijania starszą kartą.<br />
                        Nie ma koloru atutowego.<br />
                        Po rozegraniu wszystkich lew podliczamy punkty. Przegrywa ten, kto ma ich najwięcej. W zależności o jaką stawkę była gra, otrzymuje następującą liczbę punktów:
                    </p>
                    <ul>
                        <li>bez KONTRY: 1pkt;</li>
                        <li>z KONTRĄ: 2pkt;</li>
                        <li>z RE-KONTRĄ: 4pkt;</li>
                        <li>z SUPem: 8pkt;</li>
                    </ul>
                    <p>
                        Przegrany rozdaje karty do następnej gry.
                    </p>

                    <a name="wlasciwy"></a>
                    <h2 className="content-subhead">Rozgrywka w OBIERANEGO</h2>
                    <p>
                        Rozpoczyna się, gdy jeden z graczy obierze kolor atutowy w licytacji. Oznajmia on wszystkim: "OBRANE" i podaje obrany kolor atutowy. Można się też umówić, że nie musi podawać od razu koloru atutowego - odkłada wtedy kartę w tym kolorze zakrytą na bok, aby można było potem ustalić co wybrał (z tego wynika, iż musi mieć przynajmniej jedną kartę w obranym kolorze).
                    </p>
                    <p>
                        Gdy rozdający rozda resztę kart rozpoczyna się kolejna licytacja. Gracze mogą teraz wybrać rozgrywkę w <a href="#mizerka" className="pure-menu-link underline">MIZERKĘ</a> lub w <a href="#druh" className="pure-menu-link underline">DRUHA</a>. Pierwszy ma możliwość wyboru gracz, który obrał kolor atutowy, jeśli jednak nie wybiera żadnej z tych rozgrywek pyta: "Czy ktoś coś ma?". Teraz pierwszeństwo w wyborze Fortan.<br />
                        Jeżeli dwóch graczy chce grać w MIZERKĘ, to pierwszeństwo ma pierwszy z nich, gdy jednak jeden wybierze MIZERKĘ a drugi DRUHA, to DRUH ma pierwszeństwo. Jeśli żadna z tych dwóch rozgrywek nie zostanie wybrana obierający może grać w OBIERANEGO.
                    </p>
                    <p>
                        Jeśli gracz obierający stwierdzi, iż nie jest w stanie wygrać, może "zrzucić" karty i przegrywa wtedy za 2pkt. Jeśli chce grać, mówi: "PYTAM SIE" (i wtedy właśnie podaje kolor atutowy, jeżeli wcześniej tego nie zrobił). W odpowiedzi pozostali gracze mogą odpowiedzieć "GRAJ" ("PCHAJ SIĘ") lub odpowiedzieć KONTRĄ (jeśli uważają, że gracz nie wygra). W tej sytuacji obierający, na zmianę z pozostałymi graczami, może się licytować, dając kolejno RE-KONTRĘ, SUP, MORT, LIBER-MORT, itd., podbijając w ten sposób stawkę gry za każdym razem dwukrotnie.<br />
                        Gdy (w końcu :) licytacja się zakończy, obierający rozpoczyna grę.<br />
                        Gra toczy się tak, jak przy grze w 66 bez stosu: należy dawać do koloru, przebijać, można meldować. Przeciwnicy obierającego grają wspólnie (przeciwko niemu), oczywiście nie widząc swoich kart, zbierając karty na jedną "kupkę". Gdy ktoś ugra 66 punktów, zgłasza to i wygrywa (musi być wtedy przy sztychu, tzn. musi wziąć lewę). Jeżeli nikt nie ugra 66 punktów, wygrywa ten, który weźmie ostatnią lewę.
                    </p>
                    <p>
                        Punktacja jak w 66 dla dwóch osób:
                    </p>
                    <ul>
                        <li>bez sztycha (gdy przeciwnicy nie zdobędą żadnej lewy): 3pkt;</li>
                        <li>bez wody (gdy przeciwnicy zdobędą mniej, niż 33 punkty): 2pkt;</li>
                        <li>z wodą gdy przeciwnicy zdobędą ponad 33 punkty): 1pkt;</li>
                    </ul>
                    <p>
                        Oczywiście, gdy gra toczy się z KONTRĄ, RE-KONTRĄ, itd. punkty są kolejno podwajane.<br />
                        Karty do następnej gry rozdaje obierający.
                    </p>
                    
                    <a name="mizerka"></a>
                    <h2 className="content-subhead">Rozgrywka w MIZERKĘ</h2>
                    <p>
                        W rozgrywce tej zmienia się starszeństwo kart, które jest tu następujące: A, K, D, W, 10, 9.<br />
                        Polega ona na tym, iż gracz który się na nią zdecydował, <strong>NIE MOŻE</strong> wziąć ani jednej lewy (sztycha). Jeśli to osiągnie - wygrywa, w przeciwnym wypadku przegrywa.<br />
                        Zaraz przed rozgrywką, przeciwnicy mogą mu dać KONTRĘ, on może odpowiedzieć, itd. (jak przy grze w <a href="#wlasciwy" className="pure-menu-link underline">OBIERANEGO</a>). Stawka wtedy kolejno się podwaja.<br />
                        Grę rozpoczyna gracz grający w MIZERKĘ. Zasady jak przy grze w 66 dla dwóch osób bez stosu.<br />
                        Nie ma koloru atutowego.
                    </p>
                    <p>
                        Za rozgrywkę w MIZERKĘ otrzymuje się 4pkt (oczywiście z KONTRĄ, RE, itd. zostaje ona odpowiednio podwojona).<br />
                        Karty do następnej gry rozdaje grający w MIZERKĘ.
                    </p>

                    <a name="druh"></a>
                    <h2 className="content-subhead">Rozgrywka w DRUHA</h2>
                    <p>
                        Starszeństwo figur jak przy normalnej grze.<br />
                        Zasady takie jak przy grze w <a href="#mizerka" className="pure-menu-link underline">MIZERKĘ</a>, z tym że <strong>trzeba</strong> wziąć wszystkie lewy (sztychy).<br />
                        Za rozgrywkę w DRUHA otrzymuje się 5pkt (oczywiście odpowiednio podojone przy grze z KONTRĄ, RE, itd.).<br />
                        Karty do następnej gry rozdaje , ten który wybrał grę w DRUHA.
                    </p>

                    <h2 className="content-subhead">Zakończenie</h2>
                    <p>
                        Cała gra w OBIERANEGO toczy się zazwyczaj na czas. Gracze dowolnie określają sobie jej długość.
                    </p>

                    <h1 className="content-subhead main-header">Obierany dla czterech osób</h1>

                    <h3>Wariant I</h3>
                    <p>
                        Gra toczy się tak, jak dla trzech osób, z tym że rozdający nie uczestniczy w rozgrywce, ale również zyskuje lub traci punkty solidaryzując się zawsze z większością przy grze w OBIERANEGO, DRUHA lub MIZERKĘ. Przy grze w WARSZAWĘ zawsze wygrywa.
                    </p>
                    <p>
                        Karty do następnej gry rozdaje następna osoba, a nie jak przy grze w trzy osoby, ten który prowadził rozgrywkę.

                    </p>
                    <h3>Wariant II (Brydżowy)</h3>
                    <p>
                        Gra toczy się w parach (jak w brydżu gracze z tej samej pary siedzą naprzeciwko siebie).<br />
                        Rozdający daje po cztery karty, a po licytacji rozdaje pozostałe.<br />
                        Każda para gra wspólnie (wspólnie zdobywając punkty).<br />
                        Przy tym wariancie nie gra się w MIZERKĘ ani w DRUHA (chociaż jeśli ktoś chce to może - należy to ustalić przed grą).<br />
                        Pozostałe zasady tak, jak przy grze z trzema osobami.
                    </p>
                </div>
            </div>
        );
    }
}
