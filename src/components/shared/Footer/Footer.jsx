'use client';
import styles from './Footer.module.scss';
import { getNavData } from '@/components/shared/Nav/Nav';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import Wrapper from '../Wrapper/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import glassdoor from 'public/glassdoor.png';
import HubspotCta from '../HubspotCta/HubspotCta';

export const FooterLink = ({ title, url, handleClick = null }) => {
  if (handleClick) {
    return (
      <li className={styles.listItem} onClick={handleClick}>
        {title}
      </li>
    );
  }
  return (
    <li className={styles.listItem}>
      <Link href={url}>{title}</Link>
    </li>
  );
};
export default function Footer() {
  const navData = getNavData({ isNavLink: false, isFooterLink: true });
  return (
    <footer className={styles.footer} id="footer">
      <Wrapper classNames={styles.innerContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} width={230} height="auto" alt="Logo" priority />
        </Link>
        <ul className={styles.list}>
          {navData.map(item => {
            if (item.Component) {
              return (
                <li key={item.title} className={styles.listItem}>
                  <item.Component />
                </li>
              );
            }
            return (
              <FooterLink key={item.title} title={item.title} url={item.url} />
            );
          })}
        </ul>
        <div className={styles.rightContainer}>
          <div className={styles.buttons}>
            <HubspotCta
              formId="f319e099-9ebc-4c6c-b6eb-b3cb0b3aab4c"
              isSmall
              classNames={styles.button}
            >
              Let's Chat
            </HubspotCta>
            <HubspotCta
              formId="dd0313f3-ecdb-44a3-9f16-7870f673832e"
              isSmall
              isVariant
            >
              Become a partner
            </HubspotCta>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.glassdoor.ca/Overview/Working-at-VentureTech-Group-EI_IE5066935.11,28.htm"
              target="_blank"
              className={styles.glassdoor}
            >
              <Image
                src={glassdoor}
                alt="Glassdoor Icon"
                width="100"
                height="auto"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/venturetechgroup/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#B3B3EE" size="xl" />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
