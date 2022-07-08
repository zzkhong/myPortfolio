import React from "react";
import Head from "next/head";
import moment from "moment";
import type { NextPage } from "next";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Image from "next/image";

import Footer from "components/Footer";
import Bubble from "components/Bubble";
import Portfolio from "components/Portfolio";
import Timeline from "components/Timeline";

import useWindowDimensions from "hooks/useWindowDimensions";
import skills from "data/skills";

import styles from "styles/index.module.css";

const LINKEDIN = "https://www.linkedin.com/in/zzkhong";

const Home: NextPage = () => {
  const { height } = useWindowDimensions();
  const parallaxSpeed = height && height > 700 ? 15 : 7.5;

  const titleVariant = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.25 },
    },
    hidden: { opacity: 0, translateX: -300 },
  };
  const rightVariant = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.75 },
    },
    hidden: { opacity: 0, translateX: -300 },
  };
  const upVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.75 },
    },
    hidden: { opacity: 0, translateY: 100 },
  };
  const nonDelayUpVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, delay: 0.25 },
    },
    hidden: { opacity: 0, translateY: 100 },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CK Chin&apos;s Portfolio</title>
        <meta
          name="description"
          content="CK Chin is a Full Stack Developer working at Paywatch(Fintech Sector), specialize in React, React Native and FE Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Introduction */}
        <Parallax
          id="intro"
          speed={-parallaxSpeed}
          className={styles.banner_intro}
        >
          <motion.h1 variants={titleVariant} initial="hidden" animate="visible">
            Hello, I&apos;m <span className={styles.accent}>CK Chin</span>
          </motion.h1>
          <div className={styles.subtitleRow}>
            <motion.span
              variants={rightVariant}
              initial="hidden"
              animate="visible"
            >{`Malaysian, ${moment().year() - 1996} y/o`}</motion.span>
            <motion.a
              variants={upVariant}
              initial="hidden"
              animate="visible"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              <Image
                width={24}
                height={24}
                src="/linkedin.webp"
                alt="linkedin"
              />
            </motion.a>
          </div>

          <motion.p variants={rightVariant} initial="hidden" animate="visible">
            I&apos;m an experienced{" "}
            <b>
              <u>Full Stack developer</u>
            </b>{" "}
            currently working in <b>Paywatch (Fintech Sector)</b>, specialize in{" "}
            <b>Mobile Development</b> and <b>Web Development</b>.
          </motion.p>

          <motion.div variants={upVariant} initial="hidden" animate="visible">
            <h2>Skills</h2>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <Bubble
                  key={skill.label}
                  icon={skill.icon}
                  label={skill.label}
                />
              ))}
            </div>
          </motion.div>
        </Parallax>

        {/* My Career Journey */}
        <Parallax
          id="career"
          speed={parallaxSpeed}
          className={styles.banner_career}
        >
          <motion.h1
            variants={nonDelayUpVariant}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            My Career
          </motion.h1>

          <Timeline />
        </Parallax>

        {/* My Portfolio */}
        <Parallax
          id="portfolio"
          speed={-parallaxSpeed}
          className={styles.banner_portfolio}
        >
          <h1>My Portfolio</h1>
          <motion.div
            className={styles.portfolio}
            variants={nonDelayUpVariant}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Portfolio />
          </motion.div>
        </Parallax>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
