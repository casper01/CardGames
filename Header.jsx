import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{ this.props.mainHeader }</h1>
                <h2>{ this.props.subHeader }</h2>
            </div>
        );
    }
}

Header.defaultProps = {
    mainHeader: "",
    subHeader: ""
}

export default Header;
