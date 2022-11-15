import React from 'react'
import PropTypes from 'prop-types'
import '../styles/addNew.css'
import add from '../imgs/add.png'

export default function AddNew(props) {

    const { handler } = props 
    const { dragging } = props

    return (
        <div className='addNewCard' onClick={handler} style={{ display: !dragging ? 'flex' : 'none' }}>
            <div className='button'>
                <img src={add} alt='Add New' />
            </div>
        </div>
    )
}

AddNew.propTyes = {
    handler: PropTypes.func.isRequired
}