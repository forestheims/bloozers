import { NavLink, Outlet } from 'react-router-dom';
import styles from './Posts.css';

export default function Posts() {
  return (
    <main className={styles.Posts}>
      <div>
        <p>Posts</p>
        <NavLink to="">Browse</NavLink>
        <NavLink to="tags">Tags</NavLink>
        <NavLink to="random">Random</NavLink>
      </div>
      <Outlet />
    </main>
  );
}
