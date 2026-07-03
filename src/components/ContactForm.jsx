import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useI18n } from '../i18n.jsx';

export default function ContactForm() {
  const { lang, T } = useI18n();
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('UyBa5BYAsKerwsq3T');
  }, []);

  const [submittedAt, setSubmittedAt] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: T.form.projectTypes[0],
    message: '',
    honeypot: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Rate limiting: max 5 submissions per hour
  const checkRateLimit = () => {
    const now = Date.now();
    const oneHourInMs = 60 * 60 * 1000;
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    
    // Filter submissions from the last hour
    const recentSubmissions = submissions.filter(timestamp => now - timestamp < oneHourInMs);
    
    if (recentSubmissions.length >= 5) {
      return false; // Rate limit exceeded
    }
    
    // Add current submission timestamp
    recentSubmissions.push(now);
    localStorage.setItem('formSubmissions', JSON.stringify(recentSubmissions));
    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Honeypot protection - if filled, it's a bot
      if (formData.honeypot) {
        console.warn('Honeypot field filled - likely spam');
        // Silently fail to confuse bots
        setStatus({ submitting: false, submitted: true, error: null });
        return;
      }

      if (!checkRateLimit()) {
        setStatus({ submitting: false, submitted: false, error: T.form.errorRate });
        return;
      }

      if (!formData.name || !formData.email || !formData.message) {
        setStatus({ submitting: false, submitted: false, error: T.form.errorRequired });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus({ submitting: false, submitted: false, error: T.form.errorEmail });
        return;
      }

      // EmailJS credentials
      const serviceId = 'service_sdd7yrr';
      const templateId = 'template_jdq0i0h';
      const publicKey = 'UyBa5BYAsKerwsq3T';

      const baseParams = {
        from_name: formData.name,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || (lang === 'en' ? 'Not provided' : 'Niet opgegeven'),
        project_type: formData.projectType,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, {
        ...baseParams,
        to_email: 'clearbuildit@gmail.com',
        to_name: 'ClearBuildIT',
      }, publicKey);

      await emailjs.send(serviceId, templateId, {
        ...baseParams,
        to_email: formData.email,
        to_name: formData.name,
        reply_to: 'clearbuildit@gmail.com',
      }, publicKey);

      setStatus({ submitting: false, submitted: true, error: null });
      setSubmittedAt(new Date());
      
      setTimeout(() => {
        setFormData({
          name: '', email: '', phone: '',
          projectType: T.form.projectTypes[0],
          message: '', honeypot: ''
        });
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      setStatus({
        submitting: false,
        submitted: false,
        error: `${T.form.errorGenericPre}${error.text || error.message || T.form.errorGenericFallback}${T.form.errorGenericPost}`
      });
    }
  };

  return (
    <>
      <style>{`
        .cb-form {
          --paper: #F6F2E8;
          --ink: #1A1815;
          --accent: #0B7E40;
          --rule: rgba(26,24,21,0.18);
          --muted: rgba(26,24,21,0.78);
          font-family: 'Geist', system-ui, sans-serif;
          color: var(--ink);
        }
        .cb-form-alert {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 14px 16px;
          border: 1px solid var(--rule);
          border-radius: 14px;
          margin-bottom: 20px;
          font-size: 15px; line-height: 1.55;
        }
        .cb-form-alert--err { border-color: rgba(180,40,40,0.4); background: rgba(180,40,40,0.06); }

        .cb-form-success {
          position: relative;
          margin-bottom: 24px;
          padding: 32px 28px 28px;
          border: 1px solid var(--rule);
          background: var(--paper);
          overflow: hidden;
          animation: cb-success-in 600ms cubic-bezier(.2,.7,.2,1) both;
        }
        @keyframes cb-success-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cb-form-success::before {
          content: ""; position: absolute;
          left: 0; top: 0; height: 100%; width: 3px;
          background: var(--accent);
          transform: scaleY(0); transform-origin: top;
          animation: cb-success-bar 900ms cubic-bezier(.2,.7,.2,1) 200ms forwards;
        }
        @keyframes cb-success-bar { to { transform: scaleY(1); } }
        .cb-form-success-meta {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--muted);
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; margin-bottom: 16px;
        }
        .cb-form-success-meta .ts {
          font-variant-numeric: tabular-nums;
          color: var(--ink);
        }
        .cb-form-success-meta .badge {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--accent);
        }
        .cb-form-success-meta .badge .pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 3px rgba(11,126,64,0.18);
        }
        .cb-form-success h3 {
          font-family: 'Fraunces', 'Times New Roman', serif;
          font-weight: 400;
          font-variation-settings: "opsz" 144, "SOFT" 50;
          font-size: 32px; line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0 0 10px;
          color: var(--ink);
        }
        .cb-form-success h3 em {
          font-style: italic; font-weight: 300;
          color: var(--accent);
          font-variation-settings: "opsz" 144, "SOFT" 100;
        }
        .cb-form-success p {
          margin: 0;
          font-size: 15px; line-height: 1.55;
          color: rgba(26,24,21,0.72);
          max-width: 44ch;
        }
        .cb-form-success-fold {
          margin-top: 20px; padding-top: 16px;
          border-top: 1px solid var(--rule);
          display: flex; flex-wrap: wrap; gap: 18px;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--muted);
        }
        .cb-form-success-fold span b {
          color: var(--ink); font-weight: 500; margin-left: 6px;
        }
        .cb-form-alert b { font-weight: 500; display: block; margin-bottom: 2px; letter-spacing: -0.005em; }
        .cb-form-alert p { margin: 0; color: rgba(26,24,21,0.85); }
        .cb-form-alert svg { flex-shrink: 0; margin-top: 2px; }

        .cb-form-grid {
          display: grid; gap: 18px;
        }
        .cb-field { display: grid; gap: 6px; }
        .cb-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 540px) { .cb-field-row { grid-template-columns: 1fr; } }
        .cb-field label {
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted);
          display: flex; align-items: center; gap: 6px;
        }
        .cb-field label .req {
          color: var(--accent);
          font-family: 'Geist', sans-serif;
          font-size: 13px; letter-spacing: 0;
        }
        .cb-field input,
        .cb-field select,
        .cb-field textarea {
          width: 100%;
          font-family: 'Geist', sans-serif;
          font-size: 16px;
          color: var(--ink);
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--rule);
          border-radius: 0;
          padding: 10px 0;
          outline: none;
          letter-spacing: -0.005em;
          transition: border-color 200ms ease;
        }
        .cb-field textarea {
          resize: none; min-height: 96px;
          padding: 10px 0;
        }
        .cb-field select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%230B7E40' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>");
          background-repeat: no-repeat;
          background-position: right 2px center;
          padding-right: 28px;
          cursor: pointer;
          color: var(--ink);
        }
        .cb-field select option {
          background: #F6F2E8;
          color: #1A1815;
          font-family: 'Geist', sans-serif;
          padding: 8px;
        }
        .cb-field input::placeholder,
        .cb-field textarea::placeholder { color: rgba(26,24,21,0.5); }
        .cb-field input:focus,
        .cb-field select:focus,
        .cb-field textarea:focus { border-bottom-color: var(--accent); }
        .cb-field input:disabled,
        .cb-field select:disabled,
        .cb-field textarea:disabled { opacity: 0.5; cursor: not-allowed; }

        .cb-form-submit {
          margin-top: 12px;
          display: inline-flex; align-items: center; justify-content: space-between;
          gap: 14px; padding: 18px 28px; width: 100%;
          background: var(--ink); color: var(--paper);
          border: 1px solid var(--ink); border-radius: 999px;
          font-family: 'Geist Mono', ui-monospace, monospace;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer;
          transition: all 220ms ease;
        }
        .cb-form-submit:hover:not(:disabled) {
          background: var(--accent); border-color: var(--accent);
          transform: translateY(-1px);
        }
        .cb-form-submit:hover:not(:disabled) .arr { transform: translateX(4px); }
        .cb-form-submit .arr { transition: transform 220ms ease; font-size: 14px; }
        .cb-form-submit:disabled { opacity: 0.55; cursor: not-allowed; }
        .cb-form-submit .spinner {
          width: 14px; height: 14px; border-radius: 50%;
          border: 1.5px solid rgba(246,242,232,0.4);
          border-top-color: var(--paper);
          animation: cb-spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes cb-spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="cb-form">
        {status.submitted && (
          <div className="cb-form-success" role="status">
            <div className="cb-form-success-meta">
              <span className="badge"><span className="pulse" />{T.form.successBadge}</span>
              <span className="ts">
                {(submittedAt || new Date()).toLocaleTimeString(lang === 'en' ? 'en-GB' : 'nl-NL', {
                  hour: '2-digit', minute: '2-digit',
                  timeZone: 'Europe/Amsterdam', hour12: false,
                })} CET
              </span>
            </div>
            <h3>{T.form.successTitlePre}<em>{T.form.successTitleEm}</em></h3>
            <p>{T.form.successText}</p>
            <div className="cb-form-success-fold">
              <span>{T.form.successRef}<b>#{(submittedAt || new Date()).getTime().toString(36).toUpperCase().slice(-6)}</b></span>
              <span>{T.form.successResp}<b>{T.form.successRespVal}</b></span>
              <span>{T.form.successLoc}<b>{T.form.successLocVal}</b></span>
            </div>
          </div>
        )}

        {status.error && (
          <div className="cb-form-alert cb-form-alert--err">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#B42828">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <b>{T.form.errorTitle}</b>
              <p>{status.error}</p>
            </div>
          </div>
        )}

        <form className="cb-form-grid" onSubmit={handleSubmit}>
          <input
            type="text" name="honeypot"
            value={formData.honeypot} onChange={handleChange}
            style={{ display: 'none' }} tabIndex="-1" autoComplete="off"
          />

          <div className="cb-field-row">
            <div className="cb-field">
              <label>{T.form.name} <span className="req">*</span></label>
              <input
                type="text" name="name" required
                value={formData.name} onChange={handleChange}
                disabled={status.submitting}
                placeholder={T.form.namePlaceholder}
              />
            </div>
            <div className="cb-field">
              <label>{T.form.email} <span className="req">*</span></label>
              <input
                type="email" name="email" required
                value={formData.email} onChange={handleChange}
                disabled={status.submitting}
                placeholder={T.form.emailPlaceholder}
              />
            </div>
          </div>

          <div className="cb-field-row">
            <div className="cb-field">
              <label>{T.form.phone}</label>
              <input
                type="tel" name="phone"
                value={formData.phone} onChange={handleChange}
                disabled={status.submitting}
                placeholder={T.form.phonePlaceholder}
              />
            </div>
            <div className="cb-field">
              <label>{T.form.projectType}</label>
              <select
                name="projectType"
                value={formData.projectType} onChange={handleChange}
                disabled={status.submitting}
              >
                {T.form.projectTypes.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div className="cb-field">
            <label>{T.form.message} <span className="req">*</span></label>
            <textarea
              name="message" required rows={4}
              value={formData.message} onChange={handleChange}
              disabled={status.submitting}
              placeholder={T.form.messagePlaceholder}
            />
          </div>

          <button type="submit" disabled={status.submitting} className="cb-form-submit">
            {status.submitting ? (
              <>
                <span>{T.form.submitting}</span>
                <span className="spinner" />
              </>
            ) : (
              <>
                <span>{T.form.submit}</span>
                <span className="arr">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
