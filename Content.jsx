import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamesList from './GamesList.jsx';
import Tysiac from './games/Tysiac.jsx';
import Machana from './games/Machana.jsx';
import BlackJack from './games/BlackJack.jsx';
import TrzydziesciJeden from './games/TrzydziesciJeden.jsx';
import TrzyTrzynascie from './games/TrzyTrzynascie.jsx';


class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={GamesList} />
                <Route path="/tysiac" component={Tysiac} />
                <Route path="/machana" component={Machana} />
                <Route path="/blackjack" component={BlackJack} />
                <Route path="/trzydziescijeden" component={TrzydziesciJeden} />
                <Route path="/trzytrzynascie" component={TrzyTrzynascie} />
            </Switch>
        );
    }
}

export default Content;
