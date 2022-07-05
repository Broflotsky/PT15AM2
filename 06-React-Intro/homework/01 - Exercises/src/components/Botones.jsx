import React from 'react'

export default function Botones ({ alerts }) {
  return (
    <div>
      <button onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
      <button onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
    </div>
  )
}
