/**
 * Created by Bien on 2017-10-01.
 */
import React, { Component } from 'react';


class Header extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;