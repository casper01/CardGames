import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamesList from './GamesList.jsx';
import Tysiac from './games/Tysiac.jsx';
import Machana from './games/Machana.jsx';
import BlackJack from './games/BlackJack.jsx';
import TrzydziesciJeden from './games/TrzydziesciJeden.jsx';
import TrzyTrzynascie from './games/TrzyTrzynascie.jsx';
import A358 from './games/A358.jsx';


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
            </Switch>
        );
    }
}

export default Content;
