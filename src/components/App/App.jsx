import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
