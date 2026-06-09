import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  { name: 'Orthopedics & Physical Therapy', description: 'Streamlined scheduling for surgical consultations, post-op follow-ups, and physical therapy sessions with complex multi-visit care plans.' },
  { name: 'Neurology', description: 'Intelligent intake for neurological practices, handling referrals, prior authorizations, and long consultation scheduling.' },
  { name: 'Ophthalmology & Optometry', description: 'Optimized for vision care with automated recall for annual exams, contact lens renewals, and surgical co-management.' },
  { name: 'Podiatry', description: 'Tailored scheduling for foot and ankle practices, including wound care visits, surgical procedures, and DME coordination.' },
  { name: 'Gastroenterology', description: 'Designed for GI practices with procedure scheduling, prep instructions, and complex multi-step appointment workflows.' },
  { name: 'Dermatology', description: 'Fast-tracked scheduling for skin care practices, managing biopsies, cosmetic procedures, and Mohs surgery coordination.' },
  { name: 'Cardiology', description: 'Comprehensive support for heart care practices, including stress test scheduling, device monitoring, and specialist referrals.' },
  { name: 'Dentistry & Oral Surgery', description: 'Complete practice management for dental offices, handling cleanings, restorative work, and surgical procedures.' },
  { name: 'Urology', description: 'Specialized scheduling for urological care, managing cystoscopies, prostate procedures, and recurring follow-ups.' },
  { name: 'OB/GYN', description: 'Compassionate patient access for women\'s health, including prenatal scheduling, gynecological visits, and fertility coordination.' },
  { name: 'ENT', description: 'Streamlined access for otolaryngology practices, managing hearing tests, allergy visits, and surgical consultations.' },
  { name: 'Primary Care', description: 'High-volume scheduling support for family medicine, handling wellness visits, chronic care, and same-day acute appointments.' },
];

export default function SpecialtiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.section-animate');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-midnight py-section">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left Column */}
          <div className="section-animate">
            <p
              className="text-xs font-medium tracking-[0.08em] uppercase mb-6"
              style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            >
              DESIGNED FOR YOUR SPECIALTY
            </p>
            <h2 className="text-section text-pure-white mb-6">
              Purpose-Built for Every Field
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              From high-volume orthopedics to complex multi-location primary care,
              our agents adapt to your workflows, terminology, and scheduling logic.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="section-animate">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.name}
                className="border-b"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <button
                  className="w-full h-16 flex items-center justify-between px-6 text-left transition-colors duration-200 hover:bg-white/5"
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <span
                    className={`text-lg transition-colors duration-200 ${
                      activeIndex === index ? 'text-electric-blue' : 'text-pure-white'
                    }`}
                  >
                    {specialty.name}
                  </span>
                  <span
                    className="text-base transition-transform duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    →
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px',
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <div
                    className="px-6 pb-4 rounded-b-lg"
                    style={{ background: '#1A1A1A' }}
                  >
                    <p className="text-base leading-relaxed py-4" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
