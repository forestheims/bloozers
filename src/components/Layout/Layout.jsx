import Footer from './Footer';
import NavBar from './NavBar';
import styles from './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
