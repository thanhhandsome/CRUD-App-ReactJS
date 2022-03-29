import React from 'react';
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/app" activeClassName="active">
                    App
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/app">App</Link>
                <Link to="/weather">Weather</Link> */}

                {/* <a className="active" href="/">Home</a>
                <a href="/app">App</a>
                <a href="/weather">Weather</a> */}
            </div>
        )
    }
}
export default Nav;