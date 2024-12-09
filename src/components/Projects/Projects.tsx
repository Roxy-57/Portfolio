import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    { title: '날씨알려줭(WeatherProject)', 
      description: '검색 엔진에 날씨를 알려주는 백그라운드 비디오 출력 프로젝트', 
      link: 'https://github.com/Roxy-57/weatherProject', 
      image: '/projectimage/snow.png',
    },
    { title: 'GameIntroductionPage', description: '갓 오브 워의 세계관 인물 및 지역 확인 웹페이지', link: 'https://github.com/Roxy-57/GameIntroductionPage',image: '/projectimage/godofwar.png', },
    { title: '암 데이터 분석', description: '대한민국 1999년 ~ 2921년까지의 암 발생 데이터 분석', link: 'https://github.com/Roxy-57/cancerDataProject',image: '/projectimage/cancer.png' },
    { title: '마왕을 잡아보자!', description: '시뮬레이션 게임 프로젝트', link: 'https://github.com/Roxy-57/TextProject',image: '/projectimage/Game.png' },
  ];

  return (
    <div id="projects" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className={styles.card}>
                <Card.Body>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.link} variant="light">프로젝트 보러가기</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
