import React from 'react'
import './Hero.css'

export default function Hero(props:any) {
  return (
        <div className='hero-section'>
            <p>{props.image}</p>
            <p>{props.children}</p>
        </div>
  )
}
