import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '4+', label: 'Mentored Schools' },
  { value: '50+', label: 'Startups Supported' },
  { value: '100+', label: 'Years of Legacy' },
];

export default function ImpactSection() {
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
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-off-white py-section"
    >
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="section-animate">
            <p
              className="text-xs font-medium tracking-[0.08em] uppercase mb-6"
              style={{ color: 'rgba(0, 0, 0, 0.4)' }}
            >
              ABOUT THE ECOSYSTEM
            </p>
            <h2 className="text-section text-midnight mb-6">
              Nurturing Creativity &amp; Research Translation.
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              The innovation ecosystem of Jadavpur University represents an integrated framework designed to nurture creativity, research translation, entrepreneurship, technology commercialization, and industry engagement.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              Through interdisciplinary collaboration among students, faculty members, researchers, alumni, industry leaders, investors, and government agencies, the University fosters an environment where innovative ideas can evolve into transformative solutions.
            </p>
            <h3 className="text-xl font-medium text-midnight mt-8 mb-4">Strategic Pillars</h3>
            <ul className="list-disc pl-5 mb-12 text-lg" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              <li>Innovation & Creativity</li>
              <li>Entrepreneurship Development</li>
              <li>Intellectual Property Creation</li>
              <li>Research Translation</li>
              <li>Startup Incubation</li>
              <li>Industry Collaboration</li>
              <li>Community Impact</li>
              <li>School Innovation Outreach</li>
            </ul>

            {/* Stats */}
            <div className="flex flex-wrap gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 min-w-[140px] py-4 ${
                    index < stats.length - 1 ? 'lg:border-r lg:border-border-light' : ''
                  } ${index > 0 ? 'lg:pl-8' : ''}`}
                >
                  <p className="text-5xl font-light text-electric-blue mb-2">{stat.value}</p>
                  <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="section-animate relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="/assets/impact-clinician.jpg"
                alt="Healthcare professional in modern clinic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Card */}
            <div
              className="absolute bottom-6 right-6 max-w-[280px] rounded-xl p-5"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
              }}
            >
              <p className="text-base text-midnight italic mb-3 leading-relaxed">
                &ldquo;A seamless pathway from idea generation to societal impact.&rdquo;
              </p>
              <p className="text-sm font-medium" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                JU Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
