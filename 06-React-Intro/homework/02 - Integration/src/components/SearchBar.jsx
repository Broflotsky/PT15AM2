export default function SearchBar (props) {
  return (
    <div>
      <input type='search' />
      <button onClick={() => props.onSearch('un ID')}>Agregar</button>
    </div>
  )
}
