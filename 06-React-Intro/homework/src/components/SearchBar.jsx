export default function SearchBar (props) {
  // acá va tu código
  return (
    <div>
      <input type='search' />
      <button onClick={() => props.onSearch('Alguien')}>Agregar</button>
    </div>
  )
}
