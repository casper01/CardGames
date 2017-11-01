import React from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Switch, Route, Link, Router } from 'react-router-dom'
import Header from './Header.jsx';
import Content from './Content.jsx';
import Test from './games/Test.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header mainHeader="Doctorek Home Page" subHeader="Gry Karciane" />
                <ul>
                    <li><Link to="/test1">Home</Link></li>
                    <li><Link to="/test2">About</Link></li>
                    <li><Link to="/test3">Contact</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route path="/test1" component={Test} />
                    <Route path="/test2" component={Content} />
                    <Route path="/test3" component={Test} />
                </Switch>
            </div>
        );
    }
}

export default App;