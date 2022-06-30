export default function Botones (props){
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