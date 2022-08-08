import logo from '../../assets/logo.png';
import styleNav from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar({onSearch}) {

  return (
    <div className={styleNav.container}>
      <nav>
        <img src={logo} alt="logo"/>
        <h1>Central de Cruceros</h1>
        <SearchBar onSearch = {onSearch} />
      </nav>
    </div>
   
  )
}
