import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { basePath } from './utils';
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
                <Route exact path={new Tysiac().state.url} component={Tysiac} />
                <Route exact path={new Machana().state.url} component={Machana} />
                <Route exact path={new BlackJack().state.url} component={BlackJack} />
                <Route exact path={new TrzydziesciJeden().state.url} component={TrzydziesciJeden} />
                <Route exact path={new TrzyTrzynascie().state.url} component={TrzyTrzynascie} />
                <Route exact path={new A358().state.url} component={A358} />
                <Route exact path={new SzescdziesiatSzesc().state.url} component={SzescdziesiatSzesc} />
                <Route exact path={new Atutowiec().state.url} component={Atutowiec} />
                <Route exact path={new Bezik().state.url} component={Bezik} />
                <Route exact path={new Brydz().state.url} component={Brydz} />
                <Route exact path={new Callabra().state.url} component={Callabra} />
                <Route exact path={new Kanasta().state.url} component={Kanasta} />
                <Route exact path={new Cribbage().state.url} component={Cribbage} />
                <Route exact path={new Kierki().state.url} component={Kierki} />
                <Route exact path={new Eleusis().state.url} component={Eleusis} />
                <Route exact path={new Ecarte().state.url} component={Ecarte} />
                <Route exact path={new Fantan().state.url} component={Fantan} />
                <Route exact path={new Garibaldka().state.url} component={Garibaldka} />
                <Route exact path={new Hasenpfeffer().state.url} component={Hasenpfeffer} />
                <Route exact path={new Hejolek().state.url} component={Hejolek} />
                <Route exact path={new Huragan().state.url} component={Huragan} />
                <Route exact path={new IdzNaRyby().state.url} component={IdzNaRyby} />
                <Route exact path={new Konstrukcja().state.url} component={Konstrukcja} />
                <Route exact path={new Kuku().state.url} component={Kuku} />
                <Route exact path={new Kwadrat().state.url} component={Kwadrat} />
                <Route exact path={new Lampart().state.url} component={Lampart} />
                <Route exact path={new Makao().state.url} component={Makao} />
                <Route exact path={new MauMau().state.url} component={MauMau} />
                <Route exact path={new Ogorek().state.url} component={Ogorek} />
                <Route exact path={new Oszust().state.url} component={Oszust} />
                <Route exact path={new Pan().state.url} component={Pan} />
                <Route exact path={new Pikieta().state.url} component={Pikieta} />
                <Route exact path={new Planowanie().state.url} component={Planowanie} />
                <Route exact path={new Poker().state.url} component={Poker} />
                <Route exact path={new Wist().state.url} component={Wist} />
                <Route exact path={new Preferans().state.url} component={Preferans} />
                <Route exact path={new RemikGin().state.url} component={RemikGin} />
                <Route exact path={new Skat().state.url} component={Skat} />
                <Route exact path={new Swinie().state.url} component={Swinie} />
                <Route exact path={new Tuzatu().state.url} component={Tuzatu} />
                <Route exact path={new TysiacLicytowany().state.url} component={TysiacLicytowany} />
                <Route exact path={new Wybory().state.url} component={Wybory} />
                <Route exact path={new Wojna().state.url} component={Wojna} />
                <Route exact path={new Wyscig().state.url} component={Wyscig} />
                <Route exact path={ basePath() } component={GamesList} />
                <Route path='*' render={() =>(<Redirect to={ basePath() } />)} />
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
