import Container from 'react-bootstrap/Container';

const SectionContainer = props => {
  const { title, children } = props;
  return (
    <Container style={{ marginBottom: '10vh' }}>
      <h3 className='mb-4' style={{ fontWeight: 'bold' }}>
        {title}
      </h3>
      {children}
    </Container>
  );
};

export default SectionContainer;
