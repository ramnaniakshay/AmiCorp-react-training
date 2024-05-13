import React from 'react'
import { Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
          <a href='/home'>Home  |</a>
          <a href='/about'>About  |</a>
          <a href='/product'>Product  |</a>
          <a href='/service'>Service  </a>
          <hr/>
            <Link to="/home">Demo on UseContext  |</Link>
            <Link to="/about">About  |</Link>
            <Link to="/product">Product  |</Link>
            <Link to="/service">Service  |</Link>
            <Link to="/count">My counter App </Link>
            <Link to="/welcome">Welcoming user App </Link>
            <Link to="/rhf">React Hook Form </Link>
    </nav>
  )
}

export default Navbar