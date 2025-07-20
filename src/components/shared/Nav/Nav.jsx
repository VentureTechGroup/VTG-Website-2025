'use client';
import styles from './Nav.module.scss';
import NavLinks from './NavLinks/NavLinks';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import logo from 'public/logo.png';
import Wrapper from '../Wrapper/Wrapper';
import useWindowSize from '@/hooks/useWindowSize';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { useState } from 'react';
import HubspotCta from '../HubspotCta/HubspotCta';

export const getNavData = ({ isNavLink, isFooterLink }) => [
  { title: 'Services', url: '#services' },
  { title: 'Partner', url: '#partner' },
  {
    title: 'Contact',
    Component: () => (
      <HubspotCta
        formId="f319e099-9ebc-4c6c-b6eb-b3cb0b3aab4c"
        isNavLink={isNavLink}
        isFooterLink={isFooterLink}
      >
        Contact
      </HubspotCta>
    ),
  },
];

export default function Nav({ pathname }) {
  const { isDesktop, isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const showNavLinks = isDesktop || isOpen;
  const navData = getNavData({ isNavLink: true, isFooterLink: false });
  return (
    <nav className={clsx(styles.nav)} id="navigation">
      <Wrapper>
        <ul className={styles.desktopList}>
          <li>
            <Link href="/">
              <Image
                src={logo}
                width={isMobile ? 220 : 300}
                height="auto"
                alt="Logo"
                priority
                className={styles.logo}
              />
            </Link>
          </li>
          {showNavLinks && (
            <div className={styles.navRight}>
              <NavLinks
                navData={navData}
                pathname={pathname}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          )}
          {!isDesktop && (
            <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          )}
        </ul>
      </Wrapper>
    </nav>
  );
}
