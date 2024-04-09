'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';


import styles from './style.module.scss'
import Nav from './nav';
import { usePathname } from 'next/navigation';

export default function Home() {
  const header = useRef(null);
  const burger = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 100,
        onLeave: () => { gsap.to(burger.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
        onEnterBack: () => { gsap.to(burger.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
      }
    })
  }, [])

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.honey}>Honey</p>
            <p className={styles.drop}>Drop</p>
          </div>
        </div>

        <div className={styles.nav}>
          <div className={styles.el}>
            <a>Work</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>About</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>Contact</a>
            <div className={styles.indicator}></div>
          </div>
        </div>
      </div>

      <div ref={burger} className={styles.headerButtonContainer}>
        <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}
