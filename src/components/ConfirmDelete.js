import React from 'react'
import cancel from '../imgs/close.png'
import done from '../imgs/done.png'
import '../styles/confirmDelete.css'

export default function ConfirmDelete({ confirmState, changeConfirmReturn, elementName }) {
  return (
    <div className='overlay' style={{ display: confirmState ? 'flex' : 'none' }}>
        <div className='confirm'>
            <h1>¿Estas seguro de que quieres eliminar esta lista?</h1>
            <h3 className='name'>{elementName}</h3>
            <div className='buttons'>
                <button className='cancel' onClick={changeConfirmReturn(false)}><img src={cancel} alt='Cancel' /></button>
                <button className='done' onClick={changeConfirmReturn(true)}><img src={done} alt='Cancel' /></button>
            </div>
        </div>
    </div>
  )
}
