const Hero = () => {
  return (
    <div className='jumbotron jumbotron-fluid d-flex justify-content-center'>
      <div className='container d-flex justify-content-center align-items-center flex-column p-5'>
        <div
          className='rounded-circle d-flex align-items-center justify-content-center mb-3'
          style={{
            backgroundImage: 'var(--profile-gradient)',
            width: '17rem',
            height: '17rem',
            backgroundSize: '170%',
          }}
        >
          <div
            className='rounded-circle border border-5 border-white'
            style={{
              backgroundImage: 'url(assets/images/IMG_9549.jpg)',
              width: '15rem',
              height: '15rem',
              backgroundSize: '170%',
              backgroundPosition: '-5.5rem -9rem',
            }}
          />
        </div>
        <h3 style={{ fontWeight: 'bold' }}>Hermes Pellerano</h3>
        <h5 style={{ fontWeight: 300, textAlign: 'center' }}>Software Engineer / Front End Web Developer </h5>
      </div>
    </div>
  );
};

export default Hero;
