import './global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account/Account';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Posts from './components/Posts/Posts';
import Random from './components/Posts/Random/Random';
import Tags from './components/Posts/Tags/Tags';
import Browse from './components/Posts/Browse/Browse';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />}>
            <Route index element={<Browse />} />
            <Route path="tags" element={<Tags />} />
            <Route path="random" element={<Random />} />
          </Route>
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}
