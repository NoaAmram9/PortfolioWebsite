import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactTab.css';

const ContactTab = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactText = {
    he: {
      label: '04 // יצירת קשר',
      title: 'בואו ניצור משהו יחד.',
      intro: 'בין אם אתם מחפשים אפיון למערכת מורכבת, עיצוב ממשק נקי ומדויק, או שפשוט בא לכם לדבר על החיבור שבין הנדסת תוכנה לחוויית משתמש – אני כאן. תשאירו הודעה ואחזור אליכם בהקדם.',
      fullName: 'שם מלא',
      email: 'כתובת אימייל',
      message: 'הודעה',
      sendMessage: 'שליחת הודעה',
      sending: 'שולח...',
      success: 'ההודעה נשלחה בהצלחה! נשתמע בקרוב.',
      error: 'אופס, שגיאה בשליחה. נסו שוב מאוחר יותר.'
    },
    en: {
      label: '04 // CONTACT',
      title: 'Let\'s build together.',
      intro: 'Whether you\'re looking for complex system architecture, precise interface design, or just want to chat about the intersection of software engineering and UX – I\'m here. Drop a message and I\'ll get back to you.',
      fullName: 'Full Name',
      email: 'Email Address',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! Talk to you soon.',
      error: 'Oops, failed to send. Please try again later.'
    }
  };

  const content = contactText[language] || contactText.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'sending', text: content.sending });

    emailjs.send(
      'service_5w4wo2f',      
      'template_ywel24n',     
      formData,
      's5mlWrc8q26RBliW2'       
    ).then(
      () => {
        setStatus({ type: 'success', text: content.success });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setStatus({ type: '', text: '' }), 5000);
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus({ type: 'error', text: content.error });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="contact-tab">
      <div className="contact-grid">
        
        {/* Left Side: Info & Microcopy */}
        <div className="contact-sidebar">
          <span className="contact-label">{content.label}</span>
          <h2 className="contact-title">{content.title}</h2>
          <p className="contact-intro">{content.intro}</p>
          
          <div className="contact-info-list">
            <a href="mailto:noaamram9421@gmail.com" className="contact-info-item group">
              <div className="icon-box">
                <Mail size={18} />
              </div>
              <span className="contact-text">noaamram9421@gmail.com</span>
              <ArrowUpRight size={16} className="contact-arrow" />
            </a>
            
            <div className="contact-info-item">
              <div className="icon-box">
                <MapPin size={18} />
              </div>
              <span className="contact-text">
                {language === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="contact-form-wrapper">
          <div className="glass-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{content.fullName}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder={language === 'he' ? 'ישראל ישראלי' : 'Jane Doe'}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{content.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{content.message}</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="form-textarea"
                  placeholder={language === 'he' ? 'ספרי לי על הפרויקט שלך...' : 'Tell me about your project...'}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? content.sending : content.sendMessage}
                </button>
                {status.text && (
                  <span className={`status-message ${status.type}`}>
                    {status.text}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactTab;