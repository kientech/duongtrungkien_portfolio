import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
      </div>

      <div className="qualification__sections">
        {/* ========== Education =============== */}
        <div
          className={
            toggleState === 1
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
          onClick={() => toggleTab(1)}
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Pho Nhon Primary School</h3>
              <span className="qualification__subtitle">Pho Nhon, Duc Pho, Quang Ngai</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2009 - 2014
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Pho Nhon Junior High School.</h3>
              <span className="qualification__subtitle">Pho Nhon, Duc Pho, Quang Ngai</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2014 - 2018
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Duc Pho No. 1 High School</h3>
              <span className="qualification__subtitle">Duc Pho, Quang Ngai</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2018 - 2021
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">HCMC University of Technology and Education</h3>
              <span className="qualification__subtitle">Ho Chi Minh, Viet Nam</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2021 - 2025
              </div>
            </div>
          </div>
        </div>
        {/* ============ Experience ============ */}
        <div
          className={
            toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
          onClick={() => toggleTab(2)}
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title"> HTML, CSS, JavaScript</h3>
              <span className="qualification__subtitle">fullstack.edu.vn</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2021 - 2022
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Google IT Automation with Python</h3>
              <span className="qualification__subtitle">Google - Coursera</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2022 - 2023
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">IBM Data Science Professional</h3>
              <span className="qualification__subtitle">IBM - Coursera</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2023 - 2023
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
