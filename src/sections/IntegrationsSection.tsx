import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'athenahealth', logo: 'athenahealth' },
  { name: 'NexGen', logo: 'NexGen' },
  { name: 'ModMed', logo: 'ModMed' },
  { name: 'Epic', logo: 'Epic' },
  { name: 'Nextech', logo: 'Nextech' },
  { name: 'Veradigm', logo: 'Veradigm' },
  { name: 'eClinicalWorks', logo: 'eClinicalWorks' },
  { name: 'SYSTEMEDX', logo: 'SYSTEMEDX' },
];

export default function IntegrationsSection() {
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
    <section ref={sectionRef} className="w-full bg-off-white py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 section-animate">
          <p
            className="text-xs font-medium tracking-[0.08em] uppercase mb-6"
            style={{ color: 'rgba(0, 0, 0, 0.4)' }}
          >
            NATIVE INTEGRATIONS
          </p>
          <h2 className="text-section text-midnight">
            Built to <span className="text-electric-blue">Connect</span>
          </h2>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="section-animate bg-pure-white border border-border-light rounded-xl p-8 h-[120px] flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 hover:border-electric-blue group"
            >
              <span
                className="text-lg font-medium text-midnight opacity-70 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
