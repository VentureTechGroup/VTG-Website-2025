import Image from 'next/image';
import styles from './Sponsors.module.scss';
import boomi from 'public/sponsors/boomi.png';
import conga from 'public/sponsors/conga.png';
import dealhub from 'public/sponsors/dealhub.png';
import hubspot from 'public/sponsors/hubspot.png';
import maxio from 'public/sponsors/maxio.svg';
import salesforce from 'public/sponsors/salesforce.png';
import sup from 'public/sponsors/sup.png';
import Tiles from './Tiles/Tiles';
import clay from 'public/sponsors/clay.png';
import fivetran from 'public/sponsors/fivetran.png';
import nue from 'public/sponsors/nue.png';
import mulesoft from 'public/sponsors/mulesoft.png';

const sponsors = [
  {
    src: boomi,
    alt: 'Boomi',
  },
  {
    src: conga,
    alt: 'Conga',
  },
  {
    src: dealhub,
    alt: 'DealHub',
  },
  {
    src: hubspot,
    alt: 'HubSpot',
  },
  {
    src: maxio,
    alt: 'Maxio',
  },
  {
    src: salesforce,
    alt: 'Salesforce',
  },
  {
    src: sup,
    alt: 'Sup',
  },
  {
    src: fivetran,
    alt: 'Fivetran',
  },
  {
    src: clay,
    alt: 'Clay',
  },
  {
    src: nue,
    alt: 'Nue',
  },
  {
    src: mulesoft,
    alt: 'Mulesoft',
  },
];

export default function Sponsors() {
  return (
    <div className={styles.container} id="partner">
      <h2 className={styles.title}>Experts In Your Revenue Tech Stack</h2>
      <Tiles sponsors={sponsors} />
    </div>
  );
}
