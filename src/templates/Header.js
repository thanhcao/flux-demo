import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import "./Header.scss"
import {withRouter} from "react-router-dom";

@withRouter
export default class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={"header"}>
                <Navbar fluid bsStyle="default" className="navbar-fixed-top">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img width="185" height="26" href=""
                                   src="https://g1.nyt.com/assets/collection/20180608-190119/images/foundation/logos/nyt-logo-185x26.png" alt="The New York Times" border="0" />
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}