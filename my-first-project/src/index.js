import React, {Component} from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Content from './Content/Content'
import Footer from './Footer/Footer'

class Index extends Component{
  render() {
    return(
      <>
        <Header/>
        <Main />
        <Content />
        <Footer />
      </>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))