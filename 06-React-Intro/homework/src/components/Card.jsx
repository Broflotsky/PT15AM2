import React from 'react';

export default function Card(props) {
  console.log('props de card', props.props)
  // acá va tu código
  return (
    <div style={{border : '1px solid gray', width : '320px', padding: '8px', margin : 'auto', borderRadius : '5px'}}>
      <div style={{display : 'flex', justifyContent : 'right'}}>
      <button style={{backgroundColor: 'red', color:'white', border : '1px solid gray'}} onClick={() => props.onClose()}>X</button>
      </div>
      <div style={{fontWeight: 'bold'}}>{props.name}</div>
      <div>{props.species}</div>
      <div>{props.gender}</div>
      <div><img alt={props.image} src={props.image}></img></div>
    </div>
    ) 
};