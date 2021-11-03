import React  from 'react'
import { MobileMenu } from './MobileMenu'
import { useState } from 'react'


export const Top = () => {
    const [showMenu, setShowMenu] = useState(false)
    

    return (
        <div>
            <header className="header">
      <div className="header-left">
        <img src="./images/logo.svg" alt="" className="logo" />
        <button href="#" target="_blank" rel="noopener noreferrer">Features</button>
        <button href="#" target="_blank" rel="noopener noreferrer">Pricing</button>
        <button href="#">Resources</button>
      </div>
      <div className
="header-right">
        <button href="#">Login</button>
        <button href="#" className="btn-1">Sign Up</button>
      </div>
      <div className="hamburger" onClick={()=> {
          setShowMenu(!showMenu)
      }}>
        <img src="images/icon-hamburger.svg" alt="" />
      </div>
    </header>
    <div>
        { showMenu && <MobileMenu /> }
    </div>
    <div className="hero">
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button href="#" className="btn-2">Get Started</button>
      </div>
      <div>
        <img
          src="./images/illustration-working.svg"
          className="illustration"
          alt=""
        />
      </div>
    </div>
        </div>
    )
}
