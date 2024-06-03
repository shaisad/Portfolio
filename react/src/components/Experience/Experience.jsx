import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from './Experience.module.css';
export const Experince = () => {
    return (
       
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Technical Skills</h2>
            <br></br>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};