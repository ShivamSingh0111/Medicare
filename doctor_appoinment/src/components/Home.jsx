import React from 'react';
import { FaCalendarAlt, FaUserMd, FaClinicMedical, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUserMd className="feature-icon" />,
      title: "Expert Doctors",
      description: "Book appointments with certified specialists in various fields."
    },
    {
      icon: <FaCalendarAlt className="feature-icon" />,
      title: "Easy Scheduling",
      description: "24/7 online booking system for your convenience."
    },
    {
      icon: <FaClinicMedical className="feature-icon" />,
      title: "Multiple Specialties",
      description: "From general physicians to specialized surgeons."
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "Time Saving",
      description: "No more waiting in long queues at clinics."
    }
  ];

  return (
    <div className="home-container">
    
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Health Comes First</h1>
          <p>Book appointments with top doctors in your area with just a few clicks</p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              onClick={() => navigate('/doctors')}
            >
              Find a Doctor
            </button>
            <button 
              className="secondary-button"
              onClick={() => navigate('/calendar')}
            >
              View Calendar
            </button>
          </div>
        </div>
        <div className="hero-image">
          {/* This would be your medical illustration or image */}
          <div className="image-placeholder">

          <img src="https://i.pinimg.com/736x/6e/37/5a/6e375ad883c69fbb6f5845e99ca25623.jpg" alt="doctor_Image" width="100%"/>
          </div>
        </div>
      </section>

     
      <section className="features-section">
        <h2>Why Choose Our Platform</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className="cta-section">
        <h2>Ready to Book Your Appointment?</h2>
        <button 
          className="primary-button"
          onClick={() => navigate('/doctors')}
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default Home;