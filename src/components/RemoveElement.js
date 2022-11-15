import React from 'react'
import trashcan from '../imgs/trashcan.png'
import '../styles/removeElement.css'

export default function RemoveElement({ dragging, dOverHandler, dOutHandler }) {

  return (
    <div className='removeElement' style={{ display: dragging ? 'flex' : 'none' }} onDragOver={e => dOverHandler(e)} onDragLeave={ e => dOutHandler(e) }>
        <div>
            <img src={trashcan} alt='Remove Element' />
        </div>
    </div>
  )
}
