import React from 'react';

class AboutNavBar extends React.Component {

    render () {
        return (
            <div className="container-fluid dropdown-menu about-dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                <div className="container">
                    <ul>
                        <li><a href="#test">About us</a></li>
                        <li><a href="#test">How it works</a></li>
                        <li><a href="#test">Blog</a></li>
                        <li><a href="#test">Pricing</a></li>
                        <li><a href="#test">Second Opinion</a></li>
                        <li><a href="#test">Business</a></li>
                    </ul>
                    <button onClick={this.props.close} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default AboutNavBar;