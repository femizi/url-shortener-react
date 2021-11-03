import React from 'react'

export const MobileMenu = (props) => {
    
    return (
        <div className="hidden ">
      <div className="header-hidden">
        <div className="hidden-first">
          <button href="#" target="_blank" rel="noopener noreferrer">Features</button>
          <button href="#" target="_blank" rel="noopener noreferrer">Pricing</button>
          <button href="#">Resources</button>
        </div>
        <div className="hidden-second">
          <button href="#">Login</button>
          <button href="#" className="btn-1">Sign Up</button>
        </div>
      </div>
    </div>
    )
}
