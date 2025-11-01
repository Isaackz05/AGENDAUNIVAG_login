import React from 'react'
import './OptionsPanel.css'

const OptionsPanel = () => {
  return (
    <section className='options-panel'>
        <div className='options-container'>
            <div className='option-card'>
                <div className='option-circle'>
                    <i className='bi bi-list-check option-icon'></i>
                </div>
                <div className='option-name'>AGENDAR</div>
            </div>

            <div className='option-card'>
                <div className='option-circle'>
                    <i className='bi bi-bell option-icon'></i>
                </div>
                <div className='option-name'>NOTIFICAÇÕES</div>
            </div>

            <div className='option-card'>
                <div className='option-circle'>
                    <i className='bi bi-arrow-clockwise option-icon'></i>
                </div>
                <div className='option-name'>HISTÓRICO</div>
            </div>
        </div>
    </section>
  )
}

export default OptionsPanel