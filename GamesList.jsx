import React from 'react';
import { Link } from 'react-router-dom'


class GamesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    name: '1000',
                    name2: 'Tysiąc',
                    desc: 'gra dla 2 [3 i 4] osób',
                    url: '/tysiac',
                    players: [2, 3, 4]
                },
                {
                    name: '1224',
                    name2: 'Machana',
                    desc: 'gra dla 2 - 4 graczy',
                    url: '/machana',
                    players: [2, 3, 4]
                },
                {
                    name: 'Machana',
                    desc: 'gra dla 2 - 4 graczy',
                    url: '/machana',
                    players: [2, 3, 4]
                },
                {
                    name: 'Tysiąc',
                    desc: 'gra dla 2 [3 i 4] osób',
                    url: '/tysiac',
                    players: [2, 3, 4]
                },
            ]
        }

        // bindings
        this.printIndices = this.printIndices.bind(this);
        this.printGamesList = this.printGamesList.bind(this);
        this.printGamesDividedByIndices = this.printGamesDividedByIndices.bind(this);
        this.printGameName = this.printGameName.bind(this);
    }

    getNameIndex(name) {
        var index = name[0];
        if (!isNaN(parseInt(index))) {
            index = '#';
        }
        return index;
    }

    getOrderedUniqueIndices() {
        var indices = [];

        for (var i = 0; i < this.state.data.length; i++) {
            var index = this.getNameIndex(this.state.data[i].name);
            if (!indices.includes(index)) {
                indices.push(index);
            }
        }
        indices.sort();
        return indices;
    }

    getDatasetsDividedByIndices() {
        var indices = this.getOrderedUniqueIndices();
        var data = this.state.data;
        data.sort(function (a, b) {
            return a.name > b.name;
        });

        var indicesInd = 0;
        var dataInd = 0;
        var datasets = [];

        while (indicesInd < indices.length) {
            datasets.push({
                index: indices[indicesInd],
                data: []
            });

            while (dataInd < data.length && indices[indicesInd] == this.getNameIndex(data[dataInd].name)) {
                datasets[indicesInd].data.push(data[dataInd]);
                dataInd++;
            }
            indicesInd++;
        }
        return datasets;
    }

    printIndices() {
        var indices = this.getOrderedUniqueIndices();

        return (
            <div className="content">
                <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
                    <ul className="pure-menu-list">
                        {indices.map(function (item, i) {
                            return <li key={i} className="pure-menu-item">
                                <a className="pure-menu-link" href={"#" + item}>{item}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    printGamesList(games) {
        var context = this;
        return (
            <ul className="pure-menu-list">
                {
                    games.map(function (game, i) {
                        return <li key={i} className="pure-menu-item">
                            <Link to={game.url} className="pure-menu-link">
                                {context.printGameName(game)}
                            </Link>
                        </li>
                    })
                }
            </ul>
        )
    }

    printGameName(game) {
        if (!game.name) {
            return "UNDEFINED NAME";
        }
        var desc = "";

        if (game.name2) {
            desc += " (zob. " + game.name2 + ")";
        }
        if (game.desc) {
            desc += ' - ' + game.desc;
        }
        return <span>{game.name} <span className="description">{desc}</span></span>;
    }

    printGamesDividedByIndices() {
        var sets = this.getDatasetsDividedByIndices();
        var context = this;

        return (
            <div className="content">
                {sets.map(function (set, i) {
                    return <div key={i}>
                        <h1 className="content-subhead">
                            <a name={set.index}></a>
                            {set.index}
                        </h1>
                        {context.printGamesList(set.data)}
                    </div>
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.printIndices()}
                {this.printGamesDividedByIndices()}
            </div>
        );
    }
}

export default GamesList;
