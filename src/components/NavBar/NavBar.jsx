import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import { Link, useLocation } from 'react-router-dom'


function NavBar() {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const{pathname}=useLocation()

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive)

        return () =>{
            window.removeEventListener("scroll", isActive)
        };
    }, [])

    const currentUser ={
        id:1,
        username:"John Doe",
        isSeller:true
    }
    

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Bussiness</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a Seller</span>

                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser &&  (
                    <div className="user" onClick={() =>setOpen(!open) }>
                        <img src="../img/noavatar.jpg" alt="" />
                        <span>{currentUser.username}</span>
                        {open && (<div className="options">
                            {
                                currentUser ?.isSeller &&(
                                    <>
                                    <Link to="/Gigs">Categories</Link>
                                    <Link to="/add">Add new categorie</Link>
                                    </>
                                )
                            }
                            <Link to="/orders">Orders</Link>
                            <Link to="/messages">Messages</Link>
                            <Link to="/">Logout</Link>
                        </div>)}
                    </div>
                )}
            </div>
        </div>
        
        {active  &&(
        <>
        <hr />
        <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>

        </div>
        </>
        )}
    </div>
  )
}

export default NavBar