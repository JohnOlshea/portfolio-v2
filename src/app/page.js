'use client';
import Landing from '../components/Landing'
import Description from '../components/Description'
import SlidingImages from '../components/SlidingImages';
import Featured from '../components/Featured';
import Contact from '../components/Contact';

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Featured />
      <SlidingImages />
      <Contact />
    </main>
  )
}
