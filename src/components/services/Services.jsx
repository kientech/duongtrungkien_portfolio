import React, {useState} from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="serices section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">
            What I Offer
        </span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                       FullStacks Developer
                    </h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times serices__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="service__modal-title">FullStacks Developer</h3>
                        <p className="service__modal--description">
                        My Upcoming Projects, You Will Learn A Lot From It, Follow Me! 
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Food Delivery Website and Application
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                E-Commerce Website and Application
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Social Media Website and Application
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-database services__icon"></i>
                    <h3 className="services__title">Data Science</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times serices__modal-close"  onClick={() => toggleTab(0)}></i>

                        <h3 className="service__modal-title">Data Science</h3>
                        <p className="service__modal--description">
                        My Upcoming Projects, You Will Learn A Lot From It, Follow Me!
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Project on Influences of Climatic Pattern on the food chain supply globally
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Detection of Credit Card Fraud
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Customer Segmentations
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 
                <div>
                    <i className="uil uil-robot services__icon"></i>
                    <h3 className="services__title">Machine Learning</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(2)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times serices__modal-close"  onClick={() => toggleTab(0)}></i>

                        <h3 className="service__modal-title">Machine Learning</h3>
                        <p className="service__modal--description">
                        My Upcoming Projects, You Will Learn A Lot From It, Follow Me!
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Boston House Pricing Prediction Project
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Social Media Sentiment Analysis Using Twitter Dataset
                                </p>
                            </li>

                            <li className="services__modal-sevice">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-icon">
                                Linear Regression Project Idea for Stock Price Prediction
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Services
