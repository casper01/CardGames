import React from 'react';
import { Link } from 'react-router-dom'


class GamesList extends React.Component {
    render() {
        return (
            <div className="content">
                <h1 className="content-subhead">#</h1>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to="/tysiac" className="pure-menu-link">
                        1000 (zob. Tysiąc) - gra dla 2 [3 i 4] osób
                    </Link></li>
                </ul>
            </div>
        );
    }
}

export default GamesList;
