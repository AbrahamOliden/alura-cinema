import { Link } from 'react-router-dom';
import HeaderLink from '.././HeaderLink';
import styles from './index.module.css';
import logo from './logo-alura.png';

function Header() {
  return (
    <header className={styles.header}>
        <Link to='/' >
            <section className={styles.logoContainer} >
                <img src={logo} alt="Logo Alura" />
                <span>Cinema</span>
            </section>
        </Link>
        <nav>
          <HeaderLink url='./' >
            Home
          </HeaderLink>
          <HeaderLink url='./Favorites' >
            Favorites
          </HeaderLink>
        </nav>
    </header>
  );
};

export default Header;