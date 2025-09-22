import { Line } from "rc-progress";
import React, { useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import PageHeaderContent from "../../components/pageHeaderContent";
import AnimatedSection from "../../components/AnimatedSection";
import ModernCard from "../../components/ModernCard";
import Footer from "../../components/Footer";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
  // Set document title for skills page
  useEffect(() => {
    document.title = "Jude - Skills";
  }, []);

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <AnimatedSection key={i} direction="up" delay={i * 0.2}>
            <ModernCard className="skills__card">
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <motion.div 
                    key={j}
                    className="progressbar-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="3"
                      strokeColor="var(--theme-main-color)"
                      trailWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </AnimatedSection>
        ))}
      </div>
      <Footer />
    </section>
  );
};
export default Skills;
