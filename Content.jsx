import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamesList from './GamesList.jsx';
import Tysiac from './games/Tysiac.jsx';
import Machana from './games/Machana.jsx';
import BlackJack from './games/BlackJack.jsx';
import TrzydziesciJeden from './games/TrzydziesciJeden.jsx';
import TrzyTrzynascie from './games/TrzyTrzynascie.jsx';
import A358 from './games/A358.jsx';
import SzescdziesiatSzesc from './games/SzescdziesiatSzesc.jsx';
import Atutowiec from './games/Atutowiec.jsx';
import Bezik from './games/Bezik.jsx';
import Brydz from './games/Brydz.jsx';
import Callabra from './games/Callabra.jsx';
import Kanasta from './games/Kanasta.jsx';
import Cribbage from './games/Cribbage.jsx';
import Kierki from './games/Kierki.jsx';
import Eleusis from './games/Eleusis.jsx';
import Ecarte from './games/Ecarte.jsx';
import Fantan from './games/Fantan.jsx';
import Garibaldka from './games/Garibaldka.jsx';
import Hasenpfeffer from './games/Hasenpfeffer.jsx';
import Hejolek from './games/Hejolek.jsx';
import Huragan from './games/Huragan.jsx';
import IdzNaRyby from './games/IdzNaRyby.jsx';
import Konstrukcja from './games/Konstrukcja.jsx';
import Kuku from './games/Kuku.jsx';
import Kwadrat from './games/Kwadrat.jsx';
import Lampart from './games/Lampart.jsx';
import Makao from './games/Makao.jsx';
import MauMau from './games/MauMau.jsx';
import Ogorek from './games/Ogorek.jsx';
import Oszust from './games/Oszust.jsx';
import Pan from './games/Pan.jsx';
import Pikieta from './games/Pikieta.jsx';
import Planowanie from './games/Planowanie.jsx';
import Poker from './games/Poker.jsx';
import Wist from './games/Wist.jsx';
import Preferans from './games/Preferans.jsx';
import RemikGin from './games/RemikGin.jsx';
import Skat from './games/Skat.jsx';
import Swinie from './games/Swinie.jsx';
import Tuzatu from './games/Tuzatu.jsx';
import TysiacLicytowany from './games/TysiacLicytowany.jsx';
import Wybory from './games/Wybory.jsx';
import Wojna from './games/Wojna.jsx';
import Wyscig from './games/Wyscig.jsx';


class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={GamesList} />
                <Route path={new Tysiac().state.url} component={Tysiac} />
                <Route path={new Machana().state.url} component={Machana} />
                <Route path={new BlackJack().state.url} component={BlackJack} />
                <Route path={new TrzydziesciJeden().state.url} component={TrzydziesciJeden} />
                <Route path={new TrzyTrzynascie().state.url} component={TrzyTrzynascie} />
                <Route path={new A358().state.url} component={A358} />
                <Route path={new SzescdziesiatSzesc().state.url} component={SzescdziesiatSzesc} />
                <Route path={new Atutowiec().state.url} component={Atutowiec} />
                <Route path={new Bezik().state.url} component={Bezik} />
                <Route path={new Brydz().state.url} component={Brydz} />
                <Route path={new Callabra().state.url} component={Callabra} />
                <Route path={new Kanasta().state.url} component={Kanasta} />
                <Route path={new Cribbage().state.url} component={Cribbage} />
                <Route path={new Kierki().state.url} component={Kierki} />
                <Route path={new Eleusis().state.url} component={Eleusis} />
                <Route path={new Ecarte().state.url} component={Ecarte} />
                <Route path={new Fantan().state.url} component={Fantan} />
                <Route path={new Garibaldka().state.url} component={Garibaldka} />
                <Route path={new Hasenpfeffer().state.url} component={Hasenpfeffer} />
                <Route path={new Hejolek().state.url} component={Hejolek} />
                <Route path={new Huragan().state.url} component={Huragan} />
                <Route path={new IdzNaRyby().state.url} component={IdzNaRyby} />
                <Route path={new Konstrukcja().state.url} component={Konstrukcja} />
                <Route path={new Kuku().state.url} component={Kuku} />
                <Route path={new Kwadrat().state.url} component={Kwadrat} />
                <Route path={new Lampart().state.url} component={Lampart} />
                <Route path={new Makao().state.url} component={Makao} />
                <Route path={new MauMau().state.url} component={MauMau} />
                <Route path={new Ogorek().state.url} component={Ogorek} />
                <Route path={new Oszust().state.url} component={Oszust} />
                <Route path={new Pan().state.url} component={Pan} />
                <Route path={new Pikieta().state.url} component={Pikieta} />
                <Route path={new Planowanie().state.url} component={Planowanie} />
                <Route path={new Poker().state.url} component={Poker} />
                <Route path={new Wist().state.url} component={Wist} />
                <Route path={new Preferans().state.url} component={Preferans} />
                <Route path={new RemikGin().state.url} component={RemikGin} />
                <Route path={new Skat().state.url} component={Skat} />
                <Route path={new Swinie().state.url} component={Swinie} />
                <Route path={new Tuzatu().state.url} component={Tuzatu} />
                <Route path={new TysiacLicytowany().state.url} component={TysiacLicytowany} />
                <Route path={new Wybory().state.url} component={Wybory} />
                <Route path={new Wojna().state.url} component={Wojna} />
                <Route path={new Wyscig().state.url} component={Wyscig} />
            </Switch>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToTopOrToAnchor();
    }

    scrollToTopOrToAnchor() {
        document.body.scrollIntoView();

        var hash = window.location.hash;
        if (hash) {
            hash = hash.slice(1);   // remove first '#'
            var anchors = document.getElementsByName(hash);
            if (anchors.length > 0) {
                anchors[0].scrollIntoView();
            }
        }
    }
}

export default Content;
