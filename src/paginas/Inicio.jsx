import React from 'react'
import '../App.css'
function  Inicio  (props)  {
  
  return(
      <div className='image'>
          <img  className='foto' src={props.image}  alt="descripción imagen"/>
      </div>
  )
  }
  
    // <img src = {fuente.image} alt="Imagen"/>
  

export default Inicio