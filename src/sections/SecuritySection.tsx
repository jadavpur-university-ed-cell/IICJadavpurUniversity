import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobeScene } from '../effects/GlobeScene';

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { name: 'HIPAA Compliant', detail: 'Fully Auditable' },
  { name: 'SOC 2 Type 2', detail: 'Certified' },
  { name: 'FedRAMP', detail: '20x Compliant' },
  { name: 'NIST', detail: '800-53 Aligned' },
];

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<GlobeScene | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Section entrance animations
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

    // Globe initialization
    if (canvasRef.current) {
      const globe = new GlobeScene(canvasRef.current);
      globeRef.current = globe;
      globe.start();

      const handleResize = () => globe.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        globe.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-midnight relative overflow-hidden"
      style={{ minHeight: '100vh', padding: '120px 0' }}
    >
      {/* Globe Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
        role="img"
        aria-label="Animated wireframe globe"
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-content mx-auto px-6">
        <div className="max-w-[560px]">
          <p
            className="section-animate text-xs font-medium tracking-[0.08em] uppercase mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.3)' }}
          >
            TRUST &amp; SECURITY
          </p>
          <h2 className="section-animate text-section text-pure-white mb-6">
            Secure. Compliant. Trusted.
          </h2>
          <p className="section-animate text-lg leading-relaxed mb-12" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            We meet the highest standards of HIPAA compliance and healthcare data
            protection — so your patient information stays safe, secure, and fully
            auditable.
          </p>

          {/* Compliance Badges */}
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="section-animate rounded-xl p-6 text-center"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <p className="text-base font-medium text-pure-white mb-1">{badge.name}</p>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                  {badge.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
