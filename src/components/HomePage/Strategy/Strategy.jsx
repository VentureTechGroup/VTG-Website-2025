import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Strategy.module.scss';
import paredo from 'public/paredo.png';
import teamBased from 'public/team-based.png';
import zeroHandoff from 'public/zero-handoff.png';
import Image from 'next/image';

const data = [
  {
    label: 'ZERO HANDOFF',
    details:
      'The team that scopes your project is the team that delivers the outcomes, avoiding costly miscommunications.',
    image: zeroHandoff,
  },
  {
    label: 'MVP MINDSET',
    details:
      'We believe in the rule of 80/20. Rapid iteration allows us to prioritize key milestones and deliver value fast.',
    image: paredo,
  },
  {
    label: 'TEAM BASED MODEL',
    details:
      "VTG's team based model ensures industry expertise, diverse points of view and critical redundancy for every project.",
    image: teamBased,
  },
];
export default function Strategy() {
  return (
    <div className={styles.container}>
      <Wrapper>
        <h2 className={styles.heading}>
          <span className={styles.bold}>The VentureTech Way</span>
          <br />
          Business Technology Consulting
        </h2>
        <div className={styles.grid}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.title}>{item.label}</p>
              <Image
                src={item.image}
                alt={item.label}
                className={styles.image}
              />
              <p className={styles.details}>{item.details}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
