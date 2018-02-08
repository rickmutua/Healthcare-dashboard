import React, {Component} from 'react';

//imported links from react-router-dom to help in linking pages
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {

        var logoButtonStyle = {
            backgroundColor: "#5bb673",
            borderRadius: "50px",
            color: "white",
            height: "41px",
            width: "74px",
            marginLeft: "30px"
        };

        var userLogoIcon = {
            backgroundColor: "grey",
            borderRadius: "50%",
            height: "50px",
            color: "white"
        }

        var navbarStyle={
            backgroundColor:"#ffffff",
            height: "75px"
            
        }
        return (
            <div>
                <nav
                    className="uk-navbar-container"
                    uk-navbar="boundary-align: true; align: center;"
                    style={navbarStyle}>
                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to='/' style={logoButtonStyle}>
                                    Logo</Link>

                            </li>

                        </ul>

                    </div>

                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li >
                                <Link
                                    to='/logout'
                                    style={userLogoIcon}
                                    className="uk-margin-small-right"
                                    uk-icon="user"></Link>

                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Navigation;