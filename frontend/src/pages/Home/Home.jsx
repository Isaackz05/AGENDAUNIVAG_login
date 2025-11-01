import React from 'react'
import Sidebar from '../../components/Home/Sidebar/Sidebar'
import Header from '../../components/Home/Header/Header'
import OptionsPanel from '../../components/Home/OptionsPanel/OptionsPanel'
import './Home.css'

const Home = () => {
  return (
    <div className='dashboard-container'>
        <Sidebar></Sidebar>
        <main className='main-content'>
            <Header></Header>
            <OptionsPanel></OptionsPanel>
        </main>
    </div>
  )
}

export default Home