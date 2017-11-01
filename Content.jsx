import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamesList from './GamesList.jsx';
import Tysiac from './games/Tysiac.jsx';


class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={GamesList} />
                <Route exact path="/tysiac" component={Tysiac} />
            </Switch>
        );
    }
}

export default Content;
