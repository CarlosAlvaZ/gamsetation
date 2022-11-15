import React from 'react'
import '../styles/layout.css'

export default function Layout(props) {
  return (
    <div className='layoutContainer'>
      <h2> {props.title} </h2>
      <hr></hr>
      {props.children}
    </div>
  )
}
