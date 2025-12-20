import React, { useState } from 'react'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., EmailJS, backend API)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's work together!
          </p>

          <div className="contact-layout">
            <div className="contact-info-section">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">
                    <MdEmail size={24} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:asja.attanasio@gmail.com">asja.attanasio@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <MdLocationOn size={24} />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Milan, Italy</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <FaLinkedin size={24} />
                  </span>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/asjaattanasio/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/asjaattanasio
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <FaGithub size={24} />
                  </span>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/aattanasio" target="_blank" rel="noopener noreferrer">
                      github.com/aattanasio
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
