import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('UyBa5BYAsKerwsq3T');
  }, []);

  // CSS confetti effect
  const triggerConfetti = () => {
    const confettiCount = 100;
    const confettiColors = ['#16a34a', '#22c55e', '#86efac', '#fbbf24', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        const duration = 3000 + Math.random() * 2000;
        const fallDistance = window.innerHeight + 20;
        const sway = (Math.random() - 0.5) * 200;
        
        confetti.animate([
          { 
            transform: `translate(0, 0) rotate(0deg)`,
            opacity: 1
          },
          { 
            transform: `translate(${sway}px, ${fallDistance}px) rotate(${Math.random() * 720}deg)`,
            opacity: 0
          }
        ], {
          duration: duration,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
          confetti.remove();
        }, duration);
      }, i * 30);
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'SaaS Platform',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

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
      // EmailJS credentials
      const serviceId = 'service_sdd7yrr';
      const templateId = 'template_jdq0i0h';
      const publicKey = 'UyBa5BYAsKerwsq3T';

      // Template parameters voor EmailJS
      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Niet opgegeven',
        project_type: formData.projectType,
        message: formData.message,
        reply_to: formData.email
      };

      // Stuur alleen naar de klant (auto-reply template)
      // EmailJS stuurt automatisch ook naar jou als dat in de template staat
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({ submitting: false, submitted: true, error: null });
      
      // Trigger confetti! 🎉
      triggerConfetti();
      
      // Reset form na 5 seconden
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'SaaS Platform',
          message: ''
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
        error: `Er ging iets mis: ${error.text || error.message || 'Onbekende fout'}. Probeer het opnieuw of neem direct contact op via infomelikas@gmail.com` 
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
      <h3 className="text-xl font-bold text-neutral-900 mb-6">Stuur ons een bericht</h3>
      
      {status.submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-green-900">Bericht verzonden!</p>
              <p className="text-sm text-green-800 mt-1">
                We hebben uw bericht ontvangen en een bevestiging per email gestuurd. We nemen binnen 24 uur contact met u op!
              </p>
            </div>
          </div>
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-red-900">Fout bij verzenden</p>
              <p className="text-sm text-red-800 mt-1">{status.error}</p>
            </div>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status.submitting}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-neutral-100 disabled:cursor-not-allowed"
            placeholder="Je naam"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status.submitting}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-neutral-100 disabled:cursor-not-allowed"
            placeholder="je@email.nl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Telefoon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status.submitting}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-neutral-100 disabled:cursor-not-allowed"
            placeholder="+31 6 12345678"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Project type
          </label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            disabled={status.submitting}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-neutral-100 disabled:cursor-not-allowed"
          >
            <option>SaaS Platform</option>
            <option>Web Applicatie</option>
            <option>Mobile App</option>
            <option>Anders</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Bericht <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status.submitting}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none disabled:bg-neutral-100 disabled:cursor-not-allowed"
            placeholder="Vertel ons over je project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-green-700 hover:to-green-800 hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
        >
          {status.submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Bezig met verzenden...
            </span>
          ) : (
            'Verstuur bericht'
          )}
        </button>
      </form>
    </div>
  );
}
