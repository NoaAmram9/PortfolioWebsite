import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactTab.css';

const ContactTab = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(language === 'he' ? 'שולח...' : 'Sending...');

    emailjs.send(
      'service_5w4wo2f',      
      'template_ywel24n',     
      formData,
      's5mlWrc8q26RBliW2'       
    ).then(
      () => {
        setStatus(language === 'he'
          ? 'ההודעה נשלחה בהצלחה! תודה 🙌'
          : 'Message sent successfully! Thank you 🙌'
        );
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus(language === 'he'
          ? 'שגיאה בשליחה. נסי שוב מאוחר יותר.'
          : 'Failed to send. Please try again later.'
        );
      }
    );
  };

  return (
    <div className="contact-tab">
      <h2 className="section-title">{t.contact}</h2>

      <div className="contact-form-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">{t.fullName}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.email}</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.message}</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="5"
              className="form-textarea"
            />
          </div>

          <button type="submit" className="submit-btn">{t.sendMessage}</button>

          {status && <p className="status-text">{status}</p>}
        </form>
      </div>

      <div className="contact-info-card">
        <h3 className="contact-info-title">{t.contactInfo}</h3>
        <div className="contact-info-list">
          <div className="contact-info-item">
            <Mail size={24} className="contact-icon" />
            <span className="contact-text">noaamram9421@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <MapPin size={24} className="contact-icon" />
            <span className="contact-text">
              {language === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
