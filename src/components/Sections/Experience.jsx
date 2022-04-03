import SectionContainer from '../../common/SectionContainer';
import Card from 'react-bootstrap/Card';

const Experience = () => {
  const jobs = [
    {
      title: 'Software Development Engineer',
      company: 'Newtech Global',
      time: 'Sept 2021 - Present',
      location: 'Santo Domingo, Dominican Republic',
      logoUrl: '/assets/images/logo-newtech-software.svg',
      bgStyle: {
        backgroundColor: 'var(--newtech-bg)',
        backgroundSize: '45%, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    {
      title: 'Front End Developer',
      company: 'Media Revolution',
      time: 'Mar 2021 - Sept 2021',
      location: 'Santo Domingo, Dominican Republic',
      logoUrl: '/assets/images/mr-logo.jpeg',
      bgStyle: {
        backgroundColor: 'var(--mr-bg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    {
      title: 'Customer Service Representative',
      company: 'Alorica',
      time: 'Dic 2019 - Mar 2021',
      location: 'Santo Domingo, Dominican Republic',
      logoUrl: '/assets/images/alorica-logo.png',
      bgStyle: {
        backgroundColor: 'var(--alorica-bg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
  ];
  return (
    <SectionContainer title='Experience'>
      <Card className='shadow p-5 border-0'>
        {jobs.map((job, key) => {
          return (
            <Card className={key !== jobs.length - 1 ? 'p-3 shadow border-0 mb-4' : 'p-3 shadow border-0'} key={key}>
              <div className='custom-card d-flex'>
                <div
                  className='rounded-circle mr-5 company-profile-pic'
                  style={{
                    backgroundImage: `url(${job.logoUrl}`,
                    width: '4rem',
                    height: '4rem',
                    ...job.bgStyle,
                  }}
                />
                <div className='w-100 job-info' style={{ paddingLeft: '1rem' }}>
                  <div className='d-flex justify-content-between m-0 job-info-row'>
                    <h4 className='m-0' style={{ fontWeight: 'bold' }}>
                      {job.title}
                    </h4>
                    <h5 className='m-0' style={{ color: 'var(--orange-main)' }}>
                      {job.time}
                    </h5>
                  </div>
                  <div className='d-flex justify-content-between m-0 job-info-row'>
                    <h5 className='m-0'>{job.company}</h5>
                    <h5 className='m-0'>{job.location}</h5>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </Card>
    </SectionContainer>
  );
};

export default Experience;
