import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} /> */}

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;