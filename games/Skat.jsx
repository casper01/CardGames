import React from 'react';


export default class Skat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Skat',
            url: '/skat',
            players: [3],
            cards: 'Skatowa talia kart (32 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">
                        Gra szczególnie popularna w Niemczech, ale znana także na całym świecie; u nas grywa się głównie na Śląsku.<br />
                        Skat powstał w ierwszych latach dziewiętnastego wieku z udanego połączenia reguł kilku innych, starszych gier (taroka, trappoli, lombra, kopy, solo) oraz nowych zasad. Pierwsze zasady gry ustalił notariusz i adwokat Fryderyk Ferdynand Hempel z Altenburga. Carl Neefe w roku 1817 wprowadził typowy dla skata i unikalny w grach karcianych rachunek matadorów (szczytów). Jednolite reguły gry ustalone zostały na pierwszym Kongresie Skatowym w sierpniu 1886r. w Altenburgu, nazywanym odtąd "miastem skata".<br />
                        Przepisy gry zamieszczone poniżej, oparte są na "Kodeksie skatowym" uchwalonym i uzupełnianym na kolejnych kongresach skatowych w Altenburgu w latach 1927, 1932, 1937 oraz na orzeczeniach tak zwanego "Sądu Skatowego", który rozstrzyga sprawy sporne między graczami, nadsyłane z całego świata, i działa od listopada 1963 roku, oczywiście w Altenburgu."
                    </div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 3 osób. W grze może brać udział czwarta osoba, lecz wtedy w kolejnych rozdaniach rozdający pauzuje (nie bierze udziału w grze).
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia kart tzw. skatowa (32 kary, od asa do siódemki).<br />
                        Starszeństwo kart: as, dziesiątka, król, dama, dziewiątka, ósemka, siódemka.<br />
                        Walet pełni rolę specyficzną, są zawsze (poza rozgrywkami zerowymi) atutami.<br />
                        Starszeństwo kolorów: trefle, piki, kiery, karo.<br />
                        Wartość obliczeniowa kolorów: trefle - 12pkt, piki - 11pkt, kiery - 10pkt, karo - 9pkt.
                    </p>
                    <p>
                        Przy grze w skata poszczególne karty i kolory kart noszą różne nazwy, tradycyjnie związane z tą grą. I tak:<br />
                        trefle to inaczej żołądź, krzyże, krajce;<br />
                        piki to inaczej wino, zieleń, liście, grin;<br />
                        kiery to inaczej czerwień, serce, herc;<br />
                        karo to inaczej dzwonki, szele.<br />
                        As to inaczej tuz, dama - wyżnik lub ober. Wreszcie walet to inaczej niżnik, unter, chłopiec, bubek lub dupek.
                    </p>
                    <p>
                        Wartość punktowa kart: as - 11, dziesiątka - 10, król - 4, dama - 3, walet - 2.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Każde rozdanie składa się z dwóch etapów: licytacji (rajcowania, zapowiedzi) i rozgrywki.
                    </p>
                    <p>
                        Celem gry jest osiągnięcie w kolejnych wygranych rozdaniach maksymalnej ilości punktów obliczeniowych.
                    </p>
                    <p>
                        Rozdanie jest wygrane przez gracza, jeśli w jego lewach (wziątkach) znajduje się co najmniej 61 punktów w poszczególnych kartach łącznie (wyjątkiem są rozgrywki zerowe).
                    </p>
                    <p>
                        Każdy z grających otrzymuje po 10 kart; na stole pozostają zakryte dwie karty (zwane talonem, tajlongiem, renonsem lub skatem). Karty rozdaje się w następujący sposób: każdemu graczowi po 3, 2 do talonu, każdemu graczowi po 4 i każdemu graczowi po 3.
                    </p>
                    <p>
                        Gracz po lewej ręce rozdającego jest graczem na przodku (przodkiem), drugi - graczem na środku (środkiem), sam rozdający - graczem na zadku (zadkiem).
                    </p>
                    <p>
                        Licytację rozpoczyna zawsze środek, licytując się z przodkiem; gdy jeden z tych graczy spasuje, do licytacji z pozostałym włącza się zadek. Oczywiście powinien zalicytować więcej niż pooprzednik lub spasować. Gdy przodek i środek od razu spasują, zadek może zapowiedzieć grę na najniższym poziomie. Gdy wszyscy trzej gracze spasują, tasuje się karty i rozdaje powtórnie (rozdaje kolejny gracz do rozdania).
                    </p>
                    <p>
                        Wygrywa licytację (zostaje solistą, rozgrywa sam przeciwko dwu pozostałym) ten z graczy, który zapowie najwyższą ilość punktów obliczeniowych.
                    </p>
                    <p>
                        Najniższa możliwa do uzyskania ilość punktów obliczeniowych w jednym rozdaniu to 18, najwyższa - 360.
                    </p>
                    <p>
                        W skacie istnieją dwie klasy i trzy rodzaje rozgrywek.
                    </p>
                    <p>
                        Pierwsza klasa to rozgrywki "na widzianego" (z podjęciem talonu). Gracz, który decyduje się na tę rozgrywkę, ma prawo podjąć talon, dwie karty w talonie dołączyć do swoich dziesięciu kart w ręku i następnie dowolnie wybrane dwie karty z ręki odłożyć znów zakryte do talonu. Karty te nie biorą udziału w rozgrywce, lecz zawarte w nich punkty liczą się dla solisty.
                    </p>
                    <p>
                        Druga klasa to rozgrywki z ręki ("na niewidzianego", bez podjęcia talonu). Gracz, który decyduje się na tę rozgrywkę, nie podejmuje ani też nie ogląda talonu. Karty w talonie nie biorą udziału w rozgrywce, lecz zawarte w nim punkty liczą się także dla solisty. Przy grze z ręki rozgrywający uzyskuje jeden dodatkowy współczynnik do obliczenia wartości gry.
                    </p>
                    <p>
                        Niezależnie od tego, kto wygrał licytację i jaką zapowiedział grę, pierwszym wychodzącym w rozgrywce jest zawsze przodek.<br />
                        Obowiązuje dorzucanie do koloru, gdy koloru brak na ręku, nie ma obowiązku przebijania, można zrzucić dowolną kartę.
                    </p>
                    <p>
                        W każdej klasie rozgrywek skatowych istnieją trzy rodzaje rozgrywek: kolorowe, zerówki (null) i waletówki (grand).
                    </p>
                    <p>
                        W rozgrywkach kolorowych istnieje jedenaście kart atutowych (cztery walety oraz siedem kart koloru). W waletówkach istnieją tylko cztery atuty (walety), wszystkie pozostałe karty są równoważne. W zerówkach nie ma w ogóle koloru ani kart atutowych. Zmienia się także starszeństwo kart: as, król, dama, walet, dziesiątka, dziewiątka, ósemka, siódemka.
                    </p>
                    <p>
                        Wartość gry kolorowej oblicza się, uwzględniając zasadniczą wartość koloru atutowego oraz ilość posiadanych lub nieposiadanych waletów i kart koloru atutowego w nieprzerwanym szeregu hierarchicznym (tzw. szczytów lub matadorów).
                    </p>
                    <p>
                        Jeśli gracz ma na ręku waleta treflowego, gra zawsze "z" (jednym szczytem lub z większą ich ilością). Jeśli gracz nie ma na ręku waleta treflowego, gra zawsze "bez" (jednego szczytu lub bez większej ich ilości).
                    </p>
                    <p>
                        Np. gracz ma na ręku waleta treflowego, waleta kierowego, waleta karowego oraz asa, dziesiątkę, króla i ósemkę kier - gra kiery "z jednym" (szereg atutów jest przerwany brakiem waleta pik; gracz ma w ręku tylko jedną kartę szczytową).
                    </p>
                    <p>
                        Gdy gracz ma na ręku wszystkie cztery walety, asa kier, króla kier i damę kier - gra kiery "z pięcioma" (ma pięć kart szczytowych; szereg atutów przerwany jest dopiero brakiem dziesiątki kier).
                    </p>
                    <p>
                        Gdy gracz ma na ręku waleta pik, waleta kier, waleta karo, asa kier, dziesiątkę kier i króla kier - gra kiery "bez jednego" (brak pierwszej kart szczytowej, najwyższej karty atutowej, waleta trefl, czyli dupka żołędnego, zwanego "starym").
                    </p>
                    <p>
                        Gdy gracz ma na ręku dziesiątkę kier, króla kier, damę kier i ósemkę kier - gra kiery "bez pięciu" (brak pięciu kart szczytowych: czterech waletów i asa kier).
                    </p>
                    <p>
                        Oczywiście identycznie jest we wszystkich innych kolorach atutowych; walety są przecież zawsze atutami.
                    </p>
                    <p>
                        Za wygraną grę kolorową "na widzianego" (uzyskanie w rozgrywce powyżej 61 punktów w zdobytych lewach) gracz otrzymuje tę ilość punktów obliczeniowych, która powstaje z pomnożenia sumy współczynników za grę i posiadane lub nie posiadane szczyty przez wartość obliczeniową koloru rozgrywki. Za wygraną grę gracz otrzymuje jeden współczynnik.
                    </p>
                    <p>
                        Na przykład:<br />
                        kiery bez dwu = 2 (bez dwu) + 1 (za wygraną) x 10 (wartość kierów) = 3x10 = 30 punktów obliczeniowych;<br />
                        kiery z dwoma = 2 (z dwoma) + 1 (za wygraną) x 10 (wartość kierów) = 3x10 = 30 punktów obliczeniowych;<br />
                        piki z pięcioma = (5+1)x11 = 66;<br />
                        trefle bez trzech = (3+1)x12 = 48;<br />
                        trefle z ośmioma = (8+1)x12 = 108.
                    </p>
                    <p>
                        Istnieją dodatkowe dwa stopnie wygranej. Gdy rozgrywający zdobędzie w rozgrywce (w lewach) ponad 89 punktów (przeciwnicy solisty nie mają w swoich lewach łącznie 31 punktów), jest to wygrana z tzw. "krawcem" (przeciwnicy solisty są krawcami lub "niedożywionymi"). Za wygraną z krawcem dolicza się wygrywającemu jeden współczynnik więcej za grę.
                    </p>
                    <p>
                        Na przykład:<br />
                        kiery bez dwu wygrane z krawcem = 2 (bez dwu) + 1 (za wygraną) + 1 (za krawca) x 10 (wartość kierów) = 4x10 = 40;<br />
                        piki z pięcioma i krawcem = (5+1+1)x11 = 72;<br />
                        trefle z ośmioma i krawcem = (8+1+1)x12 = 120.
                    </p>
                    <p>
                        Gdy rozgrywający zdobędzie wszystkie lewy, przeciwnicy zaś żadnej (wyszli "na czarno"), jest to wygrana "z kominiarzem". Za wygraną z kominiarzem dolicza się rozgrywającemu również jeden współczynnik więcej za grę.
                    </p>
                    <p>
                        Na przykład:<br />
                        piki z pięcioma wygrane z krawcem i na czarno = (5+1+1+1)x11 = 88.
                    </p>
                    <p>
                        Przy grach kolorowych z ręki za wygraną grę dolicza się wygrywającemu jeszcze jeden współczynnik.
                    </p>
                    <p>
                        Zasadnicza wartość obrachunkowa dla waletówek (gier grand) wynosi 24 punkty obliczeniowe. Ponieważ w tym rodzaju rozgrywek istnieją tylko cztery karty atutowe, gra może być przeprowadzona z jednym, dwoma, trzema lub czterema (a także bez nich).
                    </p>
                    <p>
                        Na przykład:<br />
                        waletówka z dwoma = 2 (z dwoma) + 1 (za wygraną) x 24 = 72;<br />
                        waletówka z trzema i z krawcem = (3+1+1)x24 = 120;<br />
                        waletówka z czterema, z krawcem i z kominiarzem = (4+1+1+1)x24 = 168.
                    </p>
                    <p>
                        Szczególnym rodzajem rozgrywki, najwyższym w skacie jest waletówka z ręki z wyłożeniem (otwarta). Przez jej podjęcie gracz zobowiązuje się wziąć wszystkie lewy niezależnie od rodzaju rozgrywki i przed pierwszym wyjściem wykłada karty na stół.
                    </p>
                    <p>
                        Zasadnicza wartość obrachunkowa dla waletówek otwartych z ręki (grand ouvert) wynosi 36 punktów obliczeniowych. Najwyższą możliwą ilość punktów w skacie uzyskuje gracz, który wygrywa waletówkę otwartą z ręki z czterema, z krawcem i z kominiarzem. Jest to następująca ilość punktów:<br />
                        4 (z czterema) + 1 (za grę) + 1 (za grę z ręki) + 1 (za krawca) + 1 (za krawca zapowiedzianego) + 1 (za kominiarza) + 1 (za kominiarza zapowiedzianego) x 36 (za waletówkę otwartą) = 10x36 = 360 punktów obliczeniowych.
                    </p>
                    <p>
                        Zerówki (gry zerowe, null) oblicza się wg stałej wartości punktowej wszystkich możliwych rozgrywek tego rodzaju. I tak:<br />
                        za zerówkę na widzianego (z podjęciem talonu) rozgrywający, który nie wziął ani jednej lewy, otrzymuje 23 punkty obliczeniowe;<br />
                        za zerówkę z ręki - 35pkt; za zerówkę na widzianego otwartą (z podjęciem talonu i wyłożeniem kart za stół przed pierwszym wyjściem) - 46pkt;<br />
                        za zerówkę z ręoki otwartą - 59pkt.
                    </p>
                    <p>
                        Grę z krawcem i kominiarzem oblicza się przy wszystkich rodzajach rodzajach rozgrywek oprócz zerówek, lecz zapowiedzieć je można tylko przy grach z ręki.
                    </p>
                    <p>
                        W skaci istnieją więc następujące stopnie wygranej (przynoszące dodatkowe współczynniki przy obliczaniu wartości gry):<br />
                        za grę - 1;<br />
                        za krawca - 1;<br />
                        za krawca zapowiedzianego - 1 (tylko z ręki);<br />
                        za kominiarza - 1;<br />
                        za kominiarza zapowiedzianego - 1 (tylko z ręki);<br />
                        za grę z ręki - 1;<br />
                        za grę z ręki otwartą - 1.
                    </p>
                    <p>
                        Gracz, który wygrywa licytację, zapowiadając zdobycie określonej liczby punktów obliczeniowych, ma obowiązek rozgrywać taką grę, której wartość jest równa lub większa od zapowiedzianej ilości punktów obliczeniowych.
                    </p>
                    <p>
                        Gracz, który przegrywa rozgrywkę (nie osiąga 61 punktów w zebranych lewach), otrzymuje punkty minusowe w ilości wartości zapowiedzianej gry, jeśli grał z ręki, oraz ilości podwojonej, jeśli grał na widzianego.
                    </p>
                    <p>
                        Gracz, który przegrywa rozgrywkę z krawcem lub z kominiarzem (nie osiąga nawet 31 punktów lub nie bierze ani jednej lewy), otrzymuje punkty minusowe obliczone z odpowiednio zwiększonymi współczynnikami wartości gry.
                    </p>
                    <p>
                        Przy zerówkach gracz rozgrywający przegrywa, jeśli przeciwnicy wezmą choćby jedną lewę, nawet jeśli w tej lewie nie ma żadnych punktów (składa się ona tylko z siódemek, ósemek lub dziewiątek).
                    </p>
                    <p>
                        Przy grach kolorowych i waletówkach, jeśli przeciwnicy rozgrywającego wezmą choćby jedną lewę, nawet jeśli w tej lewie nie ma żadnych punktów, nie przegrywają z kominiarzem, lecz tylko z krawcem.
                    </p>
                </div>
            </div>
        );
    }
}
