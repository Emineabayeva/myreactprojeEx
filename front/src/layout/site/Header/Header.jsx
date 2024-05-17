import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
      <nav>
   <div className='header-left'>
<h4>Tasty</h4>
   </div>
   <div className='header-right'>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/admin/add">Add</Link></li>
    <li><Link to="/basket">Basket</Link></li>
</ul>
   </div>
      </nav>


  )
}

export default Header