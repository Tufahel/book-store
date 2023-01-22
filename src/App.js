import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
