import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Store from './Components/Store'
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      </ShoppingCartProvider>
  );
}

export default App;
