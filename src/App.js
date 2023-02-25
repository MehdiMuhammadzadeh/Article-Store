import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ArtcielProvider from './context/ArtcielProvider';
import Article from './Pages/Article';
import Cart from './Pages/Cart';
import Home from './Pages/Home';


const App = () => {

  const [count, setCounter] = useState(0) 

  const passData = () => {
    setCounter(count + 1)
  };

  return (
    <BrowserRouter>
    <Header count={count} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/article' element={
          <ArtcielProvider>
            <Article  passData={passData}/>
          </ArtcielProvider>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;



        {/* <Route path='/article' element={<Article
          passData={passData}
        />}/> */}