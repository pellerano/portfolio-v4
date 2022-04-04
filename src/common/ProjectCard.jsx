import Card from 'react-bootstrap/Card';

const ProjectCard = (props, key) => {
  const { title, year, badgeType, imgUrl } = props;
  return (
    <Card key={key} style={{ width: '18rem' }} className='shadow rounded-3 border-0 my-3'>
      <Card.Img
        className='border-0'
        variant='top'
        style={{
          backgroundImage: `url(${imgUrl})`,
          height: '30vh',
          backgroundPosition: 'center',
          backgroundSize: imgUrl.includes('exodia') ? '170%' : 'cover',
          borderTopLeftRadius: '0.3rem',
          borderTopRightRadius: '0.3rem',
        }}
      />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: 'var(--orange-main)' }}>{year}</Card.Text>
        <span
          className={
            badgeType === 'Web Dev'
              ? 'badge rounded-pill mt-3 bg-web-dev'
              : badgeType === 'UX/UI'
              ? 'badge rounded-pill mt-3 bg-ux-ui'
              : 'badge rounded-pill mt-3 bg-graphic-design'
          }
        >
          {badgeType}
        </span>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
