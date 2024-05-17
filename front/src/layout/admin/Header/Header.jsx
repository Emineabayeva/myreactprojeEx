import React from 'react'
import'./Header.css'
function Header() {
  return (
    <nav>
   <div className='header-left'>
<h4>Tasty</h4>
   </div>
   <div className='header-right'>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/add">Add</Link></li>
    <li><Link to="/basket">Basket</Link></li>
</ul>
   </div>
      </nav>
  )
}

export default Header