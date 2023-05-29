"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, textContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.span
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="text-center text-secondary-white tex-xs"
      >
        | About Metaversus
      </motion.span>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`font-normal text-secondary-white text-center leading-10 mt-2 sm:text-3xl text-xl max-w-[1095px]`}
      >
        <span className="font-extrabold text-white">Metaverse </span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <span className="font-extrabold text-white">
          {" "}
          madness of the metaverse{" "}
        </span>
        of today, using only{" "}
        <span className="font-extrabold text-white"> VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-extrabold text-white"> explore </span> the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        className="mt-7"
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
      />
    </motion.div>
  </section>
);

export default About;
