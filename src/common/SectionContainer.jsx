import Container from 'react-bootstrap/Container';

const SectionContainer = props => {
  const { title, children, noMarginBottom } = props;
  return (
    <Container style={{ marginBottom: !noMarginBottom ? '10vh' : '0' }}>
      <h3 className='mb-4' style={{ fontWeight: 'bold' }}>
        {title}
      </h3>
      {children}
    </Container>
  );
};

export default SectionContainer;
