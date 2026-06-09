import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OrganicDotGrid } from '../effects/OrganicDotGrid';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<OrganicDotGrid | null>(null);

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

    if (canvasRef.current) {
      const grid = new OrganicDotGrid(canvasRef.current);
      gridRef.current = grid;
      grid.start();

      const handleResize = () => grid.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        grid.destroy();
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
      className="w-full relative overflow-hidden flex items-center justify-center"
      style={{ height: '600px', background: '#F5F5F0' }}
    >
      {/* Dot Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Animated organic dot grid background"
        style={{ display: 'block' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[600px]">
        <h2 className="section-animate text-midnight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Skip the Hold Music.{' '}
          <span className="text-electric-blue">Forever.</span>
        </h2>
        <p className="section-animate text-lg leading-relaxed mb-8 mx-auto max-w-[520px]" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
          See how specialty practices are cutting costs and delighting patients
          with AI-powered voice agents.
        </p>
        <div className="section-animate flex flex-wrap items-center justify-center gap-4">
          <a
            href="#call"
            className="px-10 py-4 rounded-full text-base font-medium bg-midnight text-pure-white hover:bg-electric-blue transition-all duration-200"
          >
            Get a call
          </a>
          <a
            href="#demo"
            className="px-10 py-4 rounded-full text-base font-medium text-midnight border border-midnight hover:bg-midnight hover:text-pure-white transition-all duration-200"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
