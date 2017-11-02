import React from 'react';


export default class Machana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Machana',
            desc: 'gra dla 2 - 4 graczy',
            url: '/machana',
            players: [2, 3, 4],
            cards: 'Mała talia kart + Joker (25 karty)'
        }
    }
    
    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info"> Gra polska, stworzona około 1948 roku. Znana jest również pod nazwą 1224</div>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 - 4 osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Mała talia kart + Joker (25 karty).<br />
                        Starszeństwo kart: bez znaczenia.<br />
                        Wartość punktowa: 9 - 9, 10 - 10, Walet - 20, Dama - 30, Król - 40, As - 50, Joker - 66, Walet Karo - 22, Dama Trefl - 33, Król Pik - 44, As Kier - 55.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszy rozdający wybierany jest losowo, później rozdaje gracz siedzący na lewo od pierwszego rozdającego.<br />
                        Między graczy rozdaje się po 3 karty, Reszta pozostaje w zakrytym talonie.<br />
                        Przy małej ilości graczy, tj. tylko 2, dopuszcza się rozdawanie po 4 karty.
                    </p>
                    <p>
                        Grę rozpoczyna gracz siedzący po lewej stronie rozdajacego. Gracz zdobywa punkty tylko z kart, które znajdują się w jego puli. Do puli można wkładać tylko dziewiątki i dziesiątki.
                    </p>
                    <p>
                        Można to jednak zrobić tylko wtedy, gdy gracz posiada minimum jedną inną kartę, czyli np. Waleta, Damę, Króla, Asa.<br />
                        Każdej z tych kart przyporządkowana jest liczba, tj.: As - 1, Walet - 2, Dama - 3, Król - 4.
                    </p>
                    <p>
                        Wtedy gracz wyrzuca na środek jedną z tych kart (jeśli nie posiada żadnej z tych kart lub żadnej dziewiątki czy dziesiątki - dobiera jedną kartę z nie rozdanych i kolej przechodzi na następnego gracza).<br />
                        Po zrzuceniu na środek np. Króla, gracz może dołożyć do swojej puli (położyć przy sobie) dowolną liczbę dziewiątek i dziesiątek, lecz maksymalnie tyle kart ile wynosi liczba przypisana do wyrzucanej na środek karty, czyli w tym przypadku 4.<br />
                        Gracz dobiera z nierozdanych tyle kart ile nie włoży do swojej puli.
                    </p>
                    <p>
                        Np.: Gracz wyrzuca na środek Króla, do puli wkłada 1 kartę, więc dobiera 3.<br />
                        Suma kart dobranych i włożonych do puli musi się równać wartości wyrzucanej na środek karty.
                    </p>
                    <p>
                        Jeśli gracz posiada Jokera może do swojej puli zgarnąć karty wyrzucone na środek.<br />
                        By to zrobić gracz musi wyłożyć na środek Jokera i razem z nim zabiera do swojej puli wszystkie wyrzucone dotychczas karty, lecz w tym ruchu gracz nie dobiera żadnych kart, nie może także włożyć do puli żadnej posiadanej dziewiątki lub dziesiątki.
                    </p>
                    <p>
                        Gracz może wyłożyć Jokera tylko wtedy, gdy w swojej puli ma już przynajmniej jedną kartę.<br />
                        Jeśli w momencie końca rozdania, któryś z graczy posiada w swoich kartach Jokera, to ów gracz uzyskuje minus 100 punktów, a karty z jego puli się nie liczą.
                    </p>

                    <h2 className="content-subhead">Zakończenie</h2>
                    <p>Koniec rozdania następuje gdy któryś z graczy pozbędzie się swoich kart lub jeśli skończą się karty nie rozdane.<br />
                        W pierwszym i drugim wypadku punkty liczone są tylko z kart włożonych do puli, lecz w pierwszym przypadku 50 punktów dodatkowo otrzymuje gracz, który pozbył się kart.
                    </p>
                    <p>
                        Zwycięża gracz, który 4 razy posiadał w swojej puli Jokera i jako pierwszy uzyska 1224 punkty.</p>
                </div>
            </div>
        );
    }
}
