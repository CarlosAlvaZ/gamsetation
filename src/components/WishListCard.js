import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/wishListCard.css'

export default function WishListCard({color, title, items, draggHandler, draggingState, setConfirmState, confirmReturn}) {

    let colorToRender = parseInt(color)
    if(colorToRender < 1 || colorToRender > 7){
        colorToRender = 1
    }

    const navigate = useNavigate()

    function navigateToLocation(){
        navigate(`/${title}`)
    }
    
    const calcDragg = e => {
        if(draggingState.draggingOverRemoveElement){
            setConfirmState(true)
        } else {
            return
        }
    }

    useEffect(()=>{
        console.log(confirmReturn)
    }, [ confirmReturn ])

    return (
        <div className='card' onClick={navigateToLocation} draggable onDragStart={ draggHandler } onDragEnd={ e => {draggHandler(e); calcDragg(e)} } >
            <div className='colorDiv' style={{ backgroundColor: `var(--color-${colorToRender})` }}></div>
            <div className='data'>
                <h3>{title}</h3>
                <p>{items}</p>
            </div>
        </div>
    )
}
