import React from 'react'
import '../index.css'
import './Main.css'

import {MdNavigateNext} from 'react-icons/md'

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <main>
                <h1>React</h1>
                <p>A JavaScript for building user interfaces</p>

                <div className="first-steps-buttons">
                    <button>
                        Get Started
                    </button>
                    <div className='take-tutorial'>
                        <span>
                            Take the Tutorial
                        </span>
                        <MdNavigateNext />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main