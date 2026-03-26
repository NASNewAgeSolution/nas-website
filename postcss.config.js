import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Monitor, Mail, Wifi, Video, Wrench, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_CONFIG } from '../App';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl.from('.hero-headline', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from('.hero-subheadline', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=1');

      // Services section animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.1,
      });

      // Stats counter animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
      });

      // Why Us animation
      gsap.from('.why-us-item', {
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
      });

      // CTA animation
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Remote IT Support',
      description: 'Monthly support plans and on-demand troubleshooting. We resolve issues fast so your team never loses productivity.',
    },
    {
      icon: Mail,
      title: 'Email & Domain Setup',
      description: 'Professional business email on Microsoft 365 or Google Workspace. Look professional and communicate reliably.',
    },
    {
      icon: Wifi,
      title: 'Network & WiFi',
      description: 'Fast, stable, and secure WiFi for your office or home. We design, install, and configure your entire network.',
    },
    {
      icon: Video,
      title: 'CCTV & Security',
      description: 'Protect your premises with professional CCTV installation and security systems you can monitor from anywhere.',
    },
    {
      icon: Wrench,
      title: 'Computer Repairs',
      description: 'Slow PC? Hardware issues? Virus? We diagnose and fix it. Upgrades and new setups available too.',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Guaranteed' },
    { value: '2hrs', label: 'Average Response' },
    { value: '500+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <main className="bg-[#070B14]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="hero-image absolute inset-0">
            <img
              src="/hero_server_room.jpg"
              alt="IT Support"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/50" />
          </div>
        </div>

        {/* Geometric Panels */}
        <div className="absolute top-0 left-0 w-[26vw] h-[34vh] bg-[#0F172A]/80 border-r border-b border-[rgba(244,247,255,0.08)] z-10" />
        <div className="absolute top-0 right-0 w-[26vw] h-[34vh] bg-[#0F172A]/80 border-l border-b border-[rgba(244,247,255,0.08)] z-10" />
        <div className="absolute bottom-0 left-0 w-[26vw] h-[34vh] bg-[#0F172A]/80 border-r border-t border-[rgba(244,247,255,0.08)] z-10" />
        <div className="absolute bottom-0 right-0 w-[26vw] h-[34vh] bg-[#0F172A]/80 border-l border-t border-[rgba(244,247,255,0.08)] z-10" />

        {/* Content */}
        <div className="relative z-20 w-full px-6 lg:px-12 pt-20">
          <div className="max-w-4xl">
            <span className="micro-label block mb-6 text-[#2D6BFF]">IT SYSTEMS STATUS: ALL OPERATIONAL</span>
            <h1 className="hero-headline headline-xl text-[#F4F7FF] mb-8">
              Complete IT Solutions
              <br />
              <span className="text-gradient">For Your Business</span>
            </h1>
            <p className="hero-subheadline body-text max-w-xl mb-10 text-lg">
              From daily tech support to full network installations — we provide everything 
              your business needs to stay productive and secure.
            </p>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary group">
                Our Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Advice
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-[rgba(244,247,255,0.2)] rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#2D6BFF] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="relative py-32 bg-[#0B1222] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="micro-label block mb-4 text-[#2D6BFF]">WHAT WE DO</span>
              <h2 className="headline-lg text-[#F4F7FF] mb-6">
                Our Services
              </h2>
              <p className="body-text max-w-2xl mx-auto">
                Professional IT services tailored to keep your business running smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group p-8 bg-[#070B14] border border-[rgba(244,247,255,0.08)] hover:border-[#2D6BFF]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#2D6BFF]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#2D6BFF]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#2D6BFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F4F7FF] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A7B3D1] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-[#2D6BFF] text-sm font-medium group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services" className="btn-secondary inline-flex">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="relative py-24 bg-[#070B14] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="micro-label block mb-4 text-[#2D6BFF]">TRUSTED BY BUSINESSES</span>
                <h2 className="headline-lg text-[#F4F7FF] mb-6">
                  We Handle The Tech.<br />You Run Your Business.
                </h2>
                <p className="body-text mb-8">
                  When your technology works, your business works. We&apos;re here to make sure 
                  IT never becomes a problem — because when you work with N.A.S, it just works.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[#A7B3D1]">
                    <CheckCircle className="w-5 h-5 text-[#2D6BFF]" />
                    <span className="text-sm">Fast Response Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A7B3D1]">
                    <CheckCircle className="w-5 h-5 text-[#2D6BFF]" />
                    <span className="text-sm">Affordable Pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A7B3D1]">
                    <CheckCircle className="w-5 h-5 text-[#2D6BFF]" />
                    <span className="text-sm">No Hidden Costs</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="stat-item p-8 bg-[#0B1222] border border-[rgba(244,247,255,0.08)] text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-[#2D6BFF] mb-2 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#A7B3D1]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyUsRef}
        className="relative py-32 bg-[#0B1222] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="micro-label block mb-4 text-[#2D6BFF]">WHY N.A.S</span>
              <h2 className="headline-lg text-[#F4F7FF] mb-6">
                Why Choose Us?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="why-us-item p-8 bg-[#070B14] border border-[rgba(244,247,255,0.08)]">
                <h3 className="text-xl font-semibold text-[#F4F7FF] mb-4">
                  Fast Response Time
                </h3>
                <p className="text-[#A7B3D1] leading-relaxed">
                  We don&apos;t leave you waiting. Most issues are resolved remotely within hours — not days.
                </p>
              </div>
              <div className="why-us-item p-8 bg-[#070B14] border border-[rgba(244,247,255,0.08)]">
                <h3 className="text-xl font-semibold text-[#F4F7FF] mb-4">
                  Affordable & Transparent Pricing
                </h3>
                <p className="text-[#A7B3D1] leading-relaxed">
                  No hidden costs. You always know what you&apos;re paying for before we do any work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-32 bg-[#070B14] grain-overlay overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#2D6BFF] text-[#2D6BFF]" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl text-[#F4F7FF] font-light leading-relaxed mb-8">
                  &ldquo;N.A.S has been a game-changer for our business. Their response time is incredible 
                  and they always solve our IT issues quickly. Highly recommended!&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#2D6BFF]/20 flex items-center justify-center">
                    <span className="text-[#2D6BFF] font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="text-[#F4F7FF] font-semibold">John Doe</div>
                    <div className="text-[#A7B3D1] text-sm">Business Owner</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/team_engineers.jpg"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/60 to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#2D6BFF]/30" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2D6BFF]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-32 bg-[#0B1222] grain-overlay overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact_building.jpg"
            alt="Modern Building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222] via-[#0B1222]/90 to-[#0B1222]/70" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center cta-content">
            <span className="micro-label block mb-4 text-[#2D6BFF]">NOT SURE WHAT YOU NEED?</span>
            <h2 className="headline-lg text-[#F4F7FF] mb-6">
              Let&apos;s Have a Conversation
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              We&apos;ll assess your setup and recommend the right solutions at the right price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Get Free Advice
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070B14] border-t border-[rgba(244,247,255,0.08)] py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
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

              {/* Services */}
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

              {/* Company */}
              <div>
                <h4 className="text-[#F4F7FF] font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">About Us</Link></li>
                  <li><Link to="/pricing" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Pricing</Link></li>
                  <li><Link to="/contact" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[#F4F7FF] font-semibold mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li><a href={`tel:${CONTACT_CONFIG.phoneNumber}`} className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">{CONTACT_CONFIG.phoneNumber}</a></li>
                  <li><a href={`mailto:${CONTACT_CONFIG.email}`} className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">{CONTACT_CONFIG.email}</a></li>
                  <li><span className="text-[#A7B3D1] text-sm">{CONTACT_CONFIG.address}</span></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[rgba(244,247,255,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#A7B3D1] text-sm">
                © 2026 N.A.S. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href={CONTACT_CONFIG.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">LinkedIn</a>
                <a href={CONTACT_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-[#A7B3D1] hover:text-[#2D6BFF] text-sm transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
