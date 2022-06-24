import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className='nav'>
        <NavLink to='/' className='nav__link'> Dashboard </NavLink>
        <NavLink to='/recipes' className='nav__link' > Recipes </NavLink>
      </div>
        
    </header>
  )
}

export default Header