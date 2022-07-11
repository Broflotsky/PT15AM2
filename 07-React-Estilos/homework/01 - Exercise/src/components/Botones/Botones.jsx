import React from 'react'
import s from './Botones.module.css'

class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <div className={s.divBotones} >
        <button className={s.buttons} onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
        <button className={s.buttons} onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
      </div>
    )
  }
}

export default Botones
