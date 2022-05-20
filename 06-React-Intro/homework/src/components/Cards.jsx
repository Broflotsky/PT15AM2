import React from 'react'
import Card from './Card'

export default function Cards(props) {
  console.log('props de Cards', props)
  // acá va tu código
  // tip, podés usar un map
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      {props.characters.map((char) => (
        <Card
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  )
}
