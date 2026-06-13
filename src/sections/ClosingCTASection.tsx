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
      className="w-full relative py-20 bg-pure-white"
    >
      <p className="text-xs font-medium text-center tracking-[0.08em] mb-6" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
        GALLERIA
      </p>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-hero font-lg text-midnight mb-6">
            Glimpses of <span className="text-soft-lime">Innovation</span>
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            A visual journey through our events, activities, and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Array.from({ length: 25 }, (_, i) => `/assets/${i + 1}.jpg`).map((src, idx) => (
            <div
              key={idx}
              className="section-animate relative aspect-square rounded-xl overflow-hidden group shadow-md"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">Image {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
