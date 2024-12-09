import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>안녕하세요! 저는 사용자의 불편함을 해결하고 실질적인 가치를 만들어내는 소프트웨어를 개발하는 것을 목표로 하는 열정적인 신입 개발자 박하성 입니다. 
        </p>
        <p className={styles.text}>작은 불편이 큰 영향을 미친다는 점을 깨닫고, 이를 해결하기 위해 개발자의 길을 걷기 시작했습니다.<br/>저는 문제를 깊이 이해하고,데이터를 기반으로 분석하며, 사용자 중심의 해결책을 제시하는 데 중점을 두고 있습니다. <br />새로운 기술과 도전에 두려움 없이 임하며, 꾸준히 배움을 통해 역량을 키우는 것을 중요하게 생각합니다.
        </p>
        <p className={styles.text}>또한, 협업의 가치를 깊이 이해하고 있습니다. <br /> 팀원들과의 원활한 소통과 협력을 통해 프로젝트에 시너지를 더하며, 함께 성공적인 결과를 만들어내는 과정을 즐깁니다. <br />앞으로도 끊임없이 성장하며, 효율적이고 혁신적인 소프트웨어를 통해 사용자와 팀에 실질적인 가치를 제공하고자 합니다. <br />사람들의 삶을 더 나아지게 하는 소프트웨어를 만드는 개발자가 되기 위해 최선을 다하겠습니다.
        </p>
      </div>
    </div>
  );
};

export default About;

