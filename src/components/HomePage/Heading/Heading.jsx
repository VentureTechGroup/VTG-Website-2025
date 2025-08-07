'use client';
import styles from './Heading.module.scss';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import useWindowSize from '@/hooks/useWindowSize';
import HubspotCta from '@/components/shared/HubspotCta/HubspotCta';

export default function Heading() {
  const { isMobile } = useWindowSize();
  return (
    <Wrapper>
      <h1 className={styles.title}>
        Reach Your {isMobile && <br />} Revenue Potential
      </h1>
      <HubspotCta formId="f319e099-9ebc-4c6c-b6eb-b3cb0b3aab4c">
        Let's Do Some Chats
      </HubspotCta>
    </Wrapper>
  );
}
