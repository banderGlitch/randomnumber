import React from 'react'
import './style.css'

// Stackoverflow references 

// hex color 
// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript

// Rgb color
// https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript


// Problem Statement 
// To create a function that generates a color from a hexadecimal code (#sdfdsvsvs) and to 
// generate an RGB color code from an input of RGB values (12, 45, 60)


export default function RandomColor({ setColorFunction }) {
  const hexfunction = () => {
    return (
      setColorFunction('#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    )
  }

  const rgbfunction = () => {
    var o = Math.round, r = Math.random, s = 255;
    return setColorFunction('rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')')

  }
  // master function which randomly calls these two function hexfunction and rgbfunction


  const masterfunction = () => {
    return (Math.random() >= 0.5) ? hexfunction() : rgbfunction();
  }
  
// Old code 
//   const masterfunction = () => {
//     let oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
//     if (oneOrZero === 1) {
//         return hexfunction();
//     } else {
//         return rgbfunction();
//     }
// }


  return (
    <div className='container'>
      <h1>Random Color Generator</h1>
      <div className='subcontainer'>
        <div className='individualcontainer'>
          <button onClick={() => { hexfunction() }}>Hex Color Generator</button>
        </div>
        <div className='individualcontainer'>
          <button onClick={() => { rgbfunction() }}>RGB Color Generator</button>
        </div>
        <div className='individualcontainer'>
          <button onClick={() => { masterfunction()} }>Random Color Generator</button>
        </div>

      </div>

    </div>
  )
}
