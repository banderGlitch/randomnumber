import React from 'react'
import './style.css'
export default function ColorDisplay({colorFunction}) {
  return (
    <div className='container'>
      <h1>{colorFunction}</h1>
    </div>
  )
}