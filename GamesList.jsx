import React from 'react';
import { Link } from 'react-router-dom';
import Tysiac from './games/Tysiac.jsx';
import Machana from './games/Machana.jsx';
import A1000 from './games/A1000.jsx';
import A1224 from './games/A1224.jsx';
import BlackJack from './games/BlackJack.jsx';
import A21 from './games/A21.jsx';
import TrzydziesciJeden from './games/TrzydziesciJeden.jsx';
import A31 from './games/A31.jsx';
import TrzyTrzynascie from './games/TrzyTrzynascie.jsx';
import A313 from './games/A313.jsx';
import A358 from './games/A358.jsx';
import TrzyPiecOsiem from './games/TrzyPiecOsiem.jsx';
import SzescdziesiatSzesc from './games/SzescdziesiatSzesc.jsx';
import A66 from './games/A66.jsx';
import A66Obierany from './games/A66Obierany.jsx';
import Atutowiec from './games/Atutowiec.jsx';
import Bezik from './games/Bezik.jsx';
import Brydz from './games/Brydz.jsx';
import Booby from './games/Booby.jsx';
import BrydzDwuosobowy from './games/BrydzDwuosobowy.jsx';
import ChinskiBrydz from './games/ChinskiBrydz.jsx';
import Callabra from './games/Callabra.jsx';
import Cassino from './games/Cassino.jsx';
import Kanasta from './games/Kanasta.jsx';
import Canasta from './games/Canasta.jsx';
import Combo from './games/Combo.jsx';
import Samba from './games/Samba.jsx';
import CzyMozna from './games/CzyMozna.jsx';
import Cribbage from './games/Cribbage.jsx';
import Kierki from './games/Kierki.jsx';
import CzarnaManka from './games/CzarnaManka.jsx';
import Eleusis from './games/Eleusis.jsx';
import Delfy from './games/Delfy.jsx';
import Ecarte from './games/Ecarte.jsx';
import Fantan from './games/Fantan.jsx';
import Loteryjka from './games/Loteryjka.jsx';
import Garibaldka from './games/Garibaldka.jsx';
import Hasenpfeffer from './games/Hasenpfeffer.jsx';
import Hejolek from './games/Hejolek.jsx';
import Huragan from './games/Huragan.jsx';
import IdzNaRyby from './games/IdzNaRyby.jsx';
import KierkiDominowe from './games/KierkiDominowe.jsx';
import KierkiDzokerowe from './games/KierkiDzokerowe.jsx';
import KierkiLicytowane from './games/KierkiLicytowane.jsx';
import Konstrukcja from './games/Konstrukcja.jsx';
import Kuku from './games/Kuku.jsx';
import Kwadrat from './games/Kwadrat.jsx';
import Lampart from './games/Lampart.jsx';
import Makao from './games/Makao.jsx';
import MauMau from './games/MauMau.jsx';
import Pony from './games/Pony.jsx';
import Metamorfoza from './games/Metamorfoza.jsx';
import Nullo from './games/Nullo.jsx';
import Ogorek from './games/Ogorek.jsx';


class GamesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                new A1000(),
                new A1224(),
                new A21(),
                new A31(),
                new A313(),
                new A358(),
                new A66(),
                new A66Obierany(),
                new Atutowiec(),
                new Bezik(),
                new Booby(),
                new Brydz(),
                new BrydzDwuosobowy(),
                new BlackJack(),
                new Callabra(),
                new Cassino(),
                new Canasta(),
                new ChinskiBrydz(),
                new Combo(),
                new Cribbage(),
                new CzarnaManka(),
                new CzyMozna(),
                new Delfy(),
                new Ecarte(),
                new Eleusis(),
                new Fantan(),
                new Garibaldka(),
                new Hasenpfeffer(),
                new Hejolek(),
                new Huragan(),
                new IdzNaRyby(),
                new Kanasta(),
                new Kierki(),
                new KierkiDominowe(),
                new KierkiDzokerowe(),
                new KierkiLicytowane(),
                new Konstrukcja(),
                new Kuku(),
                new Kwadrat(),
                new Lampart(),
                new Loteryjka(),
                new Machana(),
                new Makao(),
                new MauMau(),
                new Metamorfoza(),
                new Nullo(),
                new Ogorek(),
                new Pony(),
                new Samba(),
                new SzescdziesiatSzesc(),
                new TrzydziesciJeden(),
                new TrzyTrzynascie(),
                new TrzyPiecOsiem(),
                new Tysiac()
            ]
        };

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
            var index = this.getNameIndex(this.state.data[i].state.name);
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
            return a.state.name > b.state.name;
        });

        var indicesInd = 0;
        var dataInd = 0;
        var datasets = [];

        while (indicesInd < indices.length) {
            datasets.push({
                index: indices[indicesInd],
                data: []
            });

            while (dataInd < data.length && indices[indicesInd] == this.getNameIndex(data[dataInd].state.name)) {
                datasets[indicesInd].data.push(data[dataInd].state);
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
                                <a className="pure-menu-link" href={'#' + item}>{item}</a>
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        );
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
                        </li>;
                    })
                }
            </ul>
        );
    }

    printGameName(game) {
        if (!game.name) {
            return 'UNDEFINED NAME';
        }
        var desc = '';

        if (game.name2) {
            desc += ' (zob. ' + game.name2 + ')';
        }
        if (game.variantOf) {
            desc += ' (wariant ' + game.variantOf + ')';
        }
        if (game.readAs) {
            desc += ' (czyt. ' + game.readAs + ')';
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
                    </div>;
                })}
            </div>
        );
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
