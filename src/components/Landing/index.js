'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import styles from './style.module.scss'

export default function index() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  
  return (
    <div>

      <div class="main">
        <section id="hero">
          <div class="container">



          <main className={styles.main}>
            <div class="image__container">
              <svg class="main__hero__image" width="100%" height="100%" viewBox="0 0 100 40">
                        <clipPath id="border">
                            <path id="main__image__path" d="M 7 5
                                        L 85 5
                                        A 2.5 2.5 0 0 0 87.5 2.5
                                        A 2.5 2.5 0 0 1 90 0
                                        L 97.5 0
                                        A 2.5 2.5 0 0 1 100 2.5
                                        L 100 25
                                        A 2.5 2.5 0 0 1 97.5 27.5
                                        L 80 27.5
                                        A 2.5 2.5 0 0 0 77.5 30
                                        L 77.5 35
                                        A 2.5 2.5 0 0 1 75 37.5
                                        L 10 37.5
                                        A 2.5 2.5 0 0 1 7.5 35
                                        L 7.7 20
                                        A 2.5 2.5 0 0 0 5 17.5
                                        L 2.5 17.5
                                        A 2.5 2.5 0 0 1 0 15
                                        L 0 7.5
                                        A 2.5 2.5 0 0 1 2.5 5
                                        ">

                            </path>
                        </clipPath>
                        <image clip-path="url(#border)" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                            href="/images/background.jpg"></image>
                    </svg>
            </div>

            <div className={styles.sliderContainer}>
              <div ref={slider} className={styles.slider}>
                <p ref={firstText}>Freelance Developer -</p>
                <p ref={secondText}>Freelance Developer -</p>
              </div>
            </div>
          </main>




            <div class="carousel">
              <div class="left__carousel"></div>
              <div class="right__carousel"></div>
              <div class="carousel__inner">
                <div class="item">
                  <img src="/images/okay.png" alt="tech stack1" />
                </div>
                <div class="item">
                  <img src="/images/signup.png" alt="tech stack1" />
                </div>
                <div class="item">
                  <img src="/images/wallet.png" alt="tech stack1" />
                </div>
                <div class="item">
                  <img src="/images/okay.png" alt="tech stack1" />
                </div>
                <div class="item">
                  <img src="/images/signup.png" alt="tech stack1" />
                </div>
                <div class="item">
                  <img src="/images/wallet.png" alt="tech stack1" />
                </div>
              </div>
            </div>

          </div>

          <div class="bottom__div">
            <div class="left">
              <div class="curve"></div>
              <div class="cover"></div>
            </div>
            <div class="right">
              <div class="services">
                <h5>Services</h5>
              </div>
            </div>
          </div>

        </section>
      </div>

    </div>
  )
}
