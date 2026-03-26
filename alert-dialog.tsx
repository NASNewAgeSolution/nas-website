import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './App.css';

// Contact Configuration - UPDATE THESE VALUES
export const CONTACT_CONFIG = {
  whatsappNumber: '27123456789', // UPDATE: Your WhatsApp number with country code (e.g., 27821234567 for South Africa)
  phoneNumber: '+27 12 345 6789', // UPDATE: Your phone number
  email: 'info@nasolutions.co.za', // UPDATE: Your email address
  address: '123 Main Street, Pretoria, Gauteng, 0001', // UPDATE: Your physical address
  facebookUrl: 'https://facebook.com/nasolutions', // UPDATE: Your Facebook page URL
  linkedinUrl: 'https://linkedin.com/company/nasolutions', // UPDATE: Your LinkedIn page URL
};

function App() {
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#070B14]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton 
          phoneNumber={CONTACT_CONFIG.whatsappNumber}
          message="Hi N.A.S, I'd like to know more about your IT services."
        />
      </div>
    </Router>
  );
}

export default App;
