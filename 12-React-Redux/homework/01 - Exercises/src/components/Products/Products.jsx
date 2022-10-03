import { connect } from 'react-redux'
import React from 'react'
import './products.css'
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import { Card } from '../Card/Card'

export function Products ({ list }) {
  return (
    <>
      <div className='productsBg'>
        <h1 className='productsTl'>HENRY MARKET</h1>

        <div className='productsList'>
          {/* ¡Renderiza aquí todas tus cards! */}
          {list.length &&
               list.map((pro, i) => {
                 return (
                   <Card
                     key={i}
                     name={pro.name}
                     price={pro.price}
                     id={pro.id}
                   />
                 )
               })
          }
        </div>
      </div>
    </>
  )
}

export function mapStateToProps (state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, null)(Products)