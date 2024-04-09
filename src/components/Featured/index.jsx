'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect';

export default function index() {
    const left = useRef();
    const right = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
	// 	gsap.fromTo('.gallery__item-first', { opacity: 0, x: -50 }, {
	// 		opacity: 1, x: 0,
	// 		scrollTrigger: {
	// 			trigger: '.gallery__item-first',
	// 			start: '-850',
	// 			end: '-100',
	// 			scrub: true
	// 		}
	// 	})
    //   }, [])  
      
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const itemsL = self.selector('.gallery__left .gallery__item');
      itemsL.forEach((item) => {
	gsap.fromTo(item, { opacity: 0, x: -50 }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850 top',
            end: '50% 20%',
            scrub: true,
          },
        });
      });
    }, left);
    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx2 = gsap.context((self) => {
      const itemsR = self.selector('.gallery__right .gallery__item');
      itemsR.forEach((item) => {
	gsap.fromTo(item, { opacity: 0, x: 50 }, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-750 top',
            end: '50% 20%',
            scrub: true,
	    markers: true
          },
        });
      });
    }, right);
    return () => ctx2.revert();
  }, []);
  /*useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.gallery__item-first', { opacity: 0, x: -50 }, {
	opacity: 1, x: 0,
        scrollTrigger: {
          trigger: '.gallery__item-first',
          start: '-850',
          end: '-100',
          scrub: true,
        },
    });

    gsap.fromTo('.box', { opacity: 0, x: -50 }, {
	opacity: 1, x: 300,
        scrollTrigger: {
          trigger: '.box',
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
    });

  }, []);*/

    return (

        <div className="portfolio">
            <div className="portfolio__container">
                <main className="gallery">

                    <div data-speed=".9" className="gallery__left" ref={left}>
                        <div style={{height: "4rem", width: "4rem", background: "red"}} className="box">box</div>
                        <img className="gallery__item" src="/images/work/1.jpg" alt="Alt" />
                        <img className="gallery__item" src="/images/work/2.jpg" alt="Alt" />

                        <div className="text-block gallery__item">
                            <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor amount scrolling.</p>
                        </div>

                        <img className="gallery__item" src="/images/work/6.jpg" alt="Alt" />

                    </div>

                    <div data-speed="1.1" className="gallery__right" ref={right}>

                        <div className="text-block gallery__item">
                            <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor amount scrolling.</p>
                        </div>

                        <img className="gallery__item" src="/images/work/4.jpg" alt="Alt" />
                        <img className="gallery__item" src="/images/work/5.jpg" alt="Alt" />
                        <img className="gallery__item" src="/images/work/3.jpg" alt="Alt" />

                    </div>

                </main>
            </div>
        </div>

    )
}
