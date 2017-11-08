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
