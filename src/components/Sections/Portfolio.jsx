import ProjectCard from '../../common/ProjectCard';
import SectionContainer from '../../common/SectionContainer';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Portfolio = () => {
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

  return (
    <SectionContainer title='Portfolio' noMarginBottom={true}>
      <Splide options={{ perPage: 4, type: 'loop', autoplay: 'play' }}>
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
