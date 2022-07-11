export default function Card (props) {
  return (
    <div>
      <div>
        <button onClick={() => props.onClose()}>X</button>
      </div>
      <div>{props.name}</div>
      <div>{props.species}</div>
      <div>{props.gender}</div>
      <div><img alt={props.image} src={props.image} /></div>
    </div>
  )
}
