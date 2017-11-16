import { basePath } from '../utils';
import React from 'react';
import lampartImg1 from '../images/lampart1.gif';
import lampartImg2 from '../images/lampart2.gif';


export default class Lampart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Lampart',
            desc: 'gra dla 2 [4] osób',
            url: basePath() + '/lampart',
            players: [2, 4],
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
                        Gra opracowana w 1962 roku przez Roberta Abbotta z Nowego Jorku.
                    </div>

                    <h2 className="content-subhead">Gracze i karty</h2>
                    <p>
                        Gra dla 2 [4] osób.<br />
                        Do gry używa się dwóch pełnych talii kart.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Po przetasowaniu każdy z graczy otrzymuje osiem kart, reszta kart pozostaje w zakrytym talonie.<br />
                        Grę rozpoczyna przeciwnik rozdającego od uzupełnienia ilości kart w ręku do dziewięciu jedną z kart z zakrytego talonu, następnie zaś zrzuca lub wykłada jedną kartę.
                    </p>
                    <p>
                        W swojej kolejce gry gracz może:
                    </p>
                    <ul>
                        <li>
                            zrzucić zbędną mu kartę na otwarty stos zrzutek, które nie biorą udziału w grze;
                        </li>
                        <li>
                            wyłożyć jedną kartę dla siebie (do swego kwadratu);
                        </li>
                        <li>
                            lub wyłożyć jedną kartę dla przeciwnika (do kwadratu przeciwnika).
                        </li>
                    </ul>

                    <p>
                        Miejsce wykładania kart to dla każdego z graczy wyobrażony kwadrat, który przedstawia poniższy rysunek
                    </p>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src={lampartImg1}></img>
                        </div>
                    </div>

                    <p>
                        Na odpowiednich miejscach w kwadracie należy wykładać odpowiednie karty, tj. karty o różnej wartości, od Asa do 9. Jedna wyłożona na pusty stół karta wyznacza swoją wartością dokładne miejsce innych kart w kwadracie danego gracza.
                    </p>
                    <p>
                        Karty wykładane do kwadratu własnego lub przeciwnika można kłaść tylko na miejsce wolne lub zwolnione (z wyjątkiem kart specjalnych). I tak:
                    </p>
                    <ul>
                        <li>
                            karty od Asa do 9 wolno kłaść tylko na wolne lub zwolnione i właściwe miejsca u siebie lub u przeciwnika;
                        </li>
                        <li>
                            dziesiątkę wolno kłaść na wolne miejsce lub zwolnione, dowolnie wybrane miejsce, tylko u siebie;
                        </li>
                        <li>
                            waleta - kartę specjalną - wolno kłaść zawsze zakrytego na inną wyłożoną kartę, na dowolnie wybrane miejsce, u siebie lub u przeciwnika;
                        </li>
                        <li>
                            damę - kartę specjalną - wolno kłaść zawsze zakrytą na inną wyłożoną kartę, na dowolnie wybrane miejsce, tylko u siebie;
                        </li>
                        <li>
                            króla - kartę specjalną - wolno kłaść zawsze odkrytego na wolne lub zwolnione miejsce, a także na inną wyłożoną kartę, na dowolnie wybrane miejsce tylko u siebie.
                        </li>
                    </ul>

                    <p>
                        Miejsca w układzie zapełnione kartami zakrytymi (waletami i damami) uważa się za wolne. Na jednym miejscu w układzie może leżeć więcej niż jedna karta (jedna na drugiej); o cechach i wartościach miejsca decyduje karta leżąca na wierzchu.
                    </p>
                    <p>
                        Rozgrywkę wolno zakończyć w momencie, gdy w kwadracie gracza wyłożone jest co najmniej pięć punktów i na danego gracza przypada kolej gry. Może on wówczas złożyć deklarację zakończenia rozgrywki, lecz nie ma tego obowiązku - może kontynuować grę dla uzyskania większej liczby punktów. Rozgrywka kończy się z chwilą złożenia deklaracji o jej zakończeniu przez jednego z graczy, lub z chwilą wyczerpania się kart w talonie.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Za ułożenie w swoim kwadracie w jednym jego rzędzie, kolumnie lub przekątnej trzech kart jednej barwy (wszystkich czarnych lub czerwonych) gracz zdobywa w momencie zakończenia rozgrywki jeden punkt. Za ułożenie w ten sposób trzech kart jednego koloru (np. pików lub kierów) gracz zdobywa w momencie zakończenia rozgrywki dwa punkty.
                    </p>
                    <p>
                        Wolno w jednej rozgrywce w swoim kwadracie dążyć do zdobycia punktów za wyłożenie kart zarówno czarnych, jak i czerwonych (w różnych rzędach, kolumnach i przekątnych).
                    </p>
                    <p>
                        Z chwilą zakończenia rozgrywki graczom zapisuje się punkty uzyskane w danej rozgrywce według następujących zasad:
                    </p>
                    <ul>
                        <li>
                            przeciwnikowi gracza kończącego rozgrywkę: sumę punktów za wszystkie uzyskane właściwe układy kart w jego kwadracie;
                        </li>
                        <li>
                            graczowi kończącemu rozgrykę: sumę punktów za wszystkie właściwe układy kart w jego kwadracie, minus jeden punkt (za skończenie gry), plus punkty premiowe za ewentualne przekroczenie pięciu punktów w rozgrywce (wszystkie punkty powyżej pięciu liczą się podwójnie).
                        </li>
                    </ul>

                    <p>
                        Gra toczy się w umówionej z góry ilości rozdań (zazwyczaj po cztery rozdania) lub do osiągnięcia w zapisie umówionej z góry ilości punktów (zazwyczaj 33).
                    </p>
                    <p>
                        <strong>Przykładowe rozliczenie</strong> jednego rozdania przedstawia poniższy rysunek:
                    </p>

                    <div className="center-outer-container">
                        <div className="center-inner-container">
                            <img className="pure-img" src={lampartImg2}></img>
                        </div>
                    </div>

                    <p>
                        Zakończenie gry zadeklarował gracz górny. Uzyskał on w rzędach poziomych cztery pounkty (po jednym punkcie za dwa rzędy czerwone i dwa punkty za dolny rząd karowy), w rzędach pionowych trzy punkty oraz na przekątnych także trzy punkty (jedna przekątna czerwona za jeden punkt oraz jedna karowa za dwa punkty). Zdobył więc łącznie 10pkt, a więc przekroczył o pięć punktów próg pięciopunktowy i za te 5pkt przekroczenia liczy mu się podwójnie - 10pkt. W sumie gracz górny zdobył 15pkt minus jeden punkt za zakończenie, czyli 14 punktów.
                    </p>
                    <p>
                        Gracz dolny uzyskał cztery punkty (za dwa rzędy pionowe - kierowy i pikowy) - i nic więcej. Jedno miejsce w jego układzie jest zwolnione, zapewne damą lub waletem.
                    </p>

                    <h2 className="content-subhead">Lampart dla czterech osób</h2>
                    <p>
                        W tym wariancie gry gracze grają parami.<br />
                        Każdy z graczy otrzymuje po osiem kart.
                    </p>
                    <p>
                        Istnieją tylko dwa wykładane kwadraty dwóch walczących stron. Gracze kolejno wykładają i zrzucają karty do swojego kwadratu, kwadratu przeciwników lub na stos zrzutek.
                    </p>
                    <p>
                        Gracz, który chciałby zakończyć rozgrywkę (w kwadracie danej strony jest już 5pkt lub więcej), może, lecz nie ma obowiązku, zapytać partnera, czy ją zakończyć. Gracz pytający zobowiązany jest postąpić zgodnie z odpowiedzią partnera (np. jeśli partner nie zgodził się na zakończenie rozgrywki, gracz pytający nie może tego zrobić w tej kolejce gry).
                    </p>
                    <p>
                        Gra toczy się w umówionej z góry ilości rozdań (zazwyczaj po dwa rozdania) lub do osiągnięcia w zapisie umówionej z góry ilości punktów (zazwyczaj 33).
                    </p>
                    <p>
                        Wszystkie inne zasady gry i zapisu pozostają bez zmian.
                    </p>
                </div>
            </div>
        );
    }
}
