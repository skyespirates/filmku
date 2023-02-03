import '@themesberg/flowbite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Film from './pages/Film';
import Form from './pages/Form';
import DetailFilm from './pages/DetailFilm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film" element={<Film />} />
        <Route path="film/:id" element={<DetailFilm />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
