import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  
  const item =useSelector((state)=>{
        return state.users;
  })

  return (
    <div className='navbar'>
           
         <span>Redux Toolkit</span>
         <div className='link-div'> 
            <Link className='link' to={"/"}>Home</Link>
            <Link className='link' to={"/cart"}>Cart</Link>
            <span>Items : {item.length}</span>
         </div>
    </div>
  )
}

export default Navbar
