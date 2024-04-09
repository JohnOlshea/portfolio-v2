'use client';
import Landing from '../components/Landing'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  )
}
