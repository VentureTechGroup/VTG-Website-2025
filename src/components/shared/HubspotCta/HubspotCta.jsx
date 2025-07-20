'use client';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './HubspotCta.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import NavLink from '../Nav/NavLinks/NavLink/NavLink';

export default function HubspotCta({
  children,
  formId = '',
  isSmall = false,
  isVariant = false,
  classNames = '',
  isNavLink = false,
}) {
  const portalId = '49124298';
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (!showForm) return;

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: '#hubspotForm',
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [showForm]);

  // 🚫 Disable body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up on unmount just in case
    return () => {
      document.body.style.overflow = '';
    };
  }, [showForm]);

  return (
    <>
      {isNavLink ? (
        <NavLink handleClick={handleClick} title="Contact" />
      ) : (
        <Button
          isSmall={isSmall}
          isVariant={isVariant}
          handleClick={handleClick}
          classNames={classNames}
        >
          {children}
        </Button>
      )}

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              onClick={() => setShowForm(false)}
              className={styles.closeBtn}
            >
              <FontAwesomeIcon icon={faClose} size="xl" />
            </button>
            <div id="hubspotForm" />
          </div>
        </div>
      )}
    </>
  );
}
