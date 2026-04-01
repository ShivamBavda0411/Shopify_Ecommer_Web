import React, { useState, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import nav_dropdown from "../../assets/dropdown_icon.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu]=useState("home")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to='/' style={{textDecoration:'none', display:'flex', alignItems:'center', gap:'10px'}}>
                <img src={logo} alt="" height="50px" />
                <p>Shopify</p>
            </Link>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link>{menu==="mens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>{menu==="womens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"> <button>Login</button></Link>
            <Link to="/cart" style={{position:'relative'}}><img src={cart_icon} alt="" height="40px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar