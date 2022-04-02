import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ContactModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Button
        variant='white'
        className='shadow rounded-pill w-50 nav-link mx-auto px-3'
        style={{ fontWeight: '500' }}
        onClick={() => handleShow()}
      >
        Get in touch!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border-0 pb-0' closeButton />
        <Modal.Body>
          <Container className='d-flex justify-content-center pb-3'>
            <h3 style={{ fontWeight: 'bold' }}>
              LET'S GET IN <span style={{ color: 'var(--orange-main)' }}>TOUCH!</span>
            </h3>
          </Container>
          <Container className='d-flex justify-content-between p-4'>
            <Button
              className='border-0 w-50 p-4 shadow'
              variant='primary'
              size='lg'
              style={{ backgroundColor: 'var(--whatsapp)' }}
            >
              Whatsapp
            </Button>
            <div className='vr mx-5'></div>
            <Button
              className='border-0 w-50 p-4 shadow'
              variant='primary'
              size='lg'
              style={{ backgroundImage: 'var(--email-gradient)' }}
            >
              Email
            </Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ContactModal;
