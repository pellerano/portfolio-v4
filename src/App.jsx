import { Container } from 'react-bootstrap';
import Hero from './components/Navbar/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '10vh' }}>
        <Hero />
      </Container>
    </>
  );
};

export default App;
