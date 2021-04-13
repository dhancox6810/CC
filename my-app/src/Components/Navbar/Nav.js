import React, { Component } from 'react';
import logo from "./logo.png";
import { MenuItems } from "./MenuItems.js";
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <nav className="NavLogo" >
                    <img src={logo} alt={logo.png}></img>
                </nav>
                <ul>
                    <nav className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.Title}
                                    </a>
                                </li>
                            )
                        })}
                    </nav>
                </ul>
            </nav>
        );
    }
}

export default Nav;