import React from 'react';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
const App = () => {
  return <>
  <div className="App" style={{width:"100vw",height:"100vw",}}>
    <Home />
    <Contact />
    <About />
    <Footer />
    </div>
  </>;
};

export default App;
