import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_n7s86gt", "template_mn3kogk", form.current, 'vos9KAc6gAbIkXOBg');
      e.target.reset()
  };
  return (
    
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">
            Contact Me
        </span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                    Talk To Me
                </h3>
                <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">duongtrungkien.03052003@gmail.com</span>
                    <a href='mailto:duongtrungkien.03052003@gmail.com' className="contact__button">
                        Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i class="uil uil-whatsapp contact__icon"></i>
                    <h3 className="contact__card-title">WhatsApp</h3>
                    <span className="contact__card-data">+84 968 384 643</span>
                    <a className="contact__button">
                        Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                <i class="uil uil-instagram contact__icon"></i>
                    <h3 className="contact__card-title">Instagram</h3>
                    <span className="contact__card-data">duongtrungkien_2003</span>
                    <a className="contact__button">
                        Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
            </div>
            </div>
            
            <div className="contact__content">
                <h3 className="contact__title">
                    Write Me Your Project
                </h3>

                <form action=""  className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Name</label>
                        <input type="text" name='name' placeholder='Name' className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Email</label>
                        <input type="email" name='email' placeholder='Email' className="contact__form-input" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="" className="contact__form-tag">Project</label>
                        <textarea name="project" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write Your Project'></textarea>
                    </div>

                    <button type='submit' href=""  className="button button--flex">
            Send Message
            <i class="uil uil-location-arrow"></i>
        </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact