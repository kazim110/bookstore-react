import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Catagories from './components/Catagories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="catagories" element={<Catagories />} />
      </Routes>
    </div>
  );
}

export default App;
