import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/wishListCard.css'

export default function WishListCard({color, title, items}) {

    let colorToRender = parseInt(color)
    if(colorToRender < 1 || colorToRender > 7){
        colorToRender = 1
    }

    const navigate = useNavigate()

    function navigateToLocation(){
        navigate(`/${title}`)
    }

    return (
        <div className='card' onClick={navigateToLocation}>
            <div className='colorDiv' style={{ backgroundColor: `var(--color-${colorToRender})` }}></div>
            <div className='data'>
                <h3>{title}</h3>
                <p>{items}</p>
            </div>
        </div>
    )
}
