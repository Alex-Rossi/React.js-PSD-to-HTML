import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import logo from '../assets/img/logo.png';
import search_icon from '../assets/img/new_home/search-icon.png';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            mobileMenu: false
        }
    }

    openMenu = () => {
        const openMenu = this.state.mobileMenu;
        this.setState({
            mobileMenu: !openMenu
        });
    }

    render() {
        const { mobileMenu } = this.state;

        return (
            <>
                <div className="header">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt="logo image" />
                        </div>
                    </div>
                    <div className="menu-bar">
                        <div className="menu-link active">
                            <Link to="/">
                                HOME
                            </Link>
                        </div>
                        <div className="menu-link">
                            <Link to="/market">
                                MARKETPLACE
                            </Link>
                        </div>
                        <div className="menu-link">
                            <Link to="/artist">
                                ARTISTS
                            </Link>
                        </div>
                        <div className="menu-link">
                            <Link to="/collector">
                                COLLECTORS
                            </Link>
                        </div>
                        <div className="menu-link">
                            <Link to="/wallet">
                                CONNECT WALLET
                            </Link>
                        </div>
                    </div>
                    <div className="search-icon">
                        <img src={search_icon} alt="search icon" />
                    </div>
                    <div className="hamburger-menu" onClick={() => this.openMenu()}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
                <div className="mobile-menu" style={mobileMenu ? {height: "fit-content", paddingTop: "22px", paddingBottom: "22px", paddingRight: "22px", paddingLeft: "22px"} : {}}>
                    <div className="mobile-link active">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                    <div className="mobile-link">
                        <Link to="/market">
                            MARKETPLACE
                        </Link>
                    </div>
                    <div className="mobile-link">
                        <Link to="/artist">
                            ARTISTS
                        </Link>
                    </div>
                    <div className="mobile-link">
                        <Link to="/collector">
                            COLLECTORS
                        </Link>
                    </div>
                    <div className="mobile-link">
                        <Link to="/wallet">
                            CONNECT WALLET
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;