import React from 'react';


export default class A358 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '3-5-8',
            name2: 'Trzy Pięć Osiem',
            desc: 'gra dla 3 osób',
            url: '/trzypiecosiem',
            players: [3],
            cards: 'Standardowa talia kart (52 karty)'
        }
    }

    render() {
        document.title = this.state.name;
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>

                    <h2 className="content-subhead">Gracze</h2>
                    <p>
                        Gra dla 3 osób.
                    </p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Pełna talia kart (52 karty).<br />
                        Starszeństwo kart od Asa do dwójki.<br />
                        Istnieje zmienny kolor atutowy.<br />
                        Jest obowiązek dorzucania do koloru.<br />
                        Nie ma obowiązku przebijania starszą kartą.<br />
                        Nie ma obowiązku wyrzucenia atu w przypadku, gdy nie ma koloru wyjścia.
                    </p>

                    <h2 className="content-subhead">Rozdanie</h2>
                    <p>
                        Rozdający wybierany jest przez losowanie. Karty rozdawane są po jednej zaczynając od gracza siedzącego po lewej stronie rozdającego.<br />
                        Każdy z grających otrzymuje po 16 kart i dodatkowo cztery karty rozdane są do tzw. "musiku".
                    </p>
                    <p>
                        Gracz siedzący po lewej stronie rozdającego, z sześciu pierwszych otrzymanych kart wybiera rodzaj rozgrywki. Po dokonaniu wyboru może wziąć ze stołu resztę kart.
                    </p>

                    <h2 className="content-subhead">Rodzaje rozgrywek</h2>
                    <p>
                        Istnieje sześć rodzajów rozgrywek.<br />
                        Przy wyborze rodzaju rozgrywki, gracz decyduje, który z czterech kolorów będzie w danym rozdaniu kolorem atutowym, lecz może wybrać także rozgrywkę BA ("bez atu") lub BL ("bez lew"). BA jest rozgrywką, w której nie ma koloru atutowego. W BL również nie ma koloru atutowego, lecz należy wziąć jak najmniej lew.<br />
                    </p>
                    <p>
                        Każdy rodzaj rozgrywki może zostać wybrany przez każdego z graczy tylko jeden raz, a więc wszystkich rozgrywek łącznie jest 18.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Po rozdaniu kart i wybraniu rodzaju rozgrywki, może nastąpić wymiana kart. Po ewentualnej wymianie, gracz po lewej stronie rozdającego podnosi musik, pokazuje go pozostałym graczom, następnie bierze karty z musiku na rękę i również cztery odkłada na stół, nie ujawniając ich innym. Po odłożeniu kart wychodzi z jednej, rozpoczynając w ten sposób pierwszą lewę. Gracze dorzucają do lewy po jednej kacie zgodnie z ruchem wskazówek zegara. Gracz, który weźmie lewę wychodzi do następnej.
                    </p>

                    <h2 className="content-subhead">Punktacja</h2>
                    <p>
                        Rozdający musi wziąć w rozgrywce minimum 3 lewy, gracz po prawej stronie rozdającego minimum 5 lew, a trzeci gracz (wybierający rodzaj rozgrywki) - 8 lew.<br />
                        Jeśli któryś z graczy wziął więcej lew niż powinien, otrzymuje ilość punktów równą ilości lew nadliczbowych, jeżeli wziął mniej niż powinien, otrzymuje punkty minusowe równe ilości brakujących lew.<br />
                        Np.; jeśli gracz po lewej stronie rozdającego wziąłby 10 lew (a powinien 8), otrzymałby +2 punkty, jeśli wziąłby tylko 5 lew, otrzymałby -3 punkty.
                    </p>
                    <p>
                        W przypadku gry "bez lew" sytuacja się trochę zmienia. Rozdający może wziąć maksymalnie osiem lewy, gracz wybierający rodzaj rozgrywki - maksymalnie 3, a trzeci gracz - maksymalnie 5 lew.<br />
                        Jeśli któryś z graczy wziął więcej lew niż powinien, otrzymuje ilość punktów minusowych równą ilości lew nadliczbowych, jeśli wziął mniej niż powinien, otrzymuje punkty dodatnie równe ilości brakujących mu lew do minimum.<br />
                        Np.; jeśli rozdający wziąłby 10 lew (a powinien 8), otrzymałby -2 punkty, jeśli wziąłby tylko 5 lew, otrzymałby +3 punkty.<br />
                        <strong>
                            Suma zdobytych punktów w rozgrywce przez wszystkich graczy musi zawsze dać zero.
                        </strong>
                    </p>
                    <p>
                        Grę wygrywa ten z graczy, który po ostatnim, osiemnastym rozdaniu uzyska najwięcej punktów.
                    </p>

                    <h2 className="content-subhead">Wymiana</h2>
                    <p>
                        Wymiana następuje pomiędzy graczem, który w poprzedniej rozgrywce uzyskał dodatnią liczbę punktów, a tym co uzyskał ujemną. Jeśli dwóch graczy uzyskało dodatnią liczbę punktów, pierwszy prawo do wymiany ma ten, który w aktualnej rozgrywce będzie miał więcej lew do wzięcia. Jeśli dwóch graczy uzyskało ujemną ilość punktów, trzeci gracz może wymienić karty u obu.<br />
                        Maksymalna ilość kart, jakie można wymienić u jednego gracza, jest równa ilości punktów dodatnich zdobytych przez gracza wymieniającego w poprzedniej rozgrywce (można wymienić mniej kart lub wcale).<br />
                        Jeśli wymienia się więcej niż jedną kartę, daje się do wymiany od razu wszystkie karty.
                    </p>
                    <p>
                        Gracz, u którego wymieniane są karty, otrzymując je od wymieniającego , musi do każdej z nich oddać ze swoich jedną, najwyższą, w tym samym kolorze. Jeśli nie ma wyższej, musi oddać tą, którą otrzymał.
                    </p>
                    <p>
                        Jeśli w przypadku gry z kolorem atutowym, gracz u którego następuje wymiana (ten co w rozgrywce poprzedniej był na minusie) otrzyma kartę w tym kolorze do wymiany, nie musi oddawać najwyższej w tym kolorze, lecz może oddać dowolną swoją kartę w innym kolorze (ale nie musi - jak chce może oddać najwyższą kartę atutową).
                    </p>
                    <p>
                        <div className="example">
                            <div className="title">Przykład:</div>
                            <div className="content">
                                W ostatnio rozegranym rozdaniu gracz A rozdawał karty, miał więc do wzięcia 3 lewy a wziął 4, B miał wziąć 8 a <br />
                                Punktacja z tej rozgrywki wygląda następująco: A otrzymuje +1pkt, B +1pkt, C -2pkt.<br />
                                W następnej rozgrywce rozdaje B. A musi wziąć 5 lew, B - 3, a C - 8 lew.<br />
                                Ponieważ gracz C uzyskał w poprzedniej rozgrywce -2pkt, u niego pozostali gracze wymieniają karty.<br />
                                Ponieważ gracze A i B uzyskali po jednym punkcie, mogą wymienić u C tylko po jednej karcie.<br />
                                Przed wymianą C wybrał jako kolor atutowy karo.<br />
                                Pierwszy wymienia karty gracz A, ponieważ ma więcej w tej rozgrywce lew do zdobycia (5) od B (3).<br />
                                Gracz A wymienia 4 <span className="heart"></span>, gracz C musi mu więc oddać kartę najwyższą z posiadanych w tym samym kolorze (np. As <span className="heart"></span>).<br />
                                Od gracza B otrzymuje 6 <span className="diamond"></span>, ale ponieważ karo jest kolorem atutowym, gracz C może mu oddać dowolną swoją kartę (np. 2 <span className="spade"></span>).
                            </div>
                        </div>
                    </p>
                    <p><strong>
                        Nie wolno wymieniać kart w przypadku gry "bez atu", bądź "bez lew".
                    </strong></p>
                </div>
            </div>
        );
    }
}
