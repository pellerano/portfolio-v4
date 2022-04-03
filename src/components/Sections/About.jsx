import SectionContainer from '../../common/SectionContainer';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <SectionContainer title={'About'}>
      <Card className='border-0 shadow'>
        <Card.Body className='p-4'>
          <h5 className='mb-3'>
            Hello there! My name is <span style={{ color: 'var(--orange-main)', fontWeight: 'bold' }}>Hermes</span>.
          </h5>
          <h5>
            I live on an island in the Caribbean called Dominican Republic. Like many other developers, I enjoy spending
            my free time increasing my knowledge of Web Development and building new and challenging projects.
          </h5>
        </Card.Body>
      </Card>
    </SectionContainer>
  );
};
export default About;
