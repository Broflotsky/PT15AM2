import React from 'react'

export default function Botones () {
  return (
    <div>
      <button onClick={alert('mensaje 1')}>Botón 1</button>
      <button onClick={alert('mensaje 2')}>Botón 2</button>
    </div>
  )
}
