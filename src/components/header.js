import { Link } from "gatsby"
import React from "react"

const Header = (props) => {
  return (
    <>
      <header className='navigation'>
        <p>LOGO</p>
        <ul>
          <Link to='/contact' activeClassName="active">CONTACT</Link>
          <Link to='/aboutUs' activeClassName="active">ABOUT</Link>
          <Link to='/products' activeClassName="active">PRODUCTS</Link>
          <Link to='/' activeClassName="active">HOME</Link>
        </ul>
      </header>
      <div className='headerImg'>{props.name}</div>
    </>
  )
}

export default Header;
