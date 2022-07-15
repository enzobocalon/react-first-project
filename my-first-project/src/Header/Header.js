import React from 'react'
import '../index.css'
import './Header.css'



import logo from '../img/react-logo.png'

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header>
                <div className = "logo">
                    <img src={logo} />
                </div>
                <div className = "menu">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Documentation
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header