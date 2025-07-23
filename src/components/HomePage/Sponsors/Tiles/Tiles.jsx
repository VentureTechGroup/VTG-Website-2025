'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Tiles.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export default function Tiles({ sponsors }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // scroll animation
  useEffect(() => {
    const speed = 0.5;
    let animationFrameId;

    const animate = () => {
      setOffset(prev => {
        const container = containerRef.current;
        if (!container) return prev;

        const singleContentWidth = container.scrollWidth / 2;

        const next = prev + speed;
        return next >= singleContentWidth ? 0 : next;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const sponsorsWithDuplicates = [...sponsors, ...sponsors];

  return (
    <div className={styles.outerContainer}>
      <div
        className={styles.innerScrollContainer}
        ref={containerRef}
        style={{
          transform: `translateX(-${offset}px)`,
        }}
      >
        {sponsorsWithDuplicates.map((mediaItem, index) => (
          <div key={`${mediaItem.src}-${index}`} className={clsx(styles.logo)}>
            <Image
              src={mediaItem.src}
              alt={mediaItem.alt}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
