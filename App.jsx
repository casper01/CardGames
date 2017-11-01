import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header mainHeader="Doctorek Home Page" subHeader="Gry Karciane" />
                <Content />
            </div>
        );
    }
}

export default App;