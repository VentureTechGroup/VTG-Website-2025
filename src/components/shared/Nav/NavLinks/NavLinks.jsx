'use client';
import NavLink from './NavLink/NavLink';
import styles from './NavLinks.module.scss';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';

export default function NavLinks({
  navData,
  pathname,
  setIsOpen,
  isOpen = false,
}) {
  const { isMobile } = useWindowSize();
  return (
    <>
      {isOpen && isMobile && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <div className={clsx(styles.navLinks, isOpen && styles.open)}>
        {navData.map((navLinkData, index) => {
          const key = `navLink-${navLinkData.title}`;
          return (
            <div key={key} className={styles.link}>
              <NavLink
                {...navLinkData}
                pathname={pathname}
                isMobile={isMobile}
                index={index}
                setIsOpen={setIsOpen}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
