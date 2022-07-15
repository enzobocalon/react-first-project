import React from 'react';
import '../index.css'
import './Content.css'

class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return ( 
            <div className="grid">
                <div>
                    <p class="title">Declarative</p>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                    <p>Declarative views make your code more predictable and easier to debug.</p>
                </div>
                <div>
                <p class="title">Component-Based</p>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                    <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                </div>
                <div>
                <p class="title">Learn Once, Write Anywhere</p>
                    <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                    <p>React can also render on the server using Node and power mobile apps using React Native.</p>
                </div>

                
            </div>
        )
    }
}

export default Content