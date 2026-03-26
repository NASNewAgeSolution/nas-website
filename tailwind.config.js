import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Monitor, 
  Mail, 
  Wifi, 
  Video, 
  Wrench, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainServicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.services-hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });

      // Main services animation
      gsap.from('.main-service-card', {
        scrollTrigger: {
          trigger: mainServicesRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
      });

      // Process animation
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  const mainServices = [
    {
      icon: Monitor,
      title: 'Remote IT Support',
      description: 'Monthly support plans and on-demand troubleshooting. We resolve issues fast so your team never loses productivity. Whether it\'s software problems, system errors, or user support, we\'ve got you covered.',
      features: [
        'Monthly support plans',
        'On-demand troubleshooting',
        'Software installation & updates',
        'Virus & malware removal',
        'System optimization',
        'Remote desktop support',
      ],
      image: '/support_center.jpg',
    },
    {
      icon: Mail,
      title: 'Email & Domain Setup',
      description: 'Professional business email on Microsoft 365 or Google Workspace. Look professional and communicate reliably with a custom domain email address that matches your brand.',
      features: [
        'Microsoft 365 setup',
        'Google Workspace setup',
        'Custom domain configuration',
        'Email migration',
        'SPF/DKIM/DMARC setup',
        'Ongoing email support',
      ],
      image: '/services_office.jpg',
    },
    {
      icon: Wifi,
      title: 'Network & WiFi',
      description: 'Fast, stable, and secure WiFi for your office or home. We design, install, and configure your entire network infrastructure to ensure seamless connectivity.',
      features: [
        'Network design & planning',
        'WiFi installation & setup',
        'Router & switch configuration',
        'Network security',
        'Cabling & infrastructure',
        'Performance optimization',
      ],
      image: '/cloud_datacenter.jpg',
    },
    {
      icon: Video,
      title: 'CCTV & Security',
      description: 'Protect your premises with professional CCTV installation and security systems you can monitor from anywhere. Keep your business safe 24/7.',
      features: [
        'CCTV camera installation',
        'Remote monitoring setup',
        'Motion detection alerts',
        'Night vision systems',
        'Cloud storage options',
        'Mobile app access',
      ],
      image: '/hero_server_room.jpg',
    },
    {
      icon: Wrench,
      title: 'Computer Repairs',
      description: 'Slow PC? Hardware issues? Virus? We diagnose and fix it. From upgrades to new setups, we keep your computers running at peak performance.',
      features: [
        'Hardware diagnostics',
        'Component upgrades',
        'Virus & malware removal',
        'Data recovery',
        'New computer setup',
        'Preventive maintenance',
      ],
      image: '/team_engineers.jpg',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via phone, email, or WhatsApp. Tell us about your IT needs.',
    },
    {
      number: '02',
      title: 'Assessment',
      description: 'We assess your current setup and understand your requirements.',
    },
    {
      number: '03',
      title: 'Quote',
      description: 'We provide a transparent quote with no hidden costs.',
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Our technicians get to work and implement the solution.',
    },
  ];

  return (
    <main className="bg-[#070B14] pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden grain-overlay"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_server_room.jpg"
            alt="IT Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/50" />
        </div>

        {/* Geometric Panels */}
        <div className="absolute top-0 left-0 w-[20vw] h-[25vh] bg-[#0F172A]/80 border-r border-b border-[rgba(244,247,255,0.08)] z-10" />
        <div className="absolute top-0 right-0 w-[20vw] h-[25vh] bg-[#0F172A]/80 border-l border-b border-[rgba(244,247,255,0.08)] z-10" />

        {/* Content */}
        <div className="relative z-20 w-full px-6 lg:px-12 py-32">
          <div className="max-w-4xl services-hero-content">
            <span className="micro-label block mb-6 text-[#2D6BFF]">SERVICES</span>
            <h1 className="headline-xl text-[#F4F7FF] mb-8">
              Professional IT
              <br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="body-text max-w-2xl text-lg">
              From daily tech support to full network installations — we provide everything 
              your business needs to stay productive and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section
        ref={mainServicesRef}
        className="relative py-32 bg-[#0B1222] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="micro-label block mb-4 text-[#2D6BFF]">WHAT WE OFFER</span>
              <h2 className="headline-lg text-[#F4F7FF] mb-6">
                Our Services
              </h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive IT services tailored to keep your business running smoothly.
              </p>
            </div>

            <div className="space-y-24">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className={`main-service-card grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 bg-[#2D6BFF]/10 rounded-sm flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-[#2D6BFF]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#F4F7FF] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#A7B3D1] text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-[#A7B3D1]">
                          <CheckCircle className="w-5 h-5 text-[#2D6BFF] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-secondary inline-flex group">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222]/60 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="relative py-32 bg-[#070B14] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="micro-label block mb-4 text-[#2D6BFF]">HOW IT WORKS</span>
              <h2 className="headline-lg text-[#F4F7FF] mb-6">
                Our Process
              </h2>
              <p className="body-text max-w-2xl mx-auto">
                Getting started with N.A.S is simple and straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="process-step p-8 bg-[#0B1222] border border-[rgba(244,247,255,0.08)] relative"
                >
                  <div className="text-5xl font-bold text-[#2D6BFF]/20 font-mono mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#F4F7FF] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#A7B3D1] text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2D6BFF]/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#0B1222] grain-overlay">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="micro-label block mb-4 text-[#2D6BFF]">GET STARTED</span>
            <h2 className="headline-lg text-[#F4F7FF] mb-6">
              Need IT Support?
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can help your business with professional IT services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070B14] border-t border-[rgba(244,247,255,0.08)] py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-1">
                <img
                  src="/logo.png"
                  alt="N.A.S"
                  className="w-32 h-auto mb-4"
                />
                <p className="text-[#A7B3D1] text-sm leading-relaxed">
                  Complete IT solutions for your business. From daily tech support to full network installations.
                </p>
              </div>
              <div>
                <h4 className="text-[#F4F7FF] font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><Link to="/services" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Remote IT Support</Link></li>
                  <li><Link to="/services" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Email & Domain Setup</Link></li>
                  <li><Link to="/services" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Network & WiFi</Link></li>
                  <li><Link to="/services" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">CCTV & Security</Link></li>
                  <li><Link to="/services" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Computer Repairs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F4F7FF] font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">About Us</Link></li>
                  <li><Link to="/pricing" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Pricing</Link></li>
                  <li><Link to="/contact" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F4F7FF] font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><Link to="/privacy" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-[rgba(244,247,255,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#A7B3D1] text-sm">
                © 2026 N.A.S. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Services;
