import { basePath } from '../utils';
import React from 'react';


export default class BlackJack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Black Jack',
            name2: '21',
            url: basePath() + '/blackjack',
            players: [2, 3, 4, 5, 6, 7, 8],
            cards: 'Standardowa talia kart (52 karty)'
        }
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">Gra hazardowa.</div>

                    <h2 className="content-subhead">O grze</h2>
                    <p>W kasynach do tej gry używa się specjalnych stołów pokrytych zielonym płótnem, na którym zaznaczone są okna do stawiania zakładów. Poniżej przedstawione są zasady gry lekko zmodyfikowane do użytku domowego :)</p>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>W grze uczestniczy krupier i maksymalnie siedmiu (?) graczy. <br />
                        Krupier jest pracownikiem kasyna gry. To on kieruje grą przy stole i odpowiada za porządek gry, przyjmując stawki i wypłacając wygrane.<br />
                        W domowej wersji black jacka rolę krupiera może pełnić jeden z graczy (np. gospodarz domu :).</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>Do gry używa się standardowej talii kart (52 karty). Z reguły krupier operuje sześcioma taliami jednocześnie.<br />
                        Nie występuje starszeństwo kolorów.<br />
                        Wartości punktowe figur: król, dama, walet i dziesiątka mają po dziesięć punktów; as ma 1 punkt lub 11 w zależności od sytuacji; reszta kart zgodnie z nominalną wartością na karcie.<br />
                        As ma domyślnie 11 punktów, lecz w sytuacji kiedy wszystkie karty z asem przekraczają liczbę 21 as przyjmuje wartość 1 (na korzyść gracza; np. A, 7 i 10 dawałyby sumę 28, ale że liczba ta jest większa od 21 as przyjmuje wartość 1 i suma tych trzech kart daje 18).</p>

                    <h2 className="content-subhead">Cel gry</h2>
                    <p>Celem gry jest uzyskanie w kartach 21 punktów. Najpewniejszą wygraną jest osiągnięcie black jacka.<br />
                        Black jack jest najwyższym układem kart w tej grze. Tworzą go dwie karty: as i jedna z kart, która ma dziesięć punktów (król, dama, walet lub dziesiątka). Muszą to być dwie pierwsze kart, które są rozdawane na początku gry, czyli karty "z ręki".<br />
                        Osiągnięcie układu black jack po rozdzieleniu kart nie jest black jackiem. Liczy się tylko jako 21 punktów.<br />
                        W sytuacji, gdy zarówno krupier jak i gracz mają black jacka, występuje remis i stawka pozostaje do dyspozycji gracza do następnego rozdania.
                    </p>
                    <p>
                        Ponieważ trafienie 21 oczek nie zdarza się za często, realizowany jest w grze cel zastępczy, czyli maksymalne zbliżenie się do tej liczby. Wygrywa ten, kto ma sumę punktów bliższą 21. Każdy, kto przekroczył 21 oczek, przegrywa; jest to tzw. fura (bust).</p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>Po przetasowaniu kart przez krupiera i przełożeniu ich przez jednego z graczy odkładane są na stole. Od tego momentu można rozpocząć stawianie zakładów.<br />
                        Obowiązują minimalne i maksymalne stawki.<br />
                        Gracze stawiają zakłady na swoich pulach, do momentu aż krupier sięgnie po kartę. Od tej chwili nie wolno już stawiać żadnych zakładów. Krupier rozdaje karty, kładąc po jednej przed każdym graczem oraz przed sobą. Rozpoczyna od gracza znajdującego się po lewej jego stronie.<br />
                        Karty są odkryte, tak że każdy może zobaczyć od początku co otrzymał, a także co otrzymał krupier i pozostali gracze. Jest to o tyle ważne, że każdy może oszacować szansę w pojedynku z krupierem. <br />
                        Następnie krupier rozdaje każdemu z graczy po jeszcze jednej odkrytej karcie i sobie również jedną, lecz zakrytą.<br />
                        Krupier pyta czy chcemy ciągnąć następną kartę. Gracz może żądać dowolnej liczby kart, niezależnie od tego ile punktów osiągnął. Krupier natomiast musi ciągnąć następną kartę, jeżeli suma dotychczasowa jest mniejsza lub równa 16; jeżeli suma kart przekroczy lub będzie równa 17, krupier zatrzymuje się. Wygrywa ten, kto ma sumę bliższą lub równą 21. W przypadku remisu pula pozostaje w puli zakładu do dyspozycji gracza.
                    </p>
                    <p>
                        W przypadku uzyskania przez gracza black jacka, krupier płaci 3:2. Oznacza to, że jeżeli postawiliśmy 4 żetony, to w przypadku black jacka otrzymamy 6, a jeżeli postawiliśmy 9, otrzymamy 13,5.
                    </p>
                    <p>
                        Jedyną przewagą krupiera w stosunku do gracza jest kolejność ciągnięcia kart. Krupier ciągnie karty ostatni, ma możliwość obejrzenia, co mają inni gracze, a poza tym wszystkie wcześniejsze fury u graczy przegrywają.</p>

                    <h2 className="content-subhead">Ubezpieczenie stawki</h2>
                    <p>Gracz może dokonać ubezpieczenia swojej stawki w przypadku, gdy pierwsza karty krupiera jest asem. Ubezpieczenie (insurance) polega na postawieniu odrębnego zakładu, którego wartość wynosi dokładnie połowę stawki, którą gracz pierwotnie postawił.<br />
                        Ubezpieczamy się na wypadek zdobycia przez krupiera black jacka i tylko wtedy ubezpieczenie wygrywa.<br />
                        W sytuacji, gdy pierwszą kartą krupiera jest as, istnieje duże prawdopodobieństwo, że otrzyma on kartę o nominale 10-ciu punktów. Wtedy ubezpieczenie wygrywa 2:1. Jeżeli jednak krupier nie otrzyma black jacka, wówczas ubezpieczenie przegrywa. Pozostaje jeszcze zakład, który może wygrać.</p>
                    <div className="example">
                        <div className="title">Przykład ubezpieczenia stawki:</div>
                        <div className="content">
                            Postawiliśmy zakład 5 żetonów i otrzymaliśmy kartę 9. Krupier wylosował asa. Przewidujemy, że krupier może otrzymać black jacka i zawieramy ubezpieczenie. Dodatkową stawkę, równą połowie zakładu (2,5 żetonu) umieszczamy na osobnej puli. Ciągniemy następne karty. Powiedzmy, że są to 4 i 5, łączna suma wynosi zatem 18.<br />
                            Krupier ciągnie kartę i otrzymuje waleta (walet ma 10pkt). Tak więc krupier otrzymał black jacka i tym samym nasz główny zakład przegrał (tracimy 5 żetonów). Ponieważ jednak ubezpieczyliśmy nasz zakład, nasze ubezpieczenie wygrywa 2:1. Otrzymujemy więc z powrotem 5 żetonów. W efekcie tej kombinacji pozostajemy z tą liczbą żetonów, ile wynosił nasz pierwotny zakład. Jeżeli krupier nie otrzymałby w tym przykładzie black jacka, lecz liczbę poniżej 18, wówczas przegralibyśmy ubezpieczenie, ale wygralibyśmy stawkę główną. Efekt - wygrywamy połowę stawki. Jeżeli krupier otrzymałby sumę kart większą niż 18, przegralibyśmy wszystko. Jeżeli suma wyniosła by dokładnie 18, przegralibyśmy tylko ubezpieczenie, stawka zaś pozostałaby nasza.
                            </div>
                    </div>

                    <h2 className="content-subhead">Podwojenie stawki</h2>
                    <p>Gracz może podwoić swoją pierwotną stawkę w przypadku, gdy suma w pierwszych jego dwóch kartach równa jest 9, 10 lub 11.<br />
                        Przykładowo, otrzymaliśmy układ dwóch kart 4 i 5, co daje w sumie 9 oczek. Stawka na naszej puli wynosi 5 żetonów. Możemy ją w tej sytuacji podwoić do 10 żetonów.
                    </p>
                    <p>
                        Najważniejsze przy podwajaniu stawki jest to, że możemy ciągnąć dodatkowo tylko jedną kartę i musimy się zatrzymać. W każdym przypadku, gdy krupier widzi układ upoważniający do podwajania stawki, pyta gracza, jaka jest jego decyzja.</p>

                    <h2 className="content-subhead">Rozdzielenie kart</h2>
                    <p>Jeżeli dwie pierwsze karty, które otrzyma gracz, mają taką samą liczbę punktów, np. 8 i 8, lub walet i król, wówczas gracz może rozdzielić karty na dwa odrębne zakłady (lecz nie ma takiego obowiązku). Oczywiście stawka zakładu znajdująca się na puli zostaje w tym momencie podwojona przez gracza, który od tej pory gra z krupierem dwoma zakładami. Do każdej z rozdzielonych kart ciągniemy dodatkowe karty, aby osiągnąć sumę najbardziej zbliżoną do 21.
                    </p>
                    <p>
                        Osiągnięcie w przypadku rozdzielenia dwóch asów układu: as i któraś z kart o wartości 10 punktów (król, dama, walet, dziesiątka), nie jest black jackiem, lecz liczy się jako 21pkt.<br />
                        Jest regułą, że przy rozdzielaniu dwóch asów gracz może ciągnąć tylko jedną kartę do każdego z nich.
                    </p>
                    <p>
                        Zdarza się, że po rozdzieleniu pierwszych dwóch kart otrzymamy znowu parę o jednakowej liczbie punktów. W takiej sytuacji możemy ponownie dokonać rozdzielenia kart i zwiększyć stawkę. Ponowne pojawienie się dwóch jednakowych kart pozwala na jeszcze jedno rozdzielenie kart - ostatnie z możliwych.</p>
                    <p>
                        Dodatkowo przy rozdzielaniu kart możemy otrzymać sumę dwóch kart równą 9, 10 lub 11. Każdorazowo wtedy możemy taką stawkę podwoić. Należy pamiętać, że przy podojeniu stawki możemy ciągnąć tylko jedną kartę.</p>
                </div>
            </div>
        );
    }
}
