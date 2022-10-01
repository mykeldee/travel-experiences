import React from 'react'
import '../style.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <img src='navLogo.png' className='nav--logo' />
            <h4>my travel journal</h4>
        </nav>
    </div>
  )
}

export default Navbar