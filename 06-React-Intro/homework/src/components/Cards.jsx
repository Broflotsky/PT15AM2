import Card from './Card'

export default function Cards (props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.characters.map((char) => (
        <Card
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  )
}
