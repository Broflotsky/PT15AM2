import logo from '../../assets/logo.png';
import styleNav from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import onSearch from '../onSearch/onSearch';

export default function NavBar() {

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
