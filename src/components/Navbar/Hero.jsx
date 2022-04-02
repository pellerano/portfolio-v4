import profilePic from '../../../public/assets/imgs/IMG_9549.png';

const Hero = () => {
  return (
    <div className='jumbotron jumbotron-fluid d-flex justify-content-center'>
      <div className='container d-flex justify-content-center align-items-center flex-column p-5'>
        <img src={profilePic} alt='...' class='rounded-circle' />
        <h3 style={{ fontWeight: 'bold' }}>Hermes Pellerano</h3>
        <h5 style={{ fontWeight: 300 }}>Software Engineer / Front End Web Developer </h5>
      </div>
    </div>
  );
};

export default Hero;
