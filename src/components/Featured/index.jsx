'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect';

export default function index() {

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
    gsap.fromTo('.box', { opacity: 0, x: -50 }, {
	    opacity: 1, x: 300,
        scrollTrigger: {
          trigger: '.box',
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
}, []);

    return (

        <div class="portfolio">
            <div class="portfolio__container">
                <main class="gallery">

                    <div data-speed=".9" class="gallery__left">
                    <div style={{height: "4rem", width: "4rem", background: "red"}} className="box">box</div>
                        <img class="gallery__item gallery__item-first" src="/images/work/1.jpg" alt="Alt" />
                        <img class="gallery__item" src="/images/work/2.jpg" alt="Alt" />

                        <div class="text-block gallery__item">
                            <h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor amount scrolling.</p>
                        </div>

                        <img class="gallery__item" src="/images/work/6.jpg" alt="Alt" />

                    </div>

                    <div data-speed="1.1" class="gallery__right">

                        <div class="text-block gallery__item">
                            <h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor amount scrolling.</p>
                        </div>

                        <img class="gallery__item" src="/images/work/4.jpg" alt="Alt" />
                        <img class="gallery__item" src="/images/work/5.jpg" alt="Alt" />
                        <img class="gallery__item" src="/images/work/3.jpg" alt="Alt" />

                    </div>

                </main>
            </div>
        </div>

    )
}
