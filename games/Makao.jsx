import React from 'react';


export default class Makao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Makao',
            desc: 'gra dla 3 lub więcej graczy',
            url: '/makao',
            players: [3, 4, 5, 6, 7, 8],
            cards: 'Standardowa talia kart (52 karty)'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Talia 52 kart.<br />
                        Starszeństwo kart nie ma znaczenia.<br />
                        Przy większej ilości graczy można używać kilku talonów kart.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Pierwszego rozdającego wybiera się przez losowanie. Następnie w kolejnych rozgrywkach gracze rozdają karty kolejno. Każdy z graczy otrzymuje po pięć kart. Po rozdaniu kart graczom wykładana jest na stół jeszcze jedna karta odkryta. Reszta kart odkładana jest na stół do talonu zakrytego. Wyłożona na stół karta nie może być dwójką, trójką, czwórką, waletem, królem lub asem. Jeśli jest którąś z powyższych kart wykłada się następną lub jeszcze jedną, aż do momentu kiedy któraś z nich będzie od nich różna. Wszystkie wcześniej wyłożone karty wkładamy zakryte na spód talonu.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Grę rozpoczyna zawsze gracz po lewej stronie rozdającego. Musi on rzucić kartę o takim samym kolorze lub takiej samej wartości co karta odkryta na stole.
                    </p>
                    <p>
                        Następni gracze dorzucają karty do koloru lub do wartości zgodnej z kartą wyrzuconą przez gracza poprzedniego. Jeśli nie mogą lub nie chcą wyrzucić karty z ręki na stos, biorą górną kartę z talonu zakrytego. Jeśli ta będzie zgodna z kartą, do której powinien dorzucić, może to zrobić.
                    </p>
                    <p>
                        Jeśli gracz, którego nadeszła kolej, ma więcej kart tej samej wartości, może wyrzucić ich dowolną ilość (wszystkie lub tylko część), pod warunkiem, że pierwsza z nich będzie zgodna z kolorem lub wartością karty, do której dorzuca. Kolejność reszty kart jest dowolna.
                    </p>
                    <p>
                        Jeżeli wyrzuconą przez gracza karta (lub kilka kart tej samej wartości) będzie 2, 3, 4, W, K lub A następują zdarzenia przypisane tym kartom:
                    </p>
                    <ul>
                        <li>
                            2 - gracz następny w kolejności pobiera z talonu zakrytego dwie karty;
                        </li>
                        <li>
                            3 - gracz następny w kolejności pobiera z talonu zakrytego trzy karty;
                        </li>
                        <li>
                            4 - gracz następny w kolejności traci kolejkę (do gry przystępuje następny z graczy);
                        </li>
                        <li>
                            W - gracz rzucający waleta żąda karty o dowolnej wartości (oprócz 2, 3, 4, W, K i A);
                        </li>
                        <li>
                            K - jeśli jest to K <span className="heart"></span>- następny gracz pobiera z talonu zakrytego 5 kart;<br />
                            jeśli jest to K <span className="spade"></span> - poprzedni gracz pobiera 5 kart z talonu zakrytego i do niego wraca kolejka;
                        </li>
                        <li>
                            A - gracz rzucający asa żąda dowolnego koloru;
                        </li>
                    </ul>

                    <p>
                        Jeśli gracz wyrzuci kilka dwójek, ich wartość sumuje się, i tak na przykład przy wyrzuconych trzech dwójkach następny gracz powinien pobrać 6 kart. Gracz, do którego rzucone były dwójki może (jeśli posiada na ręku) przekazać kolejkę dalej i zwiększyć jednocześnie liczbę kart do pobrania z talonu rzucając również dwójkę (lub kilka dwójek).<br />
                        Może również przekazać kolejkę dalej i zwiększyć liczbę kart do pobrania rzucając trójkę (lub kilka trójek).<br />
                        Może również przekazać kolejkę dalej i zwiększyć liczbę kart do pobrania rzucając K <span className="heart"></span> pod warunkiem, że ostatnio położona dwójka była tego samego koloru (tzn. 2 <span className="heart"></span>).<br />
                        Może również cofnąć kolejkę do gracza poprzedniego i zwiększyć liczbę kart do pobrania rzucając K <span className="spade"></span> pod warunkiem, że ostatnio położona dwójka była tego samego koloru (tzn. 2 <span className="spade"></span>) .
                    </p>
                    <p>
                        Może również rzucić np. na 2 <span className="spade"></span> K <span className="spade"></span> i dodatkowo K <span className="spade"></span>. W takiej sytuacji sumuje się wartość króli, a kolejka jest przekazywana do gracza następnego (określa to zawsze karta leżąca na wierzchu).
                    </p>
                    <p>
                        Do trójki (trójek) można dorzucać kolejne trójki, dwójki i odpowiednie króle, przekazując kolejkę do przodu bądź do tyłu i zwiększając liczbę kart do pobrania o odpowiednią ilość, na takich samych zasadach jak przy dwójkach
                    </p>
                    <p>
                        Sytuacja jest identyczna w wypadku K <span className="heart"></span> oraz K <span className="spade"></span>, do których można dorzucać kolejne króle, dwójki lub trójki.
                    </p>
                    <p>
                        W przypadku wyrzucenia przez któregoś z graczy czwórki, następny gracz traci tyle kolejek, ile czwórek zostało wyrzuconych. Jeśli posiada czwórkę na ręku, może (lecz nie musi) przekazać straty kolejek do następnego gracza. Jeśli nie posiada czwórki, nie pobiera karty z talonu i czeka określoną liczbę kolejek, nie biorąc w nich udziału.
                    </p>
                    <p>
                        Jeśli został wyrzucony walet, gracz który go wyrzucił może (lecz nie musi) zażądać karty o określonej wartości. Następni gracze muszą wyrzucić kartę o żądanej wartości lub kolejnego waleta żądając kart o wartości przez siebie wybranej. Przy kolejnym żądaniu wartości kart, poprzednie żądania są anulowane. Żądanie to jest ważne do momentu, aż kolejka wróci do gracza, który danej wartość kart żądał.
                    </p>
                    <p>
                        Identyczna sytuacja jest w przypadku wyrzucenia asa, z tym że zamiast wartości kart, żąda się koloru.
                    </p>
                    <p>
                        Jeśli podczas gry skończy się talon z kartami zakrytymi, zbiera się karty ze stosu odkrytego, tasuje się i kładzie się na stosie zakrytym.
                    </p>
                    <p>
                        Gra toczy się do momentu, aż tylko jeden gracz pozostanie z kartami na ręku, i ten gracz będzie przegranym.
                    </p>
                </div>
            </div>
        );
    }
}
