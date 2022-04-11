import ProjectCard from '../../common/ProjectCard';
import SectionContainer from '../../common/SectionContainer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const projects = [
    {
      title: 'Cristian Tejeda',
      year: '2019',
      badgeType: 'Web Dev',
      imgUrl: 'assets/images/cris_photography_thumbnail.png',
    },
    { title: 'TravelNow!', year: '2019', badgeType: 'Web Dev', imgUrl: 'assets/images/travel_now_thumbnail.png' },
    { title: 'Elena Joy', year: '2019', badgeType: 'Web Dev', imgUrl: 'assets/images/elena_joy_thumbnail.png' },
    {
      title: 'Carnvaval Dominicano',
      year: '2019',
      badgeType: 'UX/UI',
      imgUrl: 'assets/images/cd_thumbnail.png',
    },
    { title: 'Punta Cana Sports', year: '2019', badgeType: 'UX/UI', imgUrl: 'assets/images/pcsports_thumbnail.png' },
    { title: 'Exodia', year: '2017', badgeType: 'Graphic Design', imgUrl: 'assets/images/exodia.png' },
    {
      title: 'Patron Vapes',
      year: '2019',
      badgeType: 'Graphic Design',
      imgUrl: 'assets/images/pv_thumbnail.png',
    },
    {
      title: 'Love is in the Air',
      year: '2019',
      badgeType: 'Graphic Design',
      imgUrl: 'assets/images/liita_thumbnail.png',
    },
    {
      title: "Mima's Honey",
      year: '2019',
      badgeType: 'Graphic Design',
      imgUrl: 'assets/images/mh_thumbnail.png',
    },
  ];

  useEffect(() => {
    window.addEventListener('load', () => {
      window.innerWidth <= 768
        ? setItemsPerPage(1)
        : window.innerWidth <= 991
        ? setItemsPerPage(2)
        : window.innerWidth <= 1400
        ? setItemsPerPage(3)
        : setItemsPerPage(4);
    });
    window.addEventListener('resize', () => {
      window.innerWidth <= 768
        ? setItemsPerPage(1)
        : window.innerWidth <= 991
        ? setItemsPerPage(2)
        : window.innerWidth <= 1400
        ? setItemsPerPage(3)
        : setItemsPerPage(4);
    });
  }, []);

  return (
    <SectionContainer title='Portfolio'>
      <Splide options={{ perPage: itemsPerPage, type: 'loop' }}>
        {projects.map((project, key) => {
          return (
            <SplideSlide key={key}>
              <ProjectCard
                key={key}
                title={project.title}
                year={project.year}
                badgeType={project.badgeType}
                imgUrl={project.imgUrl}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </SectionContainer>
  );
};

export default Portfolio;
