import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='main-header'>
        <div className='header-right'>
            <div className='notification-icon'>
                <i className='bi bi-bell-fill'></i>
            </div>
            <div className='user-icon'>
                <i className='bi bi-person-circle'></i>
            </div>
        </div>
    </header>
  )
}

export default Header