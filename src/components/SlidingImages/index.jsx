import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';


export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);	

    return (
        <div ref={container} className={styles.slidingImages}>
            <div className={styles.slider}>






                <div class="magic-list">


                    <a href="#" class="magic-list__item">
                        <div class="magic-list__header">Искусство в деталях</div>
                        <div class="cursor">
                            <div class="cursor__image" style={{ backgroundImage: "url(/images/others/1.jpg)" }}></div>
                        </div>
                    </a>
                    <a href="#" class="magic-list__item">
                        <div class="magic-list__header">Инновации</div>
                        <div class="cursor">
                            <div class="cursor__image" style={{ backgroundImage: "url(/images/others/2.jpg)" }}></div>
                        </div>
                    </a>
                    <a href="#" class="magic-list__item">
                        <div class="magic-list__header">Первые впечатления</div>
                        <div class="cursor">
                            <div class="cursor__image" style={{ backgroundImage: "url(/images/others/3.jpg)" }}></div>
                        </div>
                    </a>
                    <a href="#" class="magic-list__item">
                        <div class="magic-list__header">Погружение в эпоху</div>
                        <div class="cursor">
                            <div class="cursor__image" style={{ backgroundImage: "url(/images/others/4.jpg)" }}></div>
                        </div>
                    </a>
                    <a href="#" class="magic-list__item">
                        <div class="magic-list__header">Образы</div>
                        <div class="cursor">
                            <div class="cursor__image" style={{ backgroundImage: "url(/images/others/5.jpg)" }}></div>
                        </div>
                    </a>

                </div>


            </div>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
