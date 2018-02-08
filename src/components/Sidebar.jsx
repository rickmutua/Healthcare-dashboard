import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import sidebar from './../styles/sidebar/sidebar.css'

class SideBar extends Component {
    render() {

        return (
            <div>

                <div className="uk-width-1-2@s uk-width-2-5@m sideBarTextStyle">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-active">
                            <h4 className='sidebarTitles'>Patient</h4>
                            <ul className="uk-nav-sub">
                                <li>
                                    <Link to='/'>Upcoming visits</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-active">
                        <h4 className='sidebarTitles'>My Inbox</h4>
                        </li>
                        <li className="uk-parent">

                            <ul className="uk-nav-sub">
                                <li>
                                    <Link to='/incoming'>Incoming </Link>
                                </li>
                                <li>
                                    <Link to="/sent">Sent</Link>
                                </li>
                                <li>
                                    <Link to="/drafted">Drafted</Link>
                                </li>
                                <li>
                                    <Link to="/deleted">Deleted</Link>
                                </li>

                            </ul>
                        </li>
                    </ul>
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-active">
                            <h4 className='sidebarTitles'>Performance</h4>
                            {/* <ul className="uk-nav-sub">
                                <li>
                                    <Link to='/upcoming'>Upcoming visits</Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;