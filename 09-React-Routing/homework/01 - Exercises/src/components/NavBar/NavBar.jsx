import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styleNav from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar({onSearch}) {

  return (
    <div className={styleNav.container}>
      <nav>
        <Link to='/'><img src={logo} alt="logo"/></Link>
        <h1>Central de Cruceros</h1>
      </nav>
    </div>
   
  )
}
