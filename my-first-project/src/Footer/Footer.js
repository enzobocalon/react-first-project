import React from 'react'
import '../index.css'
import './Footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <footer>
                <p>This project was developed in order to understand the behavior of React</p>
                <p>|</p>
                <p>Developed by <a href='http://github.com/enzobocalon' target="__blank">Enzo Bocalon</a></p>
            </footer>
        )
    }
}

export default Footer