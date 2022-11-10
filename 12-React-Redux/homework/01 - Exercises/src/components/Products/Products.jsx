import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
// import Card from '../Card/Card'

export function Products() {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>

        <div className="productsList">
          {/* ¡Renderiza aquí todas tus cards! */}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps() {}

export default connect(mapStateToProps, null)(Products);
