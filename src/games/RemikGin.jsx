import { basePath } from '../utils';
import React from 'react';
import oklahomaImg from '../images/oklahoma.gif';


export default class RemikGin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Remik Gin',
            url: basePath() + '/remikgin',
            desc: 'gra dla 2 osób',
            players: [2],
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
                        Remik jest grupą gier karcianych dla dwu lub więcej osób; gra ta w różnych formach znana jest od dziewięćdziesiątych lat XIX wieku, wywodzi się z meksykańskiej gry "con quien", zwanej w krajach anglosaskich "cooncan". Od 1941 roku remik w różnych wariantach jest najbardziej popularną grą karcianą w USA, znaną tam jako gin rummy, tunk, kaluki, carousel, panguingue, zioncheck, michigan, pif-paf, szanghaj i inne.<br />
                        Najbardziej popularnym wariantem remika jest gra dla dwóch osób: remik gin (opisany jako pierwszy). Zasady do niego opracował w 1909 roku Elwood T. Baker z Brooklynu.<br />
                        Poniżej opisanych jest też kilka innych wariantów remika:
                        <ul>
                            <li><a className="pure-menu-link underline" href="#bridge">Remi bridż</a></li>
                            <li><a className="pure-menu-link underline" href="#oklahoma">Remik Oklahoma</a></li>
                            <li><a className="pure-menu-link underline" href="#500">Remik 500</a></li>
                        </ul>
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty).<br />
                        Starszeństwo kart - od króla do asa, który jest najniższą kartą.<br />
                        Nie ma koloru atutowego.
                    </p>

                    <h2 className="content-subhead">Zasady gry</h2>
                    <p>
                        Pierwszego rozdającego wybiera się przez losowanie. W następnych rozdaniach karty rozdaje zawsze ten z graczy, który wygrał poprzednie rozdanie.<br />
                        Rozdający daje każdemu (sobie i przeciwnikowi) po dziesięć kart, rozdając je po jednej. Dwudziestą pierwszą kartę odsłania, kładąc na stole. Karta ta tworzy stos odkryty i stanowi pierwsze wyjście w rozgrywce, do przeciwnika rozdającego. Jeśli ten nie bierze wyłożonej karty, ma prawo wziąć ją rozdający, zrzucając kartę z ręki. Ten przywilej dotyczy tylko pierwszej odsłoniętej karty.
                    </p>
                    <p>
                        Celem gry jest dla każdego z graczy takie zestawienie kart na ręku w odpowiednie układy, aby móc zameldować remika (gin) lub "zastukać" ("zapukać") i osiągnąć maksymalną ilość punktów w zapisie - w kolejnych rozgrywkach
                    </p>
                    <p>
                        Istnieją dwa rodzaje układów: komplety i sekwensy. Kompletem są trzy lub cztery karty tej samej wysokości; sekwensem są trzy lub więcej kolejnych kart w tym samym kolorze(np. as, dwójka, trójka karo; szóstka, siódemka, ósemka, dziewiątka trefl). As, król i dama nie są sekwensem, nie są nim również dwójka, as i król.
                    </p>
                    <p>
                        Komplet może być najwyżej czterokartowy, sekwens natomiast może być (choć jest to rzadkie) nawet dziesięciokartowy.
                    </p>
                    <p>
                        Wartość punktowa kart dla obliczenia wartości ręki i wysokości wygranej w poszczególnych rozdaniach wynosi:
                    </p>
                    <ul>
                        <li>
                            za karty w kompletach lub sekwensach - 0pkt
                        </li>
                        <li>
                            za luźne figury - po 10pkt
                        </li>
                        <li>
                            za luźne blotki - ilość punktów w wysokości danej blotki
                        </li>
                    </ul>
                    <p>
                        Gracz, który ma w ręku dziesięć lub mniej punktów, może "zastukać", to jest po dobraniu karty ze stosu zakrytego lub odkrytego zrzucić jedną kartę i karty z ręki wyłożyć na stół. Wówczas jego przeciwnik wykłada na stół posiadane przez siebie w ręku układy kart, ma także prawo dołożyć ze swoich luźnych kart te, które pasują do układów wyłożonych przez przeciwnika (np. czwartego waleta do wyłożonych trzech waletów; siódemkę i szóstkę pik do wyłożonego sekwensu piątki, czwórki i trójki pik). Nie wolno dokładać kart do kart luźnych, na które "stukano". Np. stukający wyłożył układy kart i dwójkę kierową - stuka z dwóch punktów. Przeciwnik stukającego ma w ręku luźne asa i trójkę kierową - nie wolno mu dołożyć ich do dwójki, musi je policzyć jako swoje punkty ujemne.
                    </p>
                    <p>
                        Jeśli stukający stukał na mniejszą ilość punktów niż suma punktów kart luźnych jego przeciwnika po wyłożeniu, zapisuje sobie różnicę punktów na swoją korzyść. Jeśli okaże się, że przeciwnik stukającego ma po wyłożeniu mniej punktów niż stukający, przeciwnik stukającego zapisuje sobie na swoją korzyść różnicę punktów oraz 25 punktów premii.
                    </p>
                    <p>
                        Jeśli gracz wykłada z ręki wszystkie dziesięć kart w kompletnych układach (ma remika, czyli gin), zapisuje sobie na swoją korzyść sumę punktów ujemnych (kart luźnych) u przeciwnika oraz 25 punktów premii. Przeciwnik nie ma prawa dokładania swoich kart luźnych do wyłożonych kombinacji, choćby do nich pasowały.
                    </p>
                    <p>
                        W kolejnych rozdaniach gra toczy się do chwili, gdy jeden z graczy osiągnie lub przekroczy sto punktów w zapisie - wówczas następuje ostateczne rozliczenie gry.
                    </p>
                    <p>
                        Jeżeli na stosie zakrytym pozostały już tylko dwie karty, a żaden z graczy nie zastukał ani nie zdobył remika, rozgrywka jest remisowa; rozdaje się karty powtórnie.
                    </p>
                    <p>
                        Przy ostatecznym rozliczeniu gry gracz, który wygrał, otrzymuje za wygraną 100 punktów premii oraz dodatkowo po 25 punktów premii za każdą z rozgrywek wygranych przez przeciwnika.
                    </p>

                    <p>
                        Przykładowy zapis
                    </p>
                    <table className="pure-table">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>Gracz A</td>
                                <td>Gracz B</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>49</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>55</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>87</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>118</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                    <p>
                        Pierwszą rozgrywkę wygrał gracz A, stukając z sześciu. Gracz B miał 19pkt, a więc wynik: 13 dla A.<br />
                        W drugiej rozgrywce gracz B miał remika, gracz A - 24pkt, a więc B wygrał 49pkt (24+25 za remika).<br />
                        W trzeciej rozgrywce gracz B stukał z ośmiu, gracz A miał dziewięć punktów - a więc 1 punkt dla gracza B.<br />
                        W czwartej rozgrywce gracz A stukał z 10; gracz B miał 27 - a więc A wygrał 17pkt.<br />
                        W piątej rozgrywce gracz B stukał z 4pkt; gracz A miał także 4pkt - a więc gracz A zapisuje sobie premiowe 25pkt. (Nie ma różnicy punktowej).<br />
                        W szóstej rozgrywce gracz A zastukał z siedmiu punktów, gracz B miał 39 - wygrywa A zdobywając 32pkt.<br />
                        W siódmej rozgrywce gracz A wyłożył remika, gracz B zaś miał 6pkt, a więc A zarobił 31pkt (6+25 za remika), przekraczając sto punktów w zapisie i tym samym wygrywając całą grę.
                    </p>
                    <p>
                        Teraz następuje ostateczne rozliczenie:<br />
                        gracz A (wygrany) ma w zapisie 118pkt; dopisuje sobie premię 100pkt za wygraną grę oraz premię punktową za rozgrywki. Gracz B wygrał dwie rozgrywki, gracz A - pięć rozgrywek, a więc o trzy rozgrywki więcej niż przeciwnik. Za każdą z tych trzech rozgrywek otrzymuje teraz po 25 punktów premii, a więc 75pkt. Łączna wygrana gracza A wynosi więc 118 (zapis) + 100 (partia) + 75 (premia za rozgrywki) - 50 (zapis B), czyli 243 punkty.
                    </p>
                </div>

                <div className="content">
                    <a name="bridge"></a>
                    <h1 className="content-subhead main-header">Remi bridż</h1>

                    <p>
                        Wariant gry.<br />
                        Dwie pełne talie kart (108 kart).<br />
                        Starszeństwo kart od asa do dwójki. Dżoker zastępuje każdą potrzebną kartę w układach.
                    </p>
                    <p>
                        Każdy z grających otrzymuje po 10 kart, sam rozdający - 11. Rozdający wykonuje pierwszą zrzutkę. Gracze kolejno dokupują karty ze stosu zakrytego lub odkrytego i kolejno zrzucają po jednej karcie.
                    </p>
                    <p>
                        Układy kart są identyczne jak w remiku ginie, tj. komplety i sekwensy. Dwa dodatkowe układy kart to kolor (wszystkie karty w jednym kolorze) oraz figury (wszystkie karty wyższe od dziesiątki). Można przed rozdaniem gry umówić się, że istnieje jeszcze jeden układ szczególny, tzw. kolor kolejny lub pełny sekwens (wszystkie karty kolejne i w jednym kolorze).
                    </p>
                    <p>
                        Pukać wolno najwyżej z pięciu punktów. Po wyłożeniu kart przez pukającego jego przeciwnicy nie mają prawa dokładania swoich kart luźnych do jego kombinacji, mają natomiast prawo do wymiany jeszcze jednej karty z któregoś ze stosów i wyłożenia ewentualnie utworzonych w wyniku wymiany układów kart.
                    </p>
                    <p>
                        Po wyłożeniu remika, koloru lub figur przeciwnicy nie mają prawa do dodatkowej kolejki w wymianie kart.
                    </p>
                    <p>
                        Gra toczy się w oparciu o umówioną przed rozpoczęciem gry stawkę do chwili, gdy wszyscy gracze oprócz jednego osiągną sto punktów ujemnych.<br />
                        Przed rozpoczęciem gry, każdy z grających wpłaca do puli umówioną stawkę. W toku rozgrywki wykładający remika otrzymuje od wszystkich swoich przeciwników stawkę, wykładający pełny sekwens - cztery stawki od każdego. Pukający otrzymuje od przeciwników po pół stawki; drugie pół stawki wpłacają oni do puli.
                    </p>
                    <p>
                        Zasady zapisu są następujące:<br />
                        wszystkie luźne figury liczy się po 10pkt, blotki według ilości oczek, luźnego dżokera - 20pkt.<br />
                        Zapis prowadzi się oddzielnie dla każdego gracza, notując mu jako punkty minusowe wszystkie kolejne punkty utracone w rozgrywkach oraz punkty, na które stukał.<br />
                        za wyłożenie remika - 10pkt plusowych (zmniejsza zapis minusowy);<br />
                        za kolor i figury - 25pkt plusowych;<br />
                        za pełny sekwens - 40pkt plusowych.
                    </p>
                    <p>
                        Gracz, który przekroczył 100pkt w zapisie, wypada z gry. Może do niej jeszcze wrócić, jeśli wpłaci do puli trzy stawki; bierze wtedy udział w dalszych rozgrywkach z tą ilością punktów, którą ma w zapisie gracz najbliższy granicy 100 punktów.
                    </p>
                    <p>
                        powracać do gry wolno wielokrotnie, dopóki poza wygrywającym daną rozgrywkę choćby jeden z graczy nie przekroczy granicy 100 punktów. Z chwilą, gdy granicę tę przekroczą wszyscy gracze prócz jednego, wygrywa on partię, zabierając pulę.
                    </p>
                </div>

                <div className="content">
                    <a name="oklahoma"></a>
                    <h1 className="content-subhead main-header">Remik Oklahoma</h1>

                    <p>
                        Wariant remika.<br />
                        Dodatkowe zasady gry i zapisu są następujące:<br />
                        pierwsza odsłonięta karta wyznacza, do ilu maksymalnie punktów wolno zapukać w danej rozgrywce (rozdaniu); jeśli jest to dziesiątka lub figura - do 10, dziewiątka - do 9, ósemka - 8, itd.; jeśli kartą odsłoniętą jest as, w danej rozgrywce pukać nie wolno, należy zakończyć ją remikiem.<br />
                        Jeśli odsłonięta karta jest koloru pikowego, wówczas zapis za daną rozgrywkę ulega podwojeniu.
                    </p>
                    <p>
                        Zapis prowadzi się trzykrotnie (w trzech naraz podwójnych kolumnach) i gra toczy się do momentu osiągnięcia przez któregoś z graczy umówionej z góry ilości punktów (zazwyczaj 150 lub 200) we wszystkich zapisach.
                    </p>
                    <p>
                        Na przykład w pierwszych siedmiu rozdaniach gra przebiega następująco:<br />
                        odsłonięto 6 kier; A zastukał z 4pkt, wygrywając 18pkt - tyle zdobywa w pierwszym zapisie;<br />
                        odsłonięto 8 karo; A zastukał z 2pkt, wygrywając 6pkt - tyle zdobywa w pierwszym i drugim zapisie;<br />
                        odsłonięto waleta trefl; A zastukał z 8pkt i wygrał 11pkt - punkty te zdobywa we wszystkich trzech zapisach;<br />
                        odsłonięto 4 karo; A zastukał z 2pkt i przegrał 26pkt (B miał tylko 1pkt na ręku) - punkty wygrane B zdobywa w pierwszym zapisie;<br />
                        odsłonięto 7 pik; B zastukał z 7pkt i wygrał 9pkt - ponieważ zapis jest podwojony, B zdobywa po 18pkt w pierwszym i drugim zapisie;<br />
                        odsłonięto 8 kier; B zrobił remika i wygrał 17pkt od A - wraz z premią za remika zdobywa więc 42pkt już we wszystkich trzech zapisach;<br />
                        odsłonięto asa trefl; A zrobił remika i wygrał od B 23pkt - wraz z premią za remika zdobył więc 48pkt we wszystkich trzech zapisach.
                    </p>
                    <p>
                        Po tych siedmiu rozgrywkach zapis równoległy przedstawia się następująco:
                    </p>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src={oklahomaImg}></img>
                        </div>
                    </div>

                    <p>
                        W pierwszym zapisie prowadzi gracz B, w pozostałych dwóch gracz A.<br />
                        Gdy w którymś z zapisów jeden z graczy osiągnie wygrywającą ilość punktów, zapis ten kończy się, gra zaś toczy się dalej w kolejnych rozgrywkach i jej wyniki zapisuje się w dwóch zapisach, potem w jednym, aż zakończone zostaną wszystkie trzy zapisy i cała gra.
                    </p>
                    <p>
                        Punkty wygrane i przegrane oblicza się we wszystkich trzech zapisach łącznie.
                    </p>
                </div>

                <div className="content">
                    <a name="500"></a>
                    <h1 className="content-subhead main-header">Remik 500</h1>
                    <div className="info">Wariant remika</div>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty) dla dwóch do czterech graczy. Gdy udział w grze bierze od czterech do ośmiu graczy - dwie pełne talie kart (104 karty).
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. W następnych rozdaniach gracze rozdają karty kolejno.
                    </p>
                    <p>
                        Rozdający rozdaje po 13 kart (przy dwóch uczestnikach) lub po 7 (przy trzech lub więcej uczestnikach gry). Reszta kart pozostaje na stole w zakrytym talonie; wierzchnią kartę tego talonu odsłania się - stanowi ona pierwszą kartę odkrytego stosu. Jest ona też pierwszym wyjściem w grze do gracza po lewej stronie rozdającego.
                    </p>
                    <p>
                        Gracz może kartę z otwartego stosu zabrać (wówczas ma obowiązek natychmiast kartę wziętą wyłożyć w jakimś układzie na stół) lub też wziąć wierzchnią kartę zakrytego talonu i zrzucić jedną kartę z ręki na stos otwarty. Do gry przystępuje następny z graczy w kierunku ruchu wskazówek zegara.
                    </p>
                    <p>
                        W kolejce gry można wziąć do ręki nie tylko wierzchnią kartę otwartego stosu, lecz także dowolną inną kartę w tym stosie (kolejne zrzutki do otwartego stosu układa się tak, by wszystkie karty były widoczne) - wówczas jednak należy wziąć do ręki również te karty, które leżą powyżej ostatniej karty branej w otwartym stosie, i natychmiast wyłożyć na stół w jakimś układzie ostatnią kartę wziętą ze stosu, stowarzyszoną tylko z kartami z ręki, lecz nie z innymi kartami ze stosu.
                    </p>
                    <p>
                        W kolejce gry po wzięciu karty ze stosu lub z talonu gracz ma prawo wyłożyć z ręki wszelkie inne posiadane układy kart oraz dołożyć z ręki na stół poszczególne karty pasujące do już uprzednio wyłożonych układów własnych lub współgraczy.
                    </p>
                    <p>
                        Celem gry jest dla każdego gracza zdobywanie w kolejnych rozdaniach maksymalnej ilości punktów za karty wyłożone na stół w odpowiednich układach lub dołożone do układów już istniejących.<br />
                        Za każdą figurę - 10pkt. Za wszystkie inne karty - ilość punktów równą wysokości danej karty (dziesiątka - 10pkt, as - 1pkt).<br />
                        As jest kartą najmłodszą. AKD nie jest sekwensem, natomiast A23 jest nim.<br />
                        Rachunek punktów zdobytych przez poszczególnych graczy prowadzi się na bieżąco.
                    </p>
                    <p>
                        Gdy któryś z graczy zakończy rozgrywkę, pozbywając się wszystkich kart z ręki, pozostałym z graczy sumę punktów wartości kart w ręku liczy się jako punkty minusowe (nawet jeśli są to nie wyłożone układy).<br />
                        Nie ma premii za zakończenie rozgrywki.
                    </p>
                    <p>
                        Całą grę wygrywa ten z graczy, który w zapisie pierwszy przekroczy 500pkt plusowych. Dane rozdanie rozgrywa się do końca. Jeśli więcej niż jeden gracz przekroczył w zapisie 500pkt, całą grę wygrywa ten, który ma więcej punktów.
                    </p>
                </div>
            </div>
        );
    }
}
