import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../App';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-[rgba(244,247,255,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-32 h-12 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="N.A.S"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-[#2D6BFF]'
                      : 'text-[#A7B3D1] hover:text-[#F4F7FF]'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2D6BFF] rounded-full" />
                  )}
                </Link>
              ))}
              <a
                href={`tel:${CONTACT_CONFIG.phoneNumber}`}
                className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F4F7FF] hover:text-[#2D6BFF] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#070B14]/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-[#0B1222] border-b border-[rgba(244,247,255,0.08)] transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-medium ${
                  isActive(link.path)
                    ? 'text-[#2D6BFF]'
                    : 'text-[#A7B3D1] hover:text-[#F4F7FF]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_CONFIG.phoneNumber}`}
              className="btn-primary w-full text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
