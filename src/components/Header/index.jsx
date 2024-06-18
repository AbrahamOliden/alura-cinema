import { Link } from 'react-router-dom';
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
    </header>
  );
};

export default Header;