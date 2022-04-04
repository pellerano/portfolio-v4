import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import { Hero, About, Experience, Portfolio } from './components/Sections';
import Footer from './components/Footer';

import Notiflix from 'notiflix';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Notiflix.Loading.init({
      backgroundColor: '#FFFFFF',
      svgColor: '#FF8B00',
    });
    Notiflix.Loading.pulse();
    setTimeout(() => {
      setIsReady(true);
      Notiflix.Loading.remove();
    }, 3000);
  }, []);
  return (
    <div className={isReady ? '' : 'd-none'}>
      <Navbar />
      <Container style={{ marginTop: '10vh' }}>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Footer />
      </Container>{' '}
    </div>
  );
};

export default App;
