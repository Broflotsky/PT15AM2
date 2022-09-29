import { connect } from 'react-redux'
import React from 'react'
import './products.css'

export function Products () {
  return (
    <>
      <div className='productsBg'>
        <h1 className='productsTl'>HENRY MARKET</h1>

        <div className='productsList'>
          {/* ¡Renderiza aquí todas tus cards! */}

        </div>
      </div>
    </>
  )
}

export function mapStateToProps () {}

export default connect(mapStateToProps, null)(Products)
