import React from 'react'
import Logo from '../../../assets/UNIVAGlogo.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-header'>
            <div className='logo'>
                <img src={Logo} alt="UNIVAG Logo" width="200" height="70" />
            </div>
        </div>

        <nav className='sidebar-nav'>
            <ul className='menu-list'>
                <li className='menu-item'><a href="#" className='menu-link'>AGENDAR</a></li>
                <li className='menu-item'><a href="#" className='menu-link'>NOTIFICAÇÕES</a></li>
                <li className='menu-item'><a href="#" className='menu-link'>HISTÓRICO</a></li>
            </ul>
        </nav>

        <div className='sidebar-footer'>
            <a href="#" className='logout-btn'>
                <i className='bi bi-box-arrow-right'></i>
                <span className='logout-text'>&nbsp;SAIR</span>
            </a>
        </div>
    </aside>
  )
}

export default Sidebar