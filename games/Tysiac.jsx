import React from 'react';


class Tysiac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tysiąc'
        }
        document.title = this.state.name;
    }

    render() {
        return (
            <div>
                <div className="content">
                    <h1 className="content-subhead main-header">{this.state.name}</h1>
                    <div className="info">Jeden z licznych wariantów francuskiego mariasza, szczególnie rozpowszechniony i popularny w Polsce.</div>
                    <h2 className="content-subhead">Gracze</h2>
                    <p>Gra dla 2 [3 i 4] osób.</p>

                    <h2 className="content-subhead">Karty</h2>
                    <p>
                        Mała talia kart (24 karty). <br />
                        Starszeństwo kart: as, dziesiątka, król, dama, walet, dziewiątka. <br />
                        Wartość punktowa: as - 11, dziesiątka - 10, król - 4, dama - 3, walet - 2, dziewiątka - 0. <br />
                        Istnieje zmienny kolor atutowy.
                    </p>

                    <h2 className="content-subhead">Gra</h2>
                    <p>
                        Pierwszego rozdającego wyznacza się przez losowanie. Gracze w kolejnych rozgrywkach rozdają karty na zmianę.
                        Każdy z graczy otrzymuje po sześć kart, reszta kart pozostaje w zakrytym stosie.
                    </p>
                    <p>
                        Grę rozpoczyna przeciwnik rozdającego, wychodząc kartą z ręki. W rozgrywce istnieje obowiązek dorzucania do koloru i przebijania atutem w przypadku nieposiadania koloru wyjścia. Nie ma obowiązku przebijania starzą kartą.
                    </p>
                    <p>
                        Po wzięciu lewy pierwszy uzupełnia karty w ręku znowu do sześciu kart biorąc kartę ze stosu zakrytego ten z graczy, który wziął lewę. On także wychodzi do następnej lewy.
                    </p>
                    <p>
                        W momencie wyjścia można zgłaszać posiadanie meldunku (pary króla i damy w tym samym kolorze).
                        Meldunek premiowany jest w sposób zależny od jego koloru: <br />
                        meldunek kierowy 100pkt <br />
                        meldunek karowy 80pkt <br />
                        meldunek treflowy 60pkt <br />
                        meldunek pikowy 40pkt <br />
                    </p>
                    <p>
                        Po zgłoszeniu meldunku zgłaszający go ma obowiązek wyjść jedną z kart meldunku (w króla lub w damę).<br />
                        W momencie wyjścia kolor meldunku staje się kolorem atutowym aż do końca rozgrywki lub do chwili zgłoszenia następnego meldunku, który z kolei staje się kolorem atutowym.
                    </p>

                    <h2 className="content-subhead">Zakończenie</h2>
                    <p>
                        Rozgrywkę prowadzi się do zgrania wszystkich kart ze stosu zakrytego i z ręki. Po ukończeniu rozgrywki podlicza się punkty każdego gracza, zdobyte w danej rozgrywce. Na te punkty składają się premie za zgłoszone meldunki oraz punkty za wszystkie karty zdobyte przez danego gracza w jego lewach, obliczone wg wartości punktowej kart.
                    </p>
                    <p>
                        Gracz, który pierwszy osiągnie lub przekroczy w zapisie w kolejnej rozgrywce 1000pkt, wygrywa grę.
                    </p>
                </div>
                <div className="content">
                    <h1 name="tysiac-licytowany" className="content-subhead main-header">Tysiąc licytowany</h1>
                    <p>
                        Wariant gry.<br />
                        Każdy z graczy otrzymuje po dziesięć kart, pozostałe cztery karty leżą na stole w dwu zakrytych talonach po dwie karty w każdym z nich.
                    </p>
                    <p>
                        Pierwszym etapem rozdania jest licytacja. W licytacji, którą rozpoczyna przeciwnik rozdającego, gracze kolejno deklarują ilość punktów, które zobowiązują się zdobyć w rozgrywce. Przeciwnik rozdającego pierwszy ma obowiązek zgłosić w licytacji 100 punktów, choćby nie miał szans ich zdobycia w rozgrywce (jest "na musiku" - musi licytować).
                    </p>
                    <p>
                        Wygrywa licytację ten z graczy, który zgłosi najwyższą ilość punktów. Wygrywający licytację podejmuje ze stołu jeden wybrany przez siebie talon, okazuje karty w nim przeciwnikowi, włącza karty z talonu do kart na ręku i następnie dwie dowolnie wybrane karty z ręki umieszcza znowu na stole w zakrytym talonie.<br />
                        Wygrywający licytację może, jeśli chce, po podjęciu talonu, podwyższyć swoją ostatnią zapowiedź licytacyjną, zgłaszając do rozgrywki jeszcze większą ilość punktów.
                    </p>
                    <p>
                        Jeśli rozgrywający zdobył zadeklarowaną lub większą ilość punktów, to tę zadeklarowaną liczbę mu się zapisuje. Jeśli ich nie zdobył odpisuje mu się zadeklarowaną liczbę punktów jako minusowe.<br />
                        Przeciwnikowi rozgrywającego zapisuje się ilość punktów faktycznie przez niego zdobytą w lewach i zgłoszonych meldunkach.
                    </p>
                    <p>
                        W rozgrywce i w obliczeniach bierze udział 20 kart obydwu rąk, bez czterech kart z obydwu talonów, z jednym wyjątkiem: jeśli wygrywający licytację zadeklarował 120 punktów, w trakcie rozgrywki nie zgłosił zaś żadnego meldunku, lecz wziął wszystkie lewy, wówczas i wartość obydwu talonów dolicza się do jego zdobyczy (suma punktów wszystkich kart w talii jest równa 120)
                    </p>
                </div>
                <div className="content">
                    <h1 className="content-subhead main-header">Tysiąc licytowany dla trzech osób</h1>
                    <p>
                        Wariant gry.<br />
                        Każdy z trzech graczy otrzymuje po siedem kart, trzy karty pozostają na stole w zakrytym talonie.
                    </p>
                    <p>
                        Zasady licytacji bez zmian.
                    </p>
                    <p>
                        Wygrywający licytację podejmuje karty z talonu, pokazuje przeciwnikom i umieszcza je na ręku. Następnie dwie dowolne karty z ręki przekazuje - po jednej, zakryte - każdemu z przeciwników. <br />
                        W rozgrywce biorą udział wszystkie karty.
                    </p>
                    <p>
                        Zasady rozgrywki i zapisu bez zmian.
                    </p>
                </div>
                <div className="content">
                    <h1 className="content-subhead main-header">Tysiąc licytowany dla czterech osób</h1>
                    <p>
                        Zasady identyczne jak w grze dla trzech osób z tym, że trzy karty które były w talonie zakrytym otrzymuje pierwszy gracz na lewo od rozdającego. Jeśli w tych trzech kartach znajduje się meldunek otrzymuje on premię równą wartości tego meldunku, oraz za każdego asa po 50 punktów. <br />
                        Osobą "na musiku" jest drugi gracz na lewo od rozdającego. <br />
                        Zasady rozgrywki i zapisu bez zmian.
                    </p>
                    <h2 className="content-subhead">Wariant tysiąca licytowanego</h2>
                    <p>
                        <ul>
                            <li>
                                Można wprowadzić wariant licytacji "w ciemno". W tym wariancie gracz może, jeśli chce, brać udział w licytacji nie oglądając własnych kart. Gracz ma prawo obejrzeć własne karty w każdym momencie licytacji - wówczas licytacja przestaje być licytacją "w ciemno". <br />
                                Jeśli gracz wygrał licytację w ciemno, nie okazuje kart talonu współgrającym, zapis zaś za rozgrywkę, zarówno przy wygranej, jak i przegranej zostaje podwojony dla wszystkich graczy.
                            </li>
                            <li>
                                Po przekroczeniu przez któregoś z graczy 800 punktów następne punkty dodaje mu się tylko w przypadku wygrania przez niego licytacji i ugrania zadeklarowanej liczby punktów.
                            </li>
                            <li>
                                Gracz, który wygrał licytację i uważa, iż nie uda mu się ugrać zadeklarowanej liczby punktów, może przed rozpoczęciem rozgrywki przerwać grę (dając tzw. "bombę"). Może w ciągu gry zrobić tak dowolną liczbę razy, lecz tylko za pierwszym razem nie odpisuje mu się zadeklarowanej liczby punktów. Reszta graczy w takim przypadku liczbę wszystkich punktów w kartach (tzn. 120pkt) dzielą między siebie (3 graczy - po 60pkt każdy; 4 graczy - po 40pkt każdy); jedynie przy dwóch graczach ten drugi otrzymuje 60pkt. Można oczywiście zapisywać po 60pkt bez względu na liczbę graczy.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default Tysiac;
