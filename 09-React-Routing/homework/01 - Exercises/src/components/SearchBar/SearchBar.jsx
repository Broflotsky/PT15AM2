import { useState } from "react";


export default function SearchBar({onSearch}) {
  const [search, setSearch] = useState('');

  function handleInputChange(e){
    setSearch(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    onSearch(search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={search} placeholder="Buscar..." onChange={handleInputChange}/>
        <input type='submit' value='Buscar'/>
      </form>
    </div>
  )
}
