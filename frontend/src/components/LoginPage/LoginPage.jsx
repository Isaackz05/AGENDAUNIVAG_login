import React from 'react'
import "../LoginPage/LoginPage.css"
import Links from './Links/Links'
import InputGroup from './InputGroup/InputGroup'
import Logo from './Logo/Logo'
import LoginButtom from './LoginButtom/LoginButtom'


const LoginPage = () => {
  return (
    <div className='login-container'>
        <Logo></Logo>
        <div className="login-panel">
            <InputGroup type="email" placeholder="E-mail Institucional" icon="bi-envelope-fill"></InputGroup>
            <InputGroup type="password" placeholder="Senha de Acesso" icon="bi-lock-fill"></InputGroup>
            <Links></Links>
            <LoginButtom></LoginButtom>
            <div className='copyright'>
                <i className='bi bi-c-circle'></i>
                Copyright 2025 - Agenda UNIVAG - Sistemas Univag.
            </div>
        </div>
    </div>
  )
}

export default LoginPage