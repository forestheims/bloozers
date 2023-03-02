import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleClick = (e) => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header className={styles.Header}>
      <NavLink className={styles.NavLink} to="">
        Home
      </NavLink>
      <NavLink className={styles.NavLink} to="music">
        Music
      </NavLink>
      <NavLink className={styles.NavLink} to="members">
        Members
      </NavLink>
      <NavLink className={styles.NavLink} to="contact">
        Contact
      </NavLink>
    </header>
  );
}
