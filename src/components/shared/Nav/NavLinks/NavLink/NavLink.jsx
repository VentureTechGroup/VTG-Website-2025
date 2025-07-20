import clsx from 'clsx';
import styles from './NavLink.module.scss';
import Link from 'next/link';

export default function NavLink({
  url = '',
  isMobile = false,
  title = '',
  Component = null,
  setIsOpen = () => {},
  isAnchor,
  handleClick: handleClickProp = null,
}) {
  if (Component)
    return (
      <li>
        <Component />
      </li>
    );

  const closeNav = () => setIsOpen(false);

  const handleClick = () => {
    if (handleClickProp) {
      handleClickProp();
    }
    closeNav();
  };

  return (
    <li
      key={title}
      className={clsx(styles.menuItem, isMobile ? styles.isMobile : '')}
    >
      {!isAnchor && (
        <Link href={url} onClick={handleClick}>
          {title}
        </Link>
      )}
      {isAnchor && <a href={url}>{title}</a>}
    </li>
  );
}
