import React from "react"
import Header from "./header"
import Main from "./main"
import "../styles/layout.css"

const Layout =(props)=> {
  return (
    <div className='container'>
      <Header name={props.name}/>
      <Main/>
    </div>
  )
}

export default Layout;
