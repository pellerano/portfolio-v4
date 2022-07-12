import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import { Hero, About, Experience, Portfolio } from './components/Sections';
import Footer from './components/Footer';

import Notiflix from 'notiflix';
import ReactMarkdown from 'react-markdown';
import SectionContainer from './common/SectionContainer';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const markdown = `# Portfolio Changelog ⚛️🔧

  [![](https://img.shields.io/badge/author-Hermes%20Pellerano-orange)](https://pellerano.dev)
  
  ## Technologies used to build this project
  
  - [⚛️ React](https://reactjs.org/)
  - [🖌️ Bootstrap](https://getbootstrap.com/)
  - [🎨 React Bootstrap](https://react-bootstrap.github.io/)
  - [✨ React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons)
  - [🔔 Notiflix](https://notiflix.github.io/)
  - [📄 Splide](https://splidejs.com/)
  
  ## Changelog
  
  ### v4.0 - Initial Release (Apr 9, 2022)
  
  #
  
  #### v4.0 - Released Apr 9, 2022
  
  - Created React App locally + created remote repo on Github.
  - Added basic styling using Bootstrap/React Bootstrap/React Bootstrap Icons.
  - Added Responsive styling support for multiple devices
  
  #### v4.1 - Released Apr 11, 2022

  - Added Changelog Section to showcase portfolio evolution.

  #### v4.2 - Released Jul 12, 2022
  
  - Added additional/current work experience.
  
  #### v4.3 - Coming Soon
  
  - Project modal to display more info on projects in the portfolio section.
  
  ### v3.0 - Initial Release (Jan 4, 2021)
  
  #
  
  #### v3.0 - Released Jan 4, 2022 ([Visit](https://pellerano.github.io/portfolio-v3/))
  
  - Project was developed locally using HTML + CSS/Sass.
  - Projects files were uploaded directly to Github.
  - Project was released on a public domain on May 8, 2020.
  
  #### v3.1 - Released Jan 28, 2022 ([Visit](https://pellerano.github.io/portfolio-v3.1/))
  
  - Fixed styling issues.
  - Added Responsive styling in order to provide the best experience across devices.
  - Added previous projects to Projects section.
  
  ### v2.0 - Initial Release (May 8, 2020)
  
  #
  
  #### v2.0 - Released May 8, 2020 ([Visit](https://pellerano.github.io/Personal-Portfolio-V2/))
  
  - Project was developed locally using HTML + CSS/Sass.
  - Projects files were uploaded directly to Github.
  - Project was released on a public domain on May 8, 2020.
  `;

  useEffect(() => {
    Notiflix.Loading.init({
      backgroundColor: '#FFFFFF',
      svgColor: '#FF8B00',
    });
    Notiflix.Loading.pulse();
    setTimeout(() => {
      setIsReady(true);
      Notiflix.Loading.remove();
    }, 3000);
  }, []);

  return (
    <div className={isReady ? '' : 'd-none'}>
      <Navbar />
      <Container style={{ marginTop: '10vh' }}>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        {/* <MarkdownView markdown={markdown} options={{ emoji: true }} /> */}
        <SectionContainer title='Changelog' noMarginBottom={true}>
          <div className='gh-body'>
            <ReactMarkdown children={markdown} />
          </div>
          <Footer />
        </SectionContainer>
      </Container>
    </div>
  );
};

export default App;
