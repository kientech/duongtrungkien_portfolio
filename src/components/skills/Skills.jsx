import React from 'react';
import './skills.css';
import DataScience from './DataScience';
import MachineLearning from './MachineLearning';

const Skills = () => {
  return (
    <div className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">
            My Technical Level
        </span>
        <div className="skills__container container grid">
            <DataScience />

            <MachineLearning />
        </div>
    </div>
  )
}

export default Skills