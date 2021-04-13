import React, { Component } from 'react';
import { FooterItems } from "./FooterItems";
import "./Footer.css";
import FooterBackground from "./footerbackground.png";

export class Footer extends Component {

    render() {
        return (
            <nav className="FooterItems">

                <div>
                    <ul>
                        <nav className="Footer-menu">
                            {FooterItems.map((item, index) => {
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
                </div>
                <div className="copyright">
                    Registered in England and Wales: No 08881823
                    <br />
                    Copyright Cheshire Bushcraft ltd © 2020
                </div>
                
            </nav>

        )
    }

}
export default Footer;