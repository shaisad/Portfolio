import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shaira Sadia Karim</h1>
        <p className={styles.description}>
        I am a fourth-year Software Engineering student at Islamic University of Technology, keen 
        on working with web development and backend technologies.
        </p>
        <div className={styles.buttonContainer}>
        <a href="mailto:shairasadia@iut-dhaka.edu" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={getImageUrl("pdf/cv.pdf")} download className={styles.contactBtn}>
          Resume
        </a>
        
        <a href="https://www.linkedin.com/in/shaira-sadia-karim-444b56301/">
      <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className={styles.icon} />
    </a>
    
    <a href="https://github.com/shaisad">
      <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className={styles.icon} />
    </a>
        
      </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} `}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
