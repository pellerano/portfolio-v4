import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ContactModal from './ContactModal';

const NavbarComponent = () => {
  const navLinks = ['Home', 'About', 'Experience', 'Portfolio'];

  return (
    <>
      <Navbar bg='white' variant='light' className='shadow py-3' expand='lg'>
        <Container>
          <Navbar.Brand href='#home' style={{ fontWeight: 'bold' }}>
            Pellerano
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav>
              {navLinks.map((link, key) => {
                return (
                  <Nav.Link key={key} href={`#${link}`} className='mx-3 text-dark' style={{ fontWeight: '500' }}>
                    {link}
                  </Nav.Link>
                );
              })}
              <ContactModal />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
