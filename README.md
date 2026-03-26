import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_CONFIG } from '../App';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.pricing-hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });

      // Pricing cards animation
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
      });

      // FAQ animation
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses with 1-3 users',
      price: 'R999',
      period: '/month',
      users: '1-3 Users',
      features: [
        'Remote IT support',
        'Email support',
        'Business hours support (8am-5pm)',
        'Monthly system check',
        'Virus protection',
        'Basic network monitoring',
      ],
      notIncluded: [
        'On-site support',
        'Priority response',
        'After-hours support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Business',
      description: 'Ideal for growing teams with 4-8 users',
      price: 'R1,999',
      period: '/month',
      users: '4-8 Users',
      features: [
        'Everything in Starter',
        'Priority remote support',
        'Phone & email support',
        'Extended hours (7am-7pm)',
        'Weekly system checks',
        'Advanced network monitoring',
        'On-site support (2 visits/month)',
        'Dedicated account manager',
      ],
      notIncluded: [
        '24/7 support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for larger organizations',
      price: 'Custom',
      period: '',
      users: '9+ Users',
      features: [
        'Everything in Business',
        '24/7 priority support',
        'Unlimited on-site visits',
        'Dedicated support team',
        'Custom SLA',
        'Proactive monitoring',
        'Strategic IT consulting',
        'Volume discounts',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept EFT, credit cards, and debit orders. Annual payments receive a discount.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for Starter and Business plans. Enterprise plans may have a one-time onboarding fee depending on complexity.',
    },
    {
      question: 'What happens if I exceed my user limit?',
      answer: 'We\'ll notify you when you approach your limit. You can upgrade to a higher tier or purchase additional user packs.',
    },
    {
      question: 'Do you offer ad-hoc support?',
      answer: 'Yes, we offer pay-as-you-go support for businesses that don\'t need a monthly plan. Contact us for our hourly rates.',
    },
  ];

  return (
    <main className="bg-[#070B14] pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center overflow-hidden grain-overlay"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact_building.jpg"
            alt="Modern Building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/50" />
        </div>

        {/* Geometric Panels */}
        <div className="absolute top-0 left-0 w-[20vw] h-[25vh] bg-[#0F172A]/80 border-r border-b border-[rgba(244,247,255,0.08)] z-10" />
        <div className="absolute top-0 right-0 w-[20vw] h-[25vh] bg-[#0F172A]/80 border-l border-b border-[rgba(244,247,255,0.08)] z-10" />

        {/* Content */}
        <div className="relative z-20 w-full px-6 lg:px-12 py-32">
          <div className="max-w-4xl mx-auto text-center pricing-hero-content">
            <span className="micro-label block mb-6 text-[#2D6BFF]">PRICING</span>
            <h1 className="headline-xl text-[#F4F7FF] mb-8">
              Simple,
              <span className="text-gradient"> Transparent</span> Pricing
            </h1>
            <p className="body-text max-w-2xl mx-auto text-lg">
              No hidden fees. You always know what you&apos;re paying for before we do any work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={pricingRef}
        className="relative py-32 bg-[#0B1222] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card relative p-8 ${
                    plan.popular
                      ? 'bg-[#070B14] border-2 border-[#2D6BFF]'
                      : 'bg-[#070B14] border border-[rgba(244,247,255,0.08)]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-[#2D6BFF] text-white text-xs font-medium px-4 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#F4F7FF] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-[#A7B3D1] text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#F4F7FF]">
                        {plan.price}
                      </span>
                      <span className="text-[#A7B3D1]">{plan.period}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="inline-block bg-[#2D6BFF]/10 text-[#2D6BFF] text-sm px-3 py-1 rounded-sm">
                      {plan.users}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm font-medium text-[#F4F7FF]">What&apos;s included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-[#A7B3D1] text-sm">
                          <Check className="w-5 h-5 text-[#2D6BFF] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-medium text-[#F4F7FF] mt-6">Not included:</p>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-3 text-[#A7B3D1]/50 text-sm">
                              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">—</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 text-center font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#2D6BFF] text-white hover:bg-[#2563eb]'
                        : 'border border-[rgba(244,247,255,0.2)] text-[#F4F7FF] hover:border-[#2D6BFF] hover:text-[#2D6BFF]'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Enterprise Note */}
            <div className="mt-16 text-center">
              <p className="text-[#A7B3D1]">
                Need a custom solution?{' '}
                <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-[#2D6BFF] hover:underline">
                  Contact our sales team
                </a>{' '}
                for a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="relative py-32 bg-[#070B14] grain-overlay"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="micro-label block mb-4 text-[#2D6BFF]">FAQ</span>
              <h2 className="headline-lg text-[#F4F7FF] mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item p-6 bg-[#0B1222] border border-[rgba(244,247,255,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-[#F4F7FF] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#A7B3D1] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
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
            <span className="micro-label block mb-4 text-[#2D6BFF]">STILL HAVE QUESTIONS?</span>
            <h2 className="headline-lg text-[#F4F7FF] mb-6">
              Let&apos;s Talk
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              Our team is here to help you choose the right plan for your business.
              Schedule a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`mailto:${CONTACT_CONFIG.email}`} className="btn-secondary">
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

export default Pricing;
