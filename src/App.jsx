import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { About, Experience } from './components/Sections';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
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
        <Footer />
      </Container>{' '}
    </div>
  );
};

export default App;
