import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);

        // bindings
        this.goToMainPage = this.goToMainPage.bind(this);
    }

    goToMainPage() {
        window.location = '/';
    }

    render() {
        return (
            <div className="header cursor-hand" onClick={this.goToMainPage}>
                <h1>{ this.props.mainHeader }</h1>
                <h2>{ this.props.subHeader }</h2>
            </div>
        );
    }
}

Header.defaultProps = {
    mainHeader: '',
    subHeader: ''
};

export default Header;
