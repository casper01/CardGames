import React from 'react';


export default class Hejolek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hejołek',
            url: '/hejolek',
            players: [2, 3, 4, 5, 6, 7, 8],
            cards: 'Dwie standardowe talie kart (2 x 52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Informacje wstępne</h2>
                    <p>
                        Hejhołek jest grą w karty opracowaną 4 kwietnia 1998 roku przez Pawła Goleniowskiego i Małgorzatę Dulkę.<br />
                        Do gry używamy dwóch pełnych talii kart z dżokerami (108 kart). Liczba graczy - od dwóch do czterech. Rozdajemy po 11 kart na gracza. Następnie wykładamy pięć na stół koszulką do blatu - są to tzw. karty odkryte. Pozostałe karty odkładamy na bok koszulkami do góry (karty zakryte).
                    </p>

                    <h2 className="content-subhead">Klucze</h2>
                    <p>
                        Podstawowy i jedyny układ kart w hejhołku to klucz. W hejhołku wyróżniamy tylko dwa kolory kart: czerwony (kier i karo) oraz czarny (pik i trefl). Kluczem nazywamy dwie lub więcej kart, tego samego koloru ułożonych kolejno z jedną kartą odstępu. Dzięki temu karty w kluczu są albo tylko parzyste, albo tylko nieparzyste. Oto przykłady kluczy:
                    </p>
                    <ul>
                        <li>2 pik i 4 pik</li>
                        <li>7 karo, 9 kier i Walet karo</li>
                        <li>10 trefl, Dama trefl i As pik</li>
                        <li>As karo, 3 kier i 5 kier</li>
                        <li>Walet trefl i Król pik</li>
                    </ul>
                    <p>
                        As może służyć zarówno jako 1 (karta niższa od 2) jak i normalny As, czyli karta wyższa od Króla. Dżoker może zastąpić dowolną kartę w kluczu. W kluczu liczba dżokerów nie może przekroczyć połowy liczby kart.
                    </p>

                    <h2 className="content-subhead">Możliwe ruchy</h2>
                    <p>
                        W hejhołku można wykonywać trzy rodzaje ruchów. W jednej turze gracz może wykonywać dowolną ilość wszystkich rodzajów ruchów. Oto możliwości ruchu:
                    </p>
                    <ul>
                        <li>
                            <strong>Wyłożyć klucz</strong> Jezeli gracz posiada na ręce klucz lub parę kluczów może wyłożyć je na stół. Klucze takie nie należą wtedy do nikogo i można na nich wykonywać dwa pozostałe rodzaje ruchów.
                        </li>
                        <li>
                            <strong>Rozbudować klucz</strong> Gracz może dołożyć dowolną ilość kart do wyłożonego już na stół klucza, jednak rozbudowany klucz musi być prawidłowy, tzn. jednakowego koloru i albo tylko parzysty albo tylko nieparzysty.
                        </li>
                        <li>
                            <strong>Przybić klucz</strong> Klucz już wyłożony może zostać przybity przez inny klucz będący dotychczas na ręcę gracza. Klucz, którym przybijamy musi być przeciwnej barwy do klucza przybijanego oraz wypełnić wszystkie luki pomiędzy kartami wcześniej wyłożonymi (np.: na stole jest już wyłożony klucz 3 kier, 5 karo i 7 kier; przybijamy kluczem 4 trefl i 6 pik; uzyskujemy taki układ kart: 3 kier, 4 trefl, 5 karo, 6 pik i 7 kier). Liczba kart w kluczu którym przybijamy zależy od liczby kart w kluczu który jest już wyłożony i który przybijamy. Możliwą liczbę kart przybijających przedstawia poniższa tabela:
                            <table className="pure-table pure-table-horizontal">
                                <tbody>
                                    <tr className="pure-table-odd">
                                        <td>ilość kart w kluczu</td>
                                        <td>ilość kart przybijających</td>
                                    </tr>
                                    <tr>
                                        <td>2 karty</td>
                                        <td>od 2do 3</td>
                                    </tr>
                                    <tr>
                                        <td>3 karty</td>
                                        <td>od 2do 4</td>
                                    </tr>
                                    <tr>
                                        <td>4 karty</td>
                                        <td>od 3do 5</td>
                                    </tr>
                                    <tr>
                                        <td>5 kart</td>
                                        <td>od 4do 6</td>
                                    </tr>
                                    <tr>
                                        <td>6 kart</td>
                                        <td>od 5do 7</td>
                                    </tr>
                                    <tr>
                                        <td>7 kart</td>
                                        <td>od 6do 7</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>

                    <h2 className="content-subhead">Przebieg gry</h2>
                    <p>
                        Grę rozpoczyna gracz po prawej stronie rozdającego. Kolejka przechodzi na następnego gracza nie zgodnie z kierunkiem wskazówek zegara. Wykonuje on dowolną liczbę ruchów opisanych w poprzednim akapicie. Jeżeli przybije klucz, karty z tego klucza i karty którymi przybił klucz przechodzą na jego konto punktowe. Po zakończeniu gry karty z konta punktowego są przeliczane na punkty (patrz: następny akapit). Jeżeli gracz kończy swoją turę i chce przekazać ruch następnemu graczowi to dociąga karty z kupki na boku tak, aby znów miał 11 kart na ręku, przy czym ma on prawo dociągnąć na samym początku jedną kartę spośród pięciu odkrytych leżących na stole, a resztę spośród kart zakrytych. Jeśli zacznie już dociągać spośród kart zakrytych to nie ma prawa wykorzystać odkryte pięć kart. Po dociągnięciu kart, w przypadku gdy wykorzystano którąś z piątki odkrytych kart, należy dołożyć jedną, tak aby na stole znowu leżało pięć odkrytych kart. Gdy kupka się wyczerpie, na koniec tury dociąga się po jednej karcie z kart odkrytych, a gdy i ich zabraknie gracz sygnalizuje koniec tury słowami "hoł-hej". Następny gracz wykonuje kolejkę według tych samych zasad.
                    </p>

                    <h2 className="content-subhead">Zakończenie gry</h2>
                    <p>
                        Gra kończy się w dwóch przypadkach: gdy wszyscy gracze pozbędą się swych kart lub gdy wszyscy spasują. Gra kończy się również, gdy część graczy pozbędzie się kart, a reszta spasuje. Gracz pasuje, wymawiając słowo "hej-hoł-hej". Aby spasowanie było ważne, wszyscy gracze po kolei muszą spasować. Jeżeli chociaż jeden gracz nie spasuje, tylko wykona ruch, pas jest nieważny. Po zakończeniu gry liczy się punkty za karty odłożone na konto punktowe. Wartości punktowe każdej karty przedstawia poniższa tabela:
                    </p>

                    <table className="pure-table pure-table-horizontal">
                        <tbody>
                            <tr className="pure-table-odd">
                                <td>rodzaj karty</td>
                                <td>ilość punktów</td>
                            </tr>
                            <tr>
                                <td>od 2 do 5</td>
                                <td>1 punkt</td>
                            </tr>
                            <tr>
                                <td>od 6 do 10</td>
                                <td>2 punkty</td>
                            </tr>
                            <tr>
                                <td>Walet</td>
                                <td>3 punkty</td>
                            </tr>
                            <tr>
                                <td>Dama</td>
                                <td>4 punkty</td>
                            </tr>
                            <tr>
                                <td>Król</td>
                                <td>5 punktów</td>
                            </tr>
                            <tr>
                                <td>As i Dżoker</td>
                                <td>3 punkty</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Grę wygrywa gracz, który zdobędzie najwięcej punktów.
                    </p>
                </div>
            </div>
        );
    }
}
