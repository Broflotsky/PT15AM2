export default function Botones (){
    const handleClickShow = () => {
        alert('Mostrar')
    }
    const handleClickHidden = () => {
        alert('Ocultar')
    }
    return <div>
                <button onClick={handleClickHidden}>Ocultar</button>
                <button onClick={handleClickShow}>Mostrar</button>
           </div>
}