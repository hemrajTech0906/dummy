import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store'

const Navbar:React.FC = () => {
   const cartItems = useSelector((state: RootState) => state.items);
  return (
    <div>
        <nav className="navbar">
            
      <div className="container">
        
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>Cart</Link>
        <span>{cartItems.items.length}</span>
      </div>
    </nav>

    </div>
  )
}

export default Navbar