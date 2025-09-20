import React from 'react'
import "../Links/Links.css"

const Links = () => {
  return (
    <div className='links'>
        <a href="https://google.com" className='link'>
            <i className='bi bi-shield-lock-fill'></i>
            Esqueci minha senha
        </a>
        <a 
            href="https://portalaluno.univag.edu.br/Uploads/MANUAL_NOVA_FORMA_DE_ACESSO.pdf"
            className='link'
        >
            <i className='bi bi-bookmarks-fill'></i>
            Acessar Manual de Acesso
        </a>
    </div>
  )
}

export default Links