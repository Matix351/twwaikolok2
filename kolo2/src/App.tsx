import './App.css';
import Home from "./components/home";
import Charts from './components/charts';

import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';

function App() {

  return (
    <Router>
      <nav style={{ margin: 12 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/charts" style={{ padding: 5 }}>
          Charts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
    
      </Routes>
    </ Router>
  )
}

export default App
